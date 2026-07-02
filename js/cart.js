// Carrito manejado con localStorage
let cart = [];

// Cargar carrito del localStorage al iniciar
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function formatCurrency(value) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN'
    }).format(value);
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    renderCart();
    
    // Mostrar notificación visual
    showAddedNotification(product.nombre);
}

// Mostrar notificación al agregar
function showAddedNotification(productName) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 400;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = `✓ ${productName} agregado al carrito`;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

// Actualizar cantidad de items en el carrito
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveCart();
            renderCart();
        }
    }
}

// Remover producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Actualizar contador del carrito
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Renderizar items del carrito
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartFooter = document.querySelector('.cart-footer');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p style="font-size: 3rem; margin-bottom: 1rem;">🛒</p>
                <p>Tu carrito está vacío</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem;">Añade productos para comenzar</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }
    
    cartFooter.style.display = 'flex';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-imagen">${item.emoji}</div>
            <div class="cart-item-info">
                <div class="cart-item-nombre">${item.nombre}</div>
                <div class="cart-item-precio">${formatCurrency(item.precio)}</div>
                <div class="cart-item-cantidad">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <span style="min-width: 30px; text-align: center;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
        </div>
    `).join('');
    
    updateCartTotal();
}

// Calcular total del carrito
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
    document.getElementById('cart-total').textContent = formatCurrency(total);
    document.getElementById('order-total').textContent = formatCurrency(total);
    document.getElementById('pay-amount').textContent = formatCurrency(total);
    
    // Renderizar items en el formulario de checkout
    const orderItemsContainer = document.getElementById('order-items');
    orderItemsContainer.innerHTML = cart.map(item => `
        <div class="order-item">
            <span>${item.nombre} x${item.quantity}</span>
            <span>${formatCurrency(item.precio * item.quantity)}</span>
        </div>
    `).join('');
}

// Vaciar carrito
function clearCart() {
    cart = [];
    saveCart();
    renderCart();
}

// Agregar animación CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
