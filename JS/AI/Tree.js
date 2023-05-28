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

    node.puntuacion = (evaluarMovimiento(child)/depth);
   
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
      return -10; // Bloquear a "X" tiene una alta prioridad
    } else {
      return 0;
    }
  } else {
    if (node.player === "O") {
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
        

        

        minScore = Math.min(minScore, score);
        beta = Math.min(beta, minScore);

        totalScore += score;

        if (alpha >= beta) {
          break;
        }
      }

      const averageScore = totalScore;

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

        if (win(newNode.board) === null) {
          const childNodes = generarNodosPosibles(newBoard, opponent, depth - 1);
          newNode.children = childNodes;
        }

        nodes.push(newNode);
      }
    }
  }

  return nodes;
}




