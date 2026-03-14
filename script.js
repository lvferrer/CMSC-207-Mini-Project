document.addEventListener("DOMContentLoaded", function () {

  const fadeItems = document.querySelectorAll(".fade-item");
  fadeItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, 120 * index);
  });

  const menuButtons = document.querySelectorAll("#menuBtn");
  const navs = document.querySelectorAll("#topnav");

  menuButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      navs[index].classList.toggle("open");
    });
  });
});