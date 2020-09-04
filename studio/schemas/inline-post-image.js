export default {
  title: 'Imagen',
  name: 'inlinePostImage',
  type: 'image',
  fields: [
    {
      title: 'Leyenda',
      description: '¿Qué se muestra en esta imagen?',
      name: 'alt',
      type: 'string',
      options: {
        isHighlighted: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
