export default function nav() {
    return new Promise((resolve, reject) => {
        document.addEventListener("DOMContentLoaded", () => {
            let pageToLoad = "home";

            fetch(`pages/${pageToLoad}.html`)
                .then(response => response.text())
                .then(html => {
                    document.getElementById("content").innerHTML = html;
                    resolve(); // Resuelve la promesa cuando se cargue el contenido
                })
                .catch(error => {
                    console.error("Error al cargar la página:", error);
                    reject(error); // Rechaza la promesa si hay error
                });
        });
    });
}
