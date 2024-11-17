// Function to add units
function formatNumber(value) {
  if (value >= 1_000_000_000) {
    return Math.floor(value / 1_000_000_000) + "B";
  } else if (value >= 1_000_000) {
    return Math.floor(value / 1_000_000) + "M";
  } else if (value >= 1_000) {
    return Math.floor(value / 1_000) + "K";
  } else {
    return value;
  }
}

// Function to animate counter
function animateCounter(element, targetValue) {
  let startValue = 0;
  let duration = 2000;
  let step = Math.ceil(targetValue / (duration / 20));

  function updateCounter() {
    startValue += step;
    if (startValue >= targetValue) {
      startValue = targetValue;
      clearInterval(interval);
    }
    element.innerText = formatNumber(startValue);
  }

  let interval = setInterval(updateCounter, 20);
}

// Navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const scrollThreshold = 5;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.style.backgroundColor = "var(--color-bg-body)";
      navbar.style.borderBottom = "1px solid #181818";
      navbar.style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 3px 8px";
    } else {
      navbar.style.backgroundColor = "transparent";
      navbar.style.borderBottom = "1px solid transparent";
      navbar.style.boxShadow = "none";
    }
  }

  // Run handleScroll on page load to apply the style based on the initial scroll position
  handleScroll();

  window.addEventListener("scroll", handleScroll);
});

// Hero Section Meta Counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");

  counters.forEach((counter) => {
    const targetValue = parseInt(counter.getAttribute("data-count"), 10);
    animateCounter(counter, targetValue);
  });
});

// Pricing
document.addEventListener("DOMContentLoaded", function () {
  const popularCard = document.querySelector("#pricing .popular");

  if (popularCard) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card-header", "text-center");
    newDiv.innerHTML = "🔥 Popular Picks";
    popularCard.insertBefore(newDiv, popularCard.firstChild);
  }

  // if (window.innerWidth <= 720) {
  //   if (popularCard && popularCard.closest(".col-md-3").nextElementSibling) {
  //     const nextCardContainer =
  //       popularCard.closest(".col-md-3").nextElementSibling;

  //     const nextCard = nextCardContainer.querySelector(".card");
  //     // nextCard.style.marginTop = "2.5rem";
  //   }
  // }

  // window.addEventListener("resize", function () {
  //   if (window.innerWidth <= 720) {
  //     if (popularCard && popularCard.closest(".col-md-3").nextElementSibling) {
  //       const nextCardContainer =
  //         popularCard.closest(".col-md-3").nextElementSibling;

  //       const nextCard = nextCardContainer.querySelector(".card");
  //       nextCard.style.marginTop = "2.5rem";
  //     }
  //   }
  // });

  // Pricing Carousel
  $("#pricing .owl-carousel").owlCarousel({
    loop: false,
    margin: 15,
    responsiveClass: true,
    mouseDrag: true,
    autoplay: false,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

$(document).ready(function () {
  // Testimonials Carousel
  $("#testimonials .owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
});

// 'Go to Top' button
document.addEventListener("DOMContentLoaded", function () {
  const goToTopButton = document.createElement("button");
  goToTopButton.classList.add("btn-goTop");
  goToTopButton.innerHTML = '<i class="ri-arrow-up-line"></i>';

  document.body.appendChild(goToTopButton);
  window.addEventListener("scroll", handleScroll);

  goToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function handleScroll() {
    if (window.scrollY > 100) {
      goToTopButton.style.display = "block";
    } else {
      goToTopButton.style.display = "none";
    }
  }
});

$(document).ready(function () {
  $(".owl-prev").html('<i class="ri-arrow-left-line"></i>');
  $(".owl-next").html('<i class="ri-arrow-right-line"></i>');
});
