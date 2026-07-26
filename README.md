# QPerú — Landing page

Sitio de **QPerú**, comunidad peruana de computación cuántica, en proceso de integración
a QCousins / QWorld. Sitio estático: HTML + CSS + un JS mínimo. Sin framework, sin build,
sin dependencias.

**Producción:** https://qperu.vercel.app

---

## Estructura

```
.
├── index.html      # toda la página, una sola vista
├── styles.css      # tokens de marca + layout + el bloque HERO al final
├── script.js       # reveal de secciones al hacer scroll (IntersectionObserver)
└── assets/
    ├── logo.png    # lockup horizontal  → navbar y meta og:image
    ├── logo1.png   # lockup vertical    → hero (isotipo arriba, "QPerú›" abajo)
    ├── icon.png    # solo el isotipo    → favicon
    └── wa-qr.png   # QR del grupo "QPerú · Init" de WhatsApp
```

### Secciones

| ancla | contenido |
|---|---|
| `#inicio` | navbar (sticky) |
| — | hero: breadcrumb, título, subtítulo, 2 CTAs, logo vertical |
| — | banda del circuito cuántico (SVG animado) |
| `#mision` | misión y tres datos rápidos |
| `#actividades` | talleres / charlas / comunidad, con mini-circuitos SVG |
| `#red` | relación con QCousins / QWorld |
| `#comunidad` | públicos + chips de idioma |
| `#agenda` | placeholder del calendario 2026 |
| `#unete` | QR de WhatsApp + correo |
| — | footer: nombre de la comunidad, créditos y copyright |

---

## Decisiones de diseño (leer antes de editar)

Estas cosas parecen raras si no se conoce el contexto. **No las "arregles" sin leer.**

### 1. Los `<br class="brk">` del título son intencionales

```html
<h1>Democratizamos <br class="brk">la <br class="brk">computación <br class="brk">
<span class="rojo">cuántica</span> en <br class="brk">el Perú.</h1>
```

El diseño de referencia parte el título así:

```
Democratizamos
la
computación
cuántica en
el Perú.
```

Ese quiebre **no se puede lograr con CSS**. "la computación" es más angosto que
"Democratizamos", así que ningún `max-width` va a dejar "la" sola en su línea — el
ajuste automático siempre subiría "computación". Por eso los saltos son manuales.

Los `<br>` se ocultan por debajo de 1100px (`.brk { display: none }`) para que en
tablet y celular el texto fluya normal.

**Ojo:** cada `<br>` lleva un espacio antes. Sin ese espacio, al ocultarlos las
palabras se pegan ("Democratizamoslacomputación") y desbordan la pantalla en celular.

### 2. El contenedor es de 1680px, no de 1120px

```css
:root { --maxw: 1680px; --pad-x: 60px; }
```

Con 1120px el contenido quedaba encajonado al centro y dejaba ~200px muertos a cada
lado en una pantalla de 1536px — el hero se veía chico. Con 1680px el contenido
arranca en x=60 igual que el diseño de referencia, y el tope solo actúa en monitores
muy anchos para que la línea de texto no se vuelva ilegible.

`.container` y `.nav-inner` usan las mismas variables, así que el borde izquierdo del
hero y el de todas las secciones de abajo quedan alineados. Si cambias una, cambia la
otra.

### 3. El bloque HERO va al final de styles.css

El CSS del hero, navbar y contenedor está en un bloque marcado al final del archivo,
a propósito: gana por orden de cascada sobre cualquier regla anterior.

**Si editas ese bloque, cuenta las llaves.** Una llave `}` de más o de menos hace que
el navegador ignore en silencio todo lo que viene después — sin errores, sin avisos.
Es la falla más difícil de detectar en este proyecto:

```bash
python3 -c "c=open('styles.css').read(); print(c.count('{'), c.count('}'))"
# los dos números deben ser iguales
```

### 4. QPerú todavía NO es una división aceptada de QCousins

**Estado actual:** la solicitud de integración a QCousins ya está presentada y el
proceso está avanzado, pero falta la respuesta final. Hasta que llegue, el sitio dice
**"comunidad peruana ... en proceso de integración a QCousins"** — nunca "división
peruana de QCousins". Afirmar la membresía antes de tiempo es un problema frente a
QWorld.

Cuando se apruebe, hay que actualizar estos cinco lugares:

1. `<meta name="description">`
2. `<meta property="og:description">` (es lo que se ve al compartir el link)
3. el lede de `#red`
4. la misión en `#mision` ("siguiendo el modelo de" → "como parte de")
5. `.footer-org`

Y de paso el `aria-label` del `.net-diagram`.

Si en cambio no se aprueba, hay que quitar las menciones a QCousins de esos mismos
lugares — por eso conviene que sigan siendo pocos y localizados.

### 5. El SVG del circuito está fuera del hero

El hero usa `min-height: calc(100vh - 138px)`. Si el SVG del circuito estuviera dentro,
rompería esa altura. Vive en `.circuit-band`, justo después del `</section>` del hero.

---

## Breakpoints

| ancho | qué cambia |
|---|---|
| > 1100px | 2 columnas (52% / 48%), `--pad-x: 60px`, `<br>` visibles |
| ≤ 1100px | 1 columna, logo debajo del texto, `--pad-x: 40px`, `<br>` ocultos |
| ≤ 700px | menú oculto, CTAs apilados, `--pad-x: 24px` |

Que el logo aparezca **debajo** del texto en una ventana de ~1000px es correcto, no un
bug. Para ver el diseño de escritorio hace falta una ventana de 1100px o más
(y zoom al 100% — `Cmd + 0`).

---

## Desarrollo local

```bash
python3 -m http.server 8000
```

Y abre http://localhost:8000. No hay nada que compilar.

Para revisar el hero de verdad, usa el inspector en 1536 × 1024. Referencias medidas
del diseño original:

- navbar: 138px de alto
- título: arranca en x≈60, font-size ≈ 81px, 5 líneas
- logo del hero: 560px de ancho
- sin scroll horizontal en 1536px, 1020px ni 390px

---

## Deploy

Vercel está conectado al repo. **Cada push a `main` redespliega solo** — no hay que
hacer nada más.

```bash
git add -A
git commit -m "..."
git push
```

Configuración en Vercel (ya seteada, no tocar):

- Framework Preset: **Other**
- Build Command / Output Directory / Install Command: **vacíos**
- Root Directory: **raíz del repo**
- Environment Variables: **ninguna**

> **No agregues API keys aquí.** El sitio es 100% frontend: cualquier valor terminaría
> visible en el navegador de quien visite la página, aunque el repo sea privado. Solo
> tendría sentido si algún día se agrega un endpoint en `/api/` que corra en el servidor.

Después de cada deploy, abre el sitio con `Cmd + Shift + R` — Vercel cachea fuerte y es
normal seguir viendo la versión anterior.

---

## Mantenimiento

**Cambiar el QR de WhatsApp** — reemplaza `assets/wa-qr.png` con el mismo nombre. No
hay que tocar el HTML.

**Agregar eventos reales** — en `#agenda`, reemplaza la tarjeta placeholder por una
tarjeta por evento: fecha en `.agenda-estado`, título, descripción y botón de
inscripción.

**Activar quechua** — en `#comunidad`, cambia el chip `QU` de `class="chip"` a
`class="chip chip-on"` y quita el texto "en camino".

**Correo de contacto** — hoy apunta a `hola@qperu.org` en la sección `#unete`.
Cámbialo cuando exista el buzón real.

**Créditos del footer** — el `<footer>` no lleva imagen a propósito. Antes tenía un
`icon.png` que se rompía si el archivo faltaba en el deploy, y un logo roto se ve peor
que ningún logo. Hoy es solo texto, deliberadamente mínimo:

```
QPerú — Comunidad peruana de computación cuántica
                        Hecho por Isabel Dávila Elías · © 2026 QPerú
```

Lo de QCousins / QWorld no va aquí: ya está explicado en `#red`, y repetirlo en el
footer recargaba el cierre de la página. En celular las dos líneas se apilan.

**Colores y tipografías** — variables CSS al inicio de `styles.css`:
`--rojo: #F10515`, `--tinta: #121316`. Las tipografías (Archivo, Archivo Black,
IBM Plex Mono) se cargan desde Google Fonts en el `<head>`.
