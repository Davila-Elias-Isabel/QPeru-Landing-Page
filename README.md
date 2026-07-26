# QPerú — Landing page

Sitio estático (HTML + CSS + JS, sin build) para la comunidad QPerú, división peruana de QCousins / QWorld. Listo para desplegar en Vercel.

## Estructura

```
qperu-landing/
├── index.html      # toda la página (secciones: hero, misión, actividades, red global, comunidad, agenda, únete)
├── styles.css      # tokens de marca, tipografía y el motivo de circuito cuántico
├── script.js       # reveals al hacer scroll
└── assets/
    ├── logo.png    # logo completo (fondo transparente)
    └── icon.png    # solo el colibrí (favicon / redes)
```

## Desplegar en Vercel

**Opción A — desde GitHub (recomendada):**
1. Crea un repo (p. ej. `qperu-landing`) y sube estos archivos.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repo.
3. Framework preset: **Other** (no necesita build). Deploy y listo.

**Opción B — CLI:**
```bash
npm i -g vercel
cd qperu-landing
vercel --prod
```

## Antes de publicar — reemplazar

- [ ] **Correo de contacto**: en `index.html`, sección `#unete`, cambiar `mailto:hola@qperu.org` por el correo real.
- [ ] **QR de WhatsApp**: la imagen `assets/wa-qr.png` es el QR del grupo `QPerú · Init`. Si cambia el grupo o vence el enlace, reemplaza este archivo (mismo nombre).
- [ ] **Dominio**: si compran dominio propio, configurarlo en Vercel → Settings → Domains.

## Personalizar

- Colores y tipografías están como variables CSS al inicio de `styles.css` (`--rojo`, `--tinta`, etc.).
- Para agregar eventos reales, reemplaza la tarjeta placeholder de la sección `#agenda` por tarjetas por evento (fecha en `.agenda-estado`, título, descripción y botón de inscripción).
- Idiomas: cuando la extensión a quechua esté activa, en la sección `#comunidad` cambia el chip `QU` de `class="chip"` a `class="chip chip-on"` y quita el texto "en camino".
