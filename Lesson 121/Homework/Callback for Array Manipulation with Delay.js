function squareNumbersWithDelay(arr, callback) {
    let squaredArray = [];
    let counter = 0;

    arr.forEach(function(num) {
        setTimeout(function() {
            squaredArray.push(num * num);
            counter++;
            if (counter === arr.length) {
                callback(squaredArray);
            }
        }, 2000 * counter);  
    });
}

squareNumbersWithDelay([1, 2, 3, 4], function(squaredArray) {
    console.log(squaredArray);  
});
