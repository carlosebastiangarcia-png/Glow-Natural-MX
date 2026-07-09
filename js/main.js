let currentFilter = 'todos';
let filteredProducts = [...products];
let currentProductModal = null;
let cantidadModalActual = 1;

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    renderCart();
    document.getElementById('search-input')?.addEventListener('input', e => filterBySearch(e.target.value));
});

// ============ PRODUCTOS ============
function renderProducts() {
    const grid = document.getElementById('productos-grid');
    if (!grid) return;
    if (filteredProducts.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#636e72;"><p style="font-size:3rem;">🔍</p><p>No se encontraron productos</p></div>`;
        return;
    }
    grid.innerHTML = filteredProducts.map(p => `
        <div class="producto-card" onclick="abrirProductoModal(${p.id})" style="cursor:pointer;">
            <div class="producto-imagen">
                <img src="${p.imagenes[0]}" alt="${p.nombre}" class="producto-thumb">
                ${p.badge ? `<span class="badge ${p.badge}">${p.badge === 'descuento' ? '-' + Math.round((1 - p.precio / p.precioOriginal) * 100) + '%' : p.badge === 'nuevo' ? 'NUEVO' : 'BEST SELLER'}</span>` : ''}
            </div>
            <div class="producto-info">
                <div class="producto-categoria">${p.categoria.replace('-', ' ')}</div>
                <div class="producto-nombre">${p.nombre}</div>
                <div class="producto-rating">⭐ ${p.rating} <span>(${p.reviews})</span></div>
                <div class="producto-precio">
                    ${p.precioOriginal ? `<span class="producto-precio-original">${formatCurrency(p.precioOriginal)}</span>` : ''}
                    ${formatCurrency(p.precio)}
                </div>
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${p.id})">+ Añadir al carrito</button>
            </div>
        </div>
    `).join('');
}

function normalizeCategories(cat) {
    return cat.split(',').map(c => c.trim().toLowerCase());
}

function filterByCategory(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.category === category));
    if (category === 'todos') filteredProducts = [...products];
    else filteredProducts = products.filter(p => normalizeCategories(p.categoria).includes(category));
    const term = document.getElementById('search-input').value.toLowerCase();
    if (term) filteredProducts = filteredProducts.filter(p => p.nombre.toLowerCase().includes(term) || p.descripcion.toLowerCase().includes(term));
    renderProducts();
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

function resetProductFilter() {
    currentFilter = 'todos';
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    filteredProducts = [...products];
    renderProducts();
}

function filterBySearch(term) {
    const t = term.toLowerCase();
    const base = currentFilter === 'todos' ? products : products.filter(p => normalizeCategories(p.categoria).includes(currentFilter));
    filteredProducts = base.filter(p => p.nombre.toLowerCase().includes(t) || p.descripcion.toLowerCase().includes(t));
    renderProducts();
}

// ============ CARRITO ============
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
}

// ============ MODAL PRODUCTO ============
function abrirProductoModal(id) {
    const p = products.find(x => x.id === id);
    if (!p) return;
    currentProductModal = p;
    cantidadModalActual = 1;

    document.getElementById('modal-categoria').textContent = p.categoria.replace('-', ' ').toUpperCase();
    document.getElementById('modal-nombre').textContent = p.nombre;
    document.getElementById('modal-rating').textContent = `⭐ ${p.rating}`;
    document.getElementById('modal-reviews').textContent = `(${p.reviews} reseñas)`;
    document.getElementById('modal-descripcion-larga').textContent = p.descriptionLarga;

    const po = document.getElementById('modal-precio-original');
    if (p.precioOriginal) { po.textContent = formatCurrency(p.precioOriginal); po.style.display = 'inline'; }
    else po.style.display = 'none';

    document.getElementById('modal-precio').textContent = formatCurrency(p.precio);

    const badgeEl = document.getElementById('modal-badge');
    if (p.badge === 'nuevo') badgeEl.innerHTML = `<span class="badge nuevo">NUEVO</span>`;
    else if (p.badge === 'descuento') badgeEl.innerHTML = `<span class="badge descuento">-${Math.round((1 - p.precio / p.precioOriginal) * 100)}%</span>`;
    else badgeEl.innerHTML = '';

    document.getElementById('modal-caracteristicas').innerHTML = p.caracteristicas.map(c => `<li>${c}</li>`).join('');
    document.getElementById('imagen-principal').innerHTML = `<img src="${p.imagenes[0]}" alt="${p.nombre}" style="width:100%;height:100%;object-fit:contain;">`;
    document.getElementById('imagenes-miniaturas').innerHTML = p.imagenes.map((img, i) => `
        <div class="miniatura ${i === 0 ? 'activa' : ''}" onclick="cambiarImagenPrincipal('${img}', this)">
            <img src="${img}" alt="Miniatura" style="width:100%;height:100%;object-fit:cover;">
        </div>
    `).join('');

    document.getElementById('cantidad-modal').value = 1;
    actualizarPrecioTotal();
    document.getElementById('product-modal').classList.add('active');
    document.getElementById('modal-overlay').classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
    document.getElementById('modal-overlay').classList.remove('active');
    currentProductModal = null;
}

function cambiarImagenPrincipal(img, el) {
    document.getElementById('imagen-principal').innerHTML = `<img src="${img}" alt="Producto" style="width:100%;height:100%;object-fit:contain;">`;
    document.querySelectorAll('.miniatura').forEach(m => m.classList.remove('activa'));
    el.classList.add('activa');
}

function incrementarCantidad() {
    const i = document.getElementById('cantidad-modal');
    i.value = parseInt(i.value) + 1;
    actualizarPrecioTotal();
}

function decrementarCantidad() {
    const i = document.getElementById('cantidad-modal');
    if (parseInt(i.value) > 1) { i.value = parseInt(i.value) - 1; actualizarPrecioTotal(); }
}

function actualizarPrecioTotal() {
    if (!currentProductModal) return;
    const q = parseInt(document.getElementById('cantidad-modal').value) || 1;
    document.getElementById('precio-total-modal').textContent = formatCurrency(currentProductModal.precio * q);
}

function agregarAlCarritoDesdeModal() {
    if (!currentProductModal) return;
    const q = parseInt(document.getElementById('cantidad-modal').value) || 1;
    for (let i = 0; i < q; i++) addToCart(currentProductModal.id);
    closeProductModal();
    if (!document.getElementById('cart-sidebar').classList.contains('active')) toggleCart();
}

// ============ CHECKOUT ============
function proceedToCheckout() {
    if (cart.length === 0) { alert('Tu carrito está vacío'); return; }
    document.getElementById('checkout-modal').classList.add('active');
    document.getElementById('modal-overlay').classList.add('active');
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) document.getElementById('email').value = savedEmail;
    updateCartTotal();
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.remove('active');
    document.getElementById('modal-overlay').classList.remove('active');
}

// ============ ENVIAR ORDEN → WHATSAPP ============
function submitOrder(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const cardNumber = document.getElementById('card-number').value;

    if (!email || !address || !cardNumber) { alert('Completa todos los campos'); return; }
    localStorage.setItem('userEmail', email);

    const total = cart.reduce((s, i) => s + i.precio * i.quantity, 0);
    const orderNumber = 'GN-' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Mensaje de WhatsApp con foto de productos + info
    let msg = `¡Hola Glow Natural MX! 🛍️\n\n`;
    msg += `📋 *Pedido:* ${orderNumber}\n`;
    msg += `📧 *Email:* ${email}\n`;
    msg += `📍 *Dirección:* ${address}\n`;
    msg += `💳 *Pago:* Tarjeta BBVA\n\n`;
    msg += `🛒 *Productos:*\n`;
    cart.forEach(item => {
        msg += `• ${item.nombre} x${item.quantity} - ${formatCurrency(item.precio * item.quantity)}\n`;
        if (item.imagenes && item.imagenes[0]) msg += `  📸 ${item.imagenes[0]}\n`;
    });
    msg += `\n💰 *TOTAL: ${formatCurrency(total)}*\n\n`;
    msg += `📎 Adjunto comprobante de pago BBVA y captura de éxito.`;

    const order = { email, address, orderNumber, total, date: new Date().toLocaleString('es-MX'), whatsappMsg: msg };
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    showOrderConfirmation(order);
}

// ============ CONFIRMACIÓN CON AVISO ============
function showOrderConfirmation(order) {
    closeCheckout();
    const modal = document.getElementById('checkout-modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.add('active');
    overlay.classList.add('active');

    const waLink = `https://wa.me/524439331744?text=${encodeURIComponent(order.whatsappMsg)}`;

    modal.innerHTML = `
        <div class="modal-content" style="text-align:center;">
            <button class="close-modal" onclick="finishOrder()">✕</button>
            <div style="font-size:4rem;">✅</div>
            <h2 style="color:#27ae60; margin-bottom:0.5rem;">¡Pago con éxito!</h2>
            <p style="color:#555; margin-bottom:1rem;">Pedido <strong>${order.orderNumber}</strong> · Total <strong>${formatCurrency(order.total)}</strong></p>

            <div style="background:#fff3cd; border:2px solid #ffc107; padding:1rem; border-radius:8px; margin-bottom:1.25rem; text-align:left;">
                <p style="font-weight:bold; color:#856404; margin-bottom:0.5rem;">⚠️ Sitio web en mantenimiento</p>
                <p style="font-size:0.95rem; color:#555;">
                    Para completar tu compra envía por WhatsApp al <strong>+52 443 933 1744</strong>:<br>
                    1. 📸 <strong>Captura de este pedido con éxito</strong><br>
                    2. 🧾 <strong>Comprobante de pago BBVA</strong><br>
                    3. 📷 <strong>Foto del producto</strong> que compraste
                </p>
            </div>

            <a href="${waLink}" target="_blank" rel="noopener"
               style="display:inline-block; background:#25D366; color:white; padding:0.9rem 1.5rem; border-radius:8px; text-decoration:none; font-weight:bold; margin-bottom:0.75rem; width:100%; box-sizing:border-box;">
                📲 Enviar por WhatsApp (+52 443 933 1744)
            </a>
            <button class="btn-secondary btn-full" onclick="finishOrder()">Volver a la tienda</button>
        </div>
    `;
}

function finishOrder() {
    clearCart();
    closeCheckout();
    const sidebar = document.getElementById('cart-sidebar');
    if (sidebar.classList.contains('active')) toggleCart();
    document.getElementById('checkout-form')?.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    location.reload();
}

document.addEventListener('click', (e) => {
    if (e.target.id === 'modal-overlay') { closeCheckout(); closeProductModal(); }
});




























































