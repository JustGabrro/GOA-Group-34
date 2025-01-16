function promptUser(message) {
    return prompt(message);
}

function validateNumber(input) {
    const number = parseFloat(input);
    return !isNaN(number) ? number : null;
}

function calculateProduct(num1, num2) {
    return num1 * num2;
}

function main() {
    alert("Welcome to the Multiplication Program!");

    while (true) {
        const firstInput = promptUser("Enter the first number:");
        if (firstInput === null) break;

        const firstNumber = validateNumber(firstInput);
        if (firstNumber === null) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        const secondInput = promptUser("Enter the second number:");
        if (secondInput === null) break;

        const secondNumber = validateNumber(secondInput);
        if (secondNumber === null) {
            alert("Invalid input. Please enter a valid number.");
            continue;
        }

        const product = calculateProduct(firstNumber, secondNumber);
        alert(`The product of ${firstNumber} and ${secondNumber} is ${product}.`);

        const exitChoice = promptUser("Type 'exit' to quit or press Enter to continue:");
        if (exitChoice?.trim().toLowerCase() === "exit") {
            alert("Thank you for using the program! Goodbye.");
            break;
        }
    }
}

main();
