import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import yaml from 'js-yaml';

// Cada colección lee un archivo YAML de src/content/.
// Si una ruta de imagen está mal escrita, `astro build` falla y dice cuál:
// así una imagen rota nunca llega a publicarse.

// getCollection() no garantiza el orden del archivo, así que guardamos la
// posición de cada bloque en `order`: para reordenar basta con mover bloques.
const yamlInOrder = (path: string) =>
  file(path, {
    parser: (text) =>
      (yaml.load(text) as Record<string, unknown>[]).map((entry, order) => ({ ...entry, order })),
  });

const order = z.number().int();

const galeria = defineCollection({
  loader: yamlInOrder('src/content/galeria.yaml'),
  schema: ({ image }) =>
    z.object({
      order,
      title: z.string(),
      category: z.enum(['3d', '2d', 'personajes']),
      tag: z.string(),
      image: image(),
      alt: z.string(),
    }),
});

const trabajos = defineCollection({
  loader: yamlInOrder('src/content/trabajos.yaml'),
  schema: z.object({
    order,
    title: z.string(),
    youtubeId: z.string().length(11),
    tag: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const habilidades = defineCollection({
  loader: yamlInOrder('src/content/habilidades.yaml'),
  schema: z.object({
    order,
    title: z.string(),
    icon: z.string(),
    skills: z.array(
      z.object({
        name: z.string(),
        level: z.number().int().min(0).max(100),
      }),
    ),
  }),
});

const experiencia = defineCollection({
  loader: yamlInOrder('src/content/experiencia.yaml'),
  schema: ({ image }) =>
    z.object({
      order,
      role: z.string(),
      company: z.string(),
      year: z.number().int(),
      duration: z.string(),
      description: z.string(),
      tasks: z.array(z.string()).default([]),
      media: z.discriminatedUnion('type', [
        z.object({ type: z.literal('youtube'), youtubeId: z.string().length(11), title: z.string() }),
        z.object({
          type: z.literal('image'),
          image: image(),
          alt: z.string(),
          // contain = imagen entera sobre fondo blanco (ideal para logotipos)
          fit: z.enum(['cover', 'contain']).default('cover'),
        }),
      ]),
    }),
});

const proyectos = defineCollection({
  loader: yamlInOrder('src/content/proyectos.yaml'),
  schema: ({ image }) =>
    z.object({
      order,
      title: z.string(),
      event: z.string(),
      paragraphs: z.array(z.string()),
      learnings: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      url: z.url(),
      linkLabel: z.string(),
    }),
});

export const collections = { galeria, trabajos, habilidades, experiencia, proyectos };
