function formatDates(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    var formattedDates = arr.map(function (date) {
        var parts = date.split("-");
        if (parts.length === 3) {
            return parts[2] + "/" + parts[1] + "/" + parts[0];
        }
        return null;
    }).filter(function (date) {
        return date !== null;
    });

    return formattedDates.length > 0 ? formattedDates : "Mảng không có phần tử nào";
}

console.log(formatDates(["2025-03-10", "2024-12-25", "2023-07-01"])); 
console.log(formatDates([])); 
console.log(formatDates("abc")); 
console.log(formatDates(["invalid-date", "2022-01-01"])); 
