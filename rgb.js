const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

let textoRojo = document.getElementById('texto-rojo');
let textoVerde = document.getElementById('texto-verde');
let textoAzul = document.getElementById('texto-azul');

textoRojo.textContent = rojo; 
textoVerde.textContent = verde;
textoAzul.textContent = azul;

function colorRgb(rojo, verde, azul){
   const colorRgbBody = `rgb(${rojo}, ${verde}, ${azul})`;
   document.body.style.backgroundColor = colorRgbBody;
}

inputRojo.addEventListener('change', (e) =>{
    rojo = e.target.value;
    textoRojo.textContent = rojo;
    colorRgb(rojo,verde,azul);
}) 

inputVerde.addEventListener('change', (e) =>{
    verde = e.target.value;
    textoVerde.textContent = verde;
    colorRgb(rojo,verde,azul);
}) 

inputAzul.addEventListener('change', (e) =>{
    azul = e.target.value;
    textoRojo.textContent = azul;
    colorRgb(rojo,verde,azul);
}) 
