function match(usefulness, months) {
    const husbandUsefulness = usefulness.reduce((a, b) => a + b, 0);
    const needs = 100 * Math.exp(-0.15 * months);
    return husbandUsefulness >= needs ? "Match!" : "No match!";
  };