// Portfolio Data - Centralized management for all static content

// Navigation Configuration
export const navigationConfig = {
  logo: {
    initials: 'AP',
    fullName: 'Akshay Patel',
    title: 'Full-Stack Developer & AI/ML Expert'
  },
  links: [
    { name: 'Home', href: '#home', type: 'hash' },
    { name: 'About', href: '#about', type: 'hash' },
    { name: 'Skills', href: '#skills', type: 'hash' },
    { name: 'Projects', href: '#projects', type: 'hash' },
    { name: 'Blog', href: '/blog', type: 'page' },
    { name: 'YouTube', href: '/youtube', type: 'page' },
    { name: 'Experience', href: '#experience', type: 'hash' },
    { name: 'Contact', href: '#contact', type: 'hash' }
  ]
}

// Personal Information
export const personalInfo = {
  name: 'Akshay Patel',
  title: 'Full-Stack Developer & AI/ML Expert',
  location: 'United States',
  email: 'akshaygpatel1997@gmail.com',
  phone: '+1 (669) 231-9631',
  about: 'Full-stack software developer based in the United States, passionate about creating innovative solutions and building amazing user experiences.',
  summary: 'Professional software developer with 5+ years of experience specializing in AI/ML, React, Next.js, and full-stack development. Based in the United States, delivering innovative solutions for clients worldwide.'
}

// Social Media Links
export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/AkshayPatel8140',
    icon: 'Github',
    color: 'hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900'
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/akshaypatel8140',
    icon: 'Linkedin',
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/akshaypatel8140',
    icon: 'Twitter',
    color: 'hover:bg-blue-400'
  },
  {
    name: 'Email',
    href: 'mailto:akshaygpatel1997@gmail.com',
    icon: 'Mail',
    color: 'hover:bg-red-500'
  }
]

// Skills Data
export const skillsData = {
  categories: [
    {
      name: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
        { name: 'Next.js', level: 90, color: 'from-black to-gray-700' },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-800' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-orange-500' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-blue-500' }
      ]
    },
    {
      name: 'Backend Development',
      icon: 'Server',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-green-700' },
        { name: 'Python', level: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'Express.js', level: 82, color: 'from-gray-600 to-gray-800' },
        { name: 'FastAPI', level: 80, color: 'from-green-600 to-green-800' },
        { name: 'PostgreSQL', level: 78, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 75, color: 'from-green-500 to-green-700' }
      ]
    },
    {
      name: 'AI & Machine Learning',
      icon: 'Brain',
      skills: [
        { name: 'TensorFlow', level: 85, color: 'from-orange-500 to-red-500' },
        { name: 'PyTorch', level: 82, color: 'from-red-500 to-red-700' },
        { name: 'Scikit-learn', level: 88, color: 'from-orange-600 to-orange-800' },
        { name: 'OpenAI API', level: 90, color: 'from-purple-500 to-purple-700' },
        { name: 'Computer Vision', level: 85, color: 'from-blue-500 to-blue-700' },
        { name: 'NLP', level: 80, color: 'from-green-500 to-green-700' }
      ]
    },
    {
      name: 'Mobile Development',
      icon: 'Smartphone',
      skills: [
        { name: 'React Native', level: 80, color: 'from-blue-500 to-cyan-500' },
        { name: 'Flutter', level: 75, color: 'from-blue-500 to-blue-700' },
        { name: 'iOS Development', level: 70, color: 'from-gray-600 to-gray-800' },
        { name: 'Android Development', level: 72, color: 'from-green-500 to-green-700' }
      ]
    }
  ]
}

// Categories for filtering
export const categories = {
  blog: ['All', 'AI/ML', 'Frontend', 'Web Development', 'Data Science', 'Technology'],
  youtube: ['All', 'AI/ML', 'Frontend', 'Web Development', 'Data Science', 'Programming', 'Technology']
}

// External Links
export const externalLinks = {
  medium: 'https://medium.com/@apatel13066',
  youtube: 'https://www.youtube.com/@yourchannel'
}

// SEO Configuration
export const seoConfig = {
  title: 'Akshay Patel - Full-Stack Developer & AI/ML Expert Portfolio',
  description: 'Professional software developer with 5+ years of experience specializing in AI/ML, React, Next.js, and full-stack development. Based in the United States, delivering innovative solutions for clients worldwide.',
  keywords: ['Akshay Patel', 'Full-Stack Developer', 'AI/ML Expert', 'React Developer', 'Next.js Developer', 'Machine Learning Engineer', 'Software Developer', 'Portfolio'],
  author: 'Akshay Patel',
  url: 'https://akshaypatel.dev'
}
