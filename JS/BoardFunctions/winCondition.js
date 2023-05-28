// Función para verificar si hay una victoria en el tablero (implementación básica para un juego de 3 en raya)
function win(board) {
    const lines = [
      // Combinaciones ganadoras en filas
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // Combinaciones ganadoras en columnas
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // Combinaciones ganadoras en diagonales
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];
  
    for (const line of lines) {
      const [a, b, c] = line;
      if (board[a[0]][a[1]] !== '-' && board[a[0]][a[1]] === board[b[0]][b[1]] && board[a[0]][a[1]] === board[c[0]][c[1]]) {
        return board[a[0]][a[1]]; // Retorna el jugador que ha ganado
      }
    }
  
    // Si no hay victoria, verifica si hay empate
    if (board.flat().includes('-')) {
      return null; // Todavía hay movimientos disponibles, el juego continúa
    } else {
      return 'tie'; // No hay más movimientos disponibles, es un empate
    }
  }