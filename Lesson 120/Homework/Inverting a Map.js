function invertMap(map) {
    const invertedMap = new Map();
    for (let [key, value] of map) {
        invertedMap.set(value, key);
    }
    return invertedMap;
}
console.log(invertMap(new Map([["a", 1], ["b", 2], ["c", 3]]))); // Map { 1 => 'a', 2 => 'b', 3 => 'c' }