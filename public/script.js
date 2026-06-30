const reveals = document.querySelectorAll("[data-reveal]");
const scrollTopButton = document.querySelector(".scroll-top");

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

function syncScrollTopButton() {
  if (!scrollTopButton) {
    return;
  }

  const shouldShow = window.scrollY > 420;
  scrollTopButton.classList.toggle("is-visible", shouldShow);
}

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

window.addEventListener("scroll", syncScrollTopButton, { passive: true });
syncScrollTopButton();
