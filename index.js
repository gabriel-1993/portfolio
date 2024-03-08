// Botón para abrir y cerrar menú (div que lo contiene)
const barsBtn = document.querySelector(".menu-label");
// ||| logo menu responsive
const abrirMenu = document.querySelector(".fa-bars");
// X logo cerrar menu responsive
const cerrarMenu = document.querySelector(".fa-xmark");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa 
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

//Funcion para cambiar estilos Claro/Oscuro

const cssClaroOscuro = () => {
  let modoClaro = false;
  // Cambia el estado del modo claro/oscuro
  if (botonSol.classList.contains("fa-sun-active")) {
    modoClaro = !modoClaro;
  }

  if (modoClaro) {

    // Capturar elementos a modificar color
    let iconoHamburguesa = document.querySelector(".fa-bars");
    let fondoMenuResponsive = document.querySelector(".navbar-list");
    let gaby = document.querySelector(".gaby");
    let enlaces = document.querySelectorAll(".navbar-link");
    let colorDeFondo = document.body;
    let spanHola = document.querySelector(".spanTitulo");
    let spanEstudiante = document.querySelector(".spanTitulo2");
    let gitHub = document.querySelector(".fa-github");
    let linkedIn = document.querySelector(".fa-linkedin");
    let contacto = document.querySelector(".fa-square-phone");
    let divDecoration = document.querySelector(".divDecoration");
    let fontsNegritas = document.querySelectorAll(".fontNegrita");
    let spansTexts = document.querySelectorAll(".spanText");
    let pSobreMi = document.querySelector(".pSobreMi");
    let iconoEducacion = document.querySelector(".fa-graduation-cap");
    let h3Educacion = document.querySelector(".h3Educacion");
    let logosCalendarios = document.querySelectorAll(".fa-calendar-check");
    let pEducacionStrong = document.querySelectorAll(".pClaroOscuro");
    let spansEducacion = document.querySelectorAll(".spanClaroOscuro");
    let texts4x1 = document.querySelectorAll(".text4x1");
    let divsProyectos = document.querySelectorAll(".divProyecto");
    let pProyecto = document.querySelectorAll(".pProyecto");
    let logosGitHubProyectos = document.querySelectorAll(".githubproyect");
    let logosGitHubOtrosProyectos = document.querySelectorAll(".githubotrosProyectos");
    let logosVercelProyectos = document.querySelectorAll(".fa-globe");
    let logosVercelOtrosProyectos = document.querySelectorAll(".fa-globeProyectos");
    let h3OtrosProyectos = document.querySelectorAll(".h3OtroProyecto");
    let pOtrosProyectos = document.querySelectorAll(".pCardOtrosProyectos");
    let h1Contacto = document.querySelector(".h1Contacto");
    let pContacto = document.querySelector(".pContacto");
    let logoEmailContacto = document.querySelector(".fa-envelope");
    let logoTelefonoContacto = document.querySelector(".fa-sq-ph2");
    let emailTelefonoContacto = document.querySelectorAll(".font-bold");
    let inputsContacto = document.querySelectorAll(".contacto-datos");
    let h2Footer = document.querySelector(".h2Footer");
    let pFooter = document.querySelector(".pFooter");
    let iconosFooter = document.querySelectorAll(".iconoFooter");



    // Modificar colores
    iconoHamburguesa.style.color ="#1f2023";

    fondoMenuResponsive.style.backgroundColor="#fff";

    gaby.style.color = "#1f2023";

    enlaces.forEach(enlace => {
      enlace.style.color = "#000";
    });

    colorDeFondo.style.backgroundColor = "#fff";

    spanHola.style.color = "#1f2023";

    spanEstudiante.style.color = "#1f2023";

    gitHub.style.color = "#636363"

    linkedIn.style.color = "#636363";

    contacto.style.color = "#636363";

    divDecoration.style.borderColor = "#636363";

    fontsNegritas.forEach(enlace => {
      enlace.style.color = "#000";
    });

    spansTexts.forEach(enlace => {
      enlace.style.color = "#1f2023";
    });

    pSobreMi.style.color = "#1f2023";

    iconoEducacion.style.color="#000";

    h3Educacion.style.color = "#000";

    logosCalendarios.forEach(enlace => {
      enlace.style.color = "#1f2023";
    });

    pEducacionStrong.forEach(enlace => {
      enlace.style.color = "#000";
    });

    spansEducacion.forEach(enlace => {
      enlace.style.color = "#1f2023";
    });

    texts4x1.forEach(enlace => {
      enlace.style.color = "#000";
    });

    divsProyectos.forEach(elemento =>{
      elemento.style.borderColor="#5f4983";
    })  

    pProyecto.forEach(elemento =>{
      elemento.style.backgroundColor="#5f4983";
      elemento.style.color="#1f2023";
    })  

    logosGitHubProyectos.forEach(enlace => {
      enlace.style.color = "#000";
    });

    //Hover para enlaces 
    logosGitHubProyectos.forEach(elemento => {
      // Agrega el efecto al pasar el mouse sobre el elemento
      elemento.addEventListener('mouseover', () => {
        elemento.style.color = "#5f4983";
      });
      // Elimina el efecto al sacar el mouse del elemento
      elemento.addEventListener('mouseout', () => {
        elemento.style.color = '#000';
      });
    });

    logosVercelProyectos.forEach(enlace => {
      enlace.style.color = "#000";
    });

    logosVercelProyectos.forEach(elemento => {
      // Agrega el efecto al pasar el mouse sobre el elemento
      elemento.addEventListener('mouseover', () => {
        elemento.style.color = "#5f4983";
      });
      // Elimina el efecto al sacar el mouse del elemento
      elemento.addEventListener('mouseout', () => {
        elemento.style.color = '#000';
      });
    });

    logosGitHubOtrosProyectos.forEach(enlace => {
      enlace.style.color = "#636363";
    });

    logosGitHubOtrosProyectos.forEach(elemento => {
      // Agrega el efecto al pasar el mouse sobre el elemento
      elemento.addEventListener('mouseover', () => {
        elemento.style.color = "#5f4983";
      });
      // Elimina el efecto al sacar el mouse del elemento
      elemento.addEventListener('mouseout', () => {
        elemento.style.color = '#636363';
      });
    });

    logosVercelOtrosProyectos.forEach(enlace => {
      enlace.style.color = "#636363";
    });

    logosVercelOtrosProyectos.forEach(elemento => {
      // Agrega el efecto al pasar el mouse sobre el elemento
      elemento.addEventListener('mouseover', () => {
        elemento.style.color = "#5f4983";
      });
      // Elimina el efecto al sacar el mouse del elemento
      elemento.addEventListener('mouseout', () => {
        elemento.style.color = '#636363';
      });
    });

    h3OtrosProyectos.forEach(enlace => {
      enlace.style.color = "#000";
    });

    pOtrosProyectos.forEach(enlace => {
      enlace.style.color = "#1f2023";
    });

    h1Contacto.style.color = "#1f2023";

    pContacto.style.color = "#1f2023";

    logoEmailContacto.style.color = "#000";

    logoTelefonoContacto.style.color = "#000";

    emailTelefonoContacto.forEach(elemento => {
      elemento.style.color = "#000";
    })

    inputsContacto.forEach(elemento => {
      elemento.style.backgroundColor = "#fff";
    })

    h2Footer.style.color = "#000";

    pFooter.style.color = "#000";

    iconosFooter.forEach(elemento => {
      elemento.style.color = "#636363";
    })

    //Hover para iconos del footer
    iconosFooter.forEach(elemento => {
      // Agrega el efecto al pasar el mouse sobre el elemento
      elemento.addEventListener('mouseover', () => {
        elemento.style.color = "#5f4983";
      });
      // Elimina el efecto al sacar el mouse del elemento
      elemento.addEventListener('mouseout', () => {
        elemento.style.color = '#636363';
      });
    });

  } else {
    // Elimina los estilos del modo claro y restaura los estilos oscuros por defecto
    // Capturar elementos a modificar color
    let iconoHamburguesa = document.querySelector(".fa-bars");
    let fondoMenuResponsive = document.querySelector(".navbar-list");
    let gaby = document.querySelector(".gaby");
    let enlaces = document.querySelectorAll(".navbar-link");
    let colorDeFondo = document.body;
    let spanHola = document.querySelector(".spanTitulo");
    let spanEstudiante = document.querySelector(".spanTitulo2");
    let gitHub = document.querySelector(".fa-github");
    let linkedIn = document.querySelector(".fa-linkedin");
    let contacto = document.querySelector(".fa-square-phone");
    let divDecoration = document.querySelector(".divDecoration");
    let fontsNegritas = document.querySelectorAll(".fontNegrita");
    let spansTexts = document.querySelectorAll(".spanText");
    let pSobreMi = document.querySelector(".pSobreMi");
    let iconoEducacion = document.querySelector(".fa-graduation-cap");
    let h3Educacion = document.querySelector(".h3Educacion");
    let logosCalendarios = document.querySelectorAll(".fa-calendar-check");
    let pEducacionStrong = document.querySelectorAll(".pClaroOscuro");
    let spansEducacion = document.querySelectorAll(".spanClaroOscuro");
    let texts4x1 = document.querySelectorAll(".text4x1");
    let divsProyectos = document.querySelectorAll(".divProyecto");
    let pProyecto = document.querySelectorAll(".pProyecto");
    let logosGitHubProyectos = document.querySelectorAll(".githubproyect");
    let logosGitHubOtrosProyectos = document.querySelectorAll(".githubotrosProyectos");
    let logosVercelProyectos = document.querySelectorAll(".fa-globe");
    let logosVercelOtrosProyectos = document.querySelectorAll(".fa-globeProyectos");
    let h3OtrosProyectos = document.querySelectorAll(".h3OtroProyecto");
    let pOtrosProyectos = document.querySelectorAll(".pCardOtrosProyectos");
    let h1Contacto = document.querySelector(".h1Contacto");
    let pContacto = document.querySelector(".pContacto");
    let logoEmailContacto = document.querySelector(".fa-envelope");
    let logoTelefonoContacto = document.querySelector(".fa-sq-ph2");
    let emailTelefonoContacto = document.querySelectorAll(".font-bold");
    let inputsContacto = document.querySelectorAll(".contacto-datos");
    let h2Footer = document.querySelector(".h2Footer");
    let pFooter = document.querySelector(".pFooter");
    let iconosFooter = document.querySelectorAll(".iconoFooter");


    iconoHamburguesa.style.color = "";

    fondoMenuResponsive.style.backgroundColor="";

    gaby.style.color = "";

    enlaces.forEach(enlace => {
      enlace.style.color = "";
    });

    colorDeFondo.style.backgroundColor = "";

    spanHola.style.color = "";

    spanEstudiante.style.color = "";

    gitHub.style.color = "";

    linkedIn.style.color = "";

    contacto.style.color = "";

    divDecoration.style.borderColor = "";

    fontsNegritas.forEach(enlace => {
      enlace.style.color = "";
    });

    spansTexts.forEach(enlace => {
      enlace.style.color = "";
    });

    pSobreMi.style.color = "";

    iconoEducacion.style.color="";

    h3Educacion.style.color = "";

    logosCalendarios.forEach(enlace => {
      enlace.style.color = "";
    });

    pEducacionStrong.forEach(enlace => {
      enlace.style.color = "";
    });

    spansEducacion.forEach(enlace => {
      enlace.style.color = "";
    });

    texts4x1.forEach(enlace => {
      enlace.style.color = "";
    });

    divsProyectos.forEach(elemento =>{
      elemento.style.borderColor="";
    })  

    pProyecto.forEach(elemento =>{
      elemento.style.backgroundColor="";
      elemento.style.color="";
    }) 

    logosGitHubProyectos.forEach(enlace => {
      enlace.style.color = "";
    });

    logosVercelProyectos.forEach(enlace => {
      enlace.style.color = "";
    });

    logosGitHubOtrosProyectos.forEach(enlace => {
      enlace.style.color = "";
    });

    logosVercelOtrosProyectos.forEach(enlace => {
      enlace.style.color = "";
    });

    h3OtrosProyectos.forEach(enlace => {
      enlace.style.color = "";
    });

    pOtrosProyectos.forEach(enlace => {
      enlace.style.color = "";
    });


    h1Contacto.style.color = "";

    pContacto.style.color = "";

    logoEmailContacto.style.color = "";

    logoTelefonoContacto.style.color = "";

    emailTelefonoContacto.forEach(elemento => {
      elemento.style.color = "";
    })

    inputsContacto.forEach(elemento => {
      elemento.style.backgroundColor = "";
    })

    h2Footer.style.color = "";

    pFooter.style.color = "";

    iconosFooter.forEach(elemento => {
      elemento.style.color = "";
    })

  }



}

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
  divClaroOscuro.addEventListener("click", cssClaroOscuro);
};
init();
