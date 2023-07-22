// Botón para abrir y cerrar menú (div que lo contiene)
const barsBtn = document.querySelector(".menu-label");
// ||| logo menu responsive
const abrirMenu = document.querySelector(".menu-icon1");
// X logo cerrar menu responsive
const cerrarMenu = document.querySelector(".menu-icon2");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
// Logo menu responsive antes de abrirlo
const logoResponsive = document.querySelector(".menu-icon1");
// Logo menu responsive X para cerrarlo
const logoResponsiveX = document.querySelector(".menu-icon2");
//span cartel contactame en form
const spanContactame = document.querySelector(".spanContactame");
//Capturo formulario
const formulario = document.querySelector("#form");

// FUNCIONES ************************************************
//Funcion para actualizar logo cuando se abra o cierre el menu responsive
const estadoMenuResp = () => {
  if (barsMenu.classList.contains("open-menu")) {
    abrirMenu.src = "./assets/icon-menu-close.svg";
  } else {
    abrirMenu.src = "./assets/icon-menu.svg";
  }
};
// Funcion para mostrar ocultar el menu responsive
const menuRespOnOff = () => {
  barsMenu.classList.toggle("open-menu");
  overlay.classList.toggle("show-overlay");
  estadoMenuResp();
};
// Funcion para cerrar el Menu responsive y remover el difuminado de fondo ,al hacer click unicamente en algun enlace
const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) {
    return;
  } else {
    barsMenu.classList.remove("open-menu");
    overlay.classList.remove("show-overlay");
    estadoMenuResp();
  }
};
// Funcion para ocultar el Menu responsive es caso de Scrolear
const closeMenuOnScroll = (e) => {
  if (!barsMenu.classList.contains("open-menu")) {
    return;
  } else {
    barsMenu.classList.remove("open-menu");
    overlay.classList.remove("show-overlay");
    estadoMenuResp();
  }
};
// Funcion para cerrar el menu cuando hagamos click fuera ,es decir sobre el overlay
const closeMenuOnClickOut = (e) => {
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
  estadoMenuResp();
};
//Funcion maquina de escribir
const maquinaEscribir = (text = "", tiempo = 160, etiqueta = "") => {
  let arrayCaracteres = text.split("");
  etiqueta.innerHTML = "";
  let i = 0;
  let j = text.length;
  let escribir = setInterval(function () {
    if (i === arrayCaracteres.length) {
      //retrocedes
      etiqueta.innerHTML = text.substring(0, j);
      j--;
      if (j === 0) {
        etiqueta.innerHTML = "";
        i = 0;
        j = text.length;
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i];
      i++;
    }
  }, tiempo);
};

/*Controlar submit del formulario*/

function controlSubmit(event) {
  event.preventDefault();
}

// Puerta de entrada
const init = () => {
  abrirMenu.addEventListener("click", menuRespOnOff);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeMenuOnScroll);
  overlay.addEventListener("click", closeMenuOnClickOut);
  maquinaEscribir("Contactáme.  ", 160, spanContactame);
  formulario.addEventListener("submit", controlSubmit);
};
init();
