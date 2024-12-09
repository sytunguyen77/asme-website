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
