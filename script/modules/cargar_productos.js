export default function cargar(){
    function cargarProductos() {
        fetch("productos/productos.json") // Asegúrate de que la ruta sea correcta
            .then(response => response.json()) // Convierte la respuesta a JSON
            .then(data => {
                console.log("Array de productos:", data);
    
                // Seleccionar el contenedor donde se agregarán los productos
                const contenedor = document.querySelector(".product-container");
    
                // Limpiar contenido previo (si es necesario)
                contenedor.innerHTML = "";
    
                // Recorrer el array de productos y agregarlos al HTML
                data.forEach((producto, index) => {
                    console.log(`Producto ${index + 1}: ${producto.nombre}`);
    
                    // Verificar que haya al menos una imagen en `producto.media`
                    const primeraImagen = producto.media.length > 0 ? producto.media[0].url : "ruta_por_defecto.jpg";
    
                    // Crear estructura HTML para cada producto
                    const productoHTML = `
                        <div class="index-container">
                            <div class="index-card">
                                <a >
                                    <!-- Imagen principal del producto -->
                                    <div class="index-image-container">
                                        <img src="${primeraImagen}" alt="${producto.nombre}" class="index-product-image">
                                    </div>
                                    <!-- Contenido de la tarjeta -->
                                    <div class="index-card-content">
                                        <a onclick="loadPage('producto', '${producto.codigo}')" class="producto_link">
                                            <i class="fas fa-hand-pointer producto_icono"></i> ${producto.nombre}
                                        </a>
                                        <div class="index-price-container">
                                            <span class="index-discount-price">${producto.precio} COP</span>
                                        </div>
                                        <div class="index-free-shipping">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="index-shipping-icon" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zM2 0h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H2A4 4 0 0 1 0 12V4a4 4 0 0 1 4-4zm7 5H7v3h2V5z"/>
                                            </svg>
                                            <span>Envío gratis</span>
                                        </div>
                                       <button  
    data-product="${producto.codigo}" 
    class="index-add-to-cart"
    onclick="añadirAlCarrito('${producto.codigo}')">
    <i class="fas fa-shopping-cart"></i> 
    <span>Añadir al carrito</span>
</button>
                                    </div>
                                </a>
                            </div>
                        </div>
                    `;
    
                    // Insertar el producto en el contenedor
                    contenedor.insertAdjacentHTML("beforeend", productoHTML);
                });
            })
            .catch(error => console.error("Error al cargar el JSON:", error));
    }
    
    // Llamar a la función al cargar la página
    cargarProductos();
}
