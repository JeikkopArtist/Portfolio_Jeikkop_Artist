// Datos generales del portfolio: textos de cabecera, contacto, redes y menú.
// El contenido de cada sección (galería, trabajos…) está en src/content/*.yaml.

export const site = {
  name: 'Jesús Jiménez',
  fullName: 'Jesús Jiménez Muñoz',
  alias: 'Jeikkop',
  role: 'Estudiante de Animación 2D/3D',
  description:
    'Portfolio de Jesús Jiménez (Jeikkop Artist), estudiante de Animación 2D y 3D: modelado y animación 3D, edición de vídeo y diseño de personajes.',
  keywords: ['animación', '3D', '2D', 'Blender', 'modelado 3D', 'edición de vídeo', 'diseño de personajes', 'portfolio'],
  lang: 'es',
  locale: 'es_ES',

  hero: {
    intro:
      'Muy buenas, soy Jesús Jiménez Muñoz, estudiante de Animación 2D y 3D, amante de la animación y la edición. Desde pequeño siempre he tenido una gran imaginación, y eso me ha llevado a querer crear proyectos que cuenten historias, que emocionen, y que exploren nuevos estilos.',
    disciplines: ['Animación 3D', 'Modelado', 'Rigging', 'Edición de vídeo', 'Diseño de personajes', 'FX 2D', 'Storyboard'],
  },

  about: {
    title: 'Formación y enfoque',
    paragraphs: [
      'Mi paso por animación me ha enseñado que cada detalle cuenta; por eso me gusta mezclar la técnica y la creatividad. Soy una persona curiosa, con ganas de aprender y de seguir creciendo en este sector; me gusta probar estilos nuevos y buscar soluciones originales. Si un proyecto necesita ideas o conceptos frescos ahí es donde más me desenvuelvo.',
      'En este portfolio encontrarás algunos trabajos que he hecho y en los que poco a poco voy trabajando. Si te interesa mi estilo o quieres trabajar conmigo, estaré encantado de colaborar y aportar toda mi creatividad.',
    ],
    tools: ['Blender', 'Premiere Pro', 'Photoshop', 'After Effects'],
  },

  footer: {
    blurb:
      'Estudiante de animación especializado en creación de contenido visual. Enfoque en animación 3D, edición de video y diseño de personajes.',
  },

  contact: {
    email: 'jeikkopartist@gmail.com',
    // Opcional: pega aquí un endpoint de Formspree (https://formspree.io) o similar
    // para recibir los mensajes del formulario sin abrir el cliente de correo.
    // Vacío = el formulario abre el correo del visitante con el mensaje ya escrito.
    formEndpoint: '',
    subjects: [
      { value: 'colaboracion', label: 'Colaboración' },
      { value: 'informacion', label: 'Información' },
      { value: 'trabajo', label: 'Oportunidad laboral' },
      { value: 'otro', label: 'Otro' },
    ],
  },

  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/jeikkop_artist/', icon: 'simple-icons:instagram' },
    { label: 'YouTube', href: 'https://www.youtube.com/@Jeikkop_Artist', icon: 'simple-icons:youtube' },
    { label: 'itch.io', href: 'https://jeikkop.itch.io/evil-city', icon: 'simple-icons:itchdotio' },
    { label: 'Whakoom', href: 'https://www.whakoom.com/jeikkop', icon: 'lucide:book-open' },
    { label: 'Letterboxd', href: 'https://boxd.it/iF7kd', icon: 'simple-icons:letterboxd' },
  ],

  nav: [
    { label: 'Sobre mí', id: 'sobre-mi' },
    { label: 'Habilidades', id: 'habilidades' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Trabajos', id: 'trabajos' },
    { label: 'Experiencia', id: 'experiencia' },
    { label: 'Contacto', id: 'contacto' },
  ],
} as const;

export const galleryCategories = [
  { value: 'all', label: 'Todo' },
  { value: '3d', label: '3D' },
  { value: '2d', label: '2D y FX' },
  { value: 'personajes', label: 'Personajes' },
] as const;
