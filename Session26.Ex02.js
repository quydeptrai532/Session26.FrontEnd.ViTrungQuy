let arr=[]
while(1){
    let a=prompt(`Mời bạn nhập vào 1 chuỗi`)
    arr.push(a)
    let b=prompt(alert(`Nếu muốn dừng lại mời nhập 1 muốn tiếp tục thì nhập ngẫu nhiên`))
    if(b===`1`){
        break
    }

}
if(arr.length===0){
    document.writeln(`Mảng trống`)
} else{
    let result=arr.filter(function(element,index){
        return element.length>5
    })
    document.writeln("Các chuỗi có độ dài lớn hơn 5 ký tự: " + result.join(", "));
}
