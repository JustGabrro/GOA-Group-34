function unionOfSets(setsArray) {
    const union = new Set();
    setsArray.forEach(set => {
      set.forEach(value => {
        union.add(value);
      });
    });
    return union;
  }
  