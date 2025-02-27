function characterFrequency(str) {
    const frequencyMap = new Map();
    for (let char of str) {
      frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }
    return frequencyMap;
  }
  