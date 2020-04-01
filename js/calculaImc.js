var titulo = document.querySelector('.titulo');

titulo.textContent = 'Nutricionista';

var pacientes = document.querySelectorAll(".paciente");



for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;


    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    var imc = paciente.querySelector(".info-imc");
    
    validaPaciente(paciente);
}

function validaPaciente(paciente){
    if (!pesoValido) {
        console.log("Peso inválido");
        imc.textContent = "Peso inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura inválida");
        imc.textContent = "Altura inválida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {
        var imcf = calculaImc(peso, altura);
        imc.textContent = imcf;
        paciente.classList.add("paciente-valido");
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 100){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
