// lastRepeated.js
function findLastRepeatedElement(n, arr) {
    if (!Array.isArray(arr) || arr.length !== n) {
        return "Error: Invalid input. The array size must match n.";
    }

    const seen = new Map();
    let lastRepeated = null;

    for (let i = 0; i < n; i++) {
        if (seen.has(arr[i])) {
            lastRepeated = arr[i];
        }
        seen.set(arr[i], true);
    }

    return lastRepeated !== null
        ? `Last Repeated Element = ${lastRepeated}`
        : "No repeated elements found.";
}

console.log(findLastRepeatedElement(6, [1, 3, 4, 1, 3, 12]));
