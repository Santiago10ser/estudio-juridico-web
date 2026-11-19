import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'
import type {Contenido} from './types'
import {contenidoDeEjemplo} from './fallback'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'icwizg5v'
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production'

const configurado = Boolean(projectId) && projectId !== 'TU_PROJECT_ID'

export const client = configurado
  ? createClient({projectId, dataset, apiVersion: '2026-11-01', useCdn: false})
  : null

const builder = client ? createImageUrlBuilder(client) : null

export function urlFoto(source: unknown, ancho = 600, alto = 600): string | null {
  if (!builder || !source) return null
  return builder.image(source as never).width(ancho).height(alto).fit('crop').auto('format').url()
}

const QUERY = `{
  "config": *[_id == "configuracion"][0]{
    tituloPortada, subtituloPortada, presentacion, direccion, horario, telefonos, mapaUrl
  },
  "servicios": *[_type == "servicio" && visible != false] | order(orden asc, _createdAt asc){
    _id, titulo, descripcion
  },
  "abogadas": *[_type == "abogada"] | order(orden asc, _createdAt asc){
    _id, nombre, matricula, bio, foto
  }
}`

export async function obtenerContenido(): Promise<Contenido> {
  if (!client) {
    console.warn('[sanity] Sin PUBLIC_SANITY_PROJECT_ID: usando contenido de ejemplo.')
    return contenidoDeEjemplo
  }
  const data = await client.fetch<Partial<Contenido>>(QUERY)
  // Si todavía no cargaron algo en el panel, se completa con el ejemplo
  return {
    config: {...contenidoDeEjemplo.config, ...(data.config ?? {})},
    servicios: data.servicios?.length ? data.servicios : contenidoDeEjemplo.servicios,
    abogadas: data.abogadas?.length ? data.abogadas : contenidoDeEjemplo.abogadas,
  }
}

/** "0985 774 756" → "595985774756" (formato para wa.me y tel:) */
export function telInternacional(tel: string): string {
  const digitos = tel.replace(/\D/g, '')
  return digitos.startsWith('0') ? `595${digitos.slice(1)}` : digitos
}
