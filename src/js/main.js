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

// function calculateMonthlyPayment(principal, years, rate) {
//   const monthlyRate = rate / 12;
//   const numberOfPayments = years * 12;
//   return (
//     (principal * monthlyRate) /
//     (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
//   );
// }

// function formatCurrency(value) {
//   return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб.";
// }

// function updateValues() {
//   const fromValue1 = parseInt(fromSlider1.value, 10);
//   const toValue1 = parseInt(toSlider1.value, 10);
//   const fromValue2 = parseInt(fromSlider2.value, 10);
//   const toValue2 = parseInt(toSlider2.value, 10);
//   const fromValue3 = parseInt(fromSlider3.value, 10);
//   const toValue3 = parseInt(toSlider3.value, 10);

//   const principal = Math.abs(toValue1 - fromValue1);
//   const downPayment = Math.abs(toValue2 - fromValue2);
//   const loanAmount = principal - downPayment;
//   const years = Math.abs(toValue3 - fromValue3);
//   const annualRate = 0.1;

//   toSliderTooltip1.textContent = formatCurrency(principal);
//   toSliderTooltip2.textContent = formatCurrency(downPayment);
//   toSliderTooltip3.textContent = years + " лет";

//   const monthlyPayment = calculateMonthlyPayment(loanAmount, years, annualRate);
//   document.querySelector(".total-price").textContent =
//     formatCurrency(monthlyPayment) + " / мес";
// }

// const fromSlider1 = document.getElementById("fromSlider1");
// const toSlider1 = document.getElementById("toSlider1");
// const fromSlider2 = document.getElementById("fromSlider2");
// const toSlider2 = document.getElementById("toSlider2");
// const fromSlider3 = document.getElementById("fromSlider3");
// const toSlider3 = document.getElementById("toSlider3");
// const toSliderTooltip1 = document.getElementById("toSliderTooltip1");
// const toSliderTooltip2 = document.getElementById("toSliderTooltip2");
// const toSliderTooltip3 = document.getElementById("toSliderTooltip3");

// fromSlider1.addEventListener("input", updateValues);
// toSlider1.addEventListener("input", updateValues);
// fromSlider2.addEventListener("input", updateValues);
// toSlider2.addEventListener("input", updateValues);
// fromSlider3.addEventListener("input", updateValues);
// toSlider3.addEventListener("input", updateValues);

// updateValues();

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
    propertyValueOutput.textContent = formatCurrency(propertyValue.value) + " руб.";
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
