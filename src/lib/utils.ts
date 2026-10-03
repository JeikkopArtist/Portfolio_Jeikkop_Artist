import { getCollection, type CollectionKey } from 'astro:content';

/** Entradas de una colección en el mismo orden que en su archivo YAML. */
export async function getOrdered<C extends CollectionKey>(name: C) {
  const entries = await getCollection(name);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Antepone el `base` de GitHub Pages a una ruta interna ("/#galeria" → "/Portfolio_Jeikkop_Artist/#galeria"). */
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
