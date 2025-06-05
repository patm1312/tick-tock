export default function removeFromCart(index){
    // Eliminar producto del carrito
function removeFromCart(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.splice(index, 1); // Eliminar producto del array
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar cambios
    //loadCart(); // Recargar el carrito
    console.log('PRODUCTO' + index + 'eliminado');
}
removeFromCart(index)
location.reload();
}