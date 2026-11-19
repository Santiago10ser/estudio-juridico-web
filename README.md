# Web – Estudio Jurídico Rosa Flores & Lida Vera

Página de una sola sección (tipo flyer) hecha con **Astro**, con el contenido editable desde un panel de **Sanity**.

```
estudio-juridico-web/
├── studio/   → panel de edición (Sanity Studio) que usan ellas
└── web/      → la página pública (Astro, 100% estática)
```

Requisitos: **Node 22.12 o superior**.

---

## 1. Crear el proyecto en Sanity (una sola vez)

```bash
cd studio
npm install
npx sanity login            # con tu cuenta (Google o GitHub)
npx sanity init --env       # elegí "Create new project", dataset "production"
```

Copiá el **Project ID** (también aparece en https://sanity.io/manage) y reemplazá
`TU_PROJECT_ID` en `studio/sanity.config.ts` y `studio/sanity.cli.ts`.

Probalo en local:

```bash
npm run dev                 # http://localhost:3333
```

Publicá el panel en internet (gratis) para que ellas entren desde cualquier lado:

```bash
npm run deploy              # queda en https://estudio-flores-vera.sanity.studio
```

> Si ese nombre está ocupado, cambiá `studioHost` en `sanity.cli.ts`.

### Invitar a las abogadas
En https://sanity.io/manage → tu proyecto → **Members** → *Invite*. Dales el rol
**Editor** (pueden editar contenido, pero no tocar la configuración). El plan gratis permite
varios usuarios, así que alcanza para las dos.

### Qué pueden editar
- **Datos del estudio**: título y texto de la portada, presentación, dirección, horario, teléfonos y link de Google Maps.
- **Propuestas / Servicios**: crear, editar, ordenar (campo "Orden") u ocultar tarjetas.
- **Abogadas**: nombre, matrícula, foto y presentación.

---

## 2. La página (Astro)

```bash
cd web
cp .env.example .env        # y poné tu Project ID
npm install
npm run dev                 # http://localhost:4321
```

Sin Project ID configurado, la página usa contenido de ejemplo (`src/lib/fallback.ts`), así
podés verla y trabajar el diseño antes de crear el proyecto en Sanity.

### CORS
Como la página lee el contenido en el *build*, no hace falta configurar CORS. Si más adelante
consultás Sanity desde el navegador, agregá el dominio en sanity.io/manage → **API → CORS origins**.

---

## 3. Publicar en Vercel (o Netlify)

1. Subí la carpeta a un repo de GitHub.
2. En Vercel: **Add New → Project**, elegí el repo y poné **Root Directory = `web`**.
3. En **Environment Variables** agregá `PUBLIC_SANITY_PROJECT_ID` y `PUBLIC_SANITY_DATASET`.
4. Deploy.

### Que la página se actualice sola cuando ellas publican

La página es estática, así que hay que regenerarla cuando cambia el contenido:

1. Vercel → tu proyecto → **Settings → Git → Deploy Hooks** → crear uno (ej. "sanity") y copiar la URL.
2. sanity.io/manage → tu proyecto → **API → Webhooks → Create webhook**:
   - URL: la del Deploy Hook
   - Dataset: `production`
   - Trigger on: Create, Update, Delete
   - HTTP method: `POST`

Desde ahí, cada vez que tocan **Publicar** en el panel, la página se actualiza en ~1 minuto.

---

## 4. Dominio

Un `.com.py` se registra en NIC.PY (https://www.nic.py) y un `.com` en cualquier registrador.
Después se conecta en Vercel → **Settings → Domains**. Acordate de cambiar `site` en
`web/astro.config.mjs` por el dominio final.

---

## Para cambiar el diseño

- Colores y estilos: `web/src/styles/global.css` (variables al principio del archivo).
- Estructura de la página: `web/src/pages/index.astro`.
- Campos del panel: `studio/schemaTypes/`.
