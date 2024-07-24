// interyer-nomer__swiper
var swiper = new Swiper(".interyer-nomer__swiper", {
  slidesPerView: 4,
  spaceBetween: 51,
  speed: 700,
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
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
  const propertyValue = document.getElementById("propertyValue");
  const downPayment = document.getElementById("downPayment");
  const loanTerm = document.getElementById("loanTerm");
  const propertyValueOutput = document.getElementById("propertyValueOutput");
  const downPaymentOutput = document.getElementById("downPaymentOutput");
  const loanTermOutput = document.getElementById("loanTermOutput");
  const monthlyPayment = document.getElementById("monthlyPayment");

  function formatCurrency(value) {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
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
    const r = 0.0546 / 12; // Example interest rate of 5.46%
    const n = loanTerm.value * 12;
    const M = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    monthlyPayment.textContent = formatCurrency(M) + " руб / мес";
  }

  propertyValue.addEventListener("input", updateValues);
  downPayment.addEventListener("input", updateValues);
  loanTerm.addEventListener("input", updateValues);

  updateValues();
});
