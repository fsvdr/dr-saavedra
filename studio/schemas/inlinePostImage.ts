import { defineField, defineType } from 'sanity';

export const inlinePostImage = defineType({
  title: 'Imagen',
  name: 'inlinePostImage',
  type: 'image',
  fields: [
    defineField({
      title: 'Leyenda',
      description: '¿Qué se muestra en esta imagen?',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
