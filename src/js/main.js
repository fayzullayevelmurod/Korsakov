// interyer-nomer__swiper
var swiper = new Swiper(".interyer-nomer__swiper", {
  slidesPerView: 4,
  spaceBetween: 51,
  speed: 700,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    1280: {
      slidesPerView: 4,
      spaceBetween: 51,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },
});

// similar-numbers__swiper
var swiper = new Swiper(".similar-numbers__swiper", {
  slidesPerView: 4,
  //   spaceBetween: 33,
  speed: 700,
  navigation: {
    nextEl: ".next-btn-two",
    prevEl: ".prev-btn-two",
  },
});
document.addEventListener("DOMContentLoaded", function () {
  const propertyValue = document.getElementById("toSlider1");
  const downPayment = document.getElementById("toSlider2");
  const loanTerm = document.getElementById("toSlider3");
  const propertyValueOutput = document.getElementById("toSliderTooltip1");
  const downPaymentOutput = document.getElementById("toSliderTooltip2");
  const loanTermOutput = document.getElementById("toSliderTooltip3");
  const monthlyPayment = document.querySelector(".total-price");

  function formatCurrency(value) {
    return new Intl.NumberFormat("ru-RU", {
      minimumFractionDigits: 0,
    }).format(value);
  }

  function updateValues() {
    propertyValueOutput.textContent =
      formatCurrency(propertyValue.value) + " руб.";
    downPaymentOutput.textContent = formatCurrency(downPayment.value) + " руб.";
    loanTermOutput.textContent = loanTerm.value + " лет";

    // Calculate monthly payment
    const P = propertyValue.value - downPayment.value;
    const r = 0.0083; // Example monthly interest rate of 0.83%
    const n = loanTerm.value * 12;
    const M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    monthlyPayment.textContent = formatCurrency(M) + " руб / мес";
  }

  propertyValue.addEventListener("input", updateValues);
  downPayment.addEventListener("input", updateValues);
  loanTerm.addEventListener("input", updateValues);

  updateValues();
});
