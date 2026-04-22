export const personalInfo = {
  name: 'Ganesh Potla',
  title: 'Full Stack Developer',
  tagline: 'Building digital experiences that matter',
  email: 'ganeshpotla@email.com',
  github: 'https://github.com/ganeshpotla',
  linkedin: 'https://linkedin.com/in/ganeshpotla',
  location: 'Hyderabad, India',
  resumeUrl: '/resume.pdf',
  bio: `I'm a passionate Full Stack Developer based in Hyderabad with a strong foundation in modern web technologies. I love crafting clean, performant, and user-friendly applications that solve real-world problems.`,
  goal: `My goal is to leverage cutting-edge technologies to build scalable solutions while continuously growing as an engineer and contributing to impactful projects.`,
}

export const skills = {
  Frontend: [
    { name: 'React.js', level: 90, icon: '' },
    { name: 'JavaScript', level: 88, icon: '' },
    { name: 'HTML5', level: 95, icon: '' },
    { name: 'CSS3', level: 90, icon: '' },
    { name: 'Tailwind CSS', level: 85, icon: '' },
  ],
  Backend: [
    { name: 'Node.js', level: 82, icon: '' },
    { name: 'Express.js', level: 80, icon: '' },
  ],
  Database: [
    { name: 'MongoDB', level: 78, icon: '' },
    {name:'SQL',level:85,icon:''}
  ],
  Other: [
    { name: 'Git', level: 88, icon: '' },
    { name: 'REST APIs', level: 85, icon: '' },
  ],
}

export const projects = [
  {
    id: 1,
    title: 'Food Delivery App',
    description: 'A full-stack food delivery platform with real-time order tracking, payment integration, and restaurant management dashboard.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    github: 'https://github.com/ganeshpotla/food-delivery',
    demo: 'https://food-delivery-demo.vercel.app',
    color: 'from-orange-500 to-red-500',
    image:''
  },
  {
    id: 2,
    title: 'Hostel Management System',
    description: 'Comprehensive hostel management with room allocation, fee tracking, complaint management, and student portal.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'REST API'],
    github: 'https://github.com/ganeshpotla/hostel-mgmt',
    demo: 'https://hostel-mgmt.vercel.app',
    color: 'from-blue-500 to-cyan-500',
    image:"",
  },
  
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern animated portfolio website built with React, Tailwind CSS, and Framer Motion featuring dark mode and responsive design.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    github: 'https://github.com/ganeshpotla/portfolio',
    demo: 'https://ganeshpotla.vercel.app',
    color: 'from-teal-500 to-green-500',
    image:'',
  },
]

export const certificates = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    provider: 'Nxtwave',
    date: '2024',
    icon: '🏆',
    color: 'from-yellow-400 to-orange-400',
    url: '#',
  },
  {
    id: 2,
    title: 'React - The Complete Guide',
    provider: 'Nxtwave',
    date: '2024',
    icon: '⚛️',
    color: 'from-blue-400 to-cyan-400',
    url: '#',
  },
  {
    id: 3,
    title: 'Node.js Developer Certification',
    provider: 'Nxtwave',
    date: '2023',
    icon: '🟢',
    color: 'from-green-400 to-teal-400',
    url: '#',
  },
  {
    id: 4,
    title: 'MongoDB for JavaScript Developers',
    provider: 'MongoDB University',
    date: '2023',
    icon: '🍃',
    color: 'from-emerald-400 to-green-400',
    url: '#',
  },
  
  

]
