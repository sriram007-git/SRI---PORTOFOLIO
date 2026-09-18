export type Skill = {
  name: string
  level: 'Comfortable' | 'Working knowledge' | 'Familiar'
}

export type SkillGroup = {
  id: string
  label: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    label: 'Programming',
    skills: [
      { name: 'Python', level: 'Comfortable' },
      { name: 'Java', level: 'Working knowledge' },
      { name: 'JavaScript', level: 'Working knowledge' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML', level: 'Comfortable' },
      { name: 'CSS', level: 'Comfortable' },
      { name: 'React', level: 'Working knowledge' },
      { name: 'Vite', level: 'Working knowledge' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Flask', level: 'Working knowledge' },
      { name: 'Spring Boot', level: 'Working knowledge' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [{ name: 'MySQL', level: 'Working knowledge' }],
  },
  {
    id: 'ai-data',
    label: 'AI / Data',
    skills: [
      { name: 'Artificial Intelligence', level: 'Working knowledge' },
      { name: 'Machine Learning', level: 'Working knowledge' },
      { name: 'RAG', level: 'Working knowledge' },
      { name: 'OCR', level: 'Familiar' },
      { name: 'Computer Vision', level: 'Familiar' },
      { name: 'Pandas', level: 'Comfortable' },
      { name: 'NumPy', level: 'Comfortable' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', level: 'Comfortable' },
      { name: 'GitHub', level: 'Comfortable' },
      { name: 'VS Code', level: 'Comfortable' },
      { name: 'IntelliJ IDEA', level: 'Working knowledge' },
      { name: 'Postman', level: 'Working knowledge' },
      { name: 'Power BI', level: 'Comfortable' },
    ],
  },
]
