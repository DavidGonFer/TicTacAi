function win(boarda) {
    const winningCombinations = [
        // Filas
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Columnas
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonales
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const [rowA, colA] = a;
        const [rowB, colB] = b;
        const [rowC, colC] = c;

        if (
            boarda[rowA][colA] !== '-' &&
            boarda[rowA][colA] === boarda[rowB][colB] &&
            boarda[rowA][colA] === boarda[rowC][colC]
        ) {
            return boarda[rowA][colA];
        }
    }

    // Comprobar si hay empate
    let isTie = true;
    for (const row of boarda) {
        for (const cell of row) {
            if (cell === '-') {
                isTie = false;
                break;
            }
        }
        if (!isTie) {
            break;
        }
    }

    if (isTie) {
        return "tie";
    }

    return null;
}
