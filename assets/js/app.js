// funcionalidad de desplazar hacia arriba
const desplazarArriba = document.querySelector("#scroll-up");

desplazarArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Cerrar el menú de hambuguesa cuando se hace click en un enlace 

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

 

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);