// header
const headerMenu = document.querySelector(".header-menu");
const closeBtn = document.querySelector(".close-menu__btn");
const openMenuBtn = document.querySelector(".open-menu__btn");
openMenuBtn.addEventListener("click", () => {
  headerMenu.classList.remove("-translate-x-full");
});
closeBtn.addEventListener("click", () => {
  headerMenu.classList.add("-translate-x-full");
});

// interyer-nomer__swiper
var swiper = new Swiper(".interyer-nomer__swiper", {
  slidesPerView: 4,
  spaceBetween: 51,
  loop: true,
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
      slidesPerView: 1.2,
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
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

try {
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
} catch (error) {}

try {
  function setValues(lowerInput, upperInput, lowerValue, upperValue, track) {
    lowerValue.textContent = `${(lowerInput.value * 2 + 44.5).toFixed(1)} м2`;
    upperValue.textContent = `${(upperInput.value * 2 + 44.5).toFixed(1)} м2`;
    updateSliderTrack(lowerInput, upperInput, track);
  }

  function updateSliderTrack(lowerInput, upperInput, track) {
    const min = parseInt(lowerInput.min);
    const max = parseInt(upperInput.max);
    const lowerValue = parseInt(lowerInput.value);
    const upperValue = parseInt(upperInput.value);

    const lowerPercent = ((lowerValue - min) / (max - min)) * 100;
    const upperPercent = ((upperValue - min) / (max - min)) * 100;

    track.style.left = `${lowerPercent}%`;
    track.style.width = `${upperPercent - lowerPercent}%`;
  }

  document.querySelectorAll(".range-slider").forEach((slider, index) => {
    const lowerInput = slider.querySelector(`#lower${index + 1}`);
    const upperInput = slider.querySelector(`#upper${index + 1}`);
    const lowerValue = slider.querySelector(`#lower-value${index + 1}`);
    const upperValue = slider.querySelector(`#upper-value${index + 1}`);
    const track = slider.querySelector(`#track${index + 1}`);

    lowerInput.addEventListener("input", () => {
      setValues(lowerInput, upperInput, lowerValue, upperValue, track);
    });

    upperInput.addEventListener("input", () => {
      setValues(lowerInput, upperInput, lowerValue, upperValue, track);
    });

    // Set initial values
    setValues(lowerInput, upperInput, lowerValue, upperValue, track);
  });
} catch (error) {
  console.log(error);
}

// select
try {
  const selectContainer = document.querySelectorAll(".select-container");

  selectContainer.forEach((item) => {
    const selectToggle = item.querySelector(".select-toggle");
    const optionBox = item.querySelector(".option-box");
    const selectedText = item.querySelector(".selected-text");
    const options = item.querySelectorAll(".option-item");
    const arrowIcon = item.querySelector(".select-toggle img");
    const select = item.querySelector(".select");

    selectToggle.addEventListener("click", () => {
      optionBox.classList.toggle("hidden");
      arrowIcon.classList.toggle("rotate-180");
      select.classList.toggle("rounded-b-none");
    });

    options.forEach((option) => {
      option.addEventListener("click", (event) => {
        selectedText.textContent = event.target.textContent;
        optionBox.classList.add("hidden");
        arrowIcon.classList.add("rotate-180");
        select.classList.remove("rounded-b-none");
      });
    });
  });
} catch (error) {}


// list, layotu
try {
  const listBtn = document.querySelector('.list-btn');
  const layoutBtn = document.querySelector('.layout-btn');
  const listProducts = document.querySelectorAll('.list-product');
  const productsBox =document.querySelector('.products-box');

  listBtn.addEventListener('click', () => {
    productsBox.classList.add('list-product');
  })
  layoutBtn.addEventListener('click', () => {
    productsBox.classList.remove('list-product');
  })


} catch (error) {
console.log(error);
}
