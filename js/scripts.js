$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("#nav").addClass("scrolled");
  } else {
    $("#nav").removeClass("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const easeOutQuad = (t) => t * (2 - t);

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const endValue = parseInt(counter.getAttribute("data-end"));
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easedProgress = easeOutQuad(progress);
          counter.innerText = Math.floor(easedProgress * endValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
        observer.unobserve(counter);
      }
    });
  }, options);

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
