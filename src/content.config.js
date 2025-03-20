import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const exercisesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/exercises' }),
  schema :  ({image}) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    icon: z.object({
        src: image(),
        alt: z.string()
    }),
    slug: z.string(),
  })
});

const projectsCollection = defineCollection({
  loader : glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: ({image}) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    icon: z.object({
      src : image(),
      alt: z.string()
    }),
    slug: z.string()
  })
});


const getNotesCollection = (path) => {
  return defineCollection({
      loader : glob({ pattern: '**/*.md', base: path }),
      schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      slug: z.string(),
      category: z.string()
    })
  })
};

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { 
  exercises: exercisesCollection, 
  projects: projectsCollection,
  "CSS": getNotesCollection('./src/data/notes/css'),
  "Javascript Parte Uno" : getNotesCollection('./src/data/notes/javascript/parte-uno'),
  "Javascript Parte Dos" : getNotesCollection('./src/data/notes/javascript/parte-dos'),
  "React" : getNotesCollection('./src/data/notes/javascript/react'),
  "Java" : getNotesCollection('./src/data/notes/backend/java'),
};