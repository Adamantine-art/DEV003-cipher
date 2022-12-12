import cipher from './cipher.js';

const cajaDeTexto = document.getElementById("texto");
const botonCifrar = document.getElementById("codeButton");
const botonDescifrar = document.getElementById("decodeButton");
const cajaDeNumero = document.getElementById("key");

botonCifrar.addEventListener("click", () => {
    
  const input = cajaDeTexto.value;
  const offset = parseInt(cajaDeNumero.value);

  cajaDeTexto.value = cipher.encode(input, offset);

});

botonDescifrar.addEventListener("click", () => {
    
  const input = cajaDeTexto.value;
  const offset = parseInt(cajaDeNumero.value);
  
  cajaDeTexto.value = cipher.decode(input, offset);
  
});
