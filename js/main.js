// Variables globales
let currentFilter = 'todos';
let filteredProducts = [...products];
let currentProductModal = null;
let cantidadModalActual = 1;

// Inicializar cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    setupEventListeners();
    initHeroSlider();
});

// Configurar event listeners
function setupEventListeners() {
    // Búsqueda en tiempo real
    document.getElementById('search-input').addEventListener('input', (e) => {
        filterBySearch(e.target.value);
    });

    document.getElementById('hero-prev')?.addEventListener('click', () => changeHeroSlide(-1));
    document.getElementById('hero-next')?.addEventListener('click', () => changeHeroSlide(1));
}

// Chat widget helper functions
function toggleChatWidget() {
    const panel = document.getElementById('chat-panel');
    if (!panel) return;
    panel.classList.toggle('active');
    panel.setAttribute('aria-hidden', panel.classList.contains('active') ? 'false' : 'true');
}

function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input?.value.trim();
    if (!message) return;

    appendChatMessage('user', message);
    input.value = '';
    setTimeout(() => {
        const response = getChatBotResponse(message);
        appendChatMessage('bot', response);
    }, 500);
}

function sendQuickReply(text) {
    const input = document.getElementById('chat-input');
    if (input) {
        input.value = text;
    }
    sendChatMessage();
}

function appendChatMessage(sender, text) {
    const messages = document.getElementById('chat-messages');
    if (!messages) return;

    const messageEl = document.createElement('div');
    messageEl.className = `chat-message ${sender}`;
    messageEl.innerHTML = `<div class="message-text">${text}</div>`;
    messages.appendChild(messageEl);
    messages.scrollTop = messages.scrollHeight;
}

function getChatBotResponse(message) {
    const normalized = message.toLowerCase();

    if (normalized.includes('envío') || normalized.includes('envios') || normalized.includes('costo')) {
        return 'Nuestros envíos en México suelen tardar 2-4 días hábiles. Si necesitas entrega express, contáctanos por WhatsApp.';
    }
    if (normalized.includes('pago') || normalized.includes('tarjeta') || normalized.includes('paypal') || normalized.includes('mercado')) {
        return 'Aceptamos pago con tarjeta, PayPal y Mercado Pago. También puedes pagar por transferencia o depósito bancario si prefieres.';
    }
    if (normalized.includes('internacional') || normalized.includes('internacionales')) {
        return 'Sí, hacemos envíos internacionales a algunos países. Envíanos un mensaje por WhatsApp para darte el costo exacto.';
    }
    if (normalized.includes('precio') || normalized.includes('cuesta') || normalized.includes('costo')) {
        return 'Los precios de cada producto están visibles en la tienda. Si quieres ayuda con un producto específico, escríbelo y te lo confirmo.';
    }
    return 'Gracias por tu mensaje. En breve te responderemos. Mientras tanto, puedes contactarnos por WhatsApp al +52 443 933 1744.';
}

const heroSliderState = {
    currentIndex: 0,
    intervalId: null,
};

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.getElementById('hero-indicators');

    if (!slides.length || !indicators) return;

    slides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.className = 'hero-indicator' + (index === 0 ? ' active' : '');
        dot.type = 'button';
        dot.addEventListener('click', () => setHeroSlide(index));
        indicators.appendChild(dot);
    });

    heroSliderState.intervalId = setInterval(() => changeHeroSlide(1), 5000);
}

function setHeroSlide(index) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-indicator');

    if (!slides.length) return;

    const normalizedIndex = (index + slides.length) % slides.length;
    heroSliderState.currentIndex = normalizedIndex;

    slides.forEach((slide, slideIndex) => {
        slide.classList.toggle('active', slideIndex === normalizedIndex);
    });

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === normalizedIndex);
    });
}

function changeHeroSlide(direction) {
    setHeroSlide(heroSliderState.currentIndex + direction);
}

function formatCurrency(value) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(value);
}

function isVideoMedia(value) {
    if (typeof value !== 'string') return false;
    return /\.(mp4|webm|ogg)$/i.test(value) || value.includes('productVideo') || value.includes('video');
}

function getFirstImageUrl(mediaItems) {
    return mediaItems.find(item => !isVideoMedia(item)) || mediaItems[0];
}

function renderMediaElement(mediaItem, altText, className = '') {
    if (isVideoMedia(mediaItem)) {
        return `
            <video class="producto-media ${className}" controls preload="metadata" playsinline>
                <source src="${mediaItem}" type="video/mp4">
            </video>
        `;
    }

    return `<img src="${mediaItem}" alt="${altText}" class="producto-media ${className}">`;
}

// Renderizar productos en la grid
function renderProducts() {
    const grid = document.getElementById('productos-grid');
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #636e72;">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🔍</p>
                <p>No se encontraron productos</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="producto-card" onclick="abrirProductoModal(${product.id})" style="cursor: pointer;">
            <div class="producto-imagen">
                ${renderMediaElement(getFirstImageUrl(product.imagenes), product.nombre, 'producto-thumb')}
                ${product.badge ? `<span class="badge ${product.badge === 'descuento' ? 'descuento' : product.badge === 'nuevo' ? 'nuevo' : ''}">${
                    product.badge === 'descuento' ? '-' + Math.round((1 - product.precio / product.precioOriginal) * 100) + '%' :
                    product.badge === 'nuevo' ? 'NUEVO' :
                    'BEST SELLER'
                }</span>` : ''}
            </div>
            <div class="producto-info">
                <div class="producto-categoria">${product.categoria.replace('-', ' ')}</div>
                <div class="producto-nombre">${product.nombre}</div>
                <div class="producto-rating">
                    ⭐ ${product.rating}
                    <span>(${product.reviews})</span>
                </div>
                <div class="producto-precio">
                    ${product.precioOriginal ? `<span class="producto-precio-original">${formatCurrency(product.precioOriginal)}</span>` : ''}
                    ${formatCurrency(product.precio)}
                </div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">+ Añadir al carrito</button>
            </div>
        </div>
    `).join('');
}

// Filtrar por categoría
function normalizeCategories(categoria) {
    return categoria
        .split(',')
        .map(item => item.trim().toLowerCase());
}

// Mostrar solo un producto por id
function showOnlyProduct(productId) {
    currentFilter = 'solo';
    // Limpiar estado de botones de categoría
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

    filteredProducts = products.filter(p => p.id === productId);
    renderProducts();
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function resetProductFilter() {
    currentFilter = 'todos';
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.category === 'todos'));
    filteredProducts = [...products];
    renderProducts();
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function filterByCategory(category) {
    currentFilter = category;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Filtrar productos
    if (category === 'todos') {
        filteredProducts = [...products];
    } else if (category === 'mujeres') {
        filteredProducts = products.filter(p => !normalizeCategories(p.categoria).includes('hombres'));
    } else {
        filteredProducts = products.filter(p => normalizeCategories(p.categoria).includes(category));
    }
    
    // Aplicar búsqueda si existe
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(p =>
            p.nombre.toLowerCase().includes(searchTerm) ||
            p.descripcion.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts();
    
    // Scroll suave a los productos
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Filtrar por búsqueda
function filterBySearch(searchTerm) {
    const term = searchTerm.toLowerCase();
    
    if (currentFilter === 'todos') {
        filteredProducts = products.filter(p =>
            p.nombre.toLowerCase().includes(term) ||
            p.descripcion.toLowerCase().includes(term) ||
            normalizeCategories(p.categoria).some(cat => cat.includes(term))
        );
    } else {
        filteredProducts = products.filter(p =>
            normalizeCategories(p.categoria).includes(currentFilter) &&
            (p.nombre.toLowerCase().includes(term) ||
             p.descripcion.toLowerCase().includes(term))
        );
    }
    
    renderProducts();
}

// Toggle del carrito lateral
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('active');
}

// Abrir modal de checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const modal = document.getElementById('checkout-modal');
    const overlay = document.getElementById('modal-overlay');
    
    modal.classList.add('active');
    overlay.classList.add('active');
    
    // Llenar datos del formulario si existen
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
}

// Cerrar modal de checkout
function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    const overlay = document.getElementById('modal-overlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Enviar orden
function submitOrder(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    
    // Validaciones básicas
    if (!email || !address) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    // Guardar email para próximos pedidos
    localStorage.setItem('userEmail', email);
    
    // Calcular total
    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
    
    // Crear resumen del pedido
    const orderSummary = {
        email: email,
        address: address,
        paymentMethod: paymentMethod,
        items: cart.map(item => ({
            nombre: item.nombre,
            cantidad: item.quantity,
            precio: item.precio,
            total: item.precio * item.quantity
        })),
        total: total,
        date: new Date().toLocaleString('es-ES'),
        orderNumber: 'BN-' + Math.random().toString(36).substr(2, 9).toUpperCase()
    };
    
    // Guardar orden en localStorage
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(orderSummary);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Mostrar confirmación
    showOrderConfirmation(orderSummary);
}

// Mostrar confirmación de orden
function showOrderConfirmation(order) {
    closeCheckout();
    
    const modal = document.getElementById('checkout-modal');
    const overlay = document.getElementById('modal-overlay');
    
    modal.classList.add('active');
    overlay.classList.add('active');
    
    // Crear HTML de confirmación
    const confirmationHTML = `
        <div class="modal-content" style="text-align: center;">
            <button class="close-modal" onclick="closeCheckout()">✕</button>
            <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
            <h2 style="color: #27ae60; margin-bottom: 1rem;">¡Pedido Confirmado!</h2>
            
            <div style="background-color: #f5f5f5; padding: 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: left;">
                <p><strong>Número de pedido:</strong> ${order.orderNumber}</p>
                <p><strong>Email:</strong> ${order.email}</p>
                <p><strong>Dirección:</strong> ${order.address}</p>
                <p><strong>Método de pago:</strong> ${order.paymentMethod === 'stripe' ? 'Tarjeta' : order.paymentMethod === 'paypal' ? 'PayPal' : 'Mercado Pago'}</p>
                <p><strong>Fecha:</strong> ${order.date}</p>
                <hr style="margin: 1rem 0;">
                <p style="font-weight: bold; color: #e81b6f; font-size: 1.25rem;">Total: ${formatCurrency(order.total)}</p>
            </div>
            
            <p style="color: #636e72; margin-bottom: 1.5rem;">
                Se ha enviado un email de confirmación a <strong>${order.email}</strong><br>
                Tu pedido llegará en 24-48 horas
            </p>
            
            <button class="btn-primary btn-full" onclick="finishOrder()" style="margin-bottom: 1rem;">Volver a la tienda</button>
        </div>
    `;
    
    modal.innerHTML = confirmationHTML;
}

// Finalizar orden
function finishOrder() {
    clearCart();
    closeCheckout();
    toggleCart();
    
    // Resetear formulario
    document.getElementById('checkout-form').reset();
    
    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Mostrar notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 400;
    `;
    notification.textContent = '✓ Gracias por tu compra!';
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 4000);
}

// Cerrar modal al hacer click fuera
document.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') {
        closeCheckout();
        closeProductModal();
    }
});

// Prevenir que el carrito se cierre al interactuar
document.addEventListener('click', (e) => {
    if (!e.target.closest('.cart-sidebar') && 
        !e.target.closest('.cart-btn') &&
        !e.target.classList.contains('cart-btn')) {
        // No cerrar el carrito
    }
});

// ===== FUNCIONES PARA MODAL DE PRODUCTO =====

// Abrir modal de producto
function abrirProductoModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProductModal = product;
    cantidadModalActual = 1;
    
    // Llenar datos del modal
    document.getElementById('modal-categoria').textContent = product.categoria.replace('-', ' ').toUpperCase();
    document.getElementById('modal-nombre').textContent = product.nombre;
    document.getElementById('modal-rating').textContent = `⭐ ${product.rating}`;
    document.getElementById('modal-reviews').textContent = `(${product.reviews} reseñas)`;
    document.getElementById('modal-descripcion-larga').textContent = product.descriptionLarga;
    
    // Precio
    const precioOriginalEl = document.getElementById('modal-precio-original');
    if (product.precioOriginal) {
        precioOriginalEl.textContent = formatCurrency(product.precioOriginal);
        precioOriginalEl.style.display = 'inline';
    } else {
        precioOriginalEl.style.display = 'none';
    }
    
    document.getElementById('modal-precio').textContent = formatCurrency(product.precio);
    
    // Badge
    const badgeEl = document.getElementById('modal-badge');
    if (product.badge === 'descuento') {
        const descuento = Math.round((1 - product.precio / product.precioOriginal) * 100);
        badgeEl.innerHTML = `<span class="badge descuento">-${descuento}%</span>`;
    } else if (product.badge === 'nuevo') {
        badgeEl.innerHTML = `<span class="badge nuevo">NUEVO</span>`;
    } else if (product.badge === 'bestseller') {
        badgeEl.innerHTML = `<span class="badge">BEST SELLER</span>`;
    } else {
        badgeEl.innerHTML = '';
    }
    
    // Características
    const caracteristicasHTML = product.caracteristicas
        .map(car => `<li>${car}</li>`)
        .join('');
    document.getElementById('modal-caracteristicas').innerHTML = caracteristicasHTML;
    
    // Galería de imágenes
    document.getElementById('imagen-principal').innerHTML = renderMediaElement(product.imagenes[0], product.nombre, 'media-principal');
    
    const miniaturas = product.imagenes
        .map((item, index) => `
            <div class="miniatura ${index === 0 ? 'activa' : ''}" onclick="cambiarImagenPrincipal('${item}', this)">
                ${renderMediaElement(item, `Miniatura ${product.nombre}`, 'miniatura-media')}
            </div>
        `)
        .join('');
    document.getElementById('imagenes-miniaturas').innerHTML = miniaturas;
    
    // Cantidad y precio total
    document.getElementById('cantidad-modal').value = 1;
    actualizarPrecioTotal();
    
    // Abrir modal
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Cerrar modal de producto
function closeProductModal() {
    const modal = document.getElementById('product-modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    currentProductModal = null;
}

// Cambiar imagen principal
function cambiarImagenPrincipal(mediaItem, element) {
    document.getElementById('imagen-principal').innerHTML = renderMediaElement(mediaItem, 'Imagen del producto', 'media-principal');
    
    // Actualizar activa
    document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('activa'));
    element.classList.add('activa');
}

// Incrementar cantidad en modal
function incrementarCantidad() {
    const input = document.getElementById('cantidad-modal');
    input.value = parseInt(input.value) + 1;
    cantidadModalActual = parseInt(input.value);
    actualizarPrecioTotal();
}

// Decrementar cantidad en modal
function decrementarCantidad() {
    const input = document.getElementById('cantidad-modal');
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        cantidadModalActual = parseInt(input.value);
        actualizarPrecioTotal();
    }
}

// Actualizar precio total según cantidad
function actualizarPrecioTotal() {
    if (!currentProductModal) return;
    
    cantidadModalActual = parseInt(document.getElementById('cantidad-modal').value) || 1;
    const total = currentProductModal.precio * cantidadModalActual;
    document.getElementById('precio-total-modal').textContent = formatCurrency(total);
}

// Agregar al carrito desde modal
function agregarAlCarritoDesdeModal() {
    if (!currentProductModal) return;
    
    const cantidad = parseInt(document.getElementById('cantidad-modal').value) || 1;
    
    // Agregar varias veces si la cantidad es mayor a 1
    for (let i = 0; i < cantidad; i++) {
        addToCart(currentProductModal.id);
    }
    
    // Cerrar modal
    closeProductModal();
    
    // Mostrar carrito
    const sidebar = document.getElementById('cart-sidebar');
    if (!sidebar.classList.contains('active')) {
        toggleCart();
    }
}





























































