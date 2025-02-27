function changeColorWithDelay(color, callback) {
    setTimeout(function() {
        let element = document.getElementById('text');
        element.style.color = color;
        callback();
    }, 2000);
}

changeColorWithDelay("red", function() {
});
