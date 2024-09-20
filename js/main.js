window.onload = function () {
  // steps
  document.querySelectorAll(".btn-orange").forEach((button) => {
    button.addEventListener("click", function (event) {
      const currentStep = this.closest(".step");
      const nextStep = currentStep.nextElementSibling;
      if (nextStep && nextStep.classList.contains("step")) {
        currentStep.classList.remove("active");
        nextStep.classList.add("active");
        // slider
        if (
          nextStep.querySelector(".step__slider") &&
          !$(nextStep.querySelector(".step__slider")).hasClass(
            "slick-initialized"
          )
        ) {
          $(nextStep.querySelector(".step__slider")).slick({
            prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="94" height="24" viewBox="0 0 94 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM94 10.5L2 10.5V13.5L94 13.5V10.5Z" fill="white" />
    </svg>              
                </button >`,
            nextArrow: `<button type='button' class='slick-next pull-right'><svg width="94" height="24" viewBox="0 0 94 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M93.0607 13.0607C93.6464 12.4749 93.6464 11.5251 93.0607 10.9393L83.5147 1.3934C82.9289 0.807611 81.9792 0.807611 81.3934 1.3934C80.8076 1.97919 80.8076 2.92893 81.3934 3.51472L89.8787 12L81.3934 20.4853C80.8076 21.0711 80.8076 22.0208 81.3934 22.6066C81.9792 23.1924 82.9289 23.1924 83.5147 22.6066L93.0607 13.0607ZM0 13.5L92 13.5V10.5L0 10.5L0 13.5Z" fill="white" />
    </svg>
                </button >`,
            slidesToShow: 1,
            variableWidth: true,
            infinite: true,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807614 12.0208 0.807614 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM36 13.5L2 13.5L2 10.5L36 10.5L36 13.5Z" fill="white" />
                </svg>              
                              </button >`,
                  nextArrow: `<button type='button' class='slick-next pull-right'><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807614 23.9792 0.807614 23.3934 1.3934C22.8076 1.97919 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM-1.32372e-07 13.5L34 13.5L34 10.5L1.32372e-07 10.5L-1.32372e-07 13.5Z" fill="white" />
                </svg>
                              </button >`,
                },
              },
            ],
          });
        }
      }
    });
  });
  // Toggle active class on steps__sound click
  document
    .querySelector(".steps__sound")
    .addEventListener("click", function () {
      this.classList.toggle("active");
    });
};
