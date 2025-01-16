// 1.
function sumOfMatrix(matrix) {
    return matrix.reduce((sum, row) => sum + row.reduce((a, b) => a + b, 0), 0);
}

// 2.
function transposeMatrix(matrix) {
    const n = matrix.length;
    return Array.from({ length: n }, (_, i) => matrix.map(row => row[i]));
}

// 3.
function diagonallyAlignedSum(matrix) {
    const n = matrix.length;
    const primaryDiagonalSum = matrix.reduce((sum, row, i) => sum + row[i], 0);
    const secondaryDiagonalSum = matrix.reduce((sum, row, i) => sum + row[n - 1 - i], 0);
    return [primaryDiagonalSum, secondaryDiagonalSum];
}
