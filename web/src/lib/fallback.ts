import type {Contenido} from './types'

// Contenido de ejemplo: se usa solo mientras no hay un proyecto de Sanity
// configurado, para poder ver la página en local. Lo real lo cargan ellas en el panel.
export const contenidoDeEjemplo: Contenido = {
  config: {
    tituloPortada: 'Si sentís que tus derechos fueron vulnerados, no estás solo.',
    subtituloPortada:
      'Te escuchamos, analizamos tu caso y te orientamos sobre qué medidas corresponden. Asesoramiento jurídico claro y cercano.',
    presentacion:
      '[Breve presentación del estudio: desde cuándo trabajan, en qué se enfocan y cómo es su forma de atender a cada cliente.]',
    direccion: 'Galería Astra – Avda. Osvaldo Tischler, Hohenau, Itapúa',
    horario: '[Horario de atención]',
    telefonos: ['0985 774 756', '0985 708 375'],
  },
  servicios: [
    {_id: 's1', titulo: 'Derecho de Familia', descripcion: 'Divorcios, asistencia alimentaria, régimen de convivencia y filiación.'},
    {_id: 's2', titulo: 'Derecho Laboral', descripcion: 'Despidos, liquidaciones, reclamos de haberes y asesoramiento a empleadores.'},
    {_id: 's3', titulo: 'Sucesiones', descripcion: 'Juicios sucesorios, declaratoria de herederos y división de bienes.'},
    {_id: 's4', titulo: 'Derecho Civil', descripcion: 'Contratos, cobro de deudas, daños y perjuicios.'},
    {_id: 's5', titulo: 'Inmuebles y títulos', descripcion: 'Compraventas, regularización de títulos y documentación de propiedades.'},
    {_id: 's6', titulo: 'Asesoramiento general', descripcion: 'Consultas y orientación para saber qué pasos seguir en tu caso.'},
  ],
  abogadas: [
    {_id: 'a1', nombre: 'Rosa Flores', bio: '[Formación, años de experiencia y áreas en las que se especializa.]'},
    {_id: 'a2', nombre: 'Lida Vera', bio: '[Formación, años de experiencia y áreas en las que se especializa.]'},
  ],
}
