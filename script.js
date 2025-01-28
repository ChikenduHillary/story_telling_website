gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Select all images and animate each one
  document.querySelectorAll(".image").forEach((image) => {
    gsap.from(image, {
      y: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: image, // Use the current image as trigger
        toggleActions: "play pause resume reset",
      },
    });
  });

  // Select all headings and paragraphs and animate each one
  document.querySelectorAll(".heading, .paragraph").forEach((element) => {
    gsap.from(element, {
      y: 10,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element, // Use the current element as trigger
        toggleActions: "play pause resume reset",
      },
    });
  });
});

document.querySelectorAll(".video").forEach((video) => {
  video.addEventListener("click", function () {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });
});
