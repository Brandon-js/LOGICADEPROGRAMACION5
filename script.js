function generarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function juegoAdivinanza() {
    const numeroSecreto = generarNumeroSecreto();
    const numerosIntroducidos = [];
  
    while (true) {
      let input = prompt("Intenta adivinar el número secreto (1-100):");
  
      if (input === null || isNaN(input)) {
        alert("Por favor, ingresa un número válido.");
        continue;
      }
  
      const numeroUsuario = parseInt(input, 10);
      numerosIntroducidos.push(numeroUsuario);
  
      if (numeroUsuario === numeroSecreto) {
        alert("Felicidades, adivinaste el número secreto.");
        alert("Lista de números introducidos: " + numerosIntroducidos.join(", "));
        break;
      } else {
        alert("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
      }
    }
  }
  
  // Llamar a la función principal del juego
  juegoAdivinanza();
  