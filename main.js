const header = document.querySelector("header");
const body = document.querySelector("body");
const main = document.querySelector("main");
const hamberger = document.querySelector(".hamberger");
const sidebar = document.querySelector(".sidebar");
const close = document.querySelector(".close");

let dropdow = document.querySelectorAll(".nav-dropdow");
for (const element of dropdow) {
  element.addEventListener("click", () => {
    element.classList.toggle("showmenu");
  });
}

hamberger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  body.classList.toggle("overlay");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("active");
  body.classList.remove("overlay");
});
