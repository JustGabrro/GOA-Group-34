function findFirstNonRepeatingElement(input) {
    if (typeof input !== 'string' && !Array.isArray(input)) return false;
    let countMap = new Map();
    for (let item of input) countMap.set(item, (countMap.get(item) || 0) + 1);
    for (let item of input) if (countMap.get(item) === 1) return item;
    return false;
}
