export type Servicio = {
  _id: string
  titulo: string
  descripcion: string
}

export type Abogada = {
  _id: string
  nombre: string
  matricula?: string
  bio?: string
  foto?: {asset?: {_ref: string}; alt?: string}
}

export type Configuracion = {
  tituloPortada: string
  subtituloPortada?: string
  presentacion?: string
  direccion?: string
  horario?: string
  telefonos: string[]
  mapaUrl?: string
}

export type Contenido = {
  config: Configuracion
  servicios: Servicio[]
  abogadas: Abogada[]
}
