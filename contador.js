let contador = 0;

const contenedorValoresContador = document.getElementById('contador');
const botonIncrementador = document.getElementById('btn-incrementar');

function incrementarContador() {
    contador++; 
    contenedorValoresContador.textContent = contador; 
}

botonIncrementador.addEventListener('click', incrementarContador);