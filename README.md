# Portfolio · Jeikkop Artist

Portfolio de **Jesús Jiménez** (estudiante de Animación 2D/3D), hecho con [Astro](https://astro.build).

🌐 https://jeikkopartist.github.io/Portfolio_Jeikkop_Artist/

## Cómo editar el contenido

No hace falta tocar código: casi todo vive en archivos YAML dentro de `src/content/`.

| Quiero cambiar…                         | Archivo                         |
| --------------------------------------- | ------------------------------- |
| Piezas de la galería                    | `src/content/galeria.yaml`      |
| Vídeos de YouTube (sección Trabajos)    | `src/content/trabajos.yaml`     |
| Experiencia profesional                 | `src/content/experiencia.yaml`  |
| Habilidades y porcentajes               | `src/content/habilidades.yaml`  |
| Proyecto de la Game Jam                 | `src/content/proyectos.yaml`    |
| Textos de inicio, bio, email, redes, menú | `src/data/site.ts`            |

### Añadir una imagen a la galería

1. Copia la imagen en `src/assets/images/galeria/`.
   **Nombre en minúsculas, sin tildes, eñes ni espacios** (`mi-dibujo-nuevo.png`).
2. Añade un bloque en `src/content/galeria.yaml`:

   ```yaml
   - id: mi-dibujo-nuevo
     title: Mi dibujo nuevo
     category: 2d            # 3d | 2d | personajes
     tag: Ilustración · Photoshop
     image: ../assets/images/galeria/mi-dibujo-nuevo.png
     alt: Descripción breve de lo que se ve
   ```

3. Haz commit y push a `main`. En un par de minutos la web se actualiza sola.

Puedes subir imágenes y GIFs grandes sin miedo: al publicar se convierten
automáticamente a WebP en varios tamaños (los GIF siguen animados).
Si una ruta está mal escrita, la publicación falla y avisa de qué imagen es,
así que nunca llega a la web una imagen rota.

### Añadir un vídeo

En `src/content/trabajos.yaml`, con el código del vídeo (lo que va después de `watch?v=`):

```yaml
- id: mi-video
  title: Título del vídeo
  youtubeId: KmiIL6iYKV4
  tag: Animación 3D        # opcional
```

## Trabajar en local

Requisitos: [Node.js](https://nodejs.org) 22.12 o superior.

```bash
npm install       # solo la primera vez
npm run dev       # web en http://localhost:4321/Portfolio_Jeikkop_Artist/
npm run build     # comprueba errores y genera la web en dist/
npm run preview   # sirve la versión generada
```

## Publicación

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila y publica en GitHub Pages.
La primera vez hay que activarlo en **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Estructura

```
src/
├── assets/images/     imágenes originales (Astro las optimiza al compilar)
├── components/        piezas reutilizables (cabecera, vídeo de YouTube, …)
│   └── sections/      una por sección de la página
├── content/           ← contenido editable (YAML)
├── content.config.ts  qué campos lleva cada YAML (y los valida)
├── data/site.ts       ← datos generales
├── layouts/           estructura HTML común, SEO y fuentes
├── pages/             index (portfolio) y 404
└── styles/global.css  colores, tipografías y estilos base
recursos/              material original que no se muestra en la web
```

Los colores están definidos como variables al principio de `src/styles/global.css`
(tema claro y oscuro).

## Formulario de contacto

GitHub Pages no puede enviar correos. Por defecto, el formulario abre la aplicación de correo
del visitante con el mensaje ya redactado. Para recibir los mensajes directamente,
crea un formulario gratuito en [Formspree](https://formspree.io) y pega su URL en
`contact.formEndpoint` dentro de `src/data/site.ts`.
