const selects = document.querySelectorAll(".container, .fade, .fade_right");
const root_var = document.querySelector(":root");

const observer = new IntersectionObserver(
  (elements) => {
    elements.forEach((element) => {
      if (element.isIntersecting) {
        if (element.target.classList.contains("container")) {
          element.target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        if (
          element.target.classList.contains("fade") ||
          element.target.classList.contains("fade_right")
        ) {
          element.target.classList.add("fade-active");
        }
      } else {
        if (element.target.classList.contains("fade-active")) {
          element.target.classList.remove("fade-active");
        }
      }
    });
  },
  {
    threshold: 0.65,
  },
);

selects.forEach((element) => {
  observer.observe(element);
});
