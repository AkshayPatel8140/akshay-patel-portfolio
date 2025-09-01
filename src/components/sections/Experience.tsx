'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  Building2,
  Code,
  Smartphone,
  Brain,
  Cloud,
  Database
} from 'lucide-react'

interface ExperienceItem {
  id: number
  title: string
  company: string
  location: string
  duration: string
  description: string
  technologies: string[]
  achievements: string[]
  type: 'work' | 'education' | 'certification'
  icon: React.ElementType
  link?: string
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'certification'>('work')

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Teaching Assistant",
      company: "San Francisco Bay University",
      location: "Fremont, California, United States",
      duration: "Feb 2024 – Jul 2024",
      description: "Mentored graduate students in advanced Generative AI topics, focusing on first-principles understanding of LLM architectures, embeddings, and agent-based systems. Facilitated hands-on learning through labs, projects, and tool-based experimentation.",
      technologies: [
        "Database Systems", "LangChain", "OpenAI API", "Transformers", "HuggingFace", "Advanced Web Development", "Prompt Engineering", "Python", "Flask", "LLM Agents"
      ],
      achievements: [
        "Guided 20+ students on building and deploying LangChain-based AI agents with custom memory modules",
        "Designed assignments covering embedding models, prompt engineering strategies, and transformer tuning",
        "Conducted live labs on multimodal pipelines, agent orchestration, and conversational AI systems",
        "Reviewed student projects and optimized LLM outputs through systematic evaluation and feedback loops",
        "Contributed to curriculum improvement by integrating real-world use cases and toolchain updates"
      ],
      type: "work",
      icon: Code,
      link: "https://www.sfbu.edu/"
    },
    {
      id: 2,
      title: "Software Developer",
      company: "e-infochips Private Limited",
      location: "Ahmedabad, Gujarat, India (Remote)",
      duration: "Nov 2022 - Aug 2023",
      description: "Engineered AI-powered dashboards, real-time mobile apps, and scalable microservices across cloud and IoT systems using a modern full-stack toolchain. Collaborated on data-driven UX and GenAI integrations for predictive, accessible, and high-uptime enterprise solutions.",
      technologies: ["TypeScript", "React Native", "PostgreSQL", "AWS Lambda", "Docker", "GraphQL", "Jest", "GitHub Actions", "LangChain", "OpenAI API", "Firebase"],
      achievements: [
        "Improved system performance by 40% by optimizing mobile dashboards and UI rendering logic",
        "Engineered real-time data pipelines and Lambda-based services to support IoT telemetry processing and predictive alerts",
        "Integrated REST and GraphQL APIs, reducing API response time by 25% and enhancing cross-device responsiveness",
        "Built reusable CLI scaffolds using Cookiecutter, reducing app setup time by 70%",
        "Led logging utilities and UI component standardization, cutting incident debugging time by 55%",
        "Resolved over 50% of critical production bugs within 24 hours, achieving 99.9% uptime",
        "Implemented CI/CD pipelines via GitHub Actions and Docker, accelerating deployment cycles by 35%",
        "Collaborated with product and design teams to deliver monitoring dashboards used across 3+ internal teams"
      ],
      type: "work",
      icon: Code,
      link: "https://www.einfochips.com/"
    },
    {
      id: 3,
      title: "Software Developer",
      company: "Moon Technolabs Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      duration: "Feb 2019 - Nov 2022",
      description: "Led the development of real-time cross-platform applications using React Native, WebSockets, and Firebase. Delivered performant, accessible, and scalable mobile frontend and backend integrated with secure backend APIs for global clients across logistics, finance, and travel sectors.",
      technologies: [
        "React Native", "Redux", "Firebase", "WebSockets", "AWS S3", "Node.js", "Django", "Google Maps API", "GraphQL", "Jest", "WebGL", "AWS Lambda", "Docker", "GitHub Actions", "PostgreSQL"
      ],
      achievements: [
        "Delivered 10+ production-ready apps with full-cycle deployments to App Store and Play Store",
        "Integrated REST and GraphQL APIs, reducing API response time by 25% and enhancing cross-device responsiveness",
        "Built OCR-based form auto-fill logic using AWS S3 and image parsing, cutting manual input time by 60%",
        "Built reusable CLI scaffolds using Cookiecutter, reducing app setup time by 70%",
        "Led logging utilities and UI component standardization, cutting incident debugging time by 55%",
        "Resolved over 50% of critical production bugs within 24 hours, achieving 99.9% uptime",
        "Implemented CI/CD pipelines via GitHub Actions and Docker, accelerating deployment cycles by 35%",
        "Collaborated with product and design teams to deliver monitoring dashboards used across 3+ internal teams",
        "Improved app performance by 30% using real-time messaging, lazy loading, and optimized state management",
        "Integrated WebGL/Godot-powered 3D UI components, boosting engagement in specialized use cases",
        "Led UI/UX optimization efforts to ensure pixel-perfect, accessible, and cross-device compatible layouts",
        "Mentored 4 junior developers and enforced standardized code practices through design/code reviews",
        "Applied performance strategies including bundle splitting and memoization, reducing load time by 35%",
        "Contributed to Agile sprints and delivered 3+ client-facing products with secure, responsive interfaces"
      ],
      type: "work",
      icon: Code,
      link: "https://www.moontechnolabs.com/"
    },
    {
      id: 4,
      title: "Python Developer Intern",
      company: "Virtual Heights Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      duration: "Jul 2018 - Feb 2019",
      description: "Developed a real-time IoT luggage tracking system using Django and Raspberry Pi, focusing on biometric security, dashboard visualization, and synchronized multi-platform data handling for physical asset protection.",
      technologies: [
        "Python", "Django", "Raspberry Pi", "MySQL", "REST APIs", "Bootstrap", "Flask"
      ],
      achievements: [
        "Engineered a fingerprint-secured IoT tracking system integrated with Raspberry Pi, boosting physical security by 70%",
        "Built a responsive Django admin dashboard for real-time location tracking, alerting, and device visibility",
        "Created secure RESTful APIs to synchronize data across mobile, web, and edge devices",
        "Implemented encrypted communication, live status updates, and fault-tolerant data sync logic",
        "Contributed to early-stage security design and session logging for audit compliance and device diagnostics"
      ],
      type: "work",
      icon: Code,
      link: "https://virtualheights.com/"
    },
    // {
    //   id: 2,
    //   title: 'Full Stack Developer',
    //   company: 'Freelance & Personal Projects',
    //   location: 'United States (Remote)',
    //   duration: '2020 - Present',
    //   description: 'Building innovative web and mobile applications using modern technologies. Specializing in AI/ML integration and scalable architecture. Serving clients across the United States and globally.',
    //   technologies: ['Next.js', 'React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
    //   achievements: [
    //     'Built 10+ full-stack applications from concept to deployment',
    //     'Integrated AI/ML models into production applications',
    //     'Achieved 95%+ client satisfaction rate',
    //     'Developed reusable component libraries'
    //   ],
    //   type: 'work',
    //   icon: Code
    // },
    // {
    //   id: 3,
    //   title: 'AI/ML Research Assistant',
    //   company: 'University Projects',
    //   location: 'Ahmedabad, India',
    //   duration: '2020 - 2021',
    //   description: 'Conducted research in computer vision, natural language processing, and machine learning applications.',
    //   technologies: ['Python', 'TensorFlow', 'OpenCV', 'NLP', 'Computer Vision'],
    //   achievements: [
    //     'Published research on plant disease detection using CNN',
    //     'Developed emotion recognition system with 92% accuracy',
    //     'Created real-time object detection applications',
    //     'Presented findings at university tech symposium'
    //   ],
    //   type: 'work',
    //   icon: Brain
    // },
    {
      id: 5,
      title: "Master of Science in Computer Science",
      company: "San Francisco Bay University",
      location: "Fremont, California, United States",
      duration: "Aug 2023 - May 2025",
      description: "Graduate-level education with a focus on AI, ML, prompt engineering, and systems-level computer science. Actively engaged in research, teaching, and academic projects involving generative AI, quantum computing, and distributed systems.",
      technologies: ["Machine Learning", "Prompt Engineering", "Quantum Computing", "Algorithms", "Advanced Database", "Advance Web Development", "Distributed Systems"],
      achievements: [
        "GPA: 3.91 / 4.0",
        "1st Prize - Prompt Engineering Contest (2024)",
        "TA for AdvancedDatabase, GenAI & LangChain labs",
        "Led multiple AI-powered research projects and hackathons"
      ],
      type: "education",
      icon: GraduationCap
    },
    {
      id: 6,
      title: 'Bachelor of Science in Information Technology',
      company: 'Gandhinagar Institute of Technology',
      location: 'Gujarat, India',
      duration: "May 2015 - Apr 2019",
      description: "Undergraduate degree in Information Technology with strong foundation in programming, databases, and system design. Participated in software development clubs, coding contests, and open-source projects.",
      technologies: ['Data Structures', 'Algorithms', 'Database Systems', 'Software Engineering', "Java", "Data Structures", "Big Data", "System Programming", "Computer Networks", "C", "C++"],
      achievements: [
        'Completed 50+ programming projects',
        'Graduated with First Class distinction',
        "Organized inter-college technical fests and workshops",
        'Led technical team for college events',
        "Represented institute in regional coding events",
        'Participated in national coding competitions'
      ],
      type: 'education',
      icon: GraduationCap
    },
    {
      id: 7,
      title: "Introduction to Software Development",
      company: "Amazon",
      location: "Online",
      duration: "Issued Jul 2025",
      description: "Completed foundational training in software engineering principles, programming concepts, and software lifecycle as part of Amazon's technical certification track.",
      technologies: ["Software Development", "Programming Basics", "SDLC"],
      achievements: [
        "Credential ID: BR8B8PFT7UTS",
        "Covered programming logic and version control",
        "Earned Amazon Software Certificate"
      ],
      type: "certification",
      icon: Cloud,
      link: 'https://www.coursera.org/account/accomplishments/verify/BR8B8PFT7UTS'
    },
    {
      id: 8,
      title: "Oracle Cloud Infrastructure 2025 Certificate",
      company: "Oracle",
      location: "Online",
      duration: "Issued Jul 2025",
      description: "Recognized for proficiency in deploying, managing, and securing cloud infrastructure using Oracle's suite of cloud services.",
      technologies: ["OCI", "Cloud Security", "DevOps"],
      achievements: [
        "Focused on high-availability infrastructure design",
        "Validated cloud deployment and cost optimization skills"
      ],
      type: "certification",
      icon: Cloud,
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8276D4E588047D28F9902657A619282210BDF60FAA68D964BF80EA30168658C9'
    },
    {
      id: 9,
      title: "Programming in Python",
      company: "Meta",
      location: "Online",
      duration: "Issued Jul 2025",
      description: "Certified in Python programming, including data types, control flow, functions, and unit testing using Meta's developer curriculum.",
      technologies: ["Python", "Unit Testing"],
      achievements: [
        "Credential ID: A8J6CGI3NBXE",
        "Built hands-on Python mini-projects",
        "Demonstrated testing and debugging proficiency"
      ],
      type: "certification",
      icon: Brain,
      link: "https://www.coursera.org/account/accomplishments/verify/A8J6CGI3NBXE"
    },
    {
      id: 10,
      title: "Version Control",
      company: "Meta",
      location: "Online",
      duration: "Issued Jul 2025",
      description: "Completed training in Git-based version control including branching, merging, and collaborative workflows using Meta developer standards.",
      technologies: ["Git", "Version Control", "Branching"],
      achievements: [
        "Demonstrated Git CLI proficiency",
        "Applied version control to real-world project simulations"
      ],
      type: "certification",
      icon: Code,
      link: "https://www.coursera.org/account/accomplishments/verify/8L8EZZWETTM9"
    },
    {
      id: 11,
      title: "Back-End Development",
      company: "Meta",
      location: "Online",
      duration: "Issued Jun 2025",
      description: "Certified in backend development including REST APIs, databases, and server logic using Python and Node.js with Meta curriculum.",
      technologies: ["Backend", "APIs", "Databases"],
      achievements: [
        "Credential ID: 84ITAKLY3EFO",
        "Built full-stack CRUD apps with database integration",
        "Covered authentication and error handling best practices"
      ],
      type: "certification",
      icon: Database,
      link: "https://coursera.org/share/381b0de296eceae7999887e610603e76"
    },
    {
      id: 12,
      title: "Community Health Index - Data Analysis Project",
      company: "Omdena",
      location: "San Jose, CA",
      duration: "Issued Nov 2024",
      description: "Contributed to Omdena's local chapter challenge by analyzing health-related datasets to improve public well-being in the San Jose area.",
      technologies: ["Data Analysis", "Visualization", "Collaboration"],
      achievements: [
        "Worked with real-world datasets from public health departments",
        "Generated actionable insights for community decision-making"
      ],
      type: "certification",
      icon: Brain,
      link: "https://confirm.omdena.com/LCfz0bm"
    },
    {
      id: 13,
      title: "IEEE Xtreme Programming Competition 18.0",
      company: "IEEE",
      location: "Online",
      duration: "Issued Oct 2024",
      description: "Participated in IEEE's global coding marathon, solving algorithmic and systems-level challenges in a team-based environment.",
      technologies: ["Competitive Programming", "Algorithms", "Data Structures"],
      achievements: [
        "Solved 10+ algorithmic problems within 24 hours",
        "Collaborated in real-time with global peers"
      ],
      type: "certification",
      icon: Code,
      link: "https://media.licdn.com/dms/image/v2/D562DAQFKMEXK7d5Xmw/profile-treasury-document-cover-images_480/B56ZWHfyndGoAw-/0/1741735014997?e=1757170800&v=beta&t=EvnTcGi8vDyczEqpDob34rGGZuhQe8uf7G76eei1_QQ"
    },
    {
      id: 14,
      title: "Neo4j Certified Professional",
      company: "Neo4j",
      location: "Online",
      duration: "Issued Oct 2024",
      description: "Certified in using Neo4j's graph database for data modeling, querying with Cypher, and building intelligent graph-powered apps.",
      technologies: ["Graph Database", "Cypher", "Neo4j"],
      achievements: [
        "Credential ID: 0e529edd-e890-4c01-b531-f8c3f318856c",
        "Created connected data models and optimized queries"
      ],
      type: "certification",
      icon: Database,
      link: "https://graphacademy.neo4j.com/c/0e529edd-e890-4c01-b531-f8c3f318856c/"
    },
    {
      id: 15,
      title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
      company: "Oracle",
      location: "Online",
      duration: "Issued Jul 2024",
      description: "Certified in building and deploying Generative AI solutions using Oracle's cloud stack. Covered LLMs, RAG-based chatbots, and AI infrastructure setup.",
      technologies: ["Generative AI", "LLMs", "RAG", "OCI"],
      achievements: [
        "Built RAG chatbot workflows",
        "Trained on best practices for AI on cloud"
      ],
      type: "certification",
      icon: Brain,
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E431E2832AF4CF4F5AF4CB84EF510BFBC9D794AEABD4B78D69E3953C4368A30A"
    },
    {
      id: 16,
      title: "Introduction to Data Science",
      company: "Cisco",
      location: "Online",
      duration: "Issued Apr 2024",
      description: "Learned core data science concepts including exploratory data analysis, visualization, and the basics of predictive modeling.",
      technologies: ["Data Science", "Analytics", "Visualization"],
      achievements: [
        "Completed practical case studies and quizzes",
        "Built foundational skills in Python-based analytics"
      ],
      type: "certification",
      icon: Brain,
      link: "https://www.credly.com/badges/38c86bc9-a42c-4f8e-bd56-9c61b4b571a2/linked_in_profile"
    },
    {
      id: 17,
      title: "Best Efficient Model",
      company: "Entrepreneurship Cell",
      location: "India",
      duration: "Issued Oct 2016",
      description: "Awarded for developing the most efficient working model during a national-level entrepreneurship and innovation exhibition.",
      technologies: ["Innovation", "Prototyping", "Presentation"],
      achievements: [
        "Recognized by Entrepreneurship Cell for innovation",
        "Built an end-to-end prototype with strong pitch delivery"
      ],
      type: "certification",
      icon: Award,
      link: "https://media.licdn.com/dms/image/v2/D562DAQFoiG8pblnx1g/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1707279686648?e=1757170800&v=beta&t=gQELaSNf3ZqcRtQAx1sC83bQmO69ojwD4u_7dVSkeEQ"
    }
  ]

  const filteredExperiences = experiences.filter(exp => exp.type === activeTab)

  const getTabIcon = (type: string) => {
    switch (type) {
      case 'work': return Briefcase
      case 'education': return GraduationCap
      case 'certification': return Award
      default: return Briefcase
    }
  }

  const getTabColor = (type: string) => {
    switch (type) {
      case 'work': return 'from-blue-500 to-blue-600'
      case 'education': return 'from-green-500 to-green-600'
      case 'certification': return 'from-purple-500 to-purple-600'
      default: return 'from-blue-500 to-blue-600'
    }
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <motion.span
              className="gradient-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Experience
            </motion.span>
            {' '}& Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My professional journey in software development, from academic foundations to real-world applications.
            Each experience has shaped my expertise in building innovative solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { key: 'work', label: 'Work Experience', count: experiences.filter(e => e.type === 'work').length },
            { key: 'education', label: 'Education', count: experiences.filter(e => e.type === 'education').length },
            { key: 'certification', label: 'Certifications', count: experiences.filter(e => e.type === 'certification').length }
          ].map((tab, index) => {
            const Icon = getTabIcon(tab.key)
            const isActive = activeTab === tab.key
            return (
              <motion.button
                key={tab.key}
                initial={{ opacity: 0, scale: 0.7, y: 20, rotateY: -15 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0, rotateY: 0 } : { opacity: 0, scale: 0.7, y: 20, rotateY: -15 }}
                transition={{
                  duration: 0.8,
                  delay: 1.0 + index * 0.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                  rotateY: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer ${isActive
                  ? `bg-gradient-to-r ${getTabColor(tab.key)} text-white shadow-lg shadow-blue-500/25`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md'
                  }`}
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
                {tab.label}
                <motion.span
                  className="ml-2 px-2 py-1 bg-white/20 dark:bg-black/20 rounded-full text-xs"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2, ease: "easeOut" }}
                >
                  {tab.count}
                </motion.span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Enhanced Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-8">
            {filteredExperiences.map((experience, index) => {
              const Icon = experience.icon
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.8 + index * 0.2,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80
                  }}
                  whileHover={{
                    scale: 1.02,
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="relative"
                >
                  {/* Enhanced Timeline Line */}
                  <motion.div
                    className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1, delay: 2.0 + index * 0.2, ease: "easeOut" }}
                  />

                  {/* Enhanced Timeline Dot */}
                  <motion.div
                    className="absolute left-6 top-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 + index * 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.3, rotate: 180 }}
                  />

                  {/* Enhanced Content Card */}
                  <motion.div
                    className="ml-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden group cursor-pointer"
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Enhanced Header */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <motion.h3
                              className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.4 + index * 0.2, ease: "easeOut" }}
                            >
                              {experience.title}
                            </motion.h3>
                            <motion.div
                              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 2.6 + index * 0.2, ease: "easeOut" }}
                            >
                              <Building2 className="w-4 h-4" />
                              <span className="font-medium">{experience.company}</span>
                              {experience.link && (
                                <motion.a
                                  href={experience.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                                  whileHover={{ scale: 1.2, rotate: 5 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </motion.a>
                              )}
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Meta Information */}
                      <motion.div
                        className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.8 + index * 0.2, ease: "easeOut" }}
                      >
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.05, x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Calendar className="w-4 h-4" />
                          {experience.duration}
                        </motion.div>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.05, x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <MapPin className="w-4 h-4" />
                          {experience.location}
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Enhanced Description */}
                    <div className="p-6">
                      <motion.p
                        className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.0 + index * 0.2, ease: "easeOut" }}
                      >
                        {experience.description}
                      </motion.p>

                      {/* Enhanced Technologies */}
                      <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.2 + index * 0.2, ease: "easeOut" }}
                      >
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                          Technologies & Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 3.4 + index * 0.2 + techIndex * 0.05,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 120
                              }}
                              whileHover={{
                                scale: 1.1,
                                y: -2,
                                transition: { duration: 0.2 }
                              }}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-colors duration-200"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Enhanced Key Achievements */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 3.6 + index * 0.2, ease: "easeOut" }}
                      >
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.5,
                                delay: 3.8 + index * 0.2 + achievementIndex * 0.1,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 100
                              }}
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 }
                              }}
                            >
                              <motion.div
                                className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"
                                whileHover={{ scale: 1.5, rotate: 180 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 4.0, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 4.2, ease: "easeOut" }}
            className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-400"
          >
            Ready to bring your ideas to life?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 4.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Let&apos;s Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
