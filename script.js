console.log("hello js");

// MAKE MOBILE NAVIGATION WORK

const btnNavEl = document.querySelector(".mobile-menu");
const headerEl = document.querySelector(".navbar");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// MAKING NAVIGATION MENU STICKY

const heroSectionEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSectionEl);
