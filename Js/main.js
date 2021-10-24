 /**Bài 1 - Xuất số chẵn lẻ*/

function xuatSoChan(){ //lặp bằng for
    var ketQua = ""
    for(var i=0; i < 100; i++){
        if(i % 2 == 0){
            ketQua +=  i + ", ";
        }
    }
    document.getElementById("result1_soChan").style.display = "block";  //hiện kết quả
    document.getElementById("result1_soChan").innerHTML = "Các số chẵn bé hơn 100 là: " + ketQua + "."
}
document.getElementById("btnCalc1_soChan").onclick = xuatSoChan; 

function xuatSoLe(){ //lặp bằng while
    var ketQua = "";
    var i = 1;
    while (i < 100){
        if(i % 2 != 0){
            ketQua +=  i + ", ";
        }
        i++;
    }
    document.getElementById("result1_soLe").style.display = "block";  //hiện kết quả
    document.getElementById("result1_soLe").innerHTML = "Các số lẻ bé hơn 100 là: " + ketQua + "."
}
document.getElementById("btnCalc1_soLe").onclick = xuatSoLe; 

    /**Bài 2 - Đếm số chia hết cho 3 */

function demSoDungFor(){
    var demso = 0;
    for(var i=0; i < 1000; i++){
        if(i % 3 == 0){
            demso++;
        }
    }
    document.getElementById("result2").style.display = "block";  //hiện kết quả
    document.getElementById("result2").innerHTML = "Số lượng các số chia hết cho 3 dưới 1000 là: " + demso
}
document.getElementById("btnCalc2_for").onclick = demSoDungFor;

// function demSoDungWhile(){
//     var demso = 0;
//     var i=1;
//     while (i < 1000){
//         if(i % 3 == 0){
//             demso++;
//         }
//         i++
//     }
//     document.getElementById("result2").style.display = "block";  //hiện kết quả
//     document.getElementById("result2").innerHTML = "(Dùng While) Số lượng các số chia hết cho 3 dưới 1000 là: " + demso
// }
// document.getElementById("btnCalc2_while").onclick = demSoDungWhile;


    /**Bài 3 - Tìm số nguyên dương nhỏ nhất thỏa điều kiện: 1+2+3+...+n < 10 000  */

function timso(){
    var sum = 0;
    for(i = 1; sum < 10000; i++){
        sum += i
    }
    i -= 1;
    document.getElementById("result3").style.display = "block";  //hiện kết quả
    document.getElementById("result3").innerHTML = "Số thỏa điều kiện là: " + i
}
document.getElementById("btnCalc3").onclick = timso;

    /**Bài 4 - Tính tổng theo yêu cầu */

function luyThua(a,b){ //lập công thức tính a mũ b
    ketQua = 1;
    for(var i = 1;i <= b; i++){
        ketQua *= a;
    }
    return ketQua
}

function Tinh_TongS(){
    var x = Number(document.getElementById("Input_x").value)
    var n = Number(document.getElementById("Input_n").value)
    var S = x;

    //kiểm tra xem user có nhập x hay n chưa?
    if (document.getElementById("Input_x").value.length == 0) {
        document.getElementById("result4").style.display = "block";
        document.getElementById("result4").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result4").innerHTML = "Vui lòng nhập vào giá trị x" //Nhắc user nhập cho đủ
    } else if (document.getElementById("Input_n").value.length == 0) {
        document.getElementById("result4").style.display = "block";
        document.getElementById("result4").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result4").innerHTML = "Vui lòng nhập vào giá trị n" //Nhắc user nhập cho đủ
    } else {
        var bieuThuc = "" //để xuất ra dãy x + x^2+ x^3 + ...
        for (var i = 2; i <= n; i++) {
            bieuThuc += " + " + x + "<sup>" + i + "</sup>"
            S += luyThua(x, i)
        }
        document.getElementById("result4").style.display = "block";  //hiện kết quả
        document.getElementById("result4").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result4").innerHTML = "Kết quả tổng dãy số là: S(n) = " + x + bieuThuc + " = " + Intl.NumberFormat().format(S)
    }
    
}
document.getElementById("btnCalc4").onclick = Tinh_TongS;

    /**Bài 5 - Tính dãy số nhân */ 

function Tinh_daySoNhan(){
    var n = Number(document.getElementById("B5_Input_n").value)
    var S = 1;
    var bieuThuc = "" //để xuất ra dãy 1*2*3*..*n

    //kiểm tra xem user có nhập n hay chưa?
    if (document.getElementById("B5_Input_n").value.length == 0) {
        document.getElementById("result5").style.display = "block";
        document.getElementById("result5").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result5").innerHTML = "Vui lòng nhập vào giá trị n" //Nhắc user nhập cho đủ
    } else {
        for (var i = 2; i <= n; i++) {
            bieuThuc += "*" + i
            S *= i
        }
        document.getElementById("result5").style.display = "block";  //hiện kết quả
        document.getElementById("result5").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result5").innerHTML = "Kết quả tích dãy số: " + n + "! = 1" + bieuThuc + " = " + Intl.NumberFormat().format(S)
    }
}
document.getElementById("btnCalc5").onclick = Tinh_daySoNhan;

    /**Bài 6 - Tạo thẻ DIV */

function taoTheDIV(){
    var inner = ""; //chuỗi chứa thẻ DIV nối vào
    for (var i = 1; i <= 10; i++) {
        if(i % 2 ==0){
            inner += "<div style='background-color: red; padding-left: 1em;  color: white;'>Thẻ thứ "+i+" (DIV chẵn).</div>"
        } else{
            inner += "<div style='background-color: blue; padding-left: 1em; color: white;'>Thẻ thứ "+i+" (DIV lẻ).</div>"
        }
    }
    document.getElementById("result6").style.display = "block";  //hiện kết quả
    document.getElementById("result6").innerHTML = inner
    
}
document.getElementById("btnCalc6").onclick = taoTheDIV;

    /** Bài 7 - Tìm số nguyên tố */

function Tim_soNguyenTo(){
    var n = Number(document.getElementById("B7_Input_n").value)
    var inner = ""; //chuỗi chứa danh sách số nguyên tố nối vào

    //kiểm tra xem user có nhập n hay chưa?
    if (document.getElementById("B7_Input_n").value.length == 0) {
        document.getElementById("result7").style.display = "block";
        document.getElementById("result7").className = "alert alert-warning mt-3"; //đổi màu thông báo sang kiểu warrning
        document.getElementById("result7").innerHTML = "Vui lòng nhập vào giá trị n" //Nhắc user nhập cho đủ
    } else {
        for (var i = 2; i <= n; i++) { //cho i chạy từ 2 tới n
            var count = 0;
            for (var j = 2; j <= i; j++){ //dùng biến j lặp tiếp từ 2 tới i, dùng i chia j để ktra xem i có phải số nguyên tố ko?
                if(i % j == 0){
                    count++
                }
            }
            console.log(i+ "chia hết cho "+count + "số")
            if (count==1){
                inner += ", " +i
            }
        }
        document.getElementById("result7").style.display = "block";  //hiện kết quả
        document.getElementById("result7").className = "alert alert-success mt-3"; //đổi lại màu thông báo sang kiểu success nếu lỡ người dùng nhập sai trước đó
        document.getElementById("result7").innerHTML = "Các số nguyên tố từ 2 tới "+n+" là: " + inner + "."
    }
    
    
}
document.getElementById("btnCalc7").onclick = Tim_soNguyenTo;