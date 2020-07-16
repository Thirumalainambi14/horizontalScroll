document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  const loader = document.getElementById("loader");
  const scrollContainer = document.getElementById("scroll-container");
  const box = document.querySelectorAll(".box");
  let boxesArr = Array.prototype.slice.call(box);
  const container = document.getElementById("container");
  loader.remove();

  scrollContainer.style.overflowX = "hidden";
  scrollContainer.style.overflowY = "scroll";
  container.style.visibility = "visible";

  let X = 5000 - container.offsetWidth;
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollContainer,
      scrub: true,
      start: "top top",
      end: "+=4000 bottom",
      markers: true,
      pin: true,
    },
  });
  tl.add("slide");
  gsap.utils.toArray(".box").forEach((el, i) => {
    tl.fromTo(
      el,
      { x: 0 },
      { x: `+=${X}`, autoAlpha: 1, duration: 1 },
      "slide+=0.0001"
    );
  });
  // gsap.utils.toArray(".box").forEach((el, i) => {
  // tl.fromTo(
  //   ".box",
  //   { x: 0 },
  //   {
  //     x: `+=${X}`,
  //     ease: Bounce.easeOut,
  //     duration: 0.1,
  //   },
  //   "slide"
  // ).from(".box3", {
  //   trigger: ".box3",
  //   y: -300,
  //   ease: Bounce.easeOut,
  // });
  // });
});
