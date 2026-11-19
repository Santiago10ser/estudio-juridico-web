import {defineField, defineType} from 'sanity'

export const abogada = defineType({
  name: 'abogada',
  title: 'Abogada',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre completo',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'matricula',
      title: 'N.º de matrícula',
      type: 'string',
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Descripción de la foto',
          type: 'string',
          initialValue: 'Retrato de la abogada',
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Presentación breve',
      description: 'Formación, experiencia y áreas en las que se especializa.',
      type: 'text',
      rows: 4,
      validation: (r) => r.max(400),
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {title: 'nombre', subtitle: 'matricula', media: 'foto'},
    prepare: ({title, subtitle, media}) => ({
      title,
      subtitle: subtitle ? `Mat. N.º ${subtitle}` : 'Sin matrícula cargada',
      media,
    }),
  },
})
