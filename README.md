# QPerú — Landing Page

Landing page moderna y responsive para **QPerú**, la comunidad peruana de computación cuántica y división peruana de QCousins (QWorld).

## 🎯 Características

### Navbar
- **Logo horizontal** (logo2.png): isotipo + texto "QPerú >" 
- **Altura**: 138px en desktop
- **Navegación**: Enlaces a Misión, Actividades, Red global, Comunidad
- **CTA**: Botón rojo "Únete" en esquina derecha
- **Responsive**: Se colapsa a móvil con navegación oculta

### Hero Section
- **Composición**: Grid 52% texto / 48% logo
- **Altura**: Ocupa 100% de pantalla visible (calc(100vh - 138px))
- **Texto izquierda**:
  - Breadcrumb rojo: "QWorld → QCousins → QPerú"
  - Título grande (84px máx): "Democratizamos la computación **cuántica** en el Perú"
  - Palabra "cuántica" en rojo, resto en negro
  - Subtítulo gris (19px): describe la comunidad
  - Dos botones: rojo sólido + blanco con borde rojo
- **Logo derecha**:
  - Logo vertical grande (logo1.png): isotipo + texto "QPerú"
  - Tamaño: min(88%, 560px) - responsivo sin deformaciones
  - Centrado en su contenedor

### Banda Decorativa
- SVG con circuito cuántico y animación de trazado
- Separador visual entre Hero y secciones siguientes

### Secciones de Contenido
1. **Misión**: Propósito y valores (Abierta, Global, Trilingüe)
2. **Actividades**: Talleres, Charlas, Comunidad activa (3 cards)
3. **Cursos**: 3 cursos de computación cuántica (data-driven)
4. **Red Global**: Conexión con QWorld y QCousins
5. **Comunidad**: A quién va dirigida (Estudiantes, Profesionales, Comunidades)
6. **Agenda**: Próximas actividades
7. **Equipo**: Fundadores María Julia Pajares y Renzo Cienfuegos + posición abierta (data-driven)
8. **Recursos**: 4 recursos gratuitos (data-driven)
9. **Únete**: QR de WhatsApp centrado en fondo rojo

### Footer
- Información: "QPerú — división peruana de QCousins, parte de QWorld"
- Copyright: "© 2026 QPerú"
- Créditos:
  - "QPerú — Comunidad peruana de computación cuántica"
  - "Hecho por Isabel Dávila Elías · © 2026 QPerú"

## 🎨 Diseño Visual

### Colores
- **Rojo principal**: #8B0000 (marca QPerú)
- **Rojo oscuro**: #5C0000 (hover)
- **Tinta**: #121316 (texto principal)
- **Gris**: #5E5F66 (texto secundario)
- **Humo**: #F7F6F3 (fondos claros)
- **Blanco**: #FFFFFF (fondo)

### Tipografía
- **Display**: Archivo Black (títulos)
- **Cuerpo**: Archivo (texto)
- **Mono**: IBM Plex Mono (etiquetas, notación cuántica)

### Proporciones (Desktop 1536×1024)
- Navbar: 138px
- Hero: ~850px (ocupa 100vh - navbar)
- Contenido: max-width 1680px, padding 60px horizontal
- Texto Hero: max-width 700px
- Logo Hero: max-width 560px

## 📱 Responsive

### Desktop (≥1100px)
- Grid 52% / 48% (texto / logo)
- Título: 84px
- Logo: 560px
- Padding: 60px

### Tablet (1100px - 700px)
- Grid: 1 columna
- Título: 48px
- Logo: 420px
- Padding: 40px
- Navbar: 96px

### Mobile (<700px)
- Grid: 1 columna vertical
- Título: 34-48px
- Logo: 320px
- Padding: 24px
- Menú: oculto
- Botones: apilados verticales

## 📁 Estructura de Archivos

```
qperu-landing/
├── src/
│   ├── main.jsx                      # Punto de entrada React
│   ├── App.jsx                       # Componente raíz
│   ├── index.css                     # Estilos (copiado tal cual de styles.css)
│   ├── components/
│   │   ├── Navbar.jsx               # Navegación + Logo
│   │   ├── Hero.jsx                 # Sección principal
│   │   ├── CircuitBand.jsx          # SVG circuito cuántico
│   │   ├── Mission.jsx              # Misión y valores
│   │   ├── Activities.jsx           # 3 actividades
│   │   ├── Cursos.jsx               # 3 cursos (data-driven)
│   │   ├── RedGlobal.jsx            # Red QWorld/QCousins
│   │   ├── Comunidad.jsx            # Audiencias (data-driven)
│   │   ├── Agenda.jsx               # Próximas actividades
│   │   ├── Equipo.jsx               # Fundadores (data-driven)
│   │   ├── Recursos.jsx             # Recursos gratuitos (data-driven)
│   │   ├── Unete.jsx                # QR WhatsApp
│   │   └── Footer.jsx               # Pie de página
│   ├── hooks/
│   │   └── useReveal.js             # Hook IntersectionObserver + prefers-reduced-motion
│   └── assets/
│       ├── logo1.png                # Logo vertical (Hero) - 1200×1219px
│       ├── logo2.png                # Logo horizontal (Navbar)
│       └── wa-qr.png                # QR WhatsApp
├── public/
│   ├── favicon.png                  # Favicon (placeholder)
│   └── og-image.png                 # OG Image (placeholder)
├── index.html                       # Vite entry point
├── vite.config.js                   # Configuración Vite
├── package.json                     # Dependencias
├── .eslintrc.cjs                    # Eslint config
├── .gitignore                       # Git ignore
├── MIGRATION.md                     # Notas de migración
├── README.md                        # Este archivo
└── .git/                            # Versionado con Git
```

## 🔧 Especificaciones Técnicas

### CSS Variables
```css
:root {
  --maxw: 1680px;           /* ancho máximo contenedor */
  --pad-x: 60px;            /* padding horizontal */
  --rojo: #8B0000;
  --tinta: #121316;
  --gris: #5E5F66;
  --blanco: #FFFFFF;
  --humo: #F7F6F3;
  --linea: #E7E5E0;
  --f-display: "Archivo Black";
  --f-body: "Archivo";
  --f-mono: "IBM Plex Mono";
}
```

### Animaciones
- **Circuito cuántico**: Trazado SVG (1.4s) + aparición de elementos (0.5s)
- **Reveal al scroll**: Fade-in + translateY para elementos con clase `.reveal-group`
- **Hover**: Transiciones suaves en botones y enlaces

### Accesibilidad
- Semántica HTML5 correcta
- Focus visible rings (3px rojo)
- ARIA labels en elementos interactivos
- Meta tags para SEO y redes sociales

## 🚀 Deployment

### Vercel
Conectado a rama `main` de GitHub. Cada push auto-despliega en:
```
https://qperu.vercel.app
```

### Desarrollo Local
```bash
# Instalar dependencias
npm install

# Servir localmente (puerto 5173)
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview

# Lint
npm run lint

# Abrir en navegador
http://localhost:5173
```

## ✨ Cambios Implementados

### Diseño & Contenido
- ✅ Hero redimensionado a pantalla completa (100vh - 138px)
- ✅ Logo1 (vertical) en hero: 560px, responsivo
- ✅ Logo2 (horizontal) en navbar: 240px máx
- ✅ Grid 52/48 para balance visual perfecto
- ✅ Título 84px con max-width 12ch para quiebre correcto
- ✅ Subtítulo actualizado: "talleres, eventos, recursos y colaboración global"
- ✅ Botón "Conoce más" con borde y texto rojos
- ✅ SVG del circuito cuántico movido fuera del hero
- ✅ Footer con créditos y autor
- ✅ Responsive completo (desktop, tablet, mobile)
- ✅ Secciones: Misión, Actividades, Cursos, Red Global, Comunidad, Agenda, Equipo, Recursos, Únete

### Migración a React (Julio 2026)
- ✅ Migración completa de HTML/CSS/JS vanilla a React 18 + Vite 5
- ✅ 14 componentes funcionales reutilizables
- ✅ Hook personalizado `useReveal` para scroll-reveal animations
- ✅ Componentes data-driven (Cursos, Equipo, Recursos, Comunidad, Activities)
- ✅ Estilos CSS preservados 100% (copiados a src/index.css)
- ✅ Fundadores: María Julia Pajares y Renzo Cienfuegos
- ✅ Sección Contacto removida
- ✅ Sección Únete simplificada: solo QR de WhatsApp

## 🎓 Stack Tecnológico

- **React 18.3.1**: Componentes funcionales con hooks
- **Vite 5.1.0**: Bundler y dev server
- **CSS3**: Custom properties, Grid, Flexbox, Media queries (copiado tal cual)
- **JavaScript/JSX**: Componentes reutilizables, useReveal hook personalizado
- **Google Fonts**: Archivo, Archivo Black, IBM Plex Mono
- **SVG**: Circuito cuántico con animaciones
- **Git + GitHub**: Control de versiones
- **Vercel**: Hosting y deployment automático (auto-deploy en main)

## 📊 Datos Hardcodeados

Los datos están directamente en los componentes React como arrays:

- **Cursos.jsx**: Array de 3 cursos con títulos, descripciones, estadísticas
- **Equipo.jsx**: Array de fundadores y posiciones abiertas
- **Recursos.jsx**: Array de 4 recursos gratuitos
- **Comunidad.jsx**: Array de 3 audiencias objetivo
- **Activities.jsx**: Array de 3 actividades (Talleres, Charlas, Comunidad)

Para editar datos:
1. Abre el archivo del componente (`src/components/NombreComponente.jsx`)
2. Localiza el array de datos
3. Edita los valores
4. Haz push a `main` → Vercel redeploya automáticamente

Ejemplo:
```jsx
const cursos = [
  {
    id: 1,
    title: 'Nombre del curso',
    description: 'Descripción...',
    stats: [...]
  }
]
```

## 👥 Equipo

**Fundadores:**
- **María Julia Pareja** - Fundadora
- **Renzo Cienfuegos** - Fundador

---

**QPerú** es parte de **QCousins**, la red de comunidades locales de **QWorld**.  
🌐 [qworld.net](https://qworld.net)

**Última actualización**: Julio 2026 (Migración a React 18 + Vite 5)
