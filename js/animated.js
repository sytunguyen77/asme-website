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

const boxes = document.querySelectorAll(".bottom-animated");

boxes.forEach((box, index) => {
  ScrollReveal().reveal(box, {
    duration: 500,
    distance: "50px",
    origin: "bottom",
    easing: "ease-in-out",
    delay: 200 * (index + 1), // Incremental delay
  });
});
