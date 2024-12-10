// this function create for page scroll and when screen scroll down on page referesh in both case code properly work that's why make this function
function scrollTop() {
  // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
  if ($(window).scrollTop() > 500) {
    $(".backToTopBtn").addClass("active");
  } else {
    $(".backToTopBtn").removeClass("active");
  }
}
$(function () {
  // show and hide btn
  scrollTop();
  $(window).on("scroll", scrollTop);

  // body scroll on btn click
  $(".backToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});

// Text Animation
const introTimeline = gsap.timeline();

introTimeline
  .from(".letter", {
    opacity: 0,
    x: 50,
    ease: "sine.out",
    stagger: 0.1, // equivalent to the staggerFrom delay
  })
  .from(".title", {
    opacity: 0,
    y: -10,
    ease: "sine.out",
  })
  .from(".describe", {
    opacity: 0,
    x: -30,
    ease: "sine.out",
  });

// Number Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id);
    if (!obj) return; // Exit if the element is not found
    let current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current === end) {
          clearInterval(timer);
        }
      }, step);
  }

  // Observer for `.section-million` to handle count1 and count2
  const sectionMillion = document.querySelector(".section-million");
  if (sectionMillion) {
    const observerMillion = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger counters for count1 and count2 when section is visible
            counter("count1", 0, 50, 3000);
            counter("count2", 0, 5, 2500);
            observer.unobserve(sectionMillion); // Stop observing after triggering
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    observerMillion.observe(sectionMillion);
  }

  // Observer for `.section-content` to handle count3 and count4
  const sectionContent = document.querySelector(".section-content");
  if (sectionContent) {
    const observerContent = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger counters for count3 and count4 when section is visible
            counter("count3", 0, 15, 3000);
            counter("count4", 0, 11, 3000);
            observer.unobserve(sectionContent); // Stop observing after triggering
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    observerContent.observe(sectionContent);
  }
});