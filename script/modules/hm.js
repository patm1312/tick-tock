export default function hm(){
    document.addEventListener("DOMContentLoaded", () => {
        const menuToggle = document.getElementById("menu-toggle");
        const mobileMenu = document.getElementById("mobile-menu");
    
        menuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("show");
        });
    });
}