export default function cargar_producto(dataProduct) {
    console.log('Producto cargado:', dataProduct);
    
    fetch("productos/productos.json")
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".product-container");
            container.innerHTML = ""; // Limpiar el contenedor antes de agregar el producto

            const producto = data.find(item => item.codigo === dataProduct);
            
            if (!producto) {
                console.error("Producto no encontrado");
                container.innerHTML = "<p>Producto no encontrado</p>";
                return;
            }

// Obtener la primera imagen disponible
const imagenPrincipal = producto.media.find(media => media.tipo === "imagen")?.url || "assets/images/default.jpg";



// Obtener todas las imágenes y videos disponibles
const imagenes = producto.media.filter(media => media.tipo === "imagen");
const videos = producto.media.filter(media => media.tipo === "video");

// Generar detalles de atributos con imágenes y un video al final
const detallesAtributos = Array.isArray(producto.atributos)
    ? producto.atributos.map((atributo, index) => `
        <div class="detalles_p_item">
            <div class="detalles_p_titulo">
                <span class="detalles_p_icono"></span> ${atributo.tipo}
            </div> 
            <div class="detalles_p_valor">
                <span class="detalles_p_icono_valor"></span> ${atributo.valor}
            </div>

            <!-- Mostrar imagen si existe -->
            ${imagenes[index] ? `
                <img src="${imagenes[index].url}" class="detalles_p_imagen" alt="${atributo.tipo}">
            ` : ""}
            
            <!-- Mostrar video solo en el último atributo -->
            ${index === producto.atributos.length - 1 && videos.length > 0 ? `
                <video controls class="detalles_p_video">
                    <source src="${videos[0].url}" type="video/mp4">
                    Tu navegador no soporta el video.
                </video>
            ` : ""}
        </div>
    `).join("")
    : "<p class='detalles_p_no-info'>No hay detalles adicionales disponibles.</p>";

// Generar miniaturas de imágenes con clases de CSS puro
const miniaturas = producto.media
    .filter(media => media.tipo === "imagen")
    .map(media => `
        <img src="${media.url}" alt="Producto" class="show_producto_miniatura" 
             onclick="document.getElementById('main-image').src='${media.url}'">
    `)
    .join("");

    const productHTML = `
    <div class="show_producto_container">
        <div class="show_producto_grid">
            <div class="show_producto_imagenes">
                <div class="show_producto_main-container">
                    <img id="main-image" src="${imagenPrincipal}" alt="${producto.nombre}" class="show_producto_main-image">
                    <button id="prev-btn" class="show_producto_nav-btn show_producto_prev-btn">&#8592;</button>
                    <button id="next-btn" class="show_producto_nav-btn show_producto_next-btn">&#8594;</button>
                </div>
                <div class="show_producto_miniaturas-container">
                    ${miniaturas}
                </div>
            </div>
            <div class="show_producto_info">
                <h2 class="show_producto_nombre">${producto.nombre}</h2>
                <p class="show_producto_descripcion">${producto.descripcion}</p>
                <p class="show_producto_precio">${producto.precio.toLocaleString()} COP</p>
                <p class="show_producto_oferta">
                    <i class="fa-solid fa-tags"></i> Precio de oferta
                </p>
                <div class="show_producto_detalles">
                    <div class="show_producto_texto">
                        <strong>Detalles:</strong>
                        <p>${producto.detalles.descripcion}</p>
                    </div>
                </div>
    
                <div class="show_producto_space-y-4">
                    <p class="show_producto_flex show_producto_items-center show_producto_text-sm">
                        <i class="fa-solid fa-truck show_producto_text-lg show_producto_text-green-500"></i> 
                        ¡Envíos gratis a toda Colombia!
                    </p>
                    <p class="show_producto_flex show_producto_items-center show_producto_text-sm">
                        <i class="fa-solid fa-lock show_producto_text-lg show_producto_text-blue-500"></i> 
                        Pago seguro contra entrega.
                    </p>
                    <p class="show_producto_flex show_producto_items-center show_producto_text-sm">
                        <i class="fa-solid fa-award show_producto_text-lg show_producto_text-yellow-500"></i> 
                        Productos con garantía.
                    </p>
                    <p class="show_producto_flex show_producto_items-center show_producto_text-sm">
                        <i class="fa-solid fa-headset show_producto_text-lg show_producto_text-red-500"></i> 
                        Soporte 24/7 para cualquier consulta.
                    </p>
                </div>
    
                <a href="https://wa.me/573001234567?text=Hola,%20estoy%20interesado%20en%20comprar%20este%20producto"
                   class="show_producto_btn-whatsapp">
                   <i class="fa-brands fa-whatsapp"></i> Contactar por WhatsApp
                </a>
                <button  
    data-product="${producto.codigo}" 
    class="index-add-to-cart"
    onclick="añadirAlCarrito('${producto.codigo}')">
    <i class="fas fa-shopping-cart"></i> 
    <span>Añadir al carrito</span>
</button>
            </div>
        </div>
    
        <!-- Sección de Detalles de Atributos -->
        <div class="detalles_container">
           <h3 class="detalles_p_titulo-principal">
    <span class="detalles_p_icono-titulo"></span> 
    Especificaciones del Producto 
    <span class="detalles_p_icono-titulo"></span>
</h3>
            <div class="detalles_lista">
                ${detallesAtributos}
            </div>
        </div>
    </div>
    `;

            container.innerHTML = productHTML;
        })
        .catch(error => console.error("Error al cargar los productos:", error));
}
