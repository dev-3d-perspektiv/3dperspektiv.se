// Simple site script.

const toggle = document.querySelector("#toggle");
const menu = document.querySelector("#site-header-nav");
const htmlElement = document.documentElement;

const toggleClass = "nav--open";

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  handleToggle();
});

menu.addEventListener("click", closeMenu);

window.addEventListener("click", function (e) {
  if (toggle.contains(e.target)) {
    // Do nothing
  } else {
    closeMenu();
  }
});

document.body.addEventListener("keydown", function (e) {
  if (e.keyCode === 27 && htmlElement.classList.contains(toggleClass)) {
    e.preventDefault();
    handleToggle();
  }
});

function handleToggle() {
  htmlElement.classList.toggle(toggleClass);
  toggle.setAttribute(
    "aria-expanded",
    toggle.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
}

function closeMenu() {
  if (htmlElement.classList.contains(toggleClass)) {
    toggle.click();
  }
}
