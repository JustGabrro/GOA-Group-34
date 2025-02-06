function sumDigits(n) {
    let result = 0;
    n = Math.abs(n);  
    while (n > 0) {
        result += n % 10;
        n = Math.floor(n / 10); 
    }
    return result;
}

console.log(sumDigits(123));  
console.log(sumDigits(405));  
console.log(sumDigits(-405)); 

function sumTwoLargest(lst) {
    if (lst.length < 2) {
        return null;
    }

    let max1 = Math.max(...lst);
    lst.splice(lst.indexOf(max1), 1);  
    let max2 = Math.max(...lst);  

    return max1 + max2;
}

console.log(sumTwoLargest([3, 7, 2, 9, 5]));  
console.log(sumTwoLargest([10, 10, 5, 3]));   

