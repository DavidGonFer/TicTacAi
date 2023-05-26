
  function evaluarBloqueo(tablero, jugador) {
    const contrincante = jugador === "X" ? "O" : "X";
  

    // Comprobación de diagonales
    if (
      (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === contrincante) ||
      (tablero[0][0] === jugador && tablero[1][1] === contrincante && tablero[2][2] === jugador) ||
      (tablero[0][0] === contrincante && tablero[1][1] === jugador && tablero[2][2] === jugador)
    ) {
      return contrincante;
    } else if (
      (tablero[0][0] === contrincante && tablero[1][1] === contrincante && tablero[2][2] === jugador) ||
      (tablero[0][0] === contrincante && tablero[1][1] === jugador && tablero[2][2] === contrincante) ||
      (tablero[0][0] === jugador && tablero[1][1] === contrincante && tablero[2][2] === contrincante)
    ) {
      return jugador;
      
    }
  
    if (
      (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === contrincante) ||
      (tablero[0][2] === jugador && tablero[1][1] === contrincante && tablero[2][0] === jugador) ||
      (tablero[0][2] === contrincante && tablero[1][1] === jugador && tablero[2][0] === jugador)
    ) {
      return contrincante;
    } else if (
      (tablero[0][2] === contrincante && tablero[1][1] === contrincante && tablero[2][0] === jugador) ||
      (tablero[0][2] === contrincante && tablero[1][1] === jugador && tablero[2][0] === contrincante) ||
      (tablero[0][2] === jugador && tablero[1][1] === contrincante && tablero[2][0] === contrincante)
    ) {
      return jugador;
      
    }

    // Comprobación de filas
    for (let i = 0; i < 3; i++) {
      if (
        (tablero[i][0] === jugador && tablero[i][1] === jugador && tablero[i][2] === contrincante) ||
        (tablero[i][0] === jugador && tablero[i][1] === contrincante && tablero[i][2] === jugador) ||
        (tablero[i][0] === contrincante && tablero[i][1] === jugador && tablero[i][2] === jugador)
      ) {
        return contrincante;
      } else if (
        (tablero[i][0] === contrincante && tablero[i][1] === contrincante && tablero[i][2] === jugador) ||
        (tablero[i][0] === contrincante && tablero[i][1] === jugador && tablero[i][2] === contrincante) ||
        (tablero[i][0] === jugador && tablero[i][1] === contrincante && tablero[i][2] === contrincante)
      ) {
        
        return jugador;
      }
    }
  
    // Comprobación de columnas
    for (let i = 0; i < 3; i++) {
      if (
        (tablero[0][i] === jugador && tablero[1][i] === jugador && tablero[2][i] === contrincante) ||
        (tablero[0][i] === jugador && tablero[1][i] === contrincante && tablero[2][i] === jugador) ||
        (tablero[0][i] === contrincante && tablero[1][i] === jugador && tablero[2][i] === jugador)
      ) {
        return contrincante;
        
      } else if (
        (tablero[0][i] === contrincante && tablero[1][i] === contrincante && tablero[2][i] === jugador) ||
        (tablero[0][i] === contrincante && tablero[1][i] === jugador && tablero[2][i] === contrincante) ||
        (tablero[0][i] === jugador && tablero[1][i] === contrincante && tablero[2][i] === contrincante)
      ) {
        return jugador;
      }
    }
  
    
    return null; // No hay ganador en el siguiente movimiento
  }
  function hayHuecosLibres(tablero) {
    // Comprobar filas
    for (let i = 0; i < 3; i++) {
      if (tablero[i][0] === "X" && tablero[i][1] === "-" && tablero[i][2] === "X") {
        return true;
      }else if (tablero[i][0] === "-" && tablero[i][1] === "X" && tablero[i][2] === "X") {
        return true;
      }else if (tablero[i][0] === "X" && tablero[i][1] === "X" && tablero[i][2] === "-") {
        return true;
      }
    }
  
    // Comprobar columnas
    for (let i = 0; i < 3; i++) {
      if (tablero[0][i] === "X" && tablero[1][i] === "-" && tablero[2][i] === "X") {
        return true;
      }else if (tablero[0][i] === "-" && tablero[1][i] === "X" && tablero[2][i] === "X") {
        return true;
      }else if (tablero[0][i] === "X" && tablero[1][i] === "X" && tablero[2][i] === "-") {
        return true;
      }
    }
  
    // Comprobar diagonal principal
    if (tablero[0][0] === "X" && tablero[1][1] === "-" && tablero[2][2] === "X") {
      return true;
    }
  
    // Comprobar diagonal secundaria
    if (tablero[0][2] === "X" && tablero[1][1] === "-" && tablero[2][0] === "X") {
      return true;
    }
  
    return false;
  }
  