export type Project = {
  id: string
  title: string
  category: string
  description: string
  highlights: string[]
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
 
  {
    id: 'train-traffic-control',
    title: 'AI-Powered Train Traffic Control System',
    category: 'AI · Reinforcement Learning',
    description:
      'A reinforcement-learning system that schedules and reroutes trains to reduce congestion, built with a 4-member team and simulated end-to-end with SimPy before being written up as a research paper.',
    highlights: [
      'RL agent trained to make train scheduling and routing decisions',
      'Discrete-event simulation of network traffic in SimPy',
      'Data analysis and results visualization with Pandas, NumPy and Matplotlib',
      'Outcome documented in a peer-reviewed paper with a 4-person team',
    ],
    tech: ['Python', 'Reinforcement Learning', 'SimPy', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/sriram007-git',
  },
  {
    id: 'ai-form-filler',
    title: 'AI Form Filler',
    category: 'AI · Browser Automation',
    description:
      'An agentic Chrome extension that reads a web form and fills it in for the user, switching between OpenAI, Gemini, Claude and Grok depending on which API key is configured.',
    highlights: [
      'Agentic flow that reads form fields and decides what to fill and how',
      'Pluggable LLM backend across OpenAI, Gemini, Claude and Grok',
      'Runs directly inside the browser via the Chrome Extension APIs',
      'Built to save the repetitive, boring part of filling forms online',
    ],
    tech: ['JavaScript', 'Chrome Extension APIs', 'Agentic AI', 'LLM Integration'],
    github: 'https://github.com/sriram007-git',
  },
  {
    id: 'ig-analyzer',
    title: 'Instagram Post Analyzer',
    category: 'Browser Extension',
    description:
      'A Chrome extension that surfaces post-level Instagram analytics directly on the page, built as a fast Vite + React front end wrapped around the Chrome Extension APIs.',
    highlights: [
      'Reads and structures post information straight from the page',
      'Built with React + Vite for a lightweight, fast-loading extension',
      'Clean popup UI for scanning stats at a glance',
    ],
    tech: ['React', 'Vite', 'JavaScript', 'Chrome Extension APIs'],
    github: 'https://github.com/sriram007-git',
  },
  {
    id: 'ai-finance-agent',
    title: 'AI Finance Agent (Multi-Agent System)',
    category: 'AI · Full-Stack',
    description:
      'An AI-powered Finance Assistant that automates customer support and provides banking-related information, using a multi-agent architecture with LLM integration to process requests and generate accurate, context-aware responses.',
    highlights: [
      'Engineered an AI-powered Finance Assistant using Python and Agentic AI to automate customer support and provide banking-related information',
      'Built a responsive web interface using HTML, CSS and JavaScript, integrating an AI chatbot for real-time user interaction',
      'Implemented a multi-agent architecture with LLM integration to process user requests and generate accurate, context-aware responses',
    ],
    tech: ['Python', 'FastAPI', 'HTML', 'CSS', 'JavaScript', 'Agentic AI', 'LLM APIs', 'REST APIs'],
    github: 'https://github.com/sriram007-git',
  },
  {
    id: 'car-dashboard',
    title: 'Car sales profit and loss Performance Dashboard',
    category: 'Data Analytics',
    description:
      'An interactive Power BI dashboard for exploring car sales performance, with DAX-driven metrics behind every visual.',
    highlights: [
      'Player and team-level performance breakdowns',
      'Custom DAX measures for derived stats',
      'Interactive filters for season, team and player comparisons',
    ],
    tech: ['Power BI', 'DAX', 'Data Visualization'],
    github: 'https://github.com/sriram007-git',
  },
]