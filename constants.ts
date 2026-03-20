
import { ReportData, CohortPoint, SignalEvent, PreviewData, Persona } from './types';

export const MOCK_SIGNAL_EVENTS: SignalEvent[] = [
    { id: 'e1', companyId: 'nudge', type: 'market', message: 'Generic "Financial Wellness" search volume spiked 15%', timestamp: '10m ago', severity: 'low' },
    { id: 'e2', companyId: 'securechain', type: 'risk', message: 'Hallucination rate increased to 42% on Bard', timestamp: '45m ago', severity: 'high' },
    { id: 'e3', companyId: 'nudge', type: 'competitor', message: 'FinWell AI launched new pricing page detected by crawler', timestamp: '1h ago', severity: 'medium' },
    { id: 'e4', companyId: 'payflow', type: 'opportunity', message: 'New "B2B Payments" authority cluster emerging in SERP', timestamp: '2h ago', severity: 'medium' },
    { id: 'e5', companyId: 'medscribe', type: 'market', message: 'Competitor HealthNote raised Series C', timestamp: '3h ago', severity: 'medium' },
    { id: 'e6', companyId: 'retailos', type: 'risk', message: 'Domain Authority dropped by 4 points', timestamp: '5h ago', severity: 'high' },
];

// Cohort Benchmark Data (Fintech Seed/Series A)
export const COHORT_DATA: CohortPoint[] = [
  { id: 'nudge', name: 'Nudge Money', x: 65, y: 0.81, isFocal: true }, // x = Market Density/Competition
  { id: 'c1', name: 'Comp 1', x: 70, y: 0.75 },
  { id: 'c2', name: 'Comp 2', x: 40, y: 0.60 },
  { id: 'c3', name: 'Comp 3', x: 85, y: 0.85 },
  { id: 'c4', name: 'Comp 4', x: 55, y: 0.68 },
  { id: 'c5', name: 'Comp 5', x: 30, y: 0.55 },
  { id: 'c6', name: 'Comp 6', x: 90, y: 0.72 },
  { id: 'c7', name: 'Comp 7', x: 60, y: 0.79 },
  { id: 'c8', name: 'Comp 8', x: 45, y: 0.65 },
  { id: 'c9', name: 'Comp 9', x: 20, y: 0.40 },
  { id: 'c10', name: 'Comp 10', x: 80, y: 0.92 },
  { id: 'c11', name: 'Comp 11', x: 50, y: 0.58 },
  { id: 'c12', name: 'Comp 12', x: 35, y: 0.88 },
];

// Watchlist / Preview Data
export const WATCHLIST_DETAILS: { [key: string]: PreviewData } = {
  payflow: {
    id: 'payflow',
    name: 'PayFlow',
    vertical: 'Fintech',
    stage: 'Series A',
    epiRange: '0.85 - 0.90',
    summary: 'Strong market leader in B2B payments. High algorithmic visibility but potential human clarity issues in new product lines.',
    lastScan: '1 day ago'
  },
  securechain: {
    id: 'securechain',
    name: 'SecureChain',
    vertical: 'Crypto',
    stage: 'Seed',
    epiRange: '0.55 - 0.65',
    summary: 'Significant semantic noise detected. Brand is conflated with generic "blockchain security" terms. Needs immediate GTM alignment.',
    lastScan: '4 hours ago'
  },
  medscribe: {
    id: 'medscribe',
    name: 'MedScribe AI',
    vertical: 'Health',
    stage: 'Series B',
    epiRange: '0.75 - 0.82',
    summary: 'Solid authority signals in medical journals. Machine lens indicates high hallucination risk for specific feature sets.',
    lastScan: '2 days ago'
  }
};

// Persona Lab Data
export const PERSONA_DATA: Persona[] = [
  {
    id: 'sarah',
    name: 'Sarah Chen',
    role: 'VP of Digital Experience',
    companyType: 'Mid-Market Credit Union ($2B Assets)',
    avatarColor: 'bg-indigo-500',
    bio: "Sarah is overwhelmed. She manages a digital roadmap that is 18 months behind. She is skeptical of 'AI' buzzwords because her core banking core is 20 years old and integrates with nothing.",
    motivations: ['Member Retention', 'Ease of Implementation', 'Risk Mitigation'],
    painPoints: ['Member churn to Chime/SoFi', 'Limited engineering resources', 'Need personalization without creepy vibes'],
    initialMessage: "I'm looking at Nudge, but I'm worried about the integration time. We have a small team and can't afford a 6-month implementation. How does this actually help us compete with the big banks right now?",
    suggestedQuestions: [
        "If I gave you this for free, would you install it tomorrow?",
        "Who has to say 'yes' for you to buy this?",
        "What is your biggest fear about rolling out AI to members?"
    ]
  },
  {
    id: 'mike',
    name: 'Mike Ross',
    role: 'Chief Lending Officer',
    companyType: 'Regional Bank',
    avatarColor: 'bg-emerald-600',
    bio: "Mike cares about one thing: Loan Volume. He thinks 'Financial Wellness' is a fluff metric marketing made up. He needs to see hard attribution to revenue.",
    motivations: ['Loan Volume', 'Cross-Sell Ratio', 'Operational Efficiency'],
    painPoints: ['Loan application drop-off', 'Cross-selling efficiency', 'Regulatory compliance'],
    initialMessage: "The financial wellness angle is cute, but does it actually drive loan volume? I need to see the attribution model. Show me the money.",
    suggestedQuestions: [
        "How do you currently measure the ROI of member engagement?",
        "What's your current cost of acquisition for a new loan?",
        "Would you pay for a tool that only nurtures leads, not closes them?"
    ]
  }
];

// Data derived explicitly from the Nudge Money PDF
export const NUDGE_MONEY_DATA: ReportData = {
  id: 'nudge',
  companyName: "Nudge Money",
  vertical: "FinTech / Financial Wellness",
  stage: "Series A",
  logoUrl: "https://picsum.photos/200/200",
  epiScore: 0.81,
  nudScore: 0.19, // Noise-Uniqueness Differential
  clcScore: 0.91, // Cross-Lens Correlation
  summary: "Nudge Money demonstrates strong cross-lens coherence (CLC 0.91) but suffers from moderate semantic noise (NUD 0.19) due to generic category usage. The Human Lens is strongest (0.86), driven by clear ICP targeting, while the Machine Lens (0.73) lags due to hallucination risks in retrieval.",
  intelligence: {
    redFlags: [
      { title: 'Category Saturation (NUD 0.19)', content: 'The "AI-powered financial wellness" category is crowded. Differentiation relies heavily on credit union vertical specificity rather than unique product capabilities.', severity: 'warning' },
      { title: 'Unbranded Category Visibility', content: 'Searches for "AI financial wellness credit union" show competitors more prominently. Inbound lead flow likely limited.', severity: 'warning' },
      { title: 'AI Anchoring Dependency', content: 'AI models only identify the company correctly when "credit union" is in the prompt. Broad queries lead to hallucinations.', severity: 'info' }
    ],
    swot: {
      strengths: ['High buyer clarity (Human LIS 0.86)', 'Strong commercial articulation', 'Real marketing momentum', 'Reliable AI reconstruction with context'],
      weaknesses: ['Narrative breadth (conceptual sprawl)', 'Category uniqueness not yet solidified', 'AI anchoring dependent on ICP context'],
      opportunities: ['Strengthen structured data & metadata', 'Increase unbranded content surface', 'Compress narrative to reduce Clarity Entropy'],
      threats: ['Adjacent fintech/wellness companies competing for same semantic ground', 'Name-space collisions reinforcing noise']
    },
    strategicQuestions: [
      {
        question: "Walk me through your last 5 new opportunities. How did they find you?",
        context: "Testing if strong online presence translates to inbound, or if growth is purely founder-driven.",
        goodSign: "Mix of inbound + referral + outbound.",
        warningSign: "100% cold outbound despite 0.78 algorithmic score."
      },
      {
        question: "When you demo to a new executive, how long does it take them to understand what you do?",
        context: "Testing Human Lens clarity score (92/100).",
        goodSign: "'They get it in 5 minutes, questions are about pricing.'",
        warningSign: "'We spend a lot of time educating them on the category.'"
      },
      {
        question: "Who else are prospects looking at? What do you win on?",
        context: "Testing differentiation in a crowded semantic space.",
        goodSign: "Specific moats (unique data, integrations, outcomes).",
        warningSign: "Vague answers ('better AI', 'more personalized')."
      }
    ]
  },
  competitors: [
    { id: 'c1', name: 'FinWell AI', presence: 75, clarity: 55, epi: 0.68, color: '#f43f5e' }, // Noisy
    { id: 'c2', name: 'CreditBoost', presence: 40, clarity: 85, epi: 0.72, color: '#10b981' }, // Hidden Gem
    { id: 'c3', name: 'BankSense', presence: 85, clarity: 80, epi: 0.84, color: '#8b5cf6' }, // Leader
    { id: 'nudge', name: 'Nudge Money', presence: 65, clarity: 82, epi: 0.81, color: '#facc15' }, // Focal
  ],
  history: [
    { date: 'May', epi: 0.68, human: 0.72, algo: 0.65, machine: 0.67 },
    { date: 'Jun', epi: 0.70, human: 0.75, algo: 0.66, machine: 0.69 },
    { date: 'Jul', epi: 0.72, human: 0.78, algo: 0.68, machine: 0.70 },
    { date: 'Aug', epi: 0.75, human: 0.81, algo: 0.72, machine: 0.71 },
    { date: 'Sep', epi: 0.78, human: 0.84, algo: 0.75, machine: 0.72 },
    { date: 'Oct', epi: 0.81, human: 0.86, algo: 0.78, machine: 0.73 },
  ],
  lenses: [
    {
      id: 'human',
      name: 'Human Lens',
      description: 'Marketability & ICP Comprehension',
      lisScore: 0.86,
      color: '#10b981', // Emerald
      domains: [
        {
          id: 'd1',
          name: 'Identity Comprehension',
          description: 'Purpose clarity and category legibility.',
          indexScore: 83,
          clusters: [
            { 
              id: 'c1', name: 'Purpose Clarity', avgSiu: 83,
              microFactors: [
                { 
                  id: 'mf1', name: 'Mission Statement Detectability', siu: 85, description: 'Measures how easily the mission is identified in the hero section.',
                  insights: {
                    thesis: "Founders often bury the lead. Nudge's score of 85 implies immediate comprehension, a key driver for seed-stage velocity.",
                    verdict: "Exceptional clarity. The hero section does the heavy lifting.",
                    question: "Do you A/B test this tag line, or is it founder-driven?"
                  }
                },
                { 
                  id: 'mf2', name: 'First-Scan Comprehension Window', siu: 80, description: 'Time required for a new visitor to understand the core value prop.',
                  insights: {
                    thesis: "A sub-5 second scan time correlates with a 20% reduction in bounce rate for B2B fintech. Nudge passes the 'Blink Test'.",
                    verdict: "Strong. Visitors get the 'what' immediately, reducing early funnel churn.",
                    question: "How does this clarity hold up on mobile surfaces?"
                  }
                },
                { 
                  id: 'mf3', name: 'Declarative Identity Encoding', siu: 84, description: 'Explicitness of identity statements (e.g., "We are a X").',
                  insights: {
                    thesis: "Ambiguity kills conversion. Nudge clearly states 'We are an engagement platform', avoiding abstraction traps.",
                    verdict: "High performance. No 'platform-speak' ambiguity found in the H1 tag.",
                    question: "Do you find prospects ever confuse you with a neo-bank due to the name?"
                  }
                },
                { 
                  id: 'mf4', name: 'Problem-Solution Positioning Stability', siu: 83, description: 'Consistency of the problem/solution pairing across pages.',
                  insights: {
                    thesis: "Stable positioning suggests a mature GTM motion. Nudge consistently pairs 'Deposit Growth' with 'Automated Nudges'.",
                    verdict: "Consistent. You don't drift into side-problems like 'Security' or 'Compliance' unnecessarily.",
                    question: "Are you tempted to expand the problem set for Series A positioning?"
                  }
                }
              ]
            },
            { 
              id: 'c2', name: 'Category Legibility', avgSiu: 81,
              microFactors: [
                { 
                  id: 'mf5', name: 'Above-the-Fold Category Recognition', siu: 82, description: 'Immediate recognition of the industry category without scrolling.',
                  insights: {
                    thesis: "If they don't know it's fintech in 3 seconds, you lose them. Visual cues (coins, dashboards) anchor the category effectively.",
                    verdict: "Clear visual cues anchor the category, though 'Wellness' can sometimes signal HealthTech.",
                    question: "Does this visual language resonate with the older Credit Union executive demographic?"
                  }
                },
                { 
                  id: 'mf6', name: 'Implicit Category Anchor Words', siu: 79, description: 'Presence of words like "AI", "Personalization" that anchor the category.',
                  insights: {
                    thesis: "You rely heavily on 'Financial Wellness' which is a noisy term shared with B2C apps.",
                    verdict: "Good density, but risks blending into generic ed-tech without sharper financial terminology.",
                    question: "Can we sharpen the vocabulary to be more 'Banking' specific (e.g., 'Share of Wallet')?"
                  }
                },
                { 
                  id: 'mf7', name: 'Positional Category Reinforcement', siu: 80, description: 'Reinforcement of category leadership in copy.',
                  insights: {
                    thesis: "Leadership claims must be substantiated. 'Leading Platform' is present but lacks third-party validation in the header.",
                    verdict: "Moderate. 'Leader' claims are generic; specific category ownership is not yet claimed.",
                    question: "Can we replace 'Leading Platform' with 'Trusted by 50 CUs'?"
                  }
                },
                { 
                  id: 'mf8', name: 'Cross-Page Category Consistency', siu: 83, description: 'Stability of category definitions across the site map.',
                  insights: {
                    thesis: "Inconsistent categories confuse investors and crawlers. Nudge stays in 'Fintech' across all subpages.",
                    verdict: "Solid coherence. You don't drift into 'Consulting' language on the services page.",
                    question: "How do you ensure new product pages maintain this discipline?"
                  }
                }
              ]
            },
            { 
              id: 'c3', name: 'Product Surface Clarity', avgSiu: 85,
              microFactors: [
                { 
                  id: 'mf9', name: 'Feature-to-Outcome Mapping Strength', siu: 86, description: 'Clarity of how specific features lead to user outcomes.',
                  insights: {
                    thesis: "Features are costs; outcomes are revenue. Mapping strength predicts sales velocity.",
                    verdict: "Excellent. Every feature listed has a corresponding benefit.",
                    question: "Is this mapping reflected in your sales deck?"
                  }
                },
                { 
                  id: 'mf10', name: 'Component Visibility', siu: 84, description: 'Visual representation of dashboards, composers, and actions.',
                  insights: {
                    thesis: "Buyers need to see the tool to believe it exists.",
                    verdict: "High visibility. Screenshots are plentiful and clear.",
                    question: "Are these UI shots actual production code or Figma mocks?"
                  }
                },
                { 
                  id: 'mf11', name: 'Functional Description Density', siu: 85, description: 'Depth of technical or functional explanation per feature.',
                  insights: {
                    thesis: "Too much density overwhelms; too little creates skepticism.",
                    verdict: "Balanced. Good technical depth without jargon overload.",
                    question: "Do technical buyers ask for API docs you don't have publicly listed?"
                  }
                },
                { 
                  id: 'mf12', name: 'Outcome Framing Clarity', siu: 85, description: 'Focus on end-results rather than just inputs.',
                  insights: {
                    thesis: "Selling the 'After' state is marketing 101, but rarely executed well in B2B.",
                    verdict: "Strong. 'Growth' is emphasized over 'Configuration'.",
                    question: "Can you quantify 'Member Happiness' more concretely?"
                  }
                }
              ]
            },
            {
              id: 'c4', name: 'Semantic Compression', avgSiu: 76,
              microFactors: [
                { 
                  id: 'mf13', name: 'Concept Load Efficiency', siu: 75, description: 'Ratio of distinct concepts to word count.',
                  insights: {
                    thesis: "High concept load fatigues the reader.",
                    verdict: "Average. Some sentences are packed with too many ideas.",
                    question: "Can we simplify the 'AI-driven behavioral nudge' explanation?"
                  }
                },
                { 
                  id: 'mf14', name: 'Redundant Concept Overlap', siu: 74, description: 'Repetition of core concepts (AI, guidance, wellness).',
                  insights: {
                    thesis: "Repetition reinforces memory but risks boredom.",
                    verdict: "Slightly repetitive. 'Wellness' appears 42 times.",
                    question: "Are there synonyms for 'Wellness' that resonate with CFOs?"
                  }
                },
                { 
                  id: 'mf15', name: 'Cognitive Span Ratio', siu: 79, description: 'Mental effort required to bridge disparate concepts.',
                  insights: {
                    thesis: "Bridging 'Banking' and 'Psychology' requires high cognitive effort.",
                    verdict: "Good bridging. The 'Nudge' metaphor does the heavy lifting.",
                    question: "Do older bankers understand the behavioral science reference?"
                  }
                }
              ]
            },
            {
              id: 'c5', name: 'Narrative Coherence', avgSiu: 84,
              microFactors: [
                { 
                  id: 'mf16', name: 'Tone Cohesion', siu: 86, description: 'Consistency of voice across marketing materials.',
                  insights: {
                    thesis: "A fractured voice suggests a fractured culture.",
                    verdict: "Unified. Friendly yet professional banking tone.",
                    question: "Does your CS team use this same voice in tickets?"
                  }
                },
                { 
                  id: 'mf17', name: 'Messaging Frame Continuity', siu: 82, description: 'Stability of the "why" behind the product.',
                  insights: {
                    thesis: "Shifting the 'Why' confuses the market.",
                    verdict: "Stable. The 'Financial Health' mission is constant.",
                    question: "Has this mission evolved since the Seed round?"
                  }
                },
                { 
                  id: 'mf18', name: 'Narrative Drift Resistance', siu: 84, description: 'Resistance to changing the story on different surfaces.',
                  insights: {
                    thesis: "Drift occurs when sales decks don't match the website.",
                    verdict: "High resistance. The story holds up across channels.",
                    question: "How do you enforce narrative discipline with partners?"
                  }
                }
              ]
            },
            {
              id: 'c6', name: 'Intent Comprehension', avgSiu: 84,
              microFactors: [
                { 
                  id: 'mf19', name: 'Why-Now Encoding Stability', siu: 83, description: 'Clarity on market timing and urgency.',
                  insights: {
                    thesis: "Urgency drives close rates. 'Why Now' must be extrinsic.",
                    verdict: "Clear. Tied to 'Digital Transformation' mandates.",
                    question: "Is the 'Recession' angle helping or hurting urgency?"
                  }
                },
                { 
                  id: 'mf20', name: 'Strategic Intent → Action Mapping', siu: 85, description: 'Link between company strategy and user action.',
                  insights: {
                    thesis: "Users need to know what you want them to do.",
                    verdict: "Direct. 'Schedule Demo' is logically placed.",
                    question: "Do you have a self-serve motion planned?"
                  }
                },
                { 
                  id: 'mf21', name: 'Mission Alignment with Commercial Goals', siu: 84, description: 'Connection between the mission and revenue model.',
                  insights: {
                    thesis: "Mission-driven fintechs often fail to monetize.",
                    verdict: "Aligned. You monetize the mission via deposit growth.",
                    question: "Do members ever feel 'monetized' by the nudges?"
                  }
                }
              ]
            },
            {
              id: 'c7', name: 'Buyer Friction', avgSiu: 80,
              microFactors: [
                { 
                  id: 'mf22', name: 'Jargon Friction Index', siu: 78, description: 'Density of undefined or complex industry terms.',
                  insights: {
                    thesis: "Jargon alienates the non-technical buyer.",
                    verdict: "Acceptable. Some 'API' talk might scare smaller CUs.",
                    question: "Can we simplify the integration section?"
                  }
                },
                { 
                  id: 'mf23', name: 'Visual Hierarchy Load', siu: 81, description: 'Cognitive load imposed by the design structure.',
                  insights: {
                    thesis: "Cluttered design increases bounce rate.",
                    verdict: "Clean. Good use of white space.",
                    question: "Is this design accessible for older bank execs?"
                  }
                },
                { 
                  id: 'mf24', name: 'Topic-Deviation Surprise Rate', siu: 81, description: 'Frequency of unexpected topic shifts.',
                  insights: {
                    thesis: "Surprise breaks the reading flow.",
                    verdict: "Low surprise. The narrative flows linearly.",
                    question: "Do you use heatmaps to track reading flow?"
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'd2',
          name: 'Value Articulation',
          description: 'Outcome explicitness and benefit mapping.',
          indexScore: 80,
          clusters: [
            { 
              id: 'c8', name: 'Outcome Explicitness', avgSiu: 87,
              microFactors: [
                { 
                  id: 'mf26', name: 'Deposit Lift Signal', siu: 88, description: 'Explicitness of deposit growth promises.',
                  insights: {
                    thesis: "Explicit revenue promises drive conversion but invite scrutiny.",
                    verdict: "Bold. The claim of '15% deposit growth' is the primary hook.",
                    question: "Do you have the case studies to back up this specific 15% number?"
                  }
                },
                { 
                  id: 'mf27', name: 'Loan Uptake Signal', siu: 86, description: 'Explicitness of loan conversion promises.',
                  insights: {
                    thesis: "Loan volume is the lifeblood of CUs. High visibility here is crucial.",
                    verdict: "Strong. You tie engagement directly to lending outcomes.",
                    question: "How do you attribute a loan application back to a Nudge interaction?"
                  }
                },
                { 
                  id: 'mf28', name: 'Member Actionability Signal', siu: 89, description: 'Clarity on what members actually do.',
                  insights: {
                    thesis: "Ambiguity in UX kills adoption.",
                    verdict: "Very clear. 'Members swipe to save'.",
                    question: "Is the mobile experience native or web-wrapped?"
                  }
                },
                { 
                  id: 'mf28b', name: 'Quantified Outcome Disclosure', siu: 85, description: 'Presence of hard numbers in value props.',
                  insights: {
                    thesis: "Vague promises are ignored. Numbers stick.",
                    verdict: "Good usage of percentages and $ amounts.",
                    question: "Are these numbers annualized or lifetime value?"
                  }
                }
              ]
            },
            { 
              id: 'c9', name: 'Benefit-Reason Mapping', avgSiu: 82,
              microFactors: [
                { 
                  id: 'mf29', name: 'Cause→Effect Link Strength', siu: 81, description: 'Logical strength between feature usage and benefit.',
                  insights: {
                    thesis: "Logic gaps destroy trust.",
                    verdict: "Sound. Nudge -> Awareness -> Action -> Deposit.",
                    question: "Where is the biggest drop-off in this chain?"
                  }
                },
                { 
                  id: 'mf30', name: 'Outcome Justification Coherence', siu: 83, description: 'Does the explanation justify the promised outcome?',
                  insights: {
                    thesis: "Big claims need big proof.",
                    verdict: "Justified. Behavioral science backing adds weight.",
                    question: "Do you cite the academic papers you rely on?"
                  }
                },
                { 
                  id: 'mf30b', name: 'Benefit Chain Integrity', siu: 82, description: 'Completeness of the value chain logic.',
                  insights: {
                    thesis: "Missing links create doubt.",
                    verdict: "Complete. No obvious gaps in the value story.",
                    question: "How do you handle the 'attribution' objection?"
                  }
                }
              ]
            },
            { 
              id: 'c10', name: 'Social Proof Surface', avgSiu: 71,
              microFactors: [
                { 
                  id: 'mf31', name: 'Third-Party Validation Density', siu: 70, description: 'Volume of external logos and quotes.',
                  insights: {
                    thesis: "Low validation density suggests early stage risk.",
                    verdict: "Light. Needs more logos above the fold.",
                    question: "Are you hiding logos because they are small CUs?"
                  }
                },
                { 
                  id: 'mf32', name: 'Proof Placement Hierarchy', siu: 72, description: 'Prominence of social proof in the layout.',
                  insights: {
                    thesis: "Buried proof is wasted proof.",
                    verdict: "Average. Testimonials are too far down.",
                    question: "Can we move the 'Trusted by' bar to the hero?"
                  }
                },
                { 
                  id: 'mf33', name: 'Credibility Amplifier Signal', siu: 69, description: 'Use of authority figures or prestigious associations.',
                  insights: {
                    thesis: "Authority borrows trust.",
                    verdict: "Weak. No industry analyst quotes.",
                    question: "Can we get a quote from a CUNA executive?"
                  }
                },
                { 
                  id: 'mf34', name: 'External Authority Weight', siu: 73, description: 'Reputation weight of the citing entities.',
                  insights: {
                    thesis: "The source matters more than the quote.",
                    verdict: "Moderate. Mid-sized CUs have limited weight.",
                    question: "What is the plan to land a Tier-1 logo?"
                  }
                }
              ]
            },
            {
              id: 'c11', name: 'Problem Framing', avgSiu: 83,
              microFactors: [
                { 
                  id: 'mf35', name: 'Pain Point Directness', siu: 84, description: 'How directly the copy addresses user pain.',
                  insights: {
                    thesis: "Direct pain framing resonates viscerally.",
                    verdict: "Sharp. You call out 'Deposit Bleed' directly.",
                    question: "Does this negative framing ever backfire?"
                  }
                },
                { 
                  id: 'mf36', name: 'Operational Relevance Mapping', siu: 81, description: 'Relevance of the pain to daily operations.',
                  insights: {
                    thesis: "Pain must be felt daily to drive urgency.",
                    verdict: "Relevant. Connects to daily dashboard anxiety.",
                    question: "How does this help the front-line teller?"
                  }
                },
                { 
                  id: 'mf36b', name: 'Problem → Solution Linearity', siu: 84, description: 'Direct line from defined problem to offered solution.',
                  insights: {
                    thesis: "A straight line converts faster.",
                    verdict: "Linear. Problem defined, solution provided.",
                    question: "Is the solution too simple for complex problems?"
                  }
                }
              ]
            },
            {
              id: 'c12', name: 'Commercial Framing', avgSiu: 87,
              microFactors: [
                { 
                  id: 'mf37', name: 'Business Case Clarity', siu: 88, description: 'Clarity of the economic argument for purchase.',
                  insights: {
                    thesis: "The CFO needs a reason to say yes.",
                    verdict: "Crystal Clear. ROI calculator is front and center.",
                    question: "Is the calculator based on industry averages or user data?"
                  }
                },
                { 
                  id: 'mf38', name: 'ROI Predictability', siu: 85, description: 'Certainty implied in ROI statements.',
                  insights: {
                    thesis: "Predictability lowers risk perception.",
                    verdict: "High confidence. 'See results in 90 days'.",
                    question: "What is your refund policy if they don't see results?"
                  }
                },
                { 
                  id: 'mf38b', name: 'Financial Justification Encoding', siu: 88, description: 'Use of financial terminology to justify cost.',
                  insights: {
                    thesis: "Speaking the buyer's financial language builds trust.",
                    verdict: "Excellent. Uses 'Cost of Funds' correctly.",
                    question: "Do you speak 'Net Interest Margin' fluently?"
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'd3',
          name: 'Audience Specificity',
          description: 'ICP directness and persona alignment.',
          indexScore: 86,
          clusters: [
            { 
              id: 'c13', name: 'ICP Directness', avgSiu: 92,
              microFactors: [
                { 
                  id: 'mf39', name: 'Explicit Audience Naming ("Credit Unions")', siu: 95, description: 'Direct mentioning of the target audience name.',
                  insights: {
                    thesis: "Niche targeting (Credit Unions) creates a defensible moat against generic fintechs.",
                    verdict: "Perfect Score. You are hyper-focused.",
                    question: "Does this focus limit your TAM too early?"
                  }
                },
                { 
                  id: 'mf40', name: 'Buyer Persona Projection', siu: 90, description: 'Reflection of the buyer\'s self-image in copy.',
                  insights: {
                    thesis: "Buyers buy who they want to be.",
                    verdict: "Strong. You reflect the 'Member-First' hero.",
                    question: "Does this alienate the profit-driven CEO?"
                  }
                },
                { 
                  id: 'mf41', name: 'ICP Salience Intensity', siu: 91, description: 'Visual prominence of the ICP definition.',
                  insights: {
                    thesis: "If they have to guess if it's for them, they leave.",
                    verdict: "Unmissable. 'Built for Credit Unions' is the H1.",
                    question: "Do you ever sell to Community Banks?"
                  }
                }
              ]
            },
            { 
              id: 'c14', name: 'ICP Relevance Mapping', avgSiu: 85,
              microFactors: [
                { 
                  id: 'mf42', name: 'Operational Vocabulary Match', siu: 84, description: 'Use of industry-specific slang and terms.',
                  insights: {
                    thesis: "Slang signals insider status.",
                    verdict: "Good match. 'Member Share', 'Indirect Auto'.",
                    question: "Are you missing any new regulatory terms?"
                  }
                },
                { 
                  id: 'mf43', name: 'Contextual Fit to CU Capabilities', siu: 86, description: 'Fit with the technical reality of Credit Unions.',
                  insights: {
                    thesis: "Solutions must fit the tech stack reality.",
                    verdict: "Realistic. Acknowledges core banking limits.",
                    question: "How deep is your Symitar integration really?"
                  }
                },
                { 
                  id: 'mf44', name: 'Role-Relevant Pain Mapping', siu: 85, description: 'Addressing pains specific to the buyer persona.',
                  insights: {
                    thesis: "Specific pain builds specific trust.",
                    verdict: "Accurate. 'Aging membership' is a top worry.",
                    question: "Do you have a solution for Gen Z acquisition?"
                  }
                }
              ]
            },
            { 
              id: 'c15', name: 'Persona Alignment', avgSiu: 81,
              microFactors: [
                { 
                  id: 'mf45', name: 'Functional Role Resonance', siu: 80, description: 'Resonance with the day-to-day job of the buyer.',
                  insights: {
                    thesis: "Resonance drives champion building.",
                    verdict: "Solid. Marketing VPs feel understood.",
                    question: "What about the CTO persona?"
                  }
                },
                { 
                  id: 'mf46', name: 'Job-To-Be-Done Fit', siu: 82, description: 'Alignment with the "Job to be Done" framework.',
                  insights: {
                    thesis: "Products are hired to do a job.",
                    verdict: "Clear. The job is 'Grow Deposits'.",
                    question: "Is there a secondary job like 'Save Time'?"
                  }
                },
                { 
                  id: 'mf47', name: 'Persona-Level Outcome Relevance', siu: 81, description: 'Relevance of outcomes to the specific persona.',
                  insights: {
                    thesis: "Outcomes must match the persona's KPI.",
                    verdict: "Aligned. Marketing cares about engagement.",
                    question: "Does the CEO care about 'Engagement' or just 'Profit'?"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'algorithmic',
      name: 'Algorithmic Lens',
      description: 'Discoverability, Visibility & Authority',
      lisScore: 0.78,
      color: '#8b5cf6', // Violet
      domains: [
        {
          id: 'd4',
          name: 'Branded Discoverability',
          description: 'SERP dominance and intent purity.',
          indexScore: 84,
          clusters: [
            { 
              id: 'c16', name: 'SERP Dominance', avgSiu: 88,
              microFactors: [
                { 
                  id: 'mf48', name: 'SERP Occupancy Ratio', siu: 90, description: 'Percentage of page 1 pixels owned by the brand.',
                  insights: {
                    thesis: "Owning pixel space equals owning attention.",
                    verdict: "Dominant. You own the entire fold.",
                    question: "Are you monitoring for competitor ads on your name?"
                  }
                },
                { 
                  id: 'mf49', name: 'Competitive Distance Index', siu: 86, description: 'Distance from competitors in search rankings.',
                  insights: {
                    thesis: "Distance protects margins.",
                    verdict: "Safe. Competitors are below the fold.",
                    question: "How quickly can they bridge this gap?"
                  }
                },
                { 
                  id: 'mf50', name: 'Top-10 Position Persistence', siu: 88, description: 'Stability of top rankings over time.',
                  insights: {
                    thesis: "Stability indicates algorithmic trust.",
                    verdict: "Rock solid. No recent drops.",
                    question: "Have you survived the recent Core Update?"
                  }
                }
              ]
            },
            { 
              id: 'c17', name: 'Branded Intent Purity', avgSiu: 85,
              microFactors: [
                { 
                  id: 'mf51', name: 'Query Intent Purity', siu: 87, description: 'Lack of ambiguity in branded search queries.',
                  insights: {
                     thesis: "High intent purity means low acquisition costs for branded traffic.",
                     verdict: "Clean. People searching 'Nudge Money' want you.",
                     question: "Are you buying your own branded keywords to protect this?"
                  }
                },
                { 
                  id: 'mf52', name: 'Brand-Name Disambiguation Strength', siu: 84, description: 'Ability to distinguish brand from common words.',
                  insights: {
                    thesis: "Generic names struggle for distinctiveness.",
                    verdict: "Surprisingly good given the name 'Nudge'.",
                    question: "Does 'Money' modifier do enough heavy lifting?"
                  }
                },
                { 
                  id: 'mf53', name: 'Search Intent Clarity', siu: 84, description: 'Clarity of user intent when searching the brand.',
                  insights: {
                    thesis: "Clear intent signals high brand affinity.",
                    verdict: "High. Searchers are looking for a login or demo.",
                    question: "Are you seeing any 'support' related queries?"
                  }
                }
              ]
            },
            { 
              id: 'c18', name: 'Ranking Stability', avgSiu: 79,
              microFactors: [
                { 
                  id: 'mf54', name: 'Position Volatility Over Time', siu: 78, description: 'Fluctuation in search rank positions.',
                  insights: {
                    thesis: "Volatility suggests weak authority.",
                    verdict: "Mild fluctuations. Nothing alarming.",
                    question: "Do you have a content moat to stabilize this?"
                  }
                },
                { 
                  id: 'mf55', name: 'SERP Consistency Under User Variability', siu: 77, description: 'Consistency of results across different users/locations.',
                  insights: {
                    thesis: "Consistency builds national brand equity.",
                    verdict: "Generally consistent. Regional variance is low.",
                    question: "How does this look in New York vs Kansas?"
                  }
                },
                { 
                  id: 'mf56', name: 'Anchor-Link Strength', siu: 82, description: 'Strength of inbound link anchor text.',
                  insights: {
                    thesis: "Anchors define relevance to Google.",
                    verdict: "Strong. Lots of 'Credit Union Marketing' anchors.",
                    question: "Are you actively building backlinks?"
                  }
                }
              ]
            },
            {
              id: 'c19', name: 'Semantic Drift', avgSiu: 78,
              microFactors: [
                { 
                  id: 'mf57', name: 'Off-Intent SERP Noise', siu: 76, description: 'Presence of irrelevant results in branded SERP.',
                  insights: {
                    thesis: "Noise in the SERP suggests a weak semantic footprint.",
                    verdict: "Moderate Risk. Some behavioral science articles bleed in.",
                    question: "How do we displace the 'Nudge Theory' academic papers from your SERP?"
                  }
                },
                { 
                  id: 'mf58', name: 'Cross-Category SERP Misalignment', siu: 79, description: 'Confusion with other industry categories.',
                  insights: {
                    thesis: "Misalignment leads to wrong traffic.",
                    verdict: "Low. Google knows you are Finance, not Psychology.",
                    question: "Is the 'Health' category encroaching?"
                  }
                },
                { 
                  id: 'mf59', name: 'Keyword Adjacency Drift', siu: 79, description: 'Drift in associated keywords over time.',
                  insights: {
                    thesis: "Adjacency drift dilutes authority.",
                    verdict: "Stable. You stay in the 'Fintech' lane.",
                    question: "Are you tempted to drift into 'Crypto'?"
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'd5',
          name: 'Category Penetration',
          description: 'Unbranded keyword reach and competitive overlap.',
          indexScore: 67,
          clusters: [
            { 
              id: 'c20', name: 'Unbranded Keyword Penetration', avgSiu: 66,
              microFactors: [
                { 
                  id: 'mf60', name: 'Coverage of Category Keywords', siu: 64, description: 'Percentage of category-relevant keywords targeted.',
                  insights: {
                    thesis: "Low coverage means you are invisible to buyers who don't know your name.",
                    verdict: "Weakness. You are missing 60% of the 'Financial Wellness' term volume.",
                    question: "What is the content strategy to capture 'Credit Union AI' terms?"
                  }
                },
                { 
                  id: 'mf61', name: 'Depth of Unbranded Visibility', siu: 65, description: 'Ranking depth for non-brand terms.',
                  insights: {
                    thesis: "Page 2 is where companies go to die.",
                    verdict: "Shallow. Most non-brand terms are on Page 2 or 3.",
                    question: "Do you have the budget for a serious SEO play?"
                  }
                },
                { 
                  id: 'mf62', name: 'Topic Authority Thresholds', siu: 69, description: 'Meeting the bar for topical authority.',
                  insights: {
                    thesis: "You need volume to be an authority.",
                    verdict: "Below threshold. Not enough content depth yet.",
                    question: "Can you 10x your blog output?"
                  }
                }
              ]
            },
            { 
              id: 'c21', name: 'Competitive Overlap', avgSiu: 64,
              microFactors: [
                { 
                  id: 'mf63', name: 'Competitor Keyword Density', siu: 62, description: 'Overlap with competitor keyword sets.',
                  insights: {
                    thesis: "High overlap means a bloody fight.",
                    verdict: "Crowded. Everyone is bidding on 'Financial Wellness'.",
                    question: "How do you differentiate in a crowded auction?"
                  }
                },
                { 
                  id: 'mf64', name: 'Semantic Shoulder Pressure', siu: 65, description: 'Pressure from adjacent topics/competitors.',
                  insights: {
                    thesis: "Shoulder pressure squeezes margins.",
                    verdict: "High. Neo-banks are encroaching on your terms.",
                    question: "Can you defend against Chime's marketing budget?"
                  }
                },
                { 
                  id: 'mf65', name: 'Category Noise Intrusion', siu: 65, description: 'Intrusion of irrelevant category noise.',
                  insights: {
                    thesis: "Noise dilutes conversion.",
                    verdict: "Noisy. 'Wellness' brings in health traffic.",
                    question: "Can you pivot to 'Financial Health' instead?"
                  }
                }
              ]
            },
            { 
              id: 'c22', name: 'Search Intent Fit', avgSiu: 70,
              microFactors: [
                { 
                  id: 'mf66', name: 'Relevance to Category Query Intent', siu: 72, description: 'Match between page content and searcher goal.',
                  insights: {
                    thesis: "Relevance is the #1 ranking factor.",
                    verdict: "Good. Your pages answer the questions.",
                    question: "Are you answering the 'Pricing' question directly?"
                  }
                },
                { 
                  id: 'mf67', name: 'Problem-Solution Fit Strength', siu: 68, description: 'How well the content solves the searched problem.',
                  insights: {
                    thesis: "Fit drives dwell time.",
                    verdict: "Adequate. Could be more solution-oriented.",
                    question: "Do you have interactive tools on the site?"
                  }
                },
                { 
                  id: 'mf68', name: 'Term-Level Semantic Fit', siu: 70, description: 'Semantic closeness of terms used.',
                  insights: {
                    thesis: "Using the right words matters.",
                    verdict: "Okay. A bit too much marketing fluff.",
                    question: "Can we tighten the copy to be more technical?"
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'd6',
          name: 'Authority Surface',
          description: 'Institutional credibility and trust infrastructure.',
          indexScore: 76,
          clusters: [
            { 
              id: 'c23', name: 'Institutional Credibility', avgSiu: 82,
              microFactors: [
                { 
                  id: 'mf69', name: 'Accelerator/Incubator Validation', siu: 85, description: 'Endorsement by recognized accelerators.',
                  insights: {
                    thesis: "Accelerators provide a trust halo.",
                    verdict: "Strong. YC/Techstars badge helps.",
                    question: "Are you leveraging this network enough?"
                  }
                },
                { 
                  id: 'mf70', name: 'Association Membership Signals', siu: 80, description: 'Membership in industry trade groups.',
                  insights: {
                    thesis: "Membership signals permanence.",
                    verdict: "Good. CUNA membership is visible.",
                    question: "Are you active in these groups or just paying dues?"
                  }
                },
                { 
                  id: 'mf71', name: 'Industry Recognition Artifacts', siu: 83, description: 'Awards, badges, and certifications.',
                  insights: {
                    thesis: "Awards are social proof for the risk-averse.",
                    verdict: "Visible. 'Finovate Best in Show' is good.",
                    question: "Can you get more recent awards?"
                  }
                },
                { 
                  id: 'mf72', name: 'External Reputation Weight', siu: 80, description: 'General weight of external reputation signals.',
                  insights: {
                    thesis: "Reputation is hard to build, easy to lose.",
                    verdict: "Positive. No negative press found.",
                    question: "Do you have a crisis comms plan?"
                  }
                }
              ]
            },
            { 
              id: 'c24', name: 'Trust Infrastructure', avgSiu: 70,
              microFactors: [
                { 
                  id: 'mf73', name: 'Trust-Flow Weighted Links', siu: 68, description: 'Quality of backlinks based on Trust Flow.',
                  insights: {
                    thesis: "Low trust flow limits ranking potential.",
                    verdict: "Weak link profile. Needs PR push.",
                    question: "What is the strategy to get Tier-1 press?"
                  }
                },
                { 
                  id: 'mf74', name: 'Mentions in Trusted Ecosystems', siu: 71, description: 'Citations in high-trust domain ecosystems.',
                  insights: {
                    thesis: "You are who you hang out with.",
                    verdict: "Average. Mentioned in trade blogs, not WSJ.",
                    question: "Is a Forbes Tech Council seat worth it?"
                  }
                },
                { 
                  id: 'mf75', name: 'Tier-2 Authority Network Presence', siu: 71, description: 'Presence in secondary authority networks.',
                  insights: {
                    thesis: "Tier-2 builds the base for Tier-1.",
                    verdict: "Present. Good coverage in niche newsletters.",
                    question: "Can we double down on newsletter sponsorships?"
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'd7',
          name: 'Marketing Execution',
          description: 'Content velocity and distribution.',
          indexScore: 77,
          clusters: [
            { 
              id: 'c25', name: 'Content Velocity', avgSiu: 73,
              microFactors: [
                { 
                  id: 'mf76', name: 'Publishing Cadence Consistency', siu: 72, description: 'Regularity of new content publication.',
                  insights: {
                    thesis: "Consistency beats intensity.",
                    verdict: "Sporadic. Huge gaps in blog dates.",
                    question: "Is content a priority or an afterthought?"
                  }
                },
                { 
                  id: 'mf77', name: 'Topical Breadth Spread', siu: 75, description: 'Width of topics covered in content.',
                  insights: {
                    thesis: "Breadth captures top-of-funnel.",
                    verdict: "Okay width. Covers basic fintech topics.",
                    question: "Should we go deeper into 'Financial Psychology'?"
                  }
                },
                { 
                  id: 'mf78', name: 'Freshness Index', siu: 72, description: 'Recency of the content library.',
                  insights: {
                    thesis: "Stale content smells like a dead company.",
                    verdict: "Aging. Some articles are from 2023.",
                    question: "Can we refresh the evergreen posts?"
                  }
                }
              ]
            },
            { 
              id: 'c26', name: 'Distribution Surface', avgSiu: 74,
              microFactors: [
                { 
                  id: 'mf79', name: 'Multi-Channel Signal Spread', siu: 73, description: 'Presence across multiple social/web channels.',
                  insights: {
                    thesis: "Be where the buyers are.",
                    verdict: "LinkedIn is strong. Twitter is dead.",
                    question: "Is Twitter worth the effort for B2B?"
                  }
                },
                { 
                  id: 'mf80', name: 'Platform Diversity Fitness', siu: 75, description: 'Appropriateness of channels for the brand.',
                  insights: {
                    thesis: "Don't force it.",
                    verdict: "Appropriate. No TikTok dancing (good).",
                    question: "Is YouTube an untapped channel?"
                  }
                },
                { 
                  id: 'mf81', name: 'Cross-Channel Reinforcement', siu: 74, description: 'How channels support each other.',
                  insights: {
                    thesis: "Echo chambers amplify message.",
                    verdict: "Disconnected. Email doesn't match LinkedIn.",
                    question: "Can we unify the campaign calendar?"
                  }
                }
              ]
            },
            { 
              id: 'c27', name: 'Proof Activity', avgSiu: 82,
              microFactors: [
                { 
                  id: 'mf82', name: 'Event/Webinar Frequency', siu: 83, description: 'Frequency of live engagement events.',
                  insights: {
                    thesis: "Live events build deep trust.",
                    verdict: "High frequency. Monthly webinars are good.",
                    question: "Are you repurposing this content effectively?"
                  }
                },
                { 
                  id: 'mf83', name: 'Demonstration Surface', siu: 81, description: 'Availability of product demos.',
                  insights: {
                    thesis: "Show, don't tell.",
                    verdict: "Good. Demo videos are accessible.",
                    question: "Is the interactive demo converting?"
                  }
                },
                { 
                  id: 'mf84', name: 'Public Activity Signals', siu: 82, description: 'Visible activity on public platforms.',
                  insights: {
                    thesis: "Activity signals life.",
                    verdict: "Alive. Founders are posting.",
                    question: "Is this founder-led or marketing-led?"
                  }
                }
              ]
            },
            {
              id: 'c28', name: 'Conversion Surface', avgSiu: 74,
              microFactors: [
                { 
                  id: 'mf85', name: 'CTA Clarity', siu: 75, description: 'Explicitness of Calls to Action.',
                  insights: {
                    thesis: "Ask for the sale.",
                    verdict: "Average. 'Learn More' is weak.",
                    question: "Can we test 'Book a Demo' vs 'See Pricing'?"
                  }
                },
                { 
                  id: 'mf86', name: 'Funnel Entry Smoothness', siu: 73, description: 'Ease of entering the sales funnel.',
                  insights: {
                    thesis: "Friction kills leads.",
                    verdict: "A bit clunky. Too many form fields.",
                    question: "Do you really need 'Company Size' on step 1?"
                  }
                }
              ]
            },
            {
              id: 'c29', name: 'Outbound Narrative', avgSiu: 79,
              microFactors: [
                { 
                  id: 'mf87', name: 'Outbound Email/PR Narrative Strength', siu: 80, description: 'Strength of the story in outbound channels.',
                  insights: {
                    thesis: "Outbound needs a hook.",
                    verdict: "Strong hook. 'Deposit Growth' works.",
                    question: "How quickly does this hook fatigue?"
                  }
                },
                { 
                  id: 'mf88', name: 'Consistency of Messaging Across Channels', siu: 78, description: 'Alignment of outbound and inbound messaging.',
                  insights: {
                    thesis: "Inconsistency creates cognitive dissonance.",
                    verdict: "Aligned. No bait and switch.",
                    question: "Are SDRs using the latest deck?"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'machine',
      name: 'Machine Lens',
      description: 'AI Visibility, Semantic Stability & Retrieval',
      lisScore: 0.73,
      color: '#f43f5e', // Rose
      domains: [
        {
          id: 'd8',
          name: 'Machine Grounding',
          description: 'Entity stability and hallucination resistance.',
          indexScore: 74,
          clusters: [
            { 
              id: 'c30', name: 'Entity Stability', avgSiu: 82,
              microFactors: [
                { 
                  id: 'mf89', name: 'Multi-Model Identity Matching', siu: 83, description: 'Consistency of identity across different LLMs.',
                  insights: {
                    thesis: "If GPT-4 and Claude disagree on who you are, your brand is fragile.",
                    verdict: "Stable. Major models agree you are a 'Fintech for CUs'.",
                    question: "Have you tested your brand recall on older models like GPT-3.5?"
                  }
                },
                { 
                  id: 'mf90', name: 'Entity Surface Agreement', siu: 82, description: 'Agreement of facts across web surfaces.',
                  insights: {
                    thesis: "AI acts as a consensus engine. Disagreement breeds hallucination.",
                    verdict: "High Agreement. LinkedIn and Web match perfectly.",
                    question: "Are your Crunchbase and Pitchbook profiles updated?"
                  }
                },
                { 
                  id: 'mf91', name: 'Org/Category Binding Strength', siu: 81, description: 'Strength of the link between Org and Category in LLMs.',
                  insights: {
                    thesis: "Binding strength determines recommendation frequency.",
                    verdict: "Strong binding to 'Credit Union Tech'.",
                    question: "Can we strengthen the binding to 'AI'?"
                  }
                },
                { 
                  id: 'mf92', name: 'Retrieval Consistency', siu: 82, description: 'Reliability of retrieving the same facts.',
                  insights: {
                    thesis: "Randomness in retrieval kills trust.",
                    verdict: "Consistent. Facts are stable across regenerations.",
                    question: "Does this hold up with temperature set to 1.0?"
                  }
                }
              ]
            },
            { 
              id: 'c31', name: 'Description Convergence', avgSiu: 73,
              microFactors: [
                { 
                  id: 'mf93', name: 'Cross-Model Summary Alignment', siu: 72, description: 'Similarity of summaries generated by different AIs.',
                  insights: {
                    thesis: "Divergent summaries imply a muddy narrative.",
                    verdict: "Slight divergence. Some models focus on 'Wellness', others on 'Analytics'.",
                    question: "Which narrative do we want to win?"
                  }
                },
                { 
                  id: 'mf94', name: 'Model-to-Model Value Consensus', siu: 74, description: 'Consensus on value prop across models.',
                  insights: {
                    thesis: "Value must be universal.",
                    verdict: "Consensus is forming around 'Engagement'.",
                    question: "Is 'Engagement' the highest value prop?"
                  }
                },
                { 
                  id: 'mf95', name: 'Description Drift Resistance', siu: 73, description: 'Resistance to description changes over time.',
                  insights: {
                    thesis: "Drift suggests weak training data presence.",
                    verdict: "Moderate. Newer models are more accurate.",
                    question: "How do we force update the training data?"
                  }
                }
              ]
            },
            { 
              id: 'c32', name: 'Hallucination Resistance', avgSiu: 68,
              microFactors: [
                { 
                  id: 'mf97', name: 'Noise-Injection Stability', siu: 67, description: 'Stability when noise is injected into the prompt.',
                  insights: {
                    thesis: "Fragile brands break under noise.",
                    verdict: "Unstable. Adding 'Crypto' to the prompt confuses the model.",
                    question: "Are we accidentally signaling crypto proximity?"
                  }
                },
                { 
                  id: 'mf98', name: 'Competitor Confusion Rate', siu: 69, description: 'Frequency of being confused with competitors.',
                  insights: {
                    thesis: "High confusion rates mean you are losing AI-driven referrals.",
                    verdict: "Concerning. LLMs often conflate you with 'FinWell AI'.",
                    question: "Can we add more distinct entity markers to your schema markup?"
                  }
                },
                { 
                  id: 'mf99', name: 'Category Misclassification Resistance', siu: 68, description: 'Resistance to being miscategorized.',
                  insights: {
                    thesis: "Being misclassified is being invisible.",
                    verdict: "Okay. Sometimes flagged as 'Personal Finance' B2C.",
                    question: "Do we need to say 'B2B' more often?"
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'd9',
          name: 'Semantic Stability',
          description: 'Noise collision and anchor strength.',
          indexScore: 73,
          clusters: [
            { 
              id: 'c33', name: 'Semantic Noise', avgSiu: 61,
              microFactors: [
                { 
                  id: 'mf101', name: 'Lexical Collision Load', siu: 60, description: 'Collision with common words or other concepts.',
                  insights: {
                    thesis: "Common words are expensive to own.",
                    verdict: "High Load. 'Nudge' is a very common verb.",
                    question: "How much are you spending to defend this name?"
                  }
                },
                { 
                  id: 'mf102', name: 'Homonym Drift (behavioral science "nudge")', siu: 59, description: 'Confusion with the behavioral science concept.',
                  insights: {
                    thesis: "Your name is a dictionary word. This is an uphill battle for semantic ownership.",
                    verdict: "High Noise. 'Nudge' is too generic without modifiers.",
                    question: "Is a rebrand to 'NudgeMoney' or 'NudgeFi' on the table?"
                  }
                },
                { 
                  id: 'mf103', name: 'Generic Wellness Cross-Talk', siu: 62, description: 'Interference from generic wellness content.',
                  insights: {
                    thesis: "Wellness is a crowded semantic space.",
                    verdict: "Noisy. Yoga and Meditation apps bleed in.",
                    question: "Can we own 'Financial Wellness' specifically?"
                  }
                },
                { 
                  id: 'mf104', name: 'Ambiguity from Overlapping Financial "nudge" tools', siu: 63, description: 'Confusion with other similar financial tools.',
                  insights: {
                    thesis: "Feature names as brand names is risky.",
                    verdict: "Confusing. Every bank app has 'nudges'.",
                    question: "Are you the feature or the platform?"
                  }
                }
              ]
            },
            { 
              id: 'c34', name: 'Anchor Strength', avgSiu: 81,
              microFactors: [
                { 
                  id: 'mf105', name: 'ICP Anchor Strength ("credit unions")', siu: 83, description: 'Strength of the association with Credit Unions.',
                  insights: {
                    thesis: "Strong anchors prevent drift.",
                    verdict: "Strong. 'Credit Union' is your semantic anchor.",
                    question: "Does this limit expansion to Banks?"
                  }
                },
                { 
                  id: 'mf106', name: 'Outcome Anchor Clarity', siu: 80, description: 'Clarity of the outcomes anchored to the brand.',
                  insights: {
                    thesis: "Anchors should be outcomes, not features.",
                    verdict: "Good. Anchored to 'Growth'.",
                    question: "Can we anchor to 'Retention' as well?"
                  }
                },
                { 
                  id: 'mf107', name: 'Category Anchor Weight', siu: 80, description: 'Weight of the category association.',
                  insights: {
                    thesis: "Category ownership is the ultimate goal.",
                    verdict: "Solid. You are a player in 'Fintech'.",
                    question: "Are you a 'Challenger' or a 'Leader'?"
                  }
                }
              ]
            },
            { 
              id: 'c35', name: 'Structural Clarity', avgSiu: 78,
              microFactors: [
                { 
                  id: 'mf108', name: 'Concept Boundary Integrity', siu: 77, description: 'Distinctness of concept boundaries.',
                  insights: {
                    thesis: "Blurry boundaries confuse AI.",
                    verdict: "Clear boundaries. You are B2B, not B2C.",
                    question: "Do we need to make the 'For Business' login clearer?"
                  }
                },
                { 
                  id: 'mf109', name: 'Structural Mapping Consistency', siu: 79, description: 'Consistency of the structural map of the brand.',
                  insights: {
                    thesis: "Structure aids retrieval.",
                    verdict: "Good. Site structure is logical.",
                    question: "Is the sitemap.xml up to date?"
                  }
                },
                { 
                  id: 'mf110', name: 'Model-Internal Category Resolution', siu: 78, description: 'Resolution of category within the model\'s weights.',
                  insights: {
                    thesis: "Internal resolution is opaque but inferable.",
                    verdict: "Resolving correctly. High confidence scores.",
                    question: "How do we push confidence to 99%?"
                  }
                }
              ]
            }
          ]
        },
        {
          id: 'd10',
          name: 'Retrieval & Promptability',
          description: 'Context reinforcement and linearity.',
          indexScore: 75,
          clusters: [
            { 
              id: 'c36', name: 'Retrieval Linearity', avgSiu: 77,
              microFactors: [
                { 
                  id: 'mf111', name: 'Multi-Turn Comprehension Stability', siu: 76, description: 'Stability of understanding across conversation turns.',
                  insights: {
                    thesis: "Stability over time proves robust branding.",
                    verdict: "Stable for 3 turns, then drifts.",
                    question: "How do we maintain context in long chats?"
                  }
                },
                { 
                  id: 'mf112', name: 'Retention Under Query Variation', siu: 78, description: 'Retention of facts when queries vary.',
                  insights: {
                    thesis: "Robustness against phrasing is key.",
                    verdict: "Good. Handles synonyms well.",
                    question: "What about slang or misspellings?"
                  }
                },
                { 
                  id: 'mf113', name: 'Context-Preservation Integrity', siu: 77, description: 'Ability to preserve context over long interactions.',
                  insights: {
                    thesis: "Context is king.",
                    verdict: "Average. Needs periodic reinforcement.",
                    question: "Can we inject context via schema?"
                  }
                }
              ]
            },
            { 
              id: 'c37', name: 'Prompt Accuracy', avgSiu: 75,
              microFactors: [
                { 
                  id: 'mf115', name: 'Summary Precision', siu: 74, description: 'Precision of AI-generated summaries.',
                  insights: {
                    thesis: "Summaries are the new first impression.",
                    verdict: "Precise enough. Hits main points.",
                    question: "Can we make the summaries punchier?"
                  }
                },
                { 
                  id: 'mf116', name: 'Value Reconstruction Accuracy', siu: 76, description: 'Accuracy of reconstructing the value prop.',
                  insights: {
                    thesis: "If AI can't sell it, humans won't buy it.",
                    verdict: "Accurate. Reconstructs the ROI well.",
                    question: "Does it capture the emotional value?"
                  }
                },
                { 
                  id: 'mf117', name: 'GTM Asset Fidelity', siu: 75, description: 'Fidelity of Go-to-Market assets in retrieval.',
                  insights: {
                    thesis: "Assets must be retrievable.",
                    verdict: "Okay. Case studies are hard to find.",
                    question: "Are PDFs blocking the crawler?"
                  }
                }
              ]
            },
            { 
              id: 'c38', name: 'Context Reinforcement', avgSiu: 72,
              microFactors: [
                { 
                  id: 'mf118', name: 'Context-Dependent Recall Strength', siu: 71, description: 'Recall strength dependent on context.',
                  insights: {
                    thesis: "Context dependency is a weakness.",
                    verdict: "Weak. Needs 'Credit Union' prompt to work.",
                    question: "How do we work without the prompt hint?"
                  }
                },
                { 
                  id: 'mf119', name: 'ICP-Dependent Accuracy', siu: 73, description: 'Accuracy specific to the Ideal Customer Profile.',
                  insights: {
                    thesis: "Accuracy must be high for the ICP.",
                    verdict: "Good for CUs, bad for Banks.",
                    question: "Is that intentional exclusion?"
                  }
                },
                { 
                  id: 'mf120', name: 'Collapse Resistance Under Broad Queries', siu: 72, description: 'Resistance to losing specificity in broad queries.',
                  insights: {
                    thesis: "Broad queries shouldn't break the brand.",
                    verdict: "Collapses. 'Finance AI' returns generic results.",
                    question: "How do we win the broad term?"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
