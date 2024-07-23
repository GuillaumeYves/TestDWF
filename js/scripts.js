$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("#nav").addClass("scrolled");
  } else {
    $("#nav").removeClass("scrolled");
  }
});
