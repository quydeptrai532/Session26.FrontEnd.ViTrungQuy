function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function filterPrimeNumbers(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    var primeNumbers = arr.filter(function (num) {
        return Number.isInteger(num) && isPrime(num);
    });

    return primeNumbers.length > 0 ? primeNumbers : "Mảng không có phần tử nào";
}

console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(filterPrimeNumbers([])); 
console.log(filterPrimeNumbers("abc")); 
console.log(filterPrimeNumbers([4, 6, 8, 10])); 
