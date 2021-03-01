var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = document.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000)
{
    console.log("Peso invalido");
    pesoEhValido = false;
    tdImc.textContent = "Peso invalido!"
}

if(altura <= 0 || altura >= 3.00)
{
    console.log("Altura invalida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura invalida!"
}

if(alturaEhValida && pesoEhValido)
{
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}

