function findKeysWithMaxValue(map) {
    let maxVal = -Infinity;
    let keysWithMaxValue = [];
    
    for (let [key, value] of map) {
        if (value > maxVal) {
            maxVal = value;
            keysWithMaxValue = [key];
        } else if (value === maxVal) {
            keysWithMaxValue.push(key);
        }
    }
    
    return keysWithMaxValue;
}
console.log(findKeysWithMaxValue(new Map([["a", 1], ["b", 2], ["c", 3], ["d", 3]]))); // [ 'c', 'd' ]