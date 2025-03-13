function filterValidEmails(emailList) {
    if (!Array.isArray(emailList)) {
        return "Dữ liệu không hợp lệ";
    }

    var validEmails = emailList.filter(function (email) {
        return email.includes("@") && !email.includes(" ");
    });

    return validEmails.length > 0 ? validEmails : "Mảng không có phần tử nào";
}

console.log(filterValidEmails(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"])); 
console.log(filterValidEmails([])); 
console.log(filterValidEmails("abc")); 
console.log(filterValidEmails(["abc", "xyz@domain", "test email@domain.com"])); 
