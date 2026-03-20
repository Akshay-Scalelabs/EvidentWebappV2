
import { GoogleGenAI } from "@google/genai";
import { NUDGE_MONEY_DATA } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateSystemInstruction = () => {
  return `
    You are the 'Evident' AI Analyst. You are an expert in the EPM-9™ framework for Competitive Intelligence and Signal Analysis.
    
    Your goal is to explain the scoring, analyze the 'Nudge Money' report, and help the user understand market risks.

    **Current Report Context (Nudge Money):**
    - **EPI (Evident Perception Index):** ${NUDGE_MONEY_DATA.epiScore} (0-1.0 scale).
    - **Human LIS:** ${NUDGE_MONEY_DATA.lenses[0].lisScore} (Strongest).
    - **Algorithmic LIS:** ${NUDGE_MONEY_DATA.lenses[1].lisScore}.
    - **Machine LIS:** ${NUDGE_MONEY_DATA.lenses[2].lisScore} (Weakest).
    - **NUD (Noise-Uniqueness Differential):** ${NUDGE_MONEY_DATA.nudScore} (Lower is better. 0.19 is moderate noise).
    - **CLC (Cross-Lens Correlation):** ${NUDGE_MONEY_DATA.clcScore} (Higher is better. 0.91 is excellent coherence).
    
    **Financial Impact:**
    - High EPI scores correlate with premium revenue multiples.
    - Low EPI scores indicate "Capital at Risk" (discounted valuation due to poor perception).
    
    **Market Context:**
    - Nudge Money is in the "Battleground" zone (High Saturation, High Clarity).
    - Competitors are mostly in the "Red Ocean" (High Saturation, Low Clarity).
    
    **EPM-9™ Methodology:**
    - 3 Lenses: Human (Clarity), Algorithmic (Visibility), Machine (Authority/Retrieval).
    - EPI Formula: Average LIS + Bonus(CLC) - Penalty(NUD).
    
    When asked about external data or competitors, USE GOOGLE SEARCH.
    When asked about the methodology or specific Nudge Money scores, use your internal knowledge provided here.
    Keep answers concise, professional, and business-oriented. Use Markdown.
  `;
};

export const sendMessageToGemini = async (message: string, history: any[]) => {
  try {
    const systemInstruction = generateSystemInstruction();
    
    // Use gemini-3-pro-preview for complex reasoning and thinking
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction,
        thinkingConfig: { thinkingBudget: 1024 }, // Enable thinking for deeper analysis
        tools: [{ googleSearch: {} }] // Enable search for grounding
      }
    });

    const text = response.text;
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    
    // Extract sources if available
    let sources: { title: string; uri: string }[] = [];
    if (groundingChunks) {
      sources = groundingChunks
        .map((chunk: any) => chunk.web?.uri ? { title: chunk.web.title || 'Source', uri: chunk.web.uri } : null)
        .filter((s: any) => s !== null);
    }

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "I'm having trouble connecting to the Evident engine. Please try again." };
  }
};

export const explainSimulation = async (
  changes: { name: string; oldVal: number; newVal: number }[],
  oldEpi: number,
  newEpi: number
) => {
  try {
    const changeDesc = changes.map(c => `${c.name} changed from ${c.oldVal} to ${c.newVal}`).join(', ');
    const epiDelta = (newEpi - oldEpi).toFixed(3);
    
    const prompt = `
      The user is running a "What If?" simulation on the Nudge Money EPM-9™ score.
      
      **EPM-9™ Formula:** 
      EPI = Average(Human_LIS, Algo_LIS, Machine_LIS) + 0.3 * (CLC - 0.80) - 0.3 * (NUD - 0.15)
      
      **Changes Made:** ${changeDesc}
      **Baseline EPI:** ${oldEpi.toFixed(2)}
      **Simulated EPI:** ${newEpi.toFixed(2)}
      **Delta:** ${epiDelta}
      
      Explain logically why changing these inputs impacted the overall perception score in this way.
      
      **Rules:**
      - If NUD (Noise) increased, explain that the penalty term (0.3 * NUD) increased, subtracting more from the score.
      - If CLC (Consistency) increased, explain that the bonus term increased.
      - If a Cluster score increased, explain how it boosted the specific Lens LIS, raising the average.
      
      Keep it brief (under 100 words), analytical, and mathematically precise.
    `;

    // Using gemini-2.5-flash for reliable, low-latency simulation analysis
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        thinkingConfig: { thinkingBudget: 1024 }
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Simulation Error:", error);
    return "Unable to generate explanation at this time. Please verify connection.";
  }
};

export const generateICMemo = async () => {
  try {
    const prompt = `
      Act as a Market Intelligence Analyst. Write a specific "GTM & Brand Risk" section for an Intelligence Brief for Nudge Money, based on the provided EPM-9™ data.
      
      **Data Context:**
      - EPI Score: ${NUDGE_MONEY_DATA.epiScore} (Top 15%)
      - Human Lens: ${NUDGE_MONEY_DATA.lenses[0].lisScore} (Strong clarity)
      - Machine Lens: ${NUDGE_MONEY_DATA.lenses[2].lisScore} (Weakest link)
      - NUD: ${NUDGE_MONEY_DATA.nudScore} (Moderate noise/saturation)
      - Key Risk: Unbranded category visibility is low (66/100).
      
      **Structure:**
      1. **Perception Thesis:** One sentence summary of their external readiness.
      2. **Key Strength:** Highlight their specific ICP targeting (Human Lens).
      3. **Primary Risk:** Explain the Category Saturation / Generic Noise issue (Machine Lens).
      4. **Strategic Recommendation:** What should the marketing team focus on?
      
      Style: Concise, direct, no fluff. Use bullet points.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        thinkingConfig: { thinkingBudget: 2048 }
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Memo Error:", error);
    return "Unable to generate Intelligence Brief section at this time.";
  }
};
