function progressiveConcat(str) {
    let len = str.length;
    let half = Math.floor(len / 2);
    let result = [];

    for (let i = 0; i < half; i++) {
        result.push(str[i] + str[len - 1 - i] + (i + 1));
    }

    return result.join('');
}
