export default function banner(){
console.log()
        let messages = [
            { text: "ENVÍO GRATIS Y PAGO CONTRA ENTREGA", icon: "🇨🇴" },
            { text: "🏡PAGAS EN CASA 🚀 ENTREGA RÁPIDA📦", icon: "" }
        ];
    
        let currentMessageIndex = 0;
        setInterval(() => {
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            document.getElementById("banner-text").textContent = messages[currentMessageIndex].text;
            document.getElementById("banner-icon").textContent = messages[currentMessageIndex].icon;
        }, 3000); // Cambia cada 3 segundos
    
    
}