let sliderInterval;

export default function slider() {
  const slides = document.querySelectorAll(".slide");

  if (!slides.length) {
    console.warn("Slider: no se encontraron slides");
    return;
  }

  // Evitar múltiples intervalos
  if (sliderInterval) clearInterval(sliderInterval);

  let index = 0;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  sliderInterval = setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}
