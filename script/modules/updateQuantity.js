export default function updateQuantity(index, change){
    function updateQuantity(index, change) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
        carrito[index].cantidad += change; // Aumenta o reduce cantidad
        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1); // Si la cantidad es 0, eliminar producto
        }
    
        localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar cambios
    
        // 🟢 Actualizar solo la cantidad en el DOM sin recargar
        const quantityElement = document.querySelector(`#cart_p_quantity_${index} span`);
        if (quantityElement) {
            if (carrito[index]) {
                quantityElement.textContent = carrito[index].cantidad;
            } else {
                // Si el producto fue eliminado, quitarlo del DOM
                document.querySelector(`#cart_p_item_${index}`).remove();
            }
        }
    }
    updateQuantity(index, change);
}