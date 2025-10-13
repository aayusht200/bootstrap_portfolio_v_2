const header = document.querySelector("#header");

window.addEventListener("scroll", () => {
  header.classList.toggle("navbar-scroll", window.scrollY > 80);
  console.log(header.classList);
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
