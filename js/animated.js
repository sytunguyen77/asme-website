ScrollReveal().reveal(".left-animated", {
  duration: 500,
  distance: "50px",
  origin: "left",
  easing: "ease-in-out",
  delay: 200,
});

ScrollReveal().reveal(".bottom-animated", {
  duration: 500,
  distance: "50px",
  origin: "bottom",
  easing: "ease-in-out",
  delay: 200,
});

ScrollReveal().reveal(".right-animated", {
  duration: 500,
  distance: "50px",
  origin: "right",
  easing: "ease-in-out",
  delay: 200,
});

ScrollReveal().reveal(".top-animated", {
  duration: 500,
  distance: "50px",
  origin: "right",
  easing: "ease-in-out",
  delay: 200,
});

// this function create for page scroll and when screen scroll down on page referesh in both case code properly work that's why make this function
// This function handles the visibility of the scroll-to-top button
function scrollTopButton() {
  const scrollButton = document.querySelector(".backToTopBtn");
  // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show up
  if (window.scrollY > 600) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
}

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Show and hide button on page load and scroll
  scrollTopButton();
  window.addEventListener("scroll", scrollTopButton);

  // Scroll to top when the button is clicked
  const scrollButton = document.querySelector(".backToTopBtn");
  scrollButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  });
});
