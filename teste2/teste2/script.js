const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button"
  );
  const scrollAmount = 100;

  //Slide images according to the slide button clicks
  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      imageList.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    });
  });
};

window.addEventListener("load", initSlider);
