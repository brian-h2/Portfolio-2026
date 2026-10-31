export const translations = {
  es: {
    header: {
      nav: [
        { label: 'Sobre mí', id: 'about' },
        { label: 'Proyectos', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experiencia', id: 'experience' },
        { label: 'Formación', id: 'education' },
        { label: 'Contacto', id: 'contact' },
      ],
      cv: 'CV',
      menu: 'Abrir menú',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Brian',
      title1: 'Desarrollador',
      title2: 'Full Stack',
      subtitle:
        'Especializado en backend y AI Engineering. Construyo APIs REST escalables y productos SaaS end-to-end con Node.js, React y Next.js.',
      downloadCV: 'Descargar CV',
      viewProjects: 'Ver proyectos',
    },
    about: {
      heading: 'Sobre mí',
      headline: 'Backend e IA para productos que escalan',
      p1: 'Soy desarrollador Full-Stack especializado en backend y AI Engineering, con foco en Node.js, React y Next.js, y más de 2 años de experiencia construyendo APIs REST escalables y productos SaaS end-to-end. Actualmente trabajo en',
      p1company: 'Traditum',
      p1end:
        ', donde diseño microservicios y APIs REST con .NET y Node.js, y en paralelo desarrollo proyectos freelance.',
      p2: 'Me estoy formando como AI Engineer en Scrimba y en DevOps con Docker. Tengo experiencia trabajando con AWS y bajo metodologías ágiles, y uso habitualmente herramientas de IA como Claude, Cursor y Copilot para acelerar y mejorar cada etapa del ciclo de desarrollo de software.',
      stats: [
        { value: '+2', label: 'Años de experiencia' },
        { value: '+7', label: 'Proyectos en producción' },
        { value: 'B2', label: 'Nivel de inglés' },
      ],
    },
    projects: {
      heading: 'Proyectos',
      subtitle: 'Soluciones reales implementadas en producción',
      demo: 'Demo',
      code: 'Código',
      items: [
        {
          name: 'ExplainMyCode',
          description: 'Chat inteligente con IA generativa para asistencia en código en tiempo real.',
          impact: 'Propone mejoras en tu código y resuelve dudas técnicas de forma rápida.',
        },
        {
          name: 'Web RRHH',
          description: 'Sitio profesional orientado a RRHH con branding y captación de clientes.',
          impact: 'Gestión de clientes y oportunidades laborales para conectar profesionales.',
        },
        {
          name: 'Barbería Online',
          description: 'App web para gestión de reservas, clientes y servicios de barbería.',
          impact: 'Agiliza reservas y mejora la experiencia del negocio y sus clientes.',
        },
        {
          name: 'Avaporu',
          description: 'Plataforma de gestión, control y distribución de gastos, stock y recursos.',
          impact: 'Optimización en distribución de recursos y gestión solidaria.',
        },
        {
          name: 'Mecanic SaaS',
          description: 'Gestión de talleres mecánicos: servicios, clientes y registros diarios.',
          impact: 'Optimiza la operación diaria de talleres con interfaz intuitiva.',
        },
      ],
    },
    skills: {
      heading: 'Skills',
      subtitle: 'Stack técnico y competencias profesionales',
      groups: [
        {
          label: 'Backend',
          subLabel: 'APIs y servicios',
          skills: ['Node.js', 'NestJS', 'Express', 'REST API', 'JWT', '.NET'],
        },
        {
          label: 'AI Engineering',
          subLabel: 'En formación en Scrimba',
          skills: ['AI Engineer', 'Claude', 'Copilot', 'Cursor', 'Kiro'],
        },
        {
          label: 'Frontend',
          subLabel: 'Interfaces y experiencia de usuario',
          skills: ['React', 'Next.js', 'TailwindCSS', 'JavaScript', 'TypeScript'],
        },
        {
          label: 'Cloud y DevOps',
          subLabel: 'AWS y Docker',
          skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS Lambda (aprendiendo)', 'Docker (en formación)', 'Contenedores', 'Imágenes', 'Volúmenes', 'Logs'],
        },
        {
          label: 'Bases de datos',
          subLabel: 'Persistencia y caché',
          skills: ['PostgreSQL', 'MySQL', 'TypeORM', 'Prisma', 'Redis'],
        },
        {
          label: 'Herramientas y metodologías',
          subLabel: 'Forma de trabajo',
          skills: ['Git', 'GitHub', 'Scrum', 'Azure DevOps', 'SDLC', 'Code Reviews', 'Testing'],
        },
      ],
    },
    experience: {
      heading: 'Experiencia',
      subtitle: 'Trayectoria profesional como desarrollador Full-Stack',
      items: [
        {
          role: 'Desarrollador Full-Stack',
          company: 'Traditum S.A',
          year: 'Nov 2024 – Actualidad',
          highlights: [
            'Diseño de arquitectura de microservicios y APIs REST con .NET y Node.js, asegurando la integridad de datos en entornos de alta demanda.',
            'Uso de Next.js para manejar front y back en un mismo proyecto.',
            'Participación activa en Code Reviews y escritura de tests para asegurar la salud del codebase.',
            'Trabajo colaborativo bajo SDLC en entornos ágiles (Scrum + Azure DevOps).',
          ],
        },
        {
          role: 'Desarrollador Full-Stack',
          company: 'Proyectos Freelance',
          year: '2024 – Actualidad',
          highlights: [
            'Desarrollo de interfaces modernas con React, Next.js, TailwindCSS, Vite y TypeScript.',
            'Consumo de APIs con Axios y Fetch, y manejo de estado con Hooks y Context API.',
            'Integración de rutas, formularios dinámicos, validaciones, dashboards y visualizaciones.',
            'Desarrollo backend con Node.js y Express, con manejo de sesiones y cookies.',
          ],
        },
      ],
    },
    education: {
      heading: 'Formación',
      subtitle: 'Estudios e idiomas',
      languagesLabel: 'Idiomas',
      items: [
        { title: 'AI Engineer', institution: 'Scrimba', year: '2026 – Actualidad' },
        {
          title: 'DevOps con Docker',
          year: 'En curso',
          note: 'Contenedores, imágenes, volúmenes y logs.',
        },
        { title: 'Analista de Sistemas', institution: 'IESXXI', year: '2023 – 2026' },
        {
          title: 'Desarrollo Web con React',
          institution: 'CoderHouse',
          year: 'Mar 2022 – Oct 2022',
          note: 'Programa intensivo de más de 600 horas: HTML, CSS, JavaScript, React, Git y Firebase.',
        },
      ],
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'B2' },
      ],
    },
    contact: {
      heading: 'Hablemos',
      subtitle: '¿Tenés un proyecto o una oportunidad laboral? Escribime y lo conversamos.',
      viewProfile: 'Ver perfil',
      viewProjects: 'Ver proyectos',
    },
    footer: {
      thanks: 'Gracias por visitar mi portfolio.',
      backToTop: 'Volver arriba',
      copyright: '© 2026 Brian. Todos los derechos reservados.',
    },
  },

  en: {
    header: {
      nav: [
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experience', id: 'experience' },
        { label: 'Education', id: 'education' },
        { label: 'Contact', id: 'contact' },
      ],
      cv: 'CV',
      menu: 'Open menu',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Brian',
      title1: 'Full Stack',
      title2: 'Developer',
      subtitle:
        'Specialized in backend and AI Engineering. I build scalable REST APIs and end-to-end SaaS products with Node.js, React and Next.js.',
      downloadCV: 'Download CV',
      viewProjects: 'View projects',
    },
    about: {
      heading: 'About me',
      headline: 'Backend and AI for products that scale',
      p1: "I'm a Full-Stack developer specialized in backend and AI Engineering, focused on Node.js, React and Next.js, with over 2 years of experience building scalable REST APIs and end-to-end SaaS products. I currently work at",
      p1company: 'Traditum',
      p1end:
        ', where I design microservices and REST APIs with .NET and Node.js, while also working on freelance projects.',
      p2: 'I am training as an AI Engineer at Scrimba and in DevOps with Docker. I have experience working with AWS and in agile teams, and I regularly use AI tools such as Claude, Cursor and Copilot to speed up and improve every stage of the software development lifecycle.',
      stats: [
        { value: '+2', label: 'Years of experience' },
        { value: '+7', label: 'Production projects' },
        { value: 'B2', label: 'English level' },
      ],
    },
    projects: {
      heading: 'Projects',
      subtitle: 'Real solutions deployed to production',
      demo: 'Demo',
      code: 'Code',
      items: [
        {
          name: 'ExplainMyCode',
          description: 'Intelligent chat with generative AI for real-time code assistance.',
          impact: 'Proposes improvements to your code and resolves technical questions quickly.',
        },
        {
          name: 'Web RRHH',
          description: 'Professional HR-focused website with branding and client acquisition.',
          impact: 'Client and job opportunity management to connect professionals.',
        },
        {
          name: 'Barbería Online',
          description: 'Web app for managing bookings, clients and barber shop services.',
          impact: 'Streamlines bookings and improves the experience for the business and its clients.',
        },
        {
          name: 'Avaporu',
          description: 'Platform for management, control and distribution of expenses, stock and resources.',
          impact: 'Resource distribution optimization and solidarity-based management.',
        },
        {
          name: 'Mecanic SaaS',
          description: 'Mechanic shop management: services, clients and daily records.',
          impact: 'Optimizes the daily operation of shops with an intuitive interface.',
        },
      ],
    },
    skills: {
      heading: 'Skills',
      subtitle: 'Technical stack and professional competencies',
      groups: [
        {
          label: 'Backend',
          subLabel: 'APIs and services',
          skills: ['Node.js', 'NestJS', 'Express', 'REST API', 'JWT', '.NET'],
        },
        {
          label: 'AI Engineering',
          subLabel: 'In training at Scrimba',
          skills: ['AI Engineer', 'Claude', 'Copilot', 'Cursor', 'Kiro'],
        },
        {
          label: 'Frontend',
          subLabel: 'Interfaces and user experience',
          skills: ['React', 'Next.js', 'TailwindCSS', 'JavaScript', 'TypeScript'],
        },
        {
          label: 'Cloud & DevOps',
          subLabel: 'AWS and Docker',
          skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'AWS Lambda (learning)', 'Docker (in training)', 'Containers', 'Images', 'Volumes', 'Logs'],
        },
        {
          label: 'Databases',
          subLabel: 'Persistence and caching',
          skills: ['PostgreSQL', 'MySQL', 'TypeORM', 'Prisma', 'Redis'],
        },
        {
          label: 'Tools and methodologies',
          subLabel: 'How I work',
          skills: ['Git', 'GitHub', 'Scrum', 'Azure DevOps', 'SDLC', 'Code Reviews', 'Testing'],
        },
      ],
    },
    experience: {
      heading: 'Experience',
      subtitle: 'Professional journey as a Full-Stack developer',
      items: [
        {
          role: 'Full-Stack Developer',
          company: 'Traditum S.A',
          year: 'Nov 2024 – Present',
          highlights: [
            'Design of microservices architecture and REST APIs with .NET and Node.js, ensuring data integrity in high-demand environments.',
            'Use of Next.js to handle both front end and back end in a single project.',
            'Active participation in code reviews and test writing to keep the codebase healthy.',
            'Collaborative work under SDLC in agile environments (Scrum + Azure DevOps).',
          ],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Freelance Projects',
          year: '2024 – Present',
          highlights: [
            'Development of modern interfaces with React, Next.js, TailwindCSS, Vite and TypeScript.',
            'API consumption with Axios and Fetch, and state management with Hooks and Context API.',
            'Integration of routing, dynamic forms, validations, dashboards and data visualizations.',
            'Backend development with Node.js and Express, including session and cookie handling.',
          ],
        },
      ],
    },
    education: {
      heading: 'Education',
      subtitle: 'Studies and languages',
      languagesLabel: 'Languages',
      items: [
        { title: 'AI Engineer', institution: 'Scrimba', year: '2026 – Present' },
        {
          title: 'DevOps with Docker',
          year: 'In progress',
          note: 'Containers, images, volumes and logs.',
        },
        { title: 'Systems Analyst', institution: 'IESXXI', year: '2023 – 2026' },
        {
          title: 'Web Development with React',
          institution: 'CoderHouse',
          year: 'Mar 2022 – Oct 2022',
          note: 'Intensive program of over 600 hours: HTML, CSS, JavaScript, React, Git and Firebase.',
        },
      ],
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'B2' },
      ],
    },
    contact: {
      heading: "Let's talk",
      subtitle: 'Have a project or a job opportunity? Write to me and we can discuss it.',
      viewProfile: 'View profile',
      viewProjects: 'View projects',
    },
    footer: {
      thanks: 'Thanks for visiting my portfolio.',
      backToTop: 'Back to top',
      copyright: '© 2026 Brian. All rights reserved.',
    },
  },
} as const;

export type Translations = typeof translations;
