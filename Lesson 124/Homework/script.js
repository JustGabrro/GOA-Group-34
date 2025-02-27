const messageQueue = [];
let isProcessing = false;

document.getElementById('submitBtn').addEventListener('click', () => {
    const message = document.getElementById('message').value;
    const delay = parseInt(document.getElementById('delay').value, 10);

    if (message.trim() === "" || isNaN(delay) || delay < 0) {
        alert("Please enter a valid message and delay.");
        return;
    }

    messageQueue.push({ message, delay });
    processQueue();
});

function processQueue() {
    if (isProcessing || messageQueue.length === 0) return;

    const { message, delay } = messageQueue.shift();
    isProcessing = true;

    setTimeout(() => {
        displayMessage(message);  
        isProcessing = false;
        processQueue(); 
    }, delay);
}

function displayMessage(message) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = message;  
    console.log(message);  
}
