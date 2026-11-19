import {defineField, defineType} from 'sanity'

export const configuracion = defineType({
  name: 'configuracion',
  title: 'Datos del estudio',
  type: 'document',
  groups: [
    {name: 'portada', title: 'Portada', default: true},
    {name: 'contacto', title: 'Contacto'},
  ],
  fields: [
    defineField({
      name: 'tituloPortada',
      title: 'Título principal',
      type: 'string',
      group: 'portada',
      initialValue: 'Si sentís que tus derechos fueron vulnerados, no estás solo.',
      validation: (r) => r.required().max(90),
    }),
    defineField({
      name: 'subtituloPortada',
      title: 'Texto debajo del título',
      type: 'text',
      rows: 3,
      group: 'portada',
      initialValue:
        'Te escuchamos, analizamos tu caso y te orientamos sobre qué medidas corresponden. Asesoramiento jurídico claro y cercano.',
    }),
    defineField({
      name: 'presentacion',
      title: 'Presentación del estudio (sección "Quiénes somos")',
      type: 'text',
      rows: 4,
      group: 'portada',
    }),
    defineField({
      name: 'direccion',
      title: 'Dirección',
      type: 'string',
      group: 'contacto',
      initialValue: 'Galería Astra – Avda. Osvaldo Tischler, Hohenau, Itapúa',
    }),
    defineField({
      name: 'horario',
      title: 'Horario de atención',
      description: 'Ej.: Lunes a viernes de 7:30 a 11:30 y de 14:00 a 18:00',
      type: 'string',
      group: 'contacto',
    }),
    defineField({
      name: 'telefonos',
      title: 'Teléfonos / WhatsApp',
      description: 'El primero es el que usan los botones principales de WhatsApp.',
      type: 'array',
      group: 'contacto',
      of: [
        {
          type: 'string',
          validation: (r) =>
            r.regex(/^0\d{3}\s?\d{3}\s?\d{3}$/, {name: 'teléfono paraguayo'}).error('Formato: 0985 774 756'),
        },
      ],
      initialValue: ['0985 774 756', '0985 708 375'],
      validation: (r) => r.min(1),
    }),
    defineField({
      name: 'mapaUrl',
      title: 'Link de Google Maps',
      description: 'En Google Maps: Compartir → Copiar vínculo.',
      type: 'url',
      group: 'contacto',
    }),
  ],
  preview: {prepare: () => ({title: 'Datos del estudio'})},
})
