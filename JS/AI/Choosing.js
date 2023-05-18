
function colocarImagenesEnTablero(array) {
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const piece = array[row][col];
        if (piece !== "-" && cell.innerHTML == '') {
            const img = document.createElement('img');
            img.classList.add('draggedImage', piece, 'piece', 'disable-drag');
            img.src = `./IMG/${piece}.png`;
            img.draggable = false;

            cell.innerHTML = '';
            cell.appendChild(img);

            $(cell.children).hide().fadeIn(1000); // Animación de fadeIn (puedes ajustar la duración a tu gusto)
        }
        else if (piece !== "-") {
            const img = document.createElement('img');
            img.classList.add('draggedImage', piece, 'piece', 'disable-drag');
            img.src = `./IMG/${piece}.png`;
            img.draggable = false;

            cell.innerHTML = '';
            cell.appendChild(img);

        } else {
            cell.innerHTML = '';
        }






    });
}


function elegirArray(nodes) {
    if (nodes != null && nodes.length > 0) {
        let puntuacion = nodes[0].puntuacion;
        var nodoPuntMax = nodes[0];
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node && node.puntuacion && puntuacion < node.puntuacion) {
                puntuacion = node.puntuacion;
                nodoPuntMax = node;
            }
        }
        colocarImagenesEnTablero(nodoPuntMax.board);

    }
}
