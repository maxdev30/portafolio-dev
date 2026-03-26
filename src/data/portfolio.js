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
  linkedin: 'https://linkedin.com/in/maxdev30',
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
    title: 'Sistema de Gestión Empresarial',
    description: 'Sistema web completo para gestión de inventarios, ventas y reportes en tiempo real. Incluye autenticación JWT, roles de usuario y dashboard analítico.',
    tech: ['.NET Core', 'SQL Server', 'Dapper', 'Bootstrap', 'JavaScript'],
    category: '.NET',
    image: '/projects/project1.jpg',
    github: 'https://github.com/tuusuario/proyecto1',
    demo: null,
    highlights: ['JWT Auth', 'Roles & Permisos', 'Dashboard Analytics', 'API REST'],
  },
  {
    id: 2,
    title: 'App E-Commerce React',
    description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración. Desplegada con Docker y CI/CD.',
    tech: ['React', 'PHP', 'MySQL', 'SCSS', 'Docker'],
    category: 'React',
    image: '/projects/project2.jpg',
    github: 'https://github.com/tuusuario/proyecto2',
    demo: 'https://tuproyecto.vercel.app',
    highlights: ['Carrito de Compras', 'Pasarela de Pagos', 'Docker', 'CI/CD'],
  },
  {
    id: 3,
    title: 'API REST con Python',
    description: 'API de análisis de datos con Flask, procesamiento de archivos CSV y visualización de métricas. Dockerizada con GitHub Actions para despliegue automático.',
    tech: ['Python', 'Flask', 'MySQL', 'Docker', 'GitHub Actions'],
    category: 'Python',
    image: '/projects/project3.jpg',
    github: 'https://github.com/tuusuario/proyecto3',
    demo: null,
    highlights: ['Flask API', 'Análisis de Datos', 'GitHub Actions', 'Docker'],
  },
  {
    id: 4,
    title: 'Portal de Ventas PHP',
    description: 'Sistema de ventas multi-sucursal con reportes avanzados, gestión de clientes y facturación electrónica integrada.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5'],
    category: 'PHP',
    image: '/projects/project4.jpg',
    github: 'https://github.com/tuusuario/proyecto4',
    demo: null,
    highlights: ['Multi-sucursal', 'Facturación', 'Reportes PDF', 'AJAX'],
  },
  {
    id: 5,
    title: 'App Móvil de Gestión',
    description: 'Aplicación móvil para gestión de tareas y proyectos con sincronización en tiempo real, notificaciones push y modo offline.',
    tech: ['React', 'JavaScript', 'CSS', 'REST API'],
    category: 'React',
    image: '/projects/project5.jpg',
    github: 'https://github.com/tuusuario/proyecto5',
    demo: null,
    highlights: ['Offline Mode', 'Push Notifications', 'Real-time Sync'],
  },
  {
    id: 6,
    title: 'Pipeline CI/CD con GitHub Actions',
    description: 'Configuración completa de pipeline de integración y despliegue continuo con tests automáticos, análisis de código y deploy a producción.',
    tech: ['GitHub Actions', 'Docker', '.NET Core', 'SQL Server'],
    category: 'DevOps',
    image: '/projects/project6.jpg',
    github: 'https://github.com/tuusuario/proyecto6',
    demo: null,
    highlights: ['CI/CD', 'Tests Automáticos', 'Docker', 'Auto-deploy'],
  },
]

export const experience = [
  {
    id: 1,
    role: 'Desarrollador Fullstack',
    company: 'Empresa Actual',
    period: '2023 — Presente',
    type: 'Presencial',
    description: 'Desarrollo y mantenimiento de sistemas empresariales con .NET Core y React. Implementación de CI/CD con GitHub Actions y Docker.',
    tech: ['.NET Core', 'React', 'SQL Server', 'Docker', 'GitHub Actions'],
    icon: 'work',
  },
  {
    id: 2,
    role: 'Desarrollador Web',
    company: 'Empresa Anterior',
    period: '2021 — 2023',
    type: 'Híbrido',
    description: 'Construcción de plataformas web con PHP y JavaScript. Gestión de bases de datos MySQL y optimización de consultas SQL.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML/CSS'],
    icon: 'work',
  },
  {
    id: 3,
    role: 'Desarrollador Junior',
    company: 'Primera Empresa',
    period: '2019 — 2021',
    type: 'Presencial',
    description: 'Inicio de carrera desarrollando módulos en PHP, diseño de interfaces con Bootstrap y gestión de bases de datos.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
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
