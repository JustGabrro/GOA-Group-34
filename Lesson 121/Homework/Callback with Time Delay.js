function simulateProcess(message, callback) {
    setTimeout(function() {
        console.log(message);
        callback();
    }, 2000);
}

simulateProcess("Processing data...", function() {
    console.log("Process Complete");
});
