var player;
document.addEventListener("DOMContentLoaded", function () {
  var cells = document.querySelectorAll(".cell");

  cells.forEach(function (cell) {
    cell.addEventListener("dragover", function (e) {
      e.preventDefault();
    });

    cell.addEventListener("drop", function (e) {
      e.preventDefault();

      if (cell.children.length === 0 && win(board) == null) {
        var draggedImageHTML = e.dataTransfer.getData("text/html");

        var tempDiv = document.createElement("div");
        tempDiv.innerHTML = draggedImageHTML;
        var draggedImage = tempDiv.querySelector(".draggedImage");

        if (draggedImage) {
          cell.appendChild(draggedImage);
          actualizarTablero();
          draggedImage.classList.add("disable-drag");

          if (draggedImage.classList.contains("X")) { player = 'O'; } else {
            player = 'X';
          }

          const depth = 7;

          const tree = construirArbolDecisiones(board, player, depth);
          elegirArray(tree.children);
          console.log(tree);
          actualizarTablero();


        }
      }

      var otherPlayer = (player === "X") ? "O" : "X";
      if (win(board) == otherPlayer) {
        disableDragAndDrop();
        setTimeout(() => {
          initConfetti();
          render();
        }, 200);
        setTimeout(() => {
          textAreaOverWin();
        }, 1500);

      }
      if (win(board) == player) { // Cambio en la condición
        disableDragAndDrop();
        setTimeout(() => {
          textAreaOverLoss(); // Primero mostrar el texto
        }, 1500);
      }
      if (win(board) == "tie") { // Cambio en la condición
        disableDragAndDrop();
        setTimeout(() => {
          textAreaOverTie(); // Primero mostrar el texto
        }, 1500);
      }
    });
  });

  var draggedImages = document.querySelectorAll(".draggedImage");
  draggedImages.forEach(function (draggedImage) {
    draggedImage.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/html", this.outerHTML);
    });
  });
});

function disableDragAndDrop() {
  var cells = document.querySelectorAll(".cell");
  cells.forEach(function (cell) {
    cell.removeEventListener("dragover", function (e) {
      e.preventDefault();
    });

    cell.removeEventListener("drop", function (e) {
      e.preventDefault();
      // Resto de la lógica para manejar el evento drop
    });
  });


}
