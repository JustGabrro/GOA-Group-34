function greetUserWithDelay() {
    let name = prompt("Please enter your name:");
    setTimeout(function() {
        console.log(`Thank you for your input, ${name}!`);
    }, 3000);
}

greetUserWithDelay();
