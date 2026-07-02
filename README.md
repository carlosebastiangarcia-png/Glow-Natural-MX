# Belleza Natural - Tienda Online

Una tienda online de cosméticos y productos de bienestar creada con HTML, CSS y JavaScript vanilla.

## Características

✨ **Catálogo de Productos**
- 12 productos de belleza y bienestar
- Imágenes, descripciones y precios
- Badges (NUEVO, BEST SELLER, descuentos)
- Sistema de ratings y reseñas

🔍 **Búsqueda y Filtros**
- Búsqueda en tiempo real por nombre o descripción
- Filtros por categoría:
  - Maquillaje
  - Cuidado de la Piel
  - Fragancias
  - Cabello
  - Bienestar

🛒 **Carrito de Compras**
- Agregar/quitar productos
- Aumentar/disminuir cantidad
- Carrito persistente (usa localStorage)
- Visualización en sidebar lateral

💳 **Checkout Funcional**
- Formulario de información de envío
- Múltiples opciones de pago:
  - Tarjeta de crédito (Stripe)
  - PayPal
  - Mercado Pago
- Confirmación de pedido
- Historial de pedidos en localStorage

📱 **Diseño Responsive**
- Optimizado para móvil, tablet y desktop
- Interfaz moderna y atractiva
- Colores: Rosa (#e81b6f) y Vino (#8b0a2e)

## Estructura del Proyecto

```
tienda-belleza/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── js/
│   ├── products.js     # Datos de productos
│   ├── cart.js         # Lógica del carrito
│   └── main.js         # Lógica principal
└── README.md           # Este archivo
```

## Cómo Usar

1. **Abrir la tienda**
   - Abre `index.html` en tu navegador web

2. **Navegar productos**
   - Usa los filtros para ver categorías específicas
   - Busca productos por nombre

3. **Agregar al carrito**
   - Haz click en "+ Añadir al carrito"
   - Ve el contador actualizado en el botón del carrito

4. **Ver carrito**
   - Haz click en el botón "🛒 Carrito" en la parte superior derecha
   - Ajusta cantidades o remove items

5. **Realizar compra**
   - Haz click en "Proceder al pago"
   - Completa el formulario con:
     - Email
     - Dirección de envío
     - Método de pago
   - Haz click en "Pagar"

6. **Confirmación**
   - Recibirás un número de pedido único
   - Los datos se guardan en localStorage

## Datos Persistentes

La aplicación usa **localStorage** para guardar:
- **Carrito actual**: Se mantiene aunque cierres el navegador
- **Email**: Se guarda para acelerar compras futuras
- **Historial de pedidos**: Se conserva para referencia

## Productos Disponibles

1. Base de Maquillaje Sedosa - $24.99
2. Crema Hidratante 24h - $18.50
3. Perfume Hombre Black Code - $55.00
4. Paleta de Sombras Sunset - $32.00
5. Shampoo Reparador de Argán - $15.99
6. Aceite Corporal Relajante - $28.00
7. Mascarilla Facial Detox - $9.90
8. Suplemento Colágeno + Biotina - $32.00
9. Lápiz Labial Matte Premium - $16.50
10. Serum Facial Vitamina C - $29.99
11. Máscara de Pestañas Volumizadora - $14.99
12. Champú Seco en Polvo - $12.50

## Personalización

### Cambiar colores
En `styles.css`, actualiza estas variables CSS:
```css
:root {
    --primary-color: #e81b6f;      /* Rosa */
    --secondary-color: #8b0a2e;    /* Vino */
    --text-dark: #2d3436;          /* Texto oscuro */
    --text-light: #636e72;         /* Texto claro */
}
```

### Agregar productos
En `js/products.js`, agrega nuevos objetos al array `products`:
```javascript
{
    id: 13,
    nombre: "Mi Nuevo Producto",
    categoria: "maquillaje",
    precio: 25.00,
    precioOriginal: null,
    rating: 4.5,
    reviews: 100,
    descripcion: "Descripción del producto",
    emoji: "💄",
    badge: null
}
```

### Cambiar nombre de la tienda
En `index.html`, busca "Belleza Natural" y cámbialo por tu nombre.

## Funcionalidades Técnicas

### JavaScript Modular
- `products.js`: Data de productos
- `cart.js`: Gestión del carrito con localStorage
- `main.js`: Lógica de UI y eventos

### Sin dependencias externas
- HTML5 puro
- CSS3 con variables CSS
- JavaScript vanilla (ES6+)

### Características avanzadas
- Búsqueda en tiempo real
- Filtrado dinámico
- Carrito persistente
- Validación de formularios
- Animaciones suaves
- Notificaciones visuales

## Próximas mejoras sugeridas

Para un proyecto más completo, considera:
- Backend con Node.js/Express
- Base de datos (MongoDB, PostgreSQL)
- Integración real de pagos (Stripe API)
- Sistema de autenticación de usuarios
- Panel de administración
- Envío de emails automáticos
- Reviews/comentarios de clientes

## Licencia

Libre para uso personal y comercial.

---

¡Espero que disfrutes tu tienda de belleza online! 💄✨
