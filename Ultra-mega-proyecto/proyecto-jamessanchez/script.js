const input1 = document.getElementById("myNumber");
const precio1 = document.getElementById("precio");
let valorAnterior1 = parseInt(input1.value);

input1.addEventListener('change', actualizarPrecio1);

const input2 = document.getElementById("myNumber2");
const precio2 = document.getElementById("precio2");
let valorAnterior2 = parseInt(input2.value);

input2.addEventListener('change', actualizarPrecio2);

const input3 = document.getElementById("myNumber3");
const precio3 = document.getElementById("precio3");
let valorAnterior3 = parseInt(input3.value);

input3.addEventListener('change', actualizarPrecio3);

const precioTotales = document.getElementById("precioTotales");

function actualizarPrecio1(){
    const valor1 = parseInt(input1.value);
    if (valor1 === valorAnterior1 + 1 || valor1 === valorAnterior1 - 1) {
        const precioActual1 = parseInt(precio1.textContent.replace("$", ""));
        const nuevoPrecio1 = precioActual1 + (valor1 - valorAnterior1);
        precio1.textContent = "$" + nuevoPrecio1;
        valorAnterior1 = valor1;
        actualizarPrecioTotales();
    }
}

function actualizarPrecio2(){
    const valor2 = parseInt(input2.value);
    if (valor2 === valorAnterior2 + 1 || valor2 === valorAnterior2 - 1) {
        const precioActual2 = parseInt(precio2.textContent.replace("$", ""));
        const nuevoPrecio2 = precioActual2 + (valor2 - valorAnterior2);
        precio2.textContent = "$" + nuevoPrecio2;
        valorAnterior2 = valor2;
        actualizarPrecioTotales();
    }
}

function actualizarPrecio3(){
    const valor3 = parseInt(input3.value);
    if (valor3 === valorAnterior3 + 1 || valor3 === valorAnterior3 - 1) {
        const precioActual3 = parseInt(precio3.textContent.replace("$", ""));
        const nuevoPrecio3 = precioActual3 + (valor3 - valorAnterior3);
        precio3.textContent = "$" + nuevoPrecio3;
        valorAnterior3 = valor3;
        actualizarPrecioTotales();
    }
}

function actualizarPrecioTotales() {
    const nuevoPrecioTotales = parseInt(precio1.textContent.replace("$", "")) + parseInt(precio2.textContent.replace("$", "")) + parseInt(precio3.textContent.replace("$", ""));
    precioTotales.textContent = "$" + nuevoPrecioTotales;
}
