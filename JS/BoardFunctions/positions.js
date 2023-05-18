let board = [];

function actualizarTablero() {
  board = [];
  const rows = document.querySelectorAll(".row");

  // Recorre cada fila
  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll(".cell");

    // Crea una nueva fila en el tablero
    const newRow = [];

    // Recorre cada casilla en la fila actual
    for (let j = 0; j < cells.length; j++) {
      const cell = cells[j];

      // Comprueba si la casilla contiene una pieza
      const img = cell.querySelector("img");
      if (img) {
        var className = img.className.replace(" piece", "");
        className = className.replace("draggedImage ", "");
        if(className.includes(" disable-drag")){className = className.replace(" disable-drag", "");}
        if(className.includes(" dark")){className = className.replace(" dark", "");}
        newRow.push(className);
      } else {
        newRow.push("-");
      }
    }

    // Añade la fila al tablero
    board.push(newRow);
  }
  console.log(board);
}

actualizarTablero();
