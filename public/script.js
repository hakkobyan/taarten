const reveals = document.querySelectorAll("[data-reveal]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16
  }
);

reveals.forEach((element, index) => {
  element.style.transitionDelay = `${index * 60}ms`;
  observer.observe(element);
});
