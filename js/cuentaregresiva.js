let fecha = new Date("09/27/2025"); 
let msFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaRegre = document.querySelector("#cuenta-regre");

spanFecha.innerText = fecha.toLocaleDateString();

let intervalo = setInterval(() =>{
  let hoy = new Date().getTime();
  let distancia = msFecha - hoy;

  let msPorDia = 1000 * 60 * 60 * 24;
  let msPorHora = 1000 * 60 * 60;
  let msPorMinuto = 1000 * 60;
  let msPorSegundo = 1000;

  let dias = Math.floor(distancia / msPorDia);
  let horas = Math.floor((distancia %  msPorDia) / msPorHora);
  let minutos = Math.floor((distancia %  msPorHora) / msPorMinuto);
  let segundos = Math.floor((distancia %  msPorMinuto) / msPorSegundo);
  
parrafoDias.innerText = dias;
parrafoHoras.innerText = horas < 10 ? "0" + horas:horas;
parrafoMinutos.innerText = minutos < 10 ? "0" + minutos:minutos;
parrafoSegundos.innerText = segundos < 10 ? "0" + segundos:segundos;

if (distancia < 0) {
    clearInterval(intervalo);
    cuentaRegre.innerHTML ="<p class='chico' style='font-size: 24px'>¡Llego el gran día!</p>"
}


},1000)