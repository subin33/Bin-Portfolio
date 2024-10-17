// TYPED JS
var typed = new Typed(".text", {
  strings: ["Web Developer", "Designer", "App Developer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

// SHOW EDUCATION & EXPERIENCE

let EducationBtn = document.querySelector(".education");
let ExperienceBtn = document.querySelector(".experience");
let show_box = document.querySelectorAll(".show_box");
let hide_box = document.querySelectorAll(".hide_box");

EducationBtn.addEventListener("click", () => {
  show_box.forEach((Sbox) => {
    Sbox.style.opacity = "0";
  });
  hide_box.forEach((Hbox) => {
    Hbox.style.opacity = "1";
  });
});

ExperienceBtn.addEventListener("click", () => {
  show_box.forEach((Sbox) => {
    Sbox.style.opacity = "1";
  });
  hide_box.forEach((Hbox) => {
    Hbox.style.opacity = "0";
  });
});
