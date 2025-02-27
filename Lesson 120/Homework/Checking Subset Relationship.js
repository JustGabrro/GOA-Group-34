function isSubset(setA, setB) {
    for (let element of setA) {
        if (!setB.has(element)) {
            return false;
        }
    }
    return true;
}
console.log(isSubset(new Set([1, 2, 3]), new Set([1, 2, 3, 4, 5]))); // true
console.log(isSubset(new Set([1, 2, 3]), new Set([1, 2, 4, 5]))); // false