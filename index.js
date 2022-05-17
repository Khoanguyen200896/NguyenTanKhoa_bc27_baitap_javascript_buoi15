function tinhDiemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A": // tương đương khuVuc === "A"
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}
function tinhDiemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "1":
      return 2;
    case "2":
      return 1;
    case "3":
      return 0.5;
    default:
      return 0;
  }
}

function tinhKetQua() {
  //B1 Dom tới input để lấy giá trị
  var mon1 = +document.getElementById("Score1").value;
  var mon2 = +document.getElementById("Score2").value;
  var mon3 = +document.getElementById("Score3").value;
  var khuVuc = document.getElementById("khuVuc").value;
  var diemChuan = +document.getElementById("dtScore").value;
  var doiTuong = document.getElementById("doiTuong").value;
  //B2 Xu ly diem
  var diemKhuVuc = tinhDiemKhuVuc(khuVuc);
  var diemDoiTuong = tinhDiemDoiTuong(doiTuong);

  var totalScore = diemKhuVuc + diemDoiTuong + mon1 + mon2 + mon3;

  if (totalScore < diemChuan) {
    document.getElementById("xuatKetQua").innerHTML = "Rớt rồi!!";
  } else if (totalScore >= diemChuan) {
    if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    //   document.getElementById("ketQua").style.display = "block";
      document.getElementById("xuatKetQua").innerHTML = "Rớt rồi!!";
    } else {
    //   document.getElementById("ketQua").style.display = "block";
      document.getElementById("xuatKetQua").innerHTML = "Đậu rồi mừng ghê!!";
    }
  }
  //B3:Xuất kết quả ra màn hình
  document.getElementById("ketQua").style.display = "block";
}


//Bài tập 2

function tinhTien(){//B1:DOM tới input để lấy giá trị lượng điện tiêu thụ
  var kW=+document.getElementById("usedKw").value;
  var userName= document.getElementById("ownerName").value;
  var price=0;
  //B2:Xác định lượng điện tiêu thụ theo các mức giá
  if (kW <=50){
    price += 500* kW;

  }else if(kW<=100){
    price += 500* 50 + (kW-50)*650;
  }
  else if ( kW <=200){
    price +=500*50 + 50*650 + (kW-100)*850;
    
  }
  else if( kW <= 350 ){
    price +=50*500 + 50*650 + 100*850 + (kW-200)*1100;
  }
  else{
    price += 50*500 + 50*650 + 100*850 + 150*1100 + (kW-350)*1300;
  }
  //B3:Xuất kết quả ra màn hình
  document.getElementById('chiPhi').style.display="block";
document.getElementById('soTienTra').innerHTML =`Số tiền ${userName} phải trả là: ${price.toLocaleString()} đồng`;

}

