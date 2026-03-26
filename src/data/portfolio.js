/**
 * @copyright 2026 Ing. Max Patricio Anaya — Todos los derechos reservados.
 * Prohibida la copia, reproducción o distribución sin autorización expresa.
 */

export const personalInfo = {
  name: 'Ing. Max Patricio Anaya',
  role: 'Ingeniero de Sistemas',
  email: 'fraypatricio@gmail.com',
  phone: '+51 989 377 295',
  location: 'Perú',
  github: 'https://github.com/maxdev30',
  linkedin: 'https://linkedin.com/in/maxpatricio',
  cvUrl: '/cv.pdf',
  bio: `Ingeniero de Sistemas con sólida experiencia en desarrollo fullstack, 
  aplicaciones móviles y sistemas empresariales. Apasionado por crear soluciones 
  eficientes, escalables y con gran experiencia de usuario. Especializado en 
  tecnologías como PHP, .NET Core, React, JavaScript y Python.`,
  yearsExp: 5,
  projectsDone: 20,
  companiesWorked: 8,
}

export const skills = [
  // Frontend
  { name: 'React', level: 90, category: 'Frontend', icon: 'react' },
  { name: 'JavaScript', level: 92, category: 'Frontend', icon: 'js' },
  { name: 'HTML5', level: 95, category: 'Frontend', icon: 'html' },
  { name: 'CSS3 / SCSS', level: 88, category: 'Frontend', icon: 'css' },
  { name: 'Bootstrap', level: 90, category: 'Frontend', icon: 'bootstrap' },
  // Backend
  { name: 'PHP', level: 88, category: 'Backend', icon: 'php' },
  { name: '.NET Core', level: 85, category: 'Backend', icon: 'dotnet' },
  { name: 'Python', level: 75, category: 'Backend', icon: 'python' },
  { name: 'Dapper ORM', level: 80, category: 'Backend', icon: 'dapper' },
  // Base de datos
  { name: 'MySQL', level: 87, category: 'Database', icon: 'mysql' },
  { name: 'SQL Server', level: 83, category: 'Database', icon: 'sql' },
  // DevOps / Herramientas
  { name: 'Docker', level: 78, category: 'DevOps', icon: 'docker' },
  { name: 'GitHub', level: 90, category: 'DevOps', icon: 'github' },
  { name: 'GitHub Actions', level: 75, category: 'DevOps', icon: 'actions' },
]

export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión Educativa',
    description: 'Sistema integral para academia preuniversitaria con módulos de matrícula, control de estudiantes, pagos en línea, registro de notas y asistencias. Incluye carrito de compras para materiales, escaneo de QR para control de asistencia en tiempo real y generación de reportes académicos.',
    tech: ['.NET Core', 'SQL Server', 'Dapper', 'Bootstrap', 'JavaScript'],
    category: '.NET',
    images: [
      '/projects/project1-1.jpg',
      '/projects/project1-2.jpg',
      '/projects/project1-3.jpg',
    ],
    github: null,
    demo: 'https://tedinnova.com',
    highlights: ['QR Asistencia', 'Carrito de Compras', 'Gestión de Notas', 'Control de Pagos'],
  },
  {
    id: 2,
    title: 'CIFAIC — Plataforma de Formación en Investigación',
    description: 'Plataforma educativa virtual para el Centro Internacional de Formación y Asesoría en Investigación Científica (CIFAIC). Gestiona cursos para elaboración de tesis, inscripciones, pagos, emisión de certificados digitales y clases en línea con seguimiento de avances académicos.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5'],
    category: 'PHP',
    images: [
      '/projects/cifaic1.JPG',
      '/projects/cifaic2.JPG',
      '/projects/cifaic3.JPG',
      '/projects/cifaic4.JPG',
      '/projects/cifaic5.JPG',
      '/projects/cifaic6.JPG',
      '/projects/cifaic7.JPG',
      '/projects/cifaic8.JPG',
      '/projects/cifaic9.JPG',
      '/projects/cifaic10.JPG',
    ],
    github: null,
    demo: 'https://cifaic.pe',
    highlights: ['Clases Virtuales', 'Certificación Digital', 'Gestión de Tesis', 'Pasarela de Pagos'],
  },
  {
    id: 3,
    title: 'Sistema de Facturación Electrónica',
    description: 'Solución completa de facturación electrónica integrada con los servicios de la SUNAT. Genera y firma digitalmente facturas, boletas, notas de crédito y débito en formato XML UBL 2.1, envío automático al OSE/SUNAT, consulta de CDR y generación de reportes tributarios.',
    tech: ['.NET Core', 'SQL Server', 'Dapper', 'Bootstrap', 'JavaScript'],
    category: '.NET',
    images: [
      '/projects/project3-1.jpg',
      '/projects/project3-2.jpg',
      '/projects/project3-3.jpg',
    ],
    github: null,
    demo: null,
    highlights: ['Integración SUNAT', 'Firma Digital XML', 'Boletas & Facturas', 'Consulta CDR'],
  },
  {
    id: 4,
    title: 'TED Mobile — Corrección Automática de Exámenes',
    description: 'Aplicación móvil que automatiza la corrección de exámenes mediante escaneo óptico de cartillas físicas de respuestas. Utiliza procesamiento de imagen para detectar respuestas marcadas, califica automáticamente, sincroniza resultados en la nube y genera reportes estadísticos por grupo.',
    tech: ['React', 'JavaScript', 'Python', 'REST API', 'CSS'],
    category: 'React',
    images: [
      '/projects/project4-1.jpg',
      '/projects/project4-2.jpg',
      '/projects/project4-3.jpg',
    ],
    github: null,
    demo: null,
    highlights: ['Escaneo de Cartillas', 'Calificación Automática', 'Reportes Estadísticos', 'Sincronización Cloud'],
  },
  {
    id: 5,
    title: 'Pipeline CI/CD con GitHub Actions',
    description: 'Configuración completa de pipeline de integración y despliegue continuo con tests automáticos, análisis de código y deploy a producción.',
    tech: ['GitHub Actions', 'Docker', '.NET Core', 'SQL Server'],
    category: 'DevOps',
    images: [
      '/projects/project5-1.jpg',
      '/projects/project5-2.jpg',
    ],
    github: null,
    demo: null,
    highlights: ['CI/CD', 'Tests Automáticos', 'Docker', 'Auto-deploy'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Desarrollador Junior',
    company: 'Innovatech Design SAC',
    period: '2019 — 2021',
    type: 'Presencial',
    description: 'Desarrollo del Sistema de Facturación Electrónica integrado con la SUNAT: generación y firma digital de facturas, boletas, notas de crédito y débito en formato XML UBL 2.1, envío automático al OSE/SUNAT, consulta de CDR y reportes tributarios. Implementación de CI/CD con GitHub Actions y Docker.',
    tech: ['.NET Core', 'SQL Server', 'Dapper', 'Bootstrap', 'JavaScript', 'Docker', 'GitHub Actions'],
    icon: 'work',
  },
  {
    id: 2,
    role: 'Desarrollador Web',
    company: 'Crea Experiencias Web SAC',
    period: '2021 — 2023',
    type: 'Híbrido',
    description: 'Desarrollo de la plataforma educativa virtual CIFAIC (Centro Internacional de Formación y Asesoría en Investigación Científica): gestión de cursos de tesis, inscripciones, pagos, emisión de certificados digitales y seguimiento de avances académicos de estudiantes virtuales.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
    icon: 'work',
  },
  {
    id: 3,
    role: 'Desarrollador Fullstack',
    company: 'Transformación Educativa Digital Innova SAC',
    period: '2023 — Presente',
    type: 'Híbrido',
    description: 'Desarrollo del Sistema de Gestión Educativa para academia preuniversitaria (matrícula, notas, asistencias, pagos y carrito de compras con escaneo QR) y de la app móvil TED Mobile para corrección automática de exámenes mediante escaneo óptico de cartillas físicas.',
    tech: ['.NET Core', 'SQL Server', 'React', 'JavaScript', 'Python', 'Bootstrap'],
    icon: 'work',
  },
]

export const navLinks = [
  { id: 'home', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
]
