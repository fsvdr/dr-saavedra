import { defineArrayMember, defineField, defineType } from 'sanity';

export const blogPost = defineType({
  title: 'Artículo',
  name: 'blogPost',
  type: 'document',
  fields: [
    defineField({
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'URL',
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Fecha de Publicación',
      name: 'releaseDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Resumen',
      description: 'Breve descripción del tema que trata el artículo',
      name: 'summary',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(280),
    }),
    defineField({
      title: 'Tags',
      description: 'Palabras clave que ayuden a encontrar este artículo en Internet',
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      title: 'Contenido',
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Subtitle', value: 'h2' },
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        }),
        defineArrayMember({ type: 'inlinePostImage' }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: () => ({
    releaseDate: new Date().toISOString().slice(0, 10),
  }),
  preview: {
    select: { title: 'title', subtitle: 'releaseDate' },
  },
});
