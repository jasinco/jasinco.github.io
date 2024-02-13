const elec = document.querySelectorAll(".fade, .vcontain");
let jumped = document.querySelector("#intro");
let loaded = false;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (
        entry.target.classList.contains("vcontain") &&
        jumped != entry.target &&
        loaded == true
      ) {
        entry.target.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
        jumped = entry.target;
      }
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      } else {
        entry.target.classList.remove("fade-in");
      }
    });
  },
  { rootMargin: "60px", threshold: 0.8 },
);
// const smoother = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       console.log(entry);
//       document.getElementById(entry.target.id.toString()).scrollIntoView(true);
//     });
//   },
//   { rootMargin: "10px", threshold: 0.3 },
// );

elec.forEach((el) => {
  observer.observe(el);
});
loaded = true;

// const vcontian = document.querySelectorAll(".vcontian");
// vcontian.forEach((element) => {
//   smoother.observe(element);
// });
