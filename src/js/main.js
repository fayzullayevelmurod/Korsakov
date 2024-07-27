// header

// headerMenu
const headerMenu = document.querySelector(".header-menu");
const closeBtn = document.querySelector(".close-menu__btn");
const openMenuBtn = document.querySelector(".open-menu__btn");
const menuLinks = document.querySelectorAll(".header-menu a");

// Menyuni ochish
openMenuBtn.addEventListener("click", () => {
  headerMenu.classList.remove("-translate-x-full");
  document.body.classList.add("overflow-hidden", "pr-[5px]");
});

// Menyuni yopish
closeBtn.addEventListener("click", () => {
  headerMenu.classList.add("-translate-x-full");
  document.body.classList.remove("overflow-hidden", "pr-[5px]");
});

// Menyudagi <a> teglarga bosilganda menyuni yopish
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    headerMenu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden", "pr-[5px]");
  });
});

// Ekranda istalgan joyga bosilganida, agar bosilgan joy menyudan tashqarida bo'lsa, menyuni yopish
window.addEventListener("click", (e) => {
  if (!headerMenu.contains(e.target) && !openMenuBtn.contains(e.target)) {
    headerMenu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden", "pr-[5px]");
  }
});

// interyer-nomer__swiper
var swiper = new Swiper(".interyer-nomer__swiper", {
  slidesPerView: 4,
  spaceBetween: 51,
  loop: false,
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
  const listBtn = document.querySelector(".list-btn");
  const layoutBtn = document.querySelector(".layout-btn");
  const listProducts = document.querySelectorAll(".list-product");
  const productsBox = document.querySelector(".products-box");

  listBtn.addEventListener("click", () => {
    productsBox.classList.add("list-product");
  });
  layoutBtn.addEventListener("click", () => {
    productsBox.classList.remove("list-product");
  });
} catch (error) {
  console.log(error);
}

// ymaps.ready(init);

// function init() {
//   // Create a new map instance
//   var myMap = new ymaps.Map("map", {
//     center: [44.895, 37.316], // Coordinates of the center of the map (Anapa)
//     zoom: 13,
//     controls: ["zoomControl", "fullscreenControl"],
//   });

//   // Apply custom style to the map
//   var myStyle = [
//     {
//       featureType: "all",
//       stylers: {
//         saturation: -100,
//         lightness: -50,
//       },
//     },
//   ];
//   myMap.setType("yandex#map");
//   myMap.geoObjects.options.set("preset", "islands#grayIcon");

//   // Define the coordinates of the locations
//   var location1 = [44.89, 37.32]; // Example coordinates
//   var location2 = [44.9, 37.31]; // Example coordinates

//   // Create placemarks for each location
//   var placemark1 = new ymaps.Placemark(
//     location1,
//     {},
//     {
//       preset: "islands#redDotIcon",
//     }
//   );
//   var placemark2 = new ymaps.Placemark(
//     location2,
//     {},
//     {
//       preset: "islands#redDotIcon",
//     }
//   );

//   // Add placemarks to the map
//   myMap.geoObjects.add(placemark1);
//   myMap.geoObjects.add(placemark2);
// }

try {
  ymaps.ready(init);

  function init() {
    // Create a new map instance
    var myMap = new ymaps.Map("map", {
      center: [44.895, 37.316], // Coordinates of the center of the map (Anapa)
      zoom: 13,
      controls: ["zoomControl", "fullscreenControl"],
    });

    // Apply custom style to the map
    myMap.setType("yandex#map");
    myMap.geoObjects.options.set("preset", "islands#grayIcon");

    // Define the coordinates of the locations
    var location1 = [44.89, 37.32]; // Example coordinates
    var location2 = [44.9, 37.31]; // Example coordinates

    // Create placemarks with custom images for each location
    var placemark1 = new ymaps.Placemark(
      location1,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/location.svg", // Replace with your image URL
        iconImageSize: [57, 82], // Size of the image
        iconImageOffset: [-15, -15], // Offset for the image position
      }
    );
    var placemark2 = new ymaps.Placemark(
      location2,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/location.svg", // Replace with your image URL
        iconImageSize: [57, 82], // Size of the image
        iconImageOffset: [-15, -15], // Offset for the image position
      }
    );

    // Add placemarks to the map
    myMap.geoObjects.add(placemark1);
    myMap.geoObjects.add(placemark2);
  }
} catch (error) {
  console.log(error);
}

try {
  ymaps.ready(init);

  function init() {
    // Create a new map instance
    var myMap = new ymaps.Map("map2", {
      center: [44.895, 37.316], // Coordinates of the center of the map (Anapa)
      zoom: 13,
      controls: ["zoomControl", "fullscreenControl"],
    });

    myMap.setType("yandex#map");
    myMap.geoObjects.options.set("preset", "islands#grayIcon");

    var location1 = [44.89, 37.32];
    var location2 = [44.9, 37.31];
    var location3 = [44.91, 37.32];
    var location4 = [44.92, 37.33];
    var location5 = [44.93, 37.34];
    var location6 = [44.93, 37.34];
    var location7 = [44.93, 37.34];

    var placemark1 = new ymaps.Placemark(
      location1,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/logo/company-logo.svg",
        iconImageSize: [120, 120],
        iconImageOffset: [-60, -60], // Adjust as needed
      }
    );

    var placemark2 = new ymaps.Placemark(
      location2,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/map-icon-1.svg",
        iconImageSize: [34, 34],
        iconImageOffset: [-17, -17], // Adjust as needed
      }
    );

    var placemark3 = new ymaps.Placemark(
      location3,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/map-icon-2.svg",
        iconImageSize: [34, 34],
        iconImageOffset: [10, -17], // Adjust as needed
      }
    );

    var placemark4 = new ymaps.Placemark(
      location4,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/map-icon-3.svg",
        iconImageSize: [34, 34],
        iconImageOffset: [-17, -17], // Adjust as needed
      }
    );

    var placemark5 = new ymaps.Placemark(
      location5,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/map-icon-4.svg",
        iconImageSize: [34, 34],
        iconImageOffset: [-17, 207], // Adjust as needed
      }
    );
    var placemark6 = new ymaps.Placemark(
      location6,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/map-icon-5.svg",
        iconImageSize: [34, 34],
        iconImageOffset: [107, 207],
      }
    );
    var placemark7 = new ymaps.Placemark(
      location7,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../../public/assets/images/icons/map-icon-6.svg",
        iconImageSize: [34, 34],
        iconImageOffset: [257, 307],
      }
    );

    // Add placemarks to the map
    myMap.geoObjects.add(placemark1);
    myMap.geoObjects.add(placemark2);
    myMap.geoObjects.add(placemark3);
    myMap.geoObjects.add(placemark4);
    myMap.geoObjects.add(placemark5);
    myMap.geoObjects.add(placemark6);
    myMap.geoObjects.add(placemark7);
  }
} catch (error) {
  console.log(error);
}

// oasis-swiper
try {
  var swiper = new Swiper(".oasis-swiper", {
    slidesPerView: 2,
    spaceBetween: 51,
    speed: 900,
    slidesPerGroup: 2,
    navigation: {
      nextEl: ".oasis-next-btn",
      prevEl: ".oasis-prev-btn",
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 51,
      },
      0: {
        slidesPerView: 1.3,
        spaceBetween: 23,
        slidesPerGroup: 1,
      },
    },
  });
} catch (error) {}

Fancybox.bind("[data-fancybox]", {});
Fancybox.bind('[data-fancybox="gallery2"]', {});

// product-swiper
try {
  var swiper = new Swiper(".product-swiper", {
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 0,
    grid: {
      rows: 2,
      fill: "row",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    mousewheel: true,
    freeMode: false,
    slidesPerColumnFill: "row",
  });
} catch (error) {}
