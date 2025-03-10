function similarity(a, b) {
    let setA = new Set(a);
    let setB = new Set(b);

    let intersection = new Set([...setA].filter(x => setB.has(x)));
    let union = new Set([...setA, ...setB]);

    return intersection.size / union.size;
}
