function symmetricDifference(setA, setB) {
    const result = new Set([...setA].filter(x => !setB.has(x)));
    const diffB = new Set([...setB].filter(x => !setA.has(x)));
    diffB.forEach(x => result.add(x));
    return result;
  }
  