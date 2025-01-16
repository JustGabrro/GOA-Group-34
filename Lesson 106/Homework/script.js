// 5 kyu Convert PascalCase string into snake_case

function toUnderscore(input) {
    if (typeof input !== "string") input = String(input);
    return input.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  }