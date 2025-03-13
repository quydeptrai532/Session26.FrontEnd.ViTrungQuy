function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let arr = [];
let length = Number(prompt("Nhập số phần tử của mảng (từ 10 đến 20):"));

if (isNaN(length) || length < 10 || length > 20) {
    console.log("Dữ liệu không hợp lệ.");
} else {
    for (let i = 0; i < length; i++) {
        let num = Number(prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}:`));

        if (isNaN(num)) {
            alert("Dữ liệu không hợp lệ, vui lòng nhập số nguyên.");
            i--;
        } else {
            arr.push(num);
        }
    }

    let primeOddNumbers = arr.filter(function (num) {
        return isPrime(num) && num % 2 !== 0;
    });

    if (primeOddNumbers.length === 0) {
        console.log("Mảng không có phần tử nào thỏa điều kiện.");
    } else {
        console.log("Các số nguyên tố là số lẻ:", primeOddNumbers);
    }
}
