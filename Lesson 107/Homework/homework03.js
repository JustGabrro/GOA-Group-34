// countGreaterToLeft.js
function countGreaterElementsToLeft(n, arr) {
    if (!Array.isArray(arr) || arr.length !== n) {
        return "Error: Invalid input. The array size must match n.";
    }

    const result = [];

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                count++;
            }
        }
        result.push(count);
    }

    return result.join(",");
}

console.log(countGreaterElementsToLeft(5, [3, 2, 6, 5, 1])); 
