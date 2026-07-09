let cart = [];

function loadCart() {
    const saved = localStorage.getItem('cart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function formatCurrency(value) {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(i => i.id === productId);
    if (existing) existing.quantity += 1;
    else cart.push({ ...product, quantity: 1 });
    saveCart();
    renderCart();
    showAddedNotification(product.nombre);
}

function showAddedNotification(name) {
    const n = document.createElement('div');
    n.style.cssText = `position:fixed;top:20px;right:20px;background:#27ae60;color:white;padding:1rem 1.5rem;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.2);z-index:400;`;
    n.textContent = `✓ ${name} agregado al carrito`;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 3000);
}

function updateQuantity(id, qty) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    if (qty <= 0) removeFromCart(id);
    else { item.quantity = qty; saveCart(); renderCart(); }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function updateCartCount() {
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    const el = document.getElementById('cart-count');
    if (el) el.textContent = count;
}

function renderCart() {
    const container = document.getElementById('cart-items');
    const footer = document.querySelector('.cart-footer');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart"><p style="font-size:3rem;">🛒</p><p>Tu carrito está vacío</p></div>`;
        if (footer) footer.style.display = 'none';
        return;
    }
    if (footer) footer.style.display = 'flex';

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-imagen"><img src="${item.imagenes[0]}" alt="${item.nombre}" style="width:60px;height:60px;object-fit:cover;border-radius:6px;"></div>
            <div class="cart-item-info">
                <div class="cart-item-nombre">${item.nombre}</div>
                <div class="cart-item-precio">${formatCurrency(item.precio)}</div>
                <div class="cart-item-cantidad">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span style="min-width:30px;text-align:center;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
    updateCartTotal();
}

function updateCartTotal() {
    const total = cart.reduce((s, i) => s + i.precio * i.quantity, 0);
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set('cart-total', formatCurrency(total));
    set('order-total', formatCurrency(total));
    set('pay-amount', formatCurrency(total));

    const orderItems = document.getElementById('order-items');
    if (orderItems) {
        orderItems.innerHTML = cart.map(i => `
            <div class="order-item"><span>${i.nombre} x${i.quantity}</span><span>${formatCurrency(i.precio * i.quantity)}</span></div>
        `).join('');
    }
}

function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}
