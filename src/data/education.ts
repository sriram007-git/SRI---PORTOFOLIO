export const education = [
  {
    degree: 'B.Tech — Information Technology',
    institution: 'Kings Engineering College',
    affiliation: 'Anna University',
    period: '2022 — 2026',
    cgpa: '7.54',
    details: 'Coursework and academic details to be added.',
  },
  {
    degree: 'HSC (12th Standard)',
    institution: '[Your HSC School Name]',
    affiliation: '[Board, e.g. State Board / CBSE]',
    period: '[Year, e.g. 2021 — 2022]',
    cgpa: '[Percentage]%',
    details: '',
  },
  {
    degree: 'SSLC (10th Standard)',
    institution: '[Your SSLC School Name]',
    affiliation: '[Board, e.g. State Board / CBSE]',
    period: '[Year, e.g. 2019 — 2020]',
    cgpa: '[Percentage]%',
    details: '',
  },
]

export type Certification = {
  name: string
  issuer: string
  date?: string
  credentialUrl?: string
  placeholder?: boolean
}

export const certifications: Certification[] = [
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic Academy',
    date: 'Jul 2026',
    credentialUrl: 'https://verify.skilljar.com/c/dv9jewo6qw7c',
  },
  {
    name: '100 Days of Code — Python Bootcamp',
    issuer: 'Udemy (Dr. Angela Yu)',
  },
  {
    name: 'Machine Learning using Python',
    issuer: 'Udemy',
    date: 'Aug 2025',
    credentialUrl: 'http://udemy.com/certificate/UC-4f19e0a5-1ddb-4006-910c-d08e754fa5b2/',
  },
  {
    name: 'Complete SQL Course 2026: SQL Bootcamp + 50 Practice Qs',
    issuer: 'Udemy (Yogesh Dhiman)',
    date: '10 Jul 2025',
    credentialUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-270e29a6-a99b-4ff8-9a76-18524c50d3ea.jpg?v=1759853367000',
  },
  {
    name: 'Deep Learning Python Project: CNN based Image Classification',
    issuer: 'Udemy (Dr. Raj Gaurav Mishra)',
    date: '26 Mar 2025',
    credentialUrl: 'https://www.udemy.com/certificate/UC-2d917e67-be7f-424a-8ed6-3015056648fc/',
  },
]