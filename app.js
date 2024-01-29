let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;




function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    //alert('Click desde el botón');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos ===1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuario no acertó
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        intentos++
        limpiarCaja();

    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '' ;
    
}




function generarNumeroSecreto() {
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {

        //Si el número generado está incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {

            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mens1aje de intervalo de números
    //generar el número aleatorio
    //Iinicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


    condicionesIniciales();

