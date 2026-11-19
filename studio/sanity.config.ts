import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

// Reemplazá por el ID de tu proyecto (lo ves en sanity.io/manage)
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'icwizg5v'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

// Documentos "únicos": solo existe uno de cada uno (no se pueden crear más ni borrar)
const SINGLETONS = ['configuracion']

export default defineConfig({
  name: 'default',
  title: 'Estudio Jurídico Flores & Vera',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido de la página')
          .items([
            S.listItem()
              .title('Datos del estudio')
              .id('configuracion')
              .child(S.document().schemaType('configuracion').documentId('configuracion')),
            S.divider(),
            S.documentTypeListItem('servicio').title('Propuestas / Servicios'),
            S.documentTypeListItem('abogada').title('Abogadas'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Que "Datos del estudio" no aparezca en el botón "Crear nuevo"
    templates: (templates) => templates.filter(({schemaType}) => !SINGLETONS.includes(schemaType)),
  },

  document: {
    // Sin "Duplicar" ni "Eliminar" para los singletons
    actions: (input, context) =>
      SINGLETONS.includes(context.schemaType)
        ? input.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : input,
  },
})
