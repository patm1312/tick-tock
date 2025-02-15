import nav from "./modules/nav.js";
import hm from "./modules/hm.js";
import banner from "./modules/banner.js";
import slider from "./modules/carrusel.js";
import cuttext from "./modules/cutText.js";
import faq from "./modules/faq.js";
import cargar_producto from "./modules/cargar_producto.js";
import cargar from "./modules/cargar_productos.js";
import cart from "./modules/cart.js";
import removeFromCart from "./modules/removeFromCart.js";
import updateQuantity from "./modules/updateQuantity.js";
// Guardar funciones en window
window.banner = banner;
window.slider = slider;
window.cuttext = cuttext;
window.faq = faq;
window.cargar = cargar;
window.removeFromCart = removeFromCart;
window.cargar_producto = cargar_producto;
window.updateQuantity = updateQuantity;
window.cart = cart;
async function iniciar() {
    await nav();  // Espera que `nav()` termine antes de seguir
    hm();
    banner();
    slider();
    cuttext();
    faq();
    cargar();
}

iniciar();
