export const personalInfo = {
  name: 'Niraj V. Patel',
  role: 'Full Stack Developer',
  tagline: 'Java Full Stack Developer · AI Enthusiast',
  location: 'Mumbai, Maharashtra, India',
  email: 'pniraj310@gmail.com',
  github: 'https://github.com/pniraj310',
  linkedin: 'https://www.linkedin.com/in/nirajvpatel310',
  bio: [
    "I'm a final-year Computer Engineering student from Maharashtra, building real-world full stack applications with Java at the core.",
    "I gravitate toward backend architecture, database design, and AI integrations. Whether it's a Spring Boot REST API, a CNN-based detection model, or a clean React interface — I approach every layer with obsession for correctness.",
    "I'm not a quick learner — I'm a consistent learner. Depth beats speed. Every concept I pick up, I understand fully before moving on."
  ],
  goal: 'Targeting Java Full Stack Developer roles at product companies and modern startups.',
  stats: [
    { num: '6+', label: 'Projects Shipped' },
    { num: '2', label: 'Internship' },
    { num: '3+', label: 'Tech Domains' },
    { num: '4yr', label: 'Engineering' }
  ]
}

export const skills = [
  {
    category: 'Backend',
    icon: '⚙️',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'JDBC', 'Python', 'Flask']
  },
  {
    category: 'Frontend',
    icon: '🎨',
    tags: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS']
  },
  {
    category: 'Database',
    icon: '🗄️',
    tags: ['PostgreSQL', 'MySQL', 'SQL', 'Schema Design']
  },
  {
    category: 'AI/ML',
    icon: '🤖',
    tags: ['CNN', 'TensorFlow', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn']
  },
  {
    category: 'Security',
    icon: '🔐',
    tags: ['Wireshark', 'Ettercap', 'Burp Suite', 'Nmap', 'MITM Analysis']
  },
{
  category: 'Tools',
  icon: '🛠️',
  tags: [
    'Git',
    'GitHub',
    'VS Code',
    'IntelliJ IDEA',
    'Postman',
    'PostgreSQL',
    'pgAdmin',
    'MySQL Workbench',
    'Vercel',
    'Linux'
  ]
}
]

export const projects = [
  {
    id: 1,
    name: 'Learning Management System',
    type: 'Java · Enterprise',
    category: 'java',
    emoji: '📚',
    color: 'from-indigo-500/20 to-purple-500/10',
    desc: 'Full-featured LMS with role-based access for students, teachers, and admins. Handles course management, assessments, and progress tracking with a clean PostgreSQL schema.',
    features: ['Role-based access control', 'Course & assessment management', 'Progress tracking', 'PostgreSQL backend'],
    stack: ['Java', 'JDBC', 'PostgreSQL', 'Swing'],
    github: 'https://github.com/nirajpatel',
    demo: '#'
  },
  {
    id: 2,
    name: 'Library Management System',
    type: 'Java · Management',
    category: 'java',
    emoji: '📖',
    color: 'from-cyan-500/20 to-indigo-500/10',
    desc: 'End-to-end library system covering book cataloguing, member management, borrow/return workflows, and overdue tracking with a relational database backend.',
    features: ['Book catalogue & search', 'Member management', 'Borrow/return system', 'Overdue tracking'],
    stack: ['Java', 'SQL', 'JDBC'],
    github: 'https://github.com/nirajpatel',
    demo: '#'
  },
  {
    id: 3,
    name: 'Fake Logo Detector',
    type: 'Python · Computer Vision',
    category: 'ai',
    emoji: '🔍',
    color: 'from-emerald-500/20 to-cyan-500/10',
    desc: 'CNN-based image classification model that detects counterfeit brand logos. Trained on a custom dataset with data augmentation to handle real-world logo distortions.',
    features: ['CNN architecture', 'Custom dataset training', 'Data augmentation', 'Real-time inference'],
    stack: ['Python', 'CNN', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/nirajpatel',
    demo: '#'
  },
  {
    id: 4,
    name: 'Sustainable Agriculture AI',
    type: 'Python · AI for Good',
    category: 'ai',
    emoji: '🌾',
    color: 'from-amber-500/20 to-emerald-500/10',
    desc: 'ML model predicting crop yield using soil, weather, and historical data. Designed to assist small-scale farmers with actionable insights for sustainable farming.',
    features: ['Crop yield prediction', 'Multi-factor analysis', 'Farmer-friendly output', 'Scikit-learn pipeline'],
    stack: ['Python', 'ML', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/nirajpatel',
    demo: '#'
  },
  {
    id: 5,
    name: 'Deforestation Detection',
    type: 'Python · Remote Sensing',
    category: 'ai',
    emoji: '🌳',
    color: 'from-red-500/15 to-amber-500/10',
    desc: 'Satellite image analysis pipeline detecting deforested regions using image segmentation and change detection algorithms for environmental monitoring.',
    features: ['Satellite image analysis', 'Change detection', 'Image segmentation', 'Environmental monitoring'],
    stack: ['Python', 'OpenCV', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/nirajpatel',
    demo: '#'
  },
  {
    id: 6,
    name: 'PVC Product Showcase',
    type: 'Full Stack · Web',
    category: 'web',
    emoji: '🏭',
    color: 'from-purple-500/20 to-indigo-500/10',
    desc: 'Professional product catalogue website for a PVC manufacturing company. Features product filtering, enquiry forms, and a responsive layout optimized for mobile.',
    features: ['Product catalogue', 'Filtering & search', 'Enquiry form', 'Mobile responsive'],
    stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind'],
    github: 'https://github.com/nirajpatel',
    demo: '#'
  }
]

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'java', label: 'Java' },
  { id: 'ai', label: 'AI / ML' },
  { id: 'web', label: 'Web' }
]

export const experience = [
  {
    id: 1,
    role: 'Content Curation Intern',
    company: 'NextLeap Analytics',
    location: 'Mumbai, India',
    date: 'June 2025 — Present',
    type: 'Internship',
    logo: 'NL',
    desc: 'Worked on structured content curation pipelines for AI-based learning platforms. Collaborated on data quality workflows, curated technical content across multiple domains, and contributed to internal tooling for content validation.',
    tags: ['Content Strategy', 'AI Platforms', 'Data Curation', 'Research']
  },
  {
    id: 2,
    role: 'Founder & Content Creator',
    company: 'SochTech',
    location: 'Self-initiated',
    date: '2023 — Present',
    type: 'Independent',
    logo: 'ST',
    desc: 'Built and maintained SochTech — a tech-focused content brand covering programming, AI, and developer tools. Designed the brand, built the platform using Flask and Python, and grew a developer audience.',
    tags: ['Flask', 'Python', 'Full Stack', 'Content Creation']
  }
]

export const education = [
  {
    year: '2023 — 2027',
    degree: 'BE — Computer Engineering',
    institution: 'GVAIET Shelu · Mumbai University',
    detail: 'Core CS fundamentals, data structures, algorithms, DBMS, computer networks, and OS. Active in hackathons and technical fests.'
  },
  {
    year: '2021 — 2023',
    degree: 'HSC — Science',
    institution: 'Maharashtra State Board',
    detail: 'Physics, Chemistry, Mathematics and Biology.'
  }
]

export const achievements = [
  { icon: '🏆', title: 'Hackathon Participant', desc: 'Competed in college and state-level hackathons, building rapid prototypes under time pressure.' },
  { icon: '🔐', title: 'MITM Security Research', desc: 'Led college-level research on MITM attack simulation, prevention, and live demonstration.' },
  { icon: '🤝', title: 'NSS Leadership', desc: 'Active NSS volunteer contributing to community service and social impact initiatives.' },
  { icon: '⚽', title: 'Sports Secretary', desc: 'Managed inter-college sports events, coordinating teams and scheduling for competitions.' },
  { icon: '🌱', title: 'AI for Social Good', desc: 'Built AI-powered tools targeting real problems — sustainable agriculture and deforestation monitoring.' },
  { icon: '📝', title: 'Content Brand Founder', desc: 'Founded SochTech — a developer-focused brand with a self-built Flask platform.' }
]
