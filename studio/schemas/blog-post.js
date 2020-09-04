export default {
  title: 'Artículo',
  name: 'blogPost',
  type: 'document',
  fields: [
    {
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'URL',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Fecha de Publicación',
      name: 'releaseDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Resumen',
      description: 'Breve descripción del tema que trata el artículo',
      name: 'summary',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(280),
    },
    {
      title: 'Tags',
      description: 'Palabras clave que ayuden a encontrar este artículo en Internet',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Contenido',
      name: 'content',
      type: 'array',
      of: [
        {
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
        },
        {
          type: 'inlinePostImage',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  initialValue: {
    releaseDate: new Date().toISOString(),
  },
};
