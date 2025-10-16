const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  header.classList.toggle("navbar-scroll", window.scrollY > 80);
});

const typed = new Typed("#typed-role", {
  strings: [
    "Front-End Developer",
    "Front-End Designer",
    "UI Designer",
    "Web Enthusiast",
  ],
  typeSpeed: 75,
  backSpeed: 37,
  loop: true,
  backDelay: 1000,
  smartBackspace: true,
});

const progressBar = document.getElementsByClassName("progress-bar");
let animated = false;
const skills = document.querySelector("#skills");

window.addEventListener("scroll", () => {
  const rect = skills.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    for (let i = 0; i < progressBar.length; i++) {
      const targetWidth = progressBar[i].dataset.width;
      setTimeout(() => {
        progressBar[i].style.width = targetWidth + "%";
      }, i * 200);
    }
    animated = true;
  }
});
const form = document.querySelector(".needs-validation");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop default submission
  if (!form.checkValidity()) {
    e.stopPropagation();
    form.classList.add("was-validated");
  } else {
    alert("Message sent successfully! (simulated)");
    form.reset();
    form.classList.remove("was-validated");
  }
});

