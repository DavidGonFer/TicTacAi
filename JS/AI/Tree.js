function construirArbolDecisiones(board, player, depth, alpha = -Infinity, beta = Infinity) {
  if (depth === 0 || win(board) === "X" || win(board) === "O" || win(board) === "tie") {
    return { board: board, player: player, children: [], puntuacion: 0 };
  }

  const root = {
    board: board,
    player: player,
    children: []
  };

  const nodes = generarNodosPosibles(board, player, depth - 1);
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const opponent = player === 'X' ? 'O' : 'X';

    const child = construirArbolDecisiones(node.board, opponent, depth - 1, alpha, beta);

    node.puntuacion = evaluarMovimiento(child);
    
    root.children.push(node);

    if (player === 'X') {
      alpha = Math.max(alpha, node.puntuacion);
    } else {
      beta = Math.min(beta, node.puntuacion);
    }

    if (alpha >= beta) {
      break; // Podamos el subárbol restante
    }
  }

  return root;
}

function evaluarMovimiento(node, alpha = -Infinity, beta = Infinity) {
  if (win(node.board) !== null) {
    if (win(node.board) === "O") {
      return 1;
    } else if (win(node.board) === "X") {
      return -1; // Bloquear a "X" tiene una alta prioridad
    } else {
      return 0;
    }
  } else {
    if (node.player === "X") {
      let maxScore = -Infinity;

      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        let score = evaluarMovimiento(child, alpha, beta);

        maxScore = Math.max(maxScore, score);
        alpha = Math.max(alpha, maxScore);
        
        if (alpha >= beta) {
          break;
        }
      }

      return maxScore;
    } else {
      let minScore = Infinity;
      let totalScore = 0;

      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        let score = evaluarMovimiento(child, alpha, beta);
        
        
        if (evaluarBloqueo(child.board, "O") == "O" && hayHuecosLibres(child.board)==false) {
            score += 1; // Incentivar el bloqueo de movimientos ganadores de "X"
        }
        
        if (win(child.board) === "O") {
          score += 1; // Incentivar la victoria de "O"
        } else {
          score -= 1;
        }
        for(let j=0;j<child.children.length;j++){
          if(win(child.children[j].board)=="X"){
            score-=11;
          }
        }
        

        minScore = Math.min(minScore, score);
        beta = Math.min(beta, minScore);

        totalScore += score;

        if (alpha >= beta) {
          break;
        }
      }

      const averageScore = totalScore / calcularProfundidad(node);

      return averageScore;
    }
  }
}



function generarNodosPosibles(board, player, depth) {
  const nodes = [];

  if (depth === 0) {
    return nodes;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        const newBoard = JSON.parse(JSON.stringify(board));
        newBoard[i][j] = player;

        const newNode = {
          board: newBoard,
          player: player,
          puntuacion: 0,
          children: [],
        };

        const opponent = player === 'X' ? 'O' : 'X';
        const childNodes = generarNodosPosibles(newBoard, opponent, depth - 1);

        newNode.children = childNodes;
        nodes.push(newNode);
      }
    }
  }

  return nodes;
}



function calcularProfundidad(node) {
  // Caso base: si el nodo no tiene hijos, la profundidad es 0
  if (node.children.length === 0) {
    return 0;
  }

  let maxProfundidad = 0;

  // Recorrer los hijos del nodo
  for (const child of node.children) {
    // Calcular la profundidad del hijo actual de forma recursiva
    const profundidadHijo = calcularProfundidad(child);

    // Actualizar la máxima profundidad encontrada
    if (profundidadHijo > maxProfundidad) {
      maxProfundidad = profundidadHijo;
    }
  }

  // La profundidad del nodo actual es la máxima profundidad encontrada en sus hijos, más 1
  return maxProfundidad + 1;
}
