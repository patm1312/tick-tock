export default function cuttext() {
    let descriptions = document.querySelectorAll(".product-description"); // Selecciona todos los elementos con la clase
    let maxLength = 50; // Define el número máximo de caracteres

    descriptions.forEach(descriptionElement => {
        let fullText = descriptionElement.textContent.trim();
        if (fullText.length > maxLength) {
            let shortText = fullText.substring(0, maxLength) + "...";
            descriptionElement.textContent = shortText;
        }
    });
}