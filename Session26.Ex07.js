let arr = [];

for (let i = 0; i < 10; i++) {
    let num = Number(prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}:`));

    if (isNaN(num)) {
        alert("Dữ liệu không hợp lệ, vui lòng nhập số nguyên.");
        i--;
    } else {
        arr.push(num);
    }
}

let squaredArr = arr.map(function (num) {
    return num * num;
});

let evenNumbers = squaredArr.filter(function (num) {
    return num % 2 === 0;
});

if (evenNumbers.length === 0) {
    console.log("Mảng không có phần tử nào thỏa điều kiện.");
} else {
    console.log("Các số sau khi bình phương và là số chẵn:", evenNumbers);
}
