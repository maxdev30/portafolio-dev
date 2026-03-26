# Portafolio Personal — Documentación Técnica
### Ing. Max Patricio Anaya · Ingeniero de Sistemas

---

> Documento de uso personal. Para presentación a empresas, reclutadores o revisión de código propio.

---

## 1. ¿Por qué este proyecto?

Llevaba tiempo queriendo tener un portafolio que realmente representara la forma en que trabajo, no solo una lista de skills en una página estática. Quería algo que se sintiera profesional desde que carga, que en los primeros segundos comunicara quién soy sin tener que leer nada.

Tomé la decisión de construirlo desde cero en lugar de usar una plantilla. Me pareció más honesto: si trabajo en frontend, el portafolio tiene que demostrar justamente eso.

La app es una SPA (Single Page Application) construida con React 18 y Vite. El diseño apunta a startups y empresas tech, tanto remotas como presenciales, con foco en rendimiento y experiencia de usuario.

---

## 2. Stack utilizado

| Tecnología | Versión | Por qué la elegí |
|------------|---------|------------------|
| React | 18.3 | El estándar en el mercado, cómodo con el modelo de componentes |
| Vite | 5.4 | El HMR es notablemente más rápido que CRA, no tiene sentido no usarlo |
| Tailwind CSS | 3.4 | Para layout y espaciado rápido, sin escribir CSS genérico |
| SCSS | 1.77 | Para los estilos más complejos donde Tailwind se queda corto |
| Framer Motion | 11.3 | Las animaciones declarativas me ahorran muchísimo código |
| React Icons | 5.3 | Colección grande, tree-shakeable, sin peso extra |
| React Scroll | 1.9 | El scroll suave entre secciones funciona sin configuración |
| React Typed | 2.0 | Para el efecto de escritura en Hero, simple y directo |
| EmailJS | 4.4 | Permite recibir mensajes del formulario sin levantar un servidor |
| Sass | 1.77 | Compilador del preprocesador |

Decidí no incluir un gestor de estado global (sin Redux, sin Zustand). Para la escala de este proyecto hubiese sido sobreingeniería. Cada componente maneja su propio estado con `useState` y `useRef`.

---

## 3. Estructura de componentes

```
App.jsx (Raíz)
│── Loader           → Pantalla de entrada animada (2.2s)
│── CustomCursor     → Cursor personalizado con efecto glow
│── Navbar           → Nav sticky con glassmorphism
│── Hero             → Canvas con partículas + texto animado
│── About            → Presentación personal + tarjetas de valor
│── Skills           → Grilla de habilidades con filtros y barras
│── Projects         → Galería de proyectos con modal de detalle
│── Experience       → Timeline de experiencia laboral
│── Contact          → Formulario conectado a EmailJS
│── Footer           → Links y redes sociales
└── ScrollToTop      → Botón de retorno animado
```

### Cómo fluyen los datos

Todo el contenido dinámico vive en `src/data/portfolio.js`. Es el único archivo que hay que modificar para actualizar cualquier sección del portafolio: datos personales, proyectos, habilidades, experiencia y links de navegación. Los componentes importan desde ahí y renderizan.

Este enfoque hace que los cambios de contenido no toquen lógica de componentes.

---

## 4. Detalles por componente

### Loader
Muestra una animación de entrada con el logo `</>` y una barra de progreso. Usa `useEffect` con un `setTimeout` de 2200ms para desaparecer. La animación está hecha con Framer Motion (`scale` + `opacity`). Elegí ese tiempo porque en pruebas informales se sentía natural, ni tan corto que pasara desapercibido, ni tan largo que molestara.

### CustomCursor
Reemplaza el cursor del sistema. Tiene dos capas: un punto central (`cursor__dot`) y un anillo exterior (`cursor__ring`) que sigue con un ligero retraso usando `requestAnimationFrame`. Ese lag es intencional: da la sensación de peso. Se desactiva automáticamente en móvil y tablet con una media query en 768px porque en táctil simplemente no tiene sentido.

### Navbar
Sticky, siempre visible. El efecto de glassmorphism se activa cuando el scroll supera los 50px, antes de eso el fondo es transparente para no tapar el Hero. Usa `react-scroll` para detectar la sección activa y marcarla en el menú. En móvil colapsa en hamburguesa con animación `AnimatePresence`.

### Hero
Es la sección que más trabajo me llevó. Tiene un canvas HTML5 con 80 partículas animadas en loop usando `requestAnimationFrame`. Los orbes de fondo son CSS puro con `@keyframes float`. El efecto de escritura usa `ReactTyped` con 7 roles que roto. La tarjeta de código flotante es un elemento decorativo, no funcional, pero comunica bien el perfil técnico a primera vista.

### Skills
Filtros por categoría (Frontend, Backend, Database, DevOps). Las barras de progreso se animan solo cuando el usuario llega a esa sección gracias a `useInView` de Framer Motion. Quise evitar que se animaran al cargar la página sin que nadie las vea.

### Projects
Filtro por stack tecnológico con transiciones suaves vía `AnimatePresence`. Al hacer clic en un proyecto se abre un modal con descripción extendida, tecnologías y links. El modal se cierra con el botón `×` o haciendo clic fuera del contenedor.

### Experience
Timeline con línea central en pantallas grandes, alternando tarjetas izquierda y derecha. En móvil apila todo en una columna con `padding-left` para respetar la línea de tiempo. Fue el componente más complicado de hacer responsive de forma limpia.

### Contact
Formulario controlado con `useState`. Tiene la integración con EmailJS lista pero comentada, requiere configurar las keys propias (ver sección 6). La validación usa los atributos nativos de HTML5 (`required`, `type="email"`) para no añadir dependencias de validación por algo tan simple.

---

## 5. Sistema de estilos

Usé una combinación de Tailwind y SCSS. Tailwind para utilidades de layout y espaciado, SCSS para los componentes que necesitan lógica de estilos más compleja o reutilización de variables.

### Variables principales (`_variables.scss`)

| Variable | Valor | Uso |
|----------|-------|-----|
| `$primary` | `#0f0f23` | Fondo oscuro principal |
| `$secondary` | `#1a1a3e` | Fondo alternativo para secciones |
| `$accent` | `#00d4ff` | Color de acento principal, cyan |
| `$accent2` | `#7b2ff7` | Color secundario, violeta |
| `$text-light` | `#e0e0f0` | Texto sobre fondos oscuros |
| `$text-muted` | `#8888aa` | Texto secundario y subtítulos |

### Clases reutilizables (`index.scss`)

| Clase | Descripción |
|-------|-------------|
| `.glass-card` | Glassmorphism — `backdrop-filter: blur` + bordes con opacidad |
| `.btn-primary` | Botón con gradiente acento → violeta, efecto hover con escala |
| `.btn-outline` | Botón con borde translúcido, fondo sólido en hover |
| `.gradient-text` | Texto con gradiente lineal cyan → violeta |
| `.tag` | Badge de tecnologías, pequeño y con borde translúcido |
| `.section` | Padding vertical estándar entre secciones (`5rem`) |
| `.container` | Max-width 1200px, centrado con padding lateral |
| `.section__title` | H2 de sección con línea decorativa inferior en acento |

---

## 6. Activar EmailJS en el formulario

El formulario está listo, solo faltan las keys. Pasos:

1. Crear cuenta en [emailjs.com](https://emailjs.com)
2. Crear un **Email Service** (conectar Gmail u otro)
3. Crear un **Email Template** con variables `{{name}}`, `{{email}}`, `{{message}}`
4. En `Contact.jsx`, reemplazar el `setTimeout` actual por:

```js
import emailjs from '@emailjs/browser'

await emailjs.send(
  'TU_SERVICE_ID',
  'TU_TEMPLATE_ID',
  { name: form.name, email: form.email, message: form.message },
  'TU_PUBLIC_KEY'
)
```

Las keys van en variables de entorno `.env` para no exponerlas en el repositorio:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

---

## 7. Build y despliegue en Vercel

```bash
npm run build
# Genera la carpeta dist/ lista para producción
```

Configuración en Vercel:
1. Conectar el repositorio de GitHub
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

El deploy es automático con cada push a `main`. Sin pasos manuales.

---

## 8. Actualizar contenido del portafolio

Solo hay que tocar un archivo: `src/data/portfolio.js`

Contiene:
- `personalInfo` — datos personales, bio, estadísticas, redes sociales
- `skills` — habilidades técnicas con nivel porcentual (0–100) y categoría
- `projects` — proyectos con descripción, stack, links a GitHub y demo
- `experience` — historial laboral para el timeline
- `navLinks` — secciones visibles en la barra de navegación

Ningún componente tiene contenido hardcodeado, todo viene de ahí.

---

## 9. Rendimiento

Algunas decisiones que tomé para mantener el rendimiento:

- Las animaciones de Framer Motion usan `useInView` para ejecutarse solo al hacer scroll hasta ellas, no al cargar la página
- El canvas de partículas llama `cancelAnimationFrame` en el cleanup del `useEffect` para no dejar loops activos
- Google Fonts carga con `preconnect` en el `<head>` del HTML
- Las imágenes de proyectos van en `/public/projects/`; por ahora hay placeholders, en producción conviene usar WebP

El objetivo es mantener el Lighthouse Score por encima de 90 en Performance.

---

## 10. Datos del desarrollador

| | |
|-|-|
| Nombre | Ing. Max Patricio Anaya |
| Especialidad | Ingeniería de Sistemas · Fullstack |
| Email | fraypatricio@gmail.com |
| GitHub | github.com/maxdev30 |
| LinkedIn | linkedin.com/in/maxdev30 |
| Ubicación | Perú |
| Disponibilidad | Inmediata · Remoto o Presencial |

---

*© 2026 Max Patricio Anaya — Uso personal y presentación profesional.*
