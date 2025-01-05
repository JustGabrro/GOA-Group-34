//Sum of Digits / Digital Root

function digitalRoot(n) {
    while (n >= 10) {
      n = String(n)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return n;
  }