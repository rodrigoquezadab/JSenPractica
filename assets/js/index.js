"use strict";

//Ejercicio 1
//Validar formulario y enviar.
let form = document.getElementById("formulario");
form.addEventListener("submit", login);

function login(event) {
  limpiarErrores();
  event.preventDefault();
  let nombre = document.querySelector("#nombre").value;
  let asunto = document.querySelector("#asunto").value;
  let mensaje = document.querySelector("#mensaje").value;
  let resultado = validar(nombre, asunto, mensaje);
  console.log("resultado", resultado);
  if (resultado == true) {
    exito();
  }
}

function validar(nombre, asunto, mensaje) {
  console.log(nombre, asunto, mensaje);
  let pasamosLaValidacion = true;
  let validacionNombre = /[a-zA-Z]/gim;
  let validacionAsunto = /[a-zA-Z]/gim;
  let validacionMensaje = /[a-zA-Z]/gim;

  if (validacionNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML =
      "Ingrese un nombre válido para nombre.";
    pasamosLaValidacion = false;
  }

  if (validacionAsunto.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML =
      "Ingrese un asunto válido.";
    pasamosLaValidacion = false;
  }

  if (validacionMensaje.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML =
      "Ingrese un mensaje válido.";
    pasamosLaValidacion = false;
  }

  console.log("validacion", pasamosLaValidacion);
  return pasamosLaValidacion;
}

function limpiarErrores() {
  document.querySelector(".resultado").innerHTML = "";
  document.querySelector(".errorNombre").innerHTML = "";
  document.querySelector(".errorAsunto").innerHTML = "";
  document.querySelector(".errorMensaje").innerHTML = "";
}

function exito() {
  document.querySelector(".resultado").innerHTML =
    "Formulario pasó la validación";
}

//Ejercicio 2
//Funcion para leer color y cambiar color
function botones(el) {
  let color = el.style.backgroundColor;
  let fondo = document.getElementById("caja");
  //cambiar el color del fondo
  fondo.style.backgroundColor = color;
}

//Ejercicio 3
//Calcuar suma y resta de dos numeros

function sumar(el) {
  let valor1 = parseInt(document.querySelector("#valor1").value);
  let valor2 = parseInt(document.querySelector("#valor2").value);
  let resultadoCalc = document.querySelector(".resultadoCalc");
  el.id == "btn-sumar"
    ? valor1 + valor2 < 0
      ? (resultadoCalc.innerText = 0)
      : (resultadoCalc.innerText = valor1 + valor2)
    : valor1 - valor2 < 0
    ? (resultadoCalc.innerText = 0)
    : (resultadoCalc.innerText = valor1 - valor2);
  console.log(el.id);
  console.log(resultadoCalc);
}
