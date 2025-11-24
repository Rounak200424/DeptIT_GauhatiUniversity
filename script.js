const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

let slides = document.querySelectorAll('.slide');
let index = 0;

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 3000);
