export default function cart(codigo) {
    async function loadCart() {
        try {
            let response = await fetch('productos/productos.json'); // Cargar JSON
            let productosData = await response.json(); // Convertir a objeto JS
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            let container = document.getElementById('cart_p_items');
            let totalPrecio = 0;
            
            container.innerHTML = ""; // Limpiar antes de renderizar
    
            carrito.forEach((item, index) => {
                let producto = productosData.find(p => p.codigo === item.id); // Buscar en JSON
                if (!producto) return; // Si el producto no existe, ignorar
    
                let total = producto.precio * item.cantidad;
                totalPrecio += total;
    
                container.innerHTML += `
                    <div class="cart_p_item">
                        <img src="${producto.media[0].url}" alt="${producto.nombre}" class="cart_p_img">
                        <div class="cart_p_info">
                            <h3 class="cart_p_name">${producto.nombre}</h3>
                            <p class="cart_p_price">Precio: $${producto.precio}</p>
                           <div id="cart_p_item_${index}" class="cart_p_quantity">
                                <button ><i class="fas fa-minus"></i></button>
                                <span id="cart_p_quantity_${index}">${item.cantidad}</span>
                                <button ><i class="fas fa-plus"></i></button>
                            </div>
                            <p class="cart_p_total-item">Total: $${total}</p>
                            <button class="cart_p_remove" onclick="removeFromCart(${index})">
                                <i class="fas fa-trash"></i> Eliminar
                            </button>
                           
                        </div>
                    </div>
                `;
            });
    
            document.getElementById('cart_p_total').innerText = `Total: $${totalPrecio}`;
        } catch (error) {
            console.error("Error cargando productos:", error);
        }
    }
    
     loadCart();
    
}
