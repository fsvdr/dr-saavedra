export default {
  title: 'Testimonio',
  name: 'testimonial',
  type: 'document',
  fields: [
    {
      title: 'Testimonio Aprobado',
      name: 'approved',
      type: 'boolean',
    },
    {
      title: 'Calificación',
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
    },
    {
      title: 'Paciente',
      name: 'author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Fecha de Evaluación',
      name: 'submissionDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Contenido',
      name: 'content',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(5).max(140),
    },
  ],
  initialValue: {
    approved: false,
    submissionDate: new Date().toISOString(),
  },
};
