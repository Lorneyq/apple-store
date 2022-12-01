const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("menu-open");
});

const anchors = document.querySelectorAll('a[href*="#"');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".upward");
  scroll.classList.toggle("active", window.scrollY > 500);
});
function scrollTopTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
