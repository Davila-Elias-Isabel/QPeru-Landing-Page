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
3. **Red Global**: Conexión con QWorld y QCousins
4. **Comunidad**: A quién va dirigida (Estudiantes, Profesionales, Comunidades)
5. **Agenda**: Próximas actividades
6. **Únete**: Llamada a acción con QR de WhatsApp

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
├── index.html           # Estructura HTML
├── styles.css           # Estilos y responsive
├── script.js            # Funcionalidad (scroll, reveal)
├── README.md            # Este archivo
├── assets/
│   ├── logo1.png       # Logo vertical (Hero) - 1200×1219px
│   ├── logo2.png       # Logo horizontal (Navbar)
│   ├── icon.png        # Isotipo (favicon)
│   └── wa-qr.png       # QR WhatsApp
└── .git/                # Versionado con Git
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
# Servir localmente
python3 -m http.server 8000

# Abrir en navegador
http://localhost:8000
```

## ✨ Cambios Implementados

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
- ✅ Secciones: Misión, Actividades, Red Global, Comunidad, Agenda, Únete

## 🎓 Stack Tecnológico

- **HTML5**: Semántica moderna
- **CSS3**: Custom properties, Grid, Flexbox, Media queries
- **JavaScript Vanilla**: Scroll reveal, animaciones
- **Google Fonts**: Archivo, Archivo Black, IBM Plex Mono
- **SVG**: Circuito cuántico con animaciones
- **Git + GitHub**: Control de versiones
- **Vercel**: Hosting y deployment automático

## 👩‍💻 Autor

**Isabel Dávila Elías**  

---

**QPerú** es parte de **QCousins**, la red de comunidades locales de **QWorld**.  
🌐 [qworld.net](https://qworld.net)

**Última actualización**: Julio 2026
