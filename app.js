const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value ;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

function colorRgbBody(rojo,verde,azul){
   const colorRgb = `rgb(${rojo}, ${verde}, ${azul})`
   document.body.style.backgroundColor = colorRgb
}

inputRojo.addEventListener('change', (e) =>{
  rojo = e.target.value;
  textoRojo.textContent = rojo;/*Esto actualiza el valor de la variable global*/
  colorRgbBody(rojo,verde,azul)
})

inputVerde.addEventListener('change', (e) =>{
  verde = e.target.value;
  textoVerde.textContent = verde;
  colorRgbBody(rojo,verde,azul)
})

inputAzul.addEventListener('change', (e) =>{
  azul = e.target.value;
  textoAzul.textContent = azul;
  colorRgbBody(rojo,verde,azul)
})
