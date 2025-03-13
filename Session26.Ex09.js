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

    let totalEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    let totalOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);

    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu.");
    } else {
        console.log("Tổng các số chẵn:", totalEven);
        console.log("Tổng các số lẻ:", totalOdd);
    }
}
