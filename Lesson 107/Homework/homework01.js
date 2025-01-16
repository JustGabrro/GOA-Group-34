// sumLargest.js
function sumOfTwoLargestElements(n, arr) {
    if (!Array.isArray(arr) || arr.length !== n) {
        return "Error: Invalid input. The array size must match n.";
    }
    if (n < 2) {
        return "Error: Array must contain at least two elements.";
    }

    let max1 = -Infinity, max2 = -Infinity;

    for (let num of arr) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
    }

    return `Largest Sum = ${max1 + max2}`;
}

console.log(sumOfTwoLargestElements(5, [18, 12, 40, 1, 19])); 
