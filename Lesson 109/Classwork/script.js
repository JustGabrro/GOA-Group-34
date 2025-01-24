const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

function func(operation, ...numbers) {
    if (typeof operation !== 'function') {
        throw new Error("The first argument must be a function.");
    }
    if (numbers.length === 0) {
        if (operation === add) return 0;
        if (operation === subtract) return 0;
        if (operation === multiply) return 1;
    }
    return numbers.reduce(operation);
}

console.log(func(add, 1, 7, 2, 1));       
console.log(func(subtract, 10, 3, 2));   
console.log(func(multiply, 2, 3, 4));    