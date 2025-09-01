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

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: 'AI Academic Advisor',
    description: 'The AI Academic Advisor is an AI-powered recommendation system that provides personalized academic and career guidance to students by analyzing their academic history, preferences, and engagement patterns. It features a hybrid recommendation engine that integrates content-based, collaborative, and knowledge-based filtering to generate adaptive course and career suggestions. Backend services, built with Flask, manage session handling, recommendation logic, and sentiment analysis using transformer-based NLP models, while LSTM models predict student engagement levels. Data is stored in PostgreSQL and MongoDB, optimized for performance through indexing and sharding. A responsive React frontend delivers an intuitive user experience, complete with a real-time chatbot that assists users in navigating course plans and academic decisions. The system achieved significant improvements in response time and recommendation accuracy and is designed for scalability and seamless integration with broader educational platforms.',
    shortDescription: 'An AI-powered recommendation system that provides personalized academic and career guidance to students.',
    image: '/images/projects/AAA2.jpg',
    category: 'AI/ML',
    technologies: ["Python", "Flask", "React", "TypeScript", "PostgreSQL", "MongoDB", "Transformers", "LSTM", "NLP"],
    features: [
      "Personalized academic and career recommendations",
      "Sentiment analysis using NLP",
      "Adaptive course and career suggestions",
      "Real-time chatbot for user assistance",
      "Hybrid recommendation engine (collaborative, knowledge-based)"
    ],
    liveUrl: "https://youtu.be/EvGvcQq2ZGo?si=ugF0ImMPN5OHt7Oa",
    githubUrl: 'https://github.com/AkshayPatel8140/AI_Academic_Advisor_System',
    androidUrl: '',
    iosUrl: '',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 2,
    title: 'SEEKRZ',
    description: "The Seekers App is a versatile platform for buying, selling, and trading items such as clothing, accessories, and footwear. My role began with establishing the project's foundation and initial functionality. I led the deployment on both the App Store and Google Play Store, ensuring wide accessibility. To enhance performance, I implemented memory caching and asynchronous data loading, which increased user engagement by 20%. Additionally, I introduced a photo capture feature with local storage and S3 bucket integration, improving app speed by 30%. I also configured Google Analytics to track user behavior and performance metrics, resulting in a 15% increase in the average order rate. The app's standout feature is its in-app chat, which facilitates communication and negotiations between users, providing a seamless and interactive user experience.",
    shortDescription: 'A mobile app for buying, selling, and trading expensive items with an integrated in-app chat for negotiations.',
    image: '/images/projects/reactNative.jpg',
    category: 'Mobile',
    technologies: ["React Native", "Redux", "AWS S3", "Google Analytics", "Firebase", "Stripe API"],
    features: [
      "Marketplace for buying, selling, and trading items",
      "In-app chat for user communication and negotiation",
      "Photo capture and upload for item listings",
      "Cloud storage integration (S3 bucket)",
      "Asynchronous data loading for improved performance",
      "User behavior and performance tracking"
    ],
    liveUrl: '',
    githubUrl: '',
    iosUrl: 'https://apps.apple.com/us/app/seekrz-buy-sell-streetwear/id1496295519',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.swappitinc.swappit&pcampaignid=web_share',
    ipadUrl: 'https://apps.apple.com/us/app/seekrz-stores/id1625261820',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 3,
    title: 'SCALE-EVV',
    description: 'The Scale EVV mobile app streamlines the caregiving process by enabling caregivers to submit paperless timesheets, communicate with their agency, and access client care plans and information directly from the app. Key features include electronic timesheet submission, allowing both clients and caregivers to sign timesheets digitally, and instant timesheet delivery to the agency portal. Caregivers can view care plans and schedules, and contact their agency via call or message within the app. The cloud-based Scale EVV Software empowers agencies to operate efficiently from anywhere, helping them to scale their operations and serve more clients effectively, ultimately ensuring the highest quality of care.',
    shortDescription: "A mobile app for caregivers to submit paperless timesheets and access client care plans.",
    image: '/images/projects/scaleEvv.jpg',
    category: 'Mobile',
    technologies: ["React Native", "Redux", "Cloud", "Firebase", "SQLite"],
    features: [
      "Paperless timesheet submission",
      "Digital signatures from clients and caregivers",
      "In-app communication with agency (call and message)",
      "View and access client care plans and schedules",
      "Instant timesheet delivery to the agency portal",
      "Centralized client information access"
    ],
    liveUrl: '',
    githubUrl: '',
    androidUrl: 'https://play.google.com/store/apps/details?id=indagale.scaleevv.app&pcampaignid=web_share',
    iosUrl: 'https://apps.apple.com/in/app/scale-evv/id1530152802',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 4,
    title: 'SAURASHTRA NI RASDHARA',
    description: 'The application I\'ve been involved with is similar to YouTube but focuses on showcasing the talent of singers from Gujarat, India. This platform exclusively highlights the musical prowess and performances of local singers within the Gujarat region, offering a diverse array of musical content including performances, compositions, and covers from famous local artists. It aims to provide a stage to promote and celebrate the rich musical heritage and talent in this area. Users can interact with videos by following creators and expressing appreciation through likes. Beyond video content, the app also serves literature enthusiasts by offering a wide array of free books, which users can read within the application. Additionally, it provides information about upcoming events, including locations and directions, to help users seamlessly plan their attendance. My involvement in this project includes creating an interactive space where users can engage with video content, follow creators, appreciate content, and access a diverse and accessible library of literature.',
    shortDescription: 'A mobile app for showcasing the talent of singers from Gujarat, India.',
    image: '/images/projects/reactNative.jpg',
    category: 'Mobile',
    technologies: ['React Native', 'Redux', "Video Streaming", 'Cloud', 'Firebase'],
    features: [
      "Video streaming for musical performances",
      "User interaction with content (likes, follows)",
      "Profiles for artists and creators",
      "In-app e-reader for a library of free books",
      "Events calendar with location details and directions"
    ],
    liveUrl: '',
    githubUrl: '',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.rasdhara&pcampaignid=web_share',
    iosUrl: '',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 5,
    title: 'HEIRLIST',
    description: 'The application I\'ve been working on serves as a platform for gathering information about deceased individuals. It allows family members to register and provide specific details to receive a detailed report. My involvement began with establishing the project\'s structure and laying the groundwork for its functionality. I focused on crafting a sophisticated user interface to ensure an optimal user experience. Additionally, I implemented the In-App Purchase feature, offering users access to additional services or features within the app. I engineered a module for seamless online and offline mode switching, boosting speed by 25%, and utilized secure deep linking with Firebase to manage user access. Furthermore, I developed custom animations and UI components, improving app smoothness by 60% and reducing app size by 10%.',
    shortDescription: 'A platform for gathering information about deceased individuals.',
    image: '/images/projects/heirList.jpg',
    category: 'Web Development',
    technologies: ['React Native', 'ios', 'Firebase', 'In-App Purchases', 'SQLite', 'Deep Linking', 'Animation'],
    features: [
      "Information gathering for deceased individuals",
      "Deep linking and Automated report generation",
      "Online and offline mode support",
      "In-app purchases for premium features",
      "Custom UI components and animations"
    ],
    liveUrl: '',
    githubUrl: '',
    androidUrl: 'https://play.google.com/store/apps/details?id=com.chiefinnovation.heirlist&pcampaignid=web_share',
    iosUrl: 'https://apps.apple.com/in/app/heirlist/id1517622593',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 6,
    title: 'CHALLENGER',
    description: "The application focuses on helping sports enthusiasts find match opponents and issue challenges seamlessly. Users can locate opponents, book a pitch or venue directly within the platform, and get confirmations through an admin for a smooth transition to the match. In my solo role, I enhanced the user experience by implementing a countdown timer for matches, creating anticipation and excitement. I developed and integrated the chat module using API functionalities, enabling efficient communication for discussing match details, strategies, and logistics. To broaden accessibility, I added support for multiple languages, including English and Arabic, tailoring the app’s interface to the user's language preference. This enhancement ensures a personalized experience for all users. Additionally, I designed a live countdown feature for real-time timer tracking, improving player experience and gameplay efficiency. Streamlined player communication boosted engagement by 30%, minimizing the need for external apps.",
    shortDescription: "A mobile app for sports players to find opponents, book venues, and communicate for matches.",
    image: '/images/projects/ReactNative.jpg',
    category: 'Mobile',
    technologies: ['React Native', 'Localization', 'Firebase'],
    features: [
      "Opponent discovery and challenges",
      "In-app venue booking",
      "Admin-verified match confirmation",
      "Live match countdown timer",
      "Multi-language support (English & Arabic)"
    ],
    liveUrl: '',
    githubUrl: '',
    androidUrl: '',
    iosUrl: '',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 7,
    title: 'JAIMACA - TOURS AND TRAVELS',
    description: "This application is tailored to facilitate taxi services throughout Jamaica, offering both locals and tourists a convenient way to book, track, and utilize taxis across different locations. Key features include GPS-enabled location services, fare estimates, secure payment options, multi-language support, and a user-friendly interface. The app aims to improve transportation accessibility and reliability for individuals navigating Jamaica's cities and towns, enhancing overall travel convenience.",
    shortDescription: "A mobile app for taxi services throughout Jamaica.",
    image: '/images/projects/ReactNative.jpg',
    category: 'Mobile',
    technologies: ['React Native', 'iOS', 'GPS', 'Map API', 'Payment Gateway', 'Localization', 'Firebase'],
    features: [
      "Real-time taxi booking",
      "Live GPS ride tracking",
      "Upfront fare estimation",
      "Secure in-app payments",
      "Multi-language support",
      "Driver and vehicle details"
    ],
    liveUrl: '',
    githubUrl: '',
    androidUrl: '',
    iosUrl: '',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 8,
    title: 'SQL',
    description: "This app focuses on efficient management of database files, specifically .db or .sql formats. Users can import these files for seamless data editing and make modifications, exporting changes in various formats for compatibility and accessibility. A key feature allows creation of localized asynchronous storage databases within the app, structuring data with proper relationships for effective organization. Overall, it serves as a versatile tool for handling database files, enabling import, edit, and export across formats, alongside structured local storage databases to streamline data management. Additionally, I developed multi-format data export and report generation capabilities using DB files for advanced data analysis.",
    shortDescription: "A mobile app for efficient management of database files.",
    image: '/images/projects/ReactNative.jpg',
    category: 'Development Tools',
    technologies: ['React Native', 'SQL', 'SQLite'],
    features: [
      "Database file management (.db or .sql files)",
      "Data editing and modification",
      "Multi-format data export & User-friendly interface",
      "Create local asynchronous databases",
      "Generate reports from database files"
    ],
    // androidUrl: 'https://play.google.com/store/apps/details?id=com.moontechnolabs.SqliteEditor&pcampaignid=web_share',
    androidUrl: '',
    iosUrl: '',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 9,
    title: 'i-DETECT',
    description: "I developed a real-time luggage tracking system using Raspberry Pi and Django, significantly enhancing user experience and travel security. By implementing a fingerprint authentication system with Raspberry Pi, I boosted bag security by 70%. Additionally, I architected and built a user-friendly Django-based website that supports real-time tracking across various platforms, emphasizing accessibility and usability for users.",
    shortDescription: "A real-time luggage tracking system using Raspberry Pi and Django.",
    image: '/images/projects/i_Detect.jpg',
    category: 'Backend',
    technologies: ['Python', 'Raspberry Pi', 'Django', 'Fingerprint Sensor', 'Real-Time Tracking'],
    features: [
      "Real-time luggage tracking",
      "Fingerprint authentication for security",
      "Multi-platform support (web, mobile)",
      "User-friendly interface",
      "Advanced data analysis"
    ],
    liveUrl: '',
    githubUrl: '',
    androidUrl: '',
    iosUrl: '',
    ipadUrl: '',
    windowsUrl: '',
    macUrl: '',
    status: 'Completed' as const
  },
  {
    id: 10,
    title: 'AI Support Agent',
    description: 'An intelligent AI-powered customer support system that handles complex queries and provides personalized assistance. Built with advanced natural language processing and machine learning algorithms.',
    shortDescription: 'AI-powered customer support system with NLP capabilities',
    image: '/images/projects/chatify.png',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'React', 'FastAPI', 'PostgreSQL'],
    features: [
      'Natural language processing',
      'Multi-language support',
      'Real-time chat interface',
      'Sentiment analysis',
      'Automated ticket routing',
      'Performance analytics dashboard'
    ],
    // liveUrl: 'https://ai-support-demo.com',
    // githubUrl: 'https://github.com/AkshayPatel8140/ai-support-agent',
    // androidUrl: 'https://play.google.com/store/apps/details?id=com.aisupport',
    // iosUrl: 'https://apps.apple.com/app/ai-support-agent/id123456789',
    // ipadUrl: 'https://apps.apple.com/app/ai-support-agent-ipad/id987654321',
    // windowsUrl: 'https://microsoft.com/store/apps/9NBLGGH5R8R8',
    // macUrl: 'https://apps.apple.com/app/ai-support-agent-mac/id456789123',
    status: 'Completed' as const
  },
  {
    id: 11,
    title: 'Modern Portfolio Website',
    description: 'A responsive, animated portfolio website built with Next.js and Framer Motion. Features smooth animations, dark mode support, and optimized performance for showcasing professional work.',
    shortDescription: 'Responsive portfolio with modern animations',
    image: '/images/projects/blog.png',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'React'],
    features: [
      'Responsive design',
      'Smooth animations',
      'Dark mode support',
      'Performance optimized',
      'SEO friendly',
      'Accessibility features'
    ],
    // liveUrl: 'https://akshaypatel.dev',
    // githubUrl: 'https://github.com/AkshayPatel8140/portfolio',
    status: 'Completed' as const
  },
  // {
  //   id: 2,
  //   title: 'Smart Recommendation Engine',
  //   description: 'A sophisticated recommendation system that uses collaborative filtering and content-based algorithms to provide personalized product suggestions. Handles millions of user interactions with real-time updates.',
  //   shortDescription: 'Advanced recommendation system with ML algorithms',
  //   image: '/images/projects/scaleEvv.jpg',
  //   category: 'AI/ML',
  //   technologies: ['Python', 'Scikit-learn', 'Pandas', 'React', 'FastAPI', 'Redis'],
  //   features: [
  //     'Collaborative filtering',
  //     'Content-based filtering',
  //     'Real-time recommendations',
  //     'A/B testing framework',
  //     'Performance analytics',
  //     'Scalable architecture'
  //   ],
  //   liveUrl: 'https://smart-recommendations.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/recommendation-engine',
  //   androidUrl: 'https://play.google.com/store/apps/details?id=com.smartrecommend',
  //   iosUrl: 'https://apps.apple.com/app/smart-recommendations/id234567890',
  //   macUrl: 'https://apps.apple.com/app/ai-support-agent-mac/id456789123',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 4,
  //   title: 'Code Editor Platform',
  //   description: 'A modern, feature-rich code editor built with React and TypeScript. Features syntax highlighting, multiple language support, and collaborative editing capabilities.',
  //   shortDescription: 'Advanced code editor with collaboration features',
  //   image: '/images/projects/codeEditor.png',
  //   category: 'Web Development',
  //   technologies: ['React', 'TypeScript', 'Monaco Editor', 'WebSocket', 'Node.js'],
  //   features: [
  //     'Syntax highlighting',
  //     'Multiple language support',
  //     'Real-time collaboration',
  //     'Git integration',
  //     'Custom themes',
  //     'Extension system'
  //   ],
  //   liveUrl: 'https://code-editor-demo.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/code-editor',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 5,
  //   title: 'Emotion Detection System',
  //   description: 'An AI-powered emotion detection system using computer vision and machine learning. Analyzes facial expressions in real-time to detect emotions and mood changes.',
  //   shortDescription: 'AI-powered emotion detection using computer vision',
  //   image: '/images/projects/emotion.png',
  //   category: 'AI/ML',
  //   technologies: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'React', 'WebRTC'],
  //   features: [
  //     'Real-time emotion detection',
  //     'Facial expression analysis',
  //     'Multi-person detection',
  //     'Emotion tracking over time',
  //     'API integration',
  //     'Web dashboard'
  //   ],
  //   liveUrl: 'https://emotion-detection-demo.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/emotion-detection',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 6,
  //   title: 'Plant Disease Detection',
  //   description: 'A machine learning system that identifies plant diseases from images. Uses deep learning models to classify healthy plants and detect various disease types.',
  //   shortDescription: 'ML-powered plant disease detection system',
  //   image: '/images/projects/leaf.png',
  //   category: 'AI/ML',
  //   technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'React', 'PostgreSQL'],
  //   features: [
  //     'Plant disease classification',
  //     'Image preprocessing',
  //     'Real-time detection',
  //     'Disease recommendations',
  //     'User management',
  //     'Mobile responsive'
  //   ],
  //   liveUrl: 'https://plant-disease-demo.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/plant-disease-detection',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 7,
  //   title: 'Suicide Prevention App',
  //   description: 'A mental health application focused on suicide prevention and mental wellness. Features crisis intervention tools, mood tracking, and professional support resources.',
  //   shortDescription: 'Mental health app with crisis intervention tools',
  //   image: '/images/projects/suicide.png',
  //   category: 'Mobile',
  //   technologies: ['React Native', 'Node.js', 'MongoDB', 'Express.js', 'Firebase'],
  //   features: [
  //     'Crisis intervention tools',
  //     'Mood tracking',
  //     'Professional support directory',
  //     'Emergency contacts',
  //     'Anonymous chat support',
  //     'Resource library'
  //   ],
  //   liveUrl: 'https://mental-health-app.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/mental-health-app',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 8,
  //   title: 'React Native E-commerce',
  //   description: 'A full-featured e-commerce mobile application built with React Native. Includes product catalog, shopping cart, payment processing, and order management.',
  //   shortDescription: 'Full-featured e-commerce mobile app',
  //   image: '/images/projects/reactNative.jpg',
  //   category: 'Mobile',
  //   technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'Stripe API'],
  //   features: [
  //     'Product catalog',
  //     'Shopping cart',
  //     'Payment processing',
  //     'Order tracking',
  //     'User authentication',
  //     'Push notifications'
  //   ],
  //   liveUrl: 'https://ecommerce-app-demo.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/ecommerce-app',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 9,
  //   title: 'Intelligent Detection System',
  //   description: 'An AI-powered detection system for security and surveillance applications. Uses computer vision and machine learning for object detection and threat identification.',
  //   shortDescription: 'AI-powered security detection system',
  //   image: '/images/projects/i_Detect.jpg',
  //   category: 'AI/ML',
  //   technologies: ['Python', 'OpenCV', 'YOLO', 'TensorFlow', 'Flask', 'React'],
  //   features: [
  //     'Real-time object detection',
  //     'Threat identification',
  //     'Video processing',
  //     'Alert system',
  //     'Analytics dashboard',
  //     'Multi-camera support'
  //   ],
  //   liveUrl: 'https://intelligent-detection-demo.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/intelligent-detection',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 10,
  //   title: 'Heir List Management',
  //   description: 'A comprehensive estate planning and heir management system. Helps users organize and manage their assets, beneficiaries, and legal documents.',
  //   shortDescription: 'Estate planning and heir management system',
  //   image: '/images/projects/heirList.jpg',
  //   category: 'Web Development',
  //   technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'AWS S3'],
  //   features: [
  //     'Asset management',
  //     'Beneficiary tracking',
  //     'Document storage',
  //     'Legal templates',
  //     'Will generation',
  //     'Secure access'
  //   ],
  //   liveUrl: 'https://heir-list-demo.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/heir-list-management',
  //   status: 'Completed' as const
  // },
  // {
  //   id: 11,
  //   title: 'Advanced Analytics Platform',
  //   description: 'A comprehensive analytics platform for business intelligence and data visualization. Provides insights through interactive dashboards and advanced reporting.',
  //   shortDescription: 'Business intelligence and analytics platform',
  //   image: '/images/projects/AAA2.jpg',
  //   category: 'Web Development',
  //   technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
  //   features: [
  //     'Interactive dashboards',
  //     'Data visualization',
  //     'Real-time analytics',
  //     'Custom reports',
  //     'Data export',
  //     'User permissions'
  //   ],
  //   liveUrl: 'https://analytics-platform-demo.com',
  //   githubUrl: 'https://github.com/AkshayPatel8140/analytics-platform',
  //   status: 'Completed' as const
  // }
]

// Blog Posts Data
export const blogPostsData = [
  {
    id: 1,
    title: "What are AI Agents and Why Developers Should Care in 2025",
    excerpt: "An exploration into the world of AI agents, detailing what they are, why they are gaining prominence, and how developers can utilize them to create more intelligent and autonomous applications.",
    content: "In this article, we dive into the world of AI agents, exploring what they are, why they're becoming so important, and how developers can start leveraging them to build smarter, more autonomous applications. As we move further into 2025, understanding AI agents is becoming a critical skill for any developer looking to stay at the forefront of technology.",
    mediumUrl: "https://medium.com/@apatel13066/what-are-ai-agents-and-why-developers-should-care-in-2025-fd52b1410fdd",
    publishedDate: "2025-08-26",
    readTime: "4 min read",
    category: "AI/ML",
    tags: ["AI Agents", "Artificial Intelligence", "Development", "2025", "Technology"],
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*pcPg_HagLVOmFthypn-S7w.png",
    featured: true
  },
  {
    id: 2,
    title: "Multi-Agent Systems: The Next Frontier in Artificial Intelligence",
    excerpt: "A deep dive into Multi-Agent Systems (MAS), explaining how collaborative AI agents are working together to solve complex problems that are beyond the scope of a single agent.",
    content: "Multi-Agent Systems (MAS) represent a paradigm shift in AI, where multiple intelligent agents interact with each other to solve problems that are beyond the reach of a single agent. This article explores the fundamentals of MAS, their real-world applications, and their potential to revolutionize industries by enabling complex, coordinated AI behavior.",
    mediumUrl: "https://medium.com/@apatel13066/multi-agent-systems-the-next-frontier-in-artificial-intelligence-376c7e8cdcd3",
    publishedDate: "2025-08-21",
    readTime: "3 min read",
    category: "AI/ML",
    tags: ["Multi-Agent Systems", "AI", "Artificial Intelligence", "Collaboration", "Complex Systems"],
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*blsKkxwR4wZoILuQIv2tLw.png"
  },
  {
    id: 3,
    title: "Why you should take Prompt Engineering seriously",
    excerpt: "An essential guide on the importance of prompt engineering in the era of large language models (LLMs) and why it's a critical skill for developers, writers, and creators.",
    content: "With the rise of powerful large language models, the ability to communicate effectively with AI has become a crucial skill. Prompt engineering is the art and science of crafting inputs to get the desired outputs from AI models. This post breaks down why it's not just a fleeting trend but a fundamental skill for anyone working with generative AI.",
    mediumUrl: "https://medium.com/@apatel13066/why-you-should-take-prompt-engineering-seriously-e8bb8a9c179c",
    publishedDate: "2025-08-16",
    readTime: "3 min read",
    category: "AI/ML",
    tags: ["Prompt Engineering", "LLM", "AI", "Generative AI", "Development"],
    image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LHVZZiwzij1Xyxhjgi9S2A.jpeg"
  }
  // {
  //   id: 1,
  //   title: "Building Scalable AI Systems: Lessons from Production",
  //   excerpt: "Explore the challenges and solutions when deploying AI systems at scale, including architecture decisions, monitoring, and performance optimization.",
  //   content: "In this comprehensive guide, I'll share my experience building and deploying AI systems that handle millions of requests daily. We'll cover everything from initial architecture decisions to production monitoring and performance optimization...",
  //   mediumUrl: "https://medium.com/@apatel13066/building-scalable-ai-systems-lessons-from-production",
  //   publishedDate: "2024-01-15",
  //   readTime: "8 min read",
  //   category: "AI/ML",
  //   tags: ["AI", "Machine Learning", "Scalability", "Production", "Architecture"],
  //   image: "/images/projects/emotion.png",
  //   featured: true
  // },
  // {
  //   id: 2,
  //   title: "React Performance Optimization: Beyond the Basics",
  //   excerpt: "Advanced techniques for optimizing React applications, including code splitting, memoization, and bundle analysis.",
  //   content: "Performance optimization in React goes far beyond just using React.memo and useMemo. In this deep dive, we'll explore advanced techniques that can significantly improve your application's performance...",
  //   mediumUrl: "https://medium.com/@apatel13066/react-performance-optimization-beyond-the-basics",
  //   publishedDate: "2024-01-10",
  //   readTime: "12 min read",
  //   category: "Frontend",
  //   tags: ["React", "Performance", "JavaScript", "Frontend", "Optimization"],
  //   image: "/images/projects/codeEditor.png"
  // },
  // {
  //   id: 3,
  //   title: "The Future of Web Development: What's Next in 2024",
  //   excerpt: "Predictions and insights into emerging web technologies, frameworks, and development practices for the coming year.",
  //   content: "As we move into 2024, the web development landscape is evolving rapidly. From new frameworks to emerging standards, let's explore what's on the horizon and how it will shape our development practices...",
  //   mediumUrl: "https://medium.com/@apatel13066/future-of-web-development-2024",
  //   publishedDate: "2024-01-05",
  //   readTime: "6 min read",
  //   category: "Web Development",
  //   tags: ["Web Development", "Trends", "Technology", "Future", "Innovation"],
  //   image: "/images/projects/blog.png"
  // },
  // {
  //   id: 4,
  //   title: "Machine Learning in Healthcare: Real-World Applications",
  //   excerpt: "How AI and ML are transforming healthcare delivery, from diagnosis to treatment planning and patient care.",
  //   content: "Healthcare is one of the most promising areas for AI and machine learning applications. In this article, we'll explore real-world implementations and their impact on patient outcomes...",
  //   mediumUrl: "https://medium.com/@apatel13066/machine-learning-healthcare-applications",
  //   publishedDate: "2023-12-28",
  //   readTime: "10 min read",
  //   category: "AI/ML",
  //   tags: ["AI", "Healthcare", "Machine Learning", "Medicine", "Innovation"],
  //   image: "/images/projects/leaf.png"
  // },
  // {
  //   id: 5,
  //   title: "Building a Modern Portfolio with Next.js and Framer Motion",
  //   excerpt: "A step-by-step guide to creating an impressive portfolio website using modern web technologies and animations.",
  //   content: "Your portfolio is often the first impression potential employers or clients have of your work. Let's build something that stands out using Next.js, TypeScript, and Framer Motion...",
  //   mediumUrl: "https://medium.com/@apatel13066/modern-portfolio-nextjs-framer-motion",
  //   publishedDate: "2023-12-20",
  //   readTime: "15 min read",
  //   category: "Web Development",
  //   tags: ["Next.js", "Portfolio", "Framer Motion", "Web Development", "Design"],
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
  // },
  // {
  //   id: 6,
  //   title: "Data Science Project: Building a Recommendation Engine",
  //   excerpt: "Complete walkthrough of building a recommendation system using Python, from data preprocessing to model deployment.",
  //   content: "Recommendation systems are everywhere - from Netflix to Amazon. In this project-based article, we'll build one from scratch using Python and modern ML libraries...",
  //   mediumUrl: "https://medium.com/@apatel13066/data-science-recommendation-engine",
  //   publishedDate: "2023-12-15",
  //   readTime: "20 min read",
  //   category: "Data Science",
  //   tags: ["Data Science", "Python", "Machine Learning", "Recommendations", "Tutorial"],
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
  // }
]

// YouTube Videos Data
export const youtubeVideosData = [
  {
    "id": 1,
    "title": "AI Just Killed Brand Image Design Jobs (But Created Something Better!)",
    "description": "AI is changing the game for brand design. While some jobs may be automated, new opportunities are emerging for designers who can leverage AI tools to create innovative and effective brand identities.",
    "youtubeUrl": "https://www.youtube.com/watch?v=kuIM3wNUL1c",
    "thumbnail": "/images/projects/video1.png",
    "publishedDate": "2025-08-23",
    "duration": "2:28",
    "category": "AI/ML",
    "tags": ["AI", "Brand Design", "Future of Work", "Automation", "Design"],
    "featured": true
  },
  {
    "id": 2,
    "title": "No-Code Magic: Google Sheets + Tally + Make + Lovable + n8n in Action!",
    "description": "Learn how to build powerful automations without writing a single line of code. This video will show you how to connect Google Sheets, Tally, Make, Lovable, and n8n to create a seamless workflow.",
    "youtubeUrl": "https://www.youtube.com/watch?v=s7a6iqKwk44",
    "thumbnail": "/images/projects/Video2.png",
    "publishedDate": "2025-08-04",
    "duration": "5:57",
    "category": "Technology",
    "tags": ["No-Code", "Automation", "Google Sheets", "Tally", "Make", "Lovable", "n8n"]
  }
  // {
  //   id: 1,
  //   title: "Building a Scalable AI System: Complete Walkthrough",
  //   description: "Learn how to build and deploy AI systems that can handle millions of requests. We'll cover architecture, monitoring, and performance optimization.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "/images/projects/emotion.png",
  //   publishedDate: "2024-01-15",
  //   duration: "18:32",
  //   category: "AI/ML",
  //   tags: ["AI", "Machine Learning", "Scalability", "Architecture", "Tutorial"],
  //   featured: true
  // },
  // {
  //   id: 2,
  //   title: "React Performance Optimization: Advanced Techniques",
  //   description: "Deep dive into React performance optimization beyond the basics. Learn code splitting, memoization, and bundle analysis.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "/images/projects/codeEditor.png",
  //   publishedDate: "2024-01-10",
  //   duration: "24:15",
  //   category: "Frontend",
  //   tags: ["React", "Performance", "JavaScript", "Frontend", "Optimization"]
  // },
  // {
  //   id: 3,
  //   title: "Next.js 14: What's New and How to Use It",
  //   description: "Explore the latest features in Next.js 14, including the new app router, server components, and performance improvements.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center",
  //   publishedDate: "2024-01-05",
  //   duration: "15:42",
  //   category: "Web Development",
  //   tags: ["Next.js", "React", "Web Development", "Tutorial", "Framework"]
  // },
  // {
  //   id: 4,
  //   title: "Machine Learning in Healthcare: Real Applications",
  //   description: "See how AI and ML are transforming healthcare delivery, from diagnosis to treatment planning and patient care.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
  //   publishedDate: "2023-12-28",
  //   duration: "22:18",
  //   category: "AI/ML",
  //   tags: ["AI", "Healthcare", "Machine Learning", "Medicine", "Applications"]
  // },
  // {
  //   id: 5,
  //   title: "Building a Modern Portfolio with Next.js and Framer Motion",
  //   description: "Step-by-step guide to creating an impressive portfolio website using modern web technologies and smooth animations.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
  //   publishedDate: "2023-12-20",
  //   duration: "28:45",
  //   category: "Web Development",
  //   tags: ["Next.js", "Portfolio", "Framer Motion", "Web Development", "Design"]
  // },
  // {
  //   id: 6,
  //   title: "Data Science Project: Building a Recommendation Engine",
  //   description: "Complete walkthrough of building a recommendation system using Python, from data preprocessing to model deployment.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  //   publishedDate: "2023-12-15",
  //   duration: "35:12",
  //   category: "Data Science",
  //   tags: ["Data Science", "Python", "Machine Learning", "Recommendations", "Tutorial"]
  // },
  // {
  //   id: 7,
  //   title: "TypeScript Best Practices for Large Projects",
  //   description: "Learn TypeScript best practices that will help you build maintainable and scalable applications.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop&crop=center",
  //   publishedDate: "2023-12-10",
  //   duration: "19:28",
  //   category: "Programming",
  //   tags: ["TypeScript", "Programming", "Best Practices", "Development", "Tutorial"]
  // },
  // {
  //   id: 8,
  //   title: "Deploying ML Models to Production: A Complete Guide",
  //   description: "Learn how to deploy machine learning models to production environments with proper monitoring and scaling.",
  //   youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  //   thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop&crop=center",
  //   publishedDate: "2023-12-05",
  //   duration: "31:45",
  //   category: "AI/ML",
  //   tags: ["Machine Learning", "Deployment", "Production", "MLOps", "Tutorial"]
  // }
]

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
