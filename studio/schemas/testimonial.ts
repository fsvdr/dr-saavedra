import { defineField, defineType } from 'sanity';

export const testimonial = defineType({
  title: 'Testimonio',
  name: 'testimonial',
  type: 'document',
  fields: [
    defineField({
      title: 'Testimonio Aprobado',
      name: 'approved',
      type: 'boolean',
    }),
    defineField({
      title: 'Calificación',
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
    }),
    defineField({
      title: 'Paciente',
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Fecha de Evaluación',
      name: 'submissionDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Contenido',
      name: 'content',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(5).max(200),
    }),
    defineField({
      title: 'Acepta términos',
      name: 'agrees',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
  ],
  initialValue: () => ({
    approved: false,
    agrees: false,
    submissionDate: new Date().toISOString().slice(0, 10),
  }),
  preview: {
    select: { title: 'author', subtitle: 'content' },
  },
});
