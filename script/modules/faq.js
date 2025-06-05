export default function faq(){

        document.querySelectorAll(".fq-question").forEach(item => {
            item.addEventListener("click", function () {
                this.parentElement.classList.toggle("active");
            });
        });
    
}