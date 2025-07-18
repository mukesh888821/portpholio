// Typing Animation
const typingSpan = document.querySelector(".typing");
const text = "MUKESH CHAUHAN";
let index = 0;
let isDeleting = false;

function type() {
  typingSpan.textContent = text.substring(0, index);
  if (!isDeleting && index < text.length) {
    index++;
    setTimeout(type, 150);
  } else if (isDeleting && index > 0) {
    index--;
    setTimeout(type, 100);
  } else {
    isDeleting = !isDeleting;
    setTimeout(type, 1200);
  }
}
type();

// Smooth Scroll on Nav Clicks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll Reveal Effect
const sections = document.querySelectorAll(".about, .skills, .projects, .education, .contact");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
