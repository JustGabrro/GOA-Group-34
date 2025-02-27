function doubleChar(s) {
    let result = [];
    for (let i of s) {
        let sum = i + i;
        result.push(sum);
    }
    return result.join('');
}
