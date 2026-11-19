import {defineField, defineType} from 'sanity'

export const servicio = defineType({
  name: 'servicio',
  title: 'Propuesta / Servicio',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      description: 'Ej.: Derecho de Familia',
      type: 'string',
      validation: (r) => r.required().max(40),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      description: 'Una o dos oraciones cortas sobre qué incluye.',
      type: 'text',
      rows: 3,
      validation: (r) => r.required().max(180),
    }),
    defineField({
      name: 'orden',
      title: 'Orden',
      description: 'Número para ordenar las tarjetas (1 aparece primero).',
      type: 'number',
      initialValue: 10,
    }),
    defineField({
      name: 'visible',
      title: 'Mostrar en la página',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  orderings: [{title: 'Orden', name: 'ordenAsc', by: [{field: 'orden', direction: 'asc'}]}],
  preview: {
    select: {title: 'titulo', subtitle: 'descripcion', visible: 'visible'},
    prepare: ({title, subtitle, visible}) => ({
      title: visible === false ? `${title} (oculto)` : title,
      subtitle,
    }),
  },
})
