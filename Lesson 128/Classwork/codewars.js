function findSmallestInteger(matrix) {
    let nums = new Set();
    
    matrix.forEach(row => row.forEach(num => nums.add(num)));
    
    let i = 0;
    while (nums.has(i)) {
        i++;
    }
    
    return i;
}
