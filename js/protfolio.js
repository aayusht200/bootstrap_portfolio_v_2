// Navbar scroll
const header = document.querySelector("#header");

// Skills animation
const progressBars = document.querySelectorAll(".progress-bar");
const skillsSection = document.querySelector("#skills");
let skillsAnimated = false;

// Typed.js
const typed = new Typed("#typed-role", {
  strings: [
    "Front-End Developer",
    "Front-End Designer",
    "UI Designer",
    "Web Enthusiast",
    "JavaScript Developer",
  ],
  typeSpeed: 75,
  backSpeed: 37,
  loop: true,
  backDelay: 1000,
  smartBackspace: true,
});

// Scroll listener
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Navbar shadow on scroll
  header.classList.toggle("navbar-scroll", scrollY > 80);

  // Animate skills when section enters viewport
  if (!skillsAnimated) {
    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      progressBars.forEach((bar, i) => {
        const targetWidth = bar.dataset.width;
        setTimeout(() => {
          bar.style.width = targetWidth + "%";
        }, i * 200);
      });
      skillsAnimated = true;
    }
  }
});

// Form validation
const form = document.querySelector(".needs-validation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
  } else {
    alert("Message sent successfully! (simulated)");
    form.reset();
    form.classList.remove("was-validated");
  }
});
