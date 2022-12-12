const cipher = {

  encode(textoNuevo, numeroCifrado) {
    let textoCodificado = '';

    const respuestaEnMayus = textoNuevo.toUpperCase();

    for (let index = 0; index < textoNuevo.length; index++) {

      const codigoLetraOriginal = respuestaEnMayus.charCodeAt(index);

      if (codigoLetraOriginal === 32) {
        textoCodificado += respuestaEnMayus[index]
        continue 
      }

      const posicion = (codigoLetraOriginal - 65 + numeroCifrado) % 26

      let codigoDeLetraCifrada
      if (posicion < 0) {
        codigoDeLetraCifrada = 91 - posicion

      } else {
        codigoDeLetraCifrada = posicion + 65
      }

      textoCodificado += String.fromCharCode(codigoDeLetraCifrada);

    }

    return textoCodificado;

  },

  decode(textoRecibido, numeroCifrado) {

    let textoDecodificado = '';

    const respuestaEnMayus = textoRecibido.toUpperCase();

    for (let index = 0; index < textoRecibido.length; index++) {

      const codigoLetraConvertida = respuestaEnMayus.charCodeAt(index);

      if (codigoLetraConvertida === 32) {
        textoDecodificado += respuestaEnMayus[index]
        continue 
      }

      const posicion = (codigoLetraConvertida - 65 - numeroCifrado) % 26

      let codigoDeLetraDescifrada
      if (posicion < 0) {
        codigoDeLetraDescifrada = 91 + posicion

      } else {
        codigoDeLetraDescifrada = posicion + 65
      }

      textoDecodificado += String.fromCharCode(codigoDeLetraDescifrada);

    }

    return textoDecodificado;

  }

};

export default cipher;
