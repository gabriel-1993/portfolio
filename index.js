// Botón para abrir y cerrar menú (div que lo contiene)
const barsBtn = document.querySelector(".menu-label");
// ||| logo menu responsive
const abrirMenu = document.querySelector(".fa-bars");
// X logo cerrar menu responsive
const cerrarMenu = document.querySelector(".fa-xmark");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
// Logo menu responsive antes de abrirlo
const logoResponsive = document.querySelector(".fa-bars");
// Logo menu responsive X para cerrarlo
const logoResponsiveX = document.querySelector(".fa-xmark");
//span cartel contactame en form
const spanContactame = document.querySelector(".spanContactame");
//Capturo formulario
const formulario = document.querySelector("#form");
//capturar enlace <a> que envia form al correo(permitira darle un click automatico)
const btnEnviarForm = document.querySelector("#emailJS");
//capturar boton arriba
const botonArriba = document.querySelector(".fa-chevron-up");
//div contenedor de iconos Luna y Sol
const divClaroOscuro = document.querySelector(".divClaroOscuro");
//capturar icono Luna
const botonLuna = document.querySelector(".fa-moon");
//capturar icono sol
const botonSol = document.querySelector(".fa-sun");

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

/*Controlar submit del formulario y enviar form con FORMSPREE*/
/*Video tutorial: https://www.youtube.com/watch?v=qtH8PLuy1Ck&t=96s */
async function controlarSubmit(event) {
  event.preventDefault();
  const formulario = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: formulario,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    //limpiar form
    this.reset();
    alert("Gracias por contactarme, te respondere pronto. 😊");
  }
}

/* Funcion para ir arriba al hacer click en el boton (>) */
function irArriba() {
  let scroll = document.documentElement.scrollTop;
  if (scroll > 487) {
    botonArriba.style.right = 20 + "px";
  } else {
    botonArriba.style.right = -100 + "px";
  }
}

//Funcion para cambiar de icono SOL/ LUNA al recibir un click.
const actualizarIconoClaroOscuro = () => {
  if (botonLuna.classList.contains("fa-moon-active")) {
    botonLuna.classList.remove("fa-moon-active");
    botonSol.classList.add("fa-sun-active");
  } else if (botonSol.classList.contains("fa-sun-active")) {
    botonSol.classList.remove("fa-sun-active");
    botonLuna.classList.add("fa-moon-active");
  }
};

// Puerta de entrada
const init = () => {
  abrirMenu.addEventListener("click", menuRespOnOff);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeMenuOnScroll);
  overlay.addEventListener("click", closeMenuOnClickOut);
  maquinaEscribir("Contáctame.  ", 160, spanContactame);
  window.addEventListener("scroll", irArriba);
  formulario.addEventListener("submit", controlarSubmit);
  divClaroOscuro.addEventListener("click", actualizarIconoClaroOscuro);
};
init();
