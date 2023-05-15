$(document).ready(function() {
  // mở modal
  $("#link-myModal").on('click', function() {
    $("#myModal").modal("show");
  });

  // khi nhấn nút btn sẽ kiểm tra các điều kiện của form
  $("#btnSave").click(function() {
  var maBenhNhan = $("#txtMa").val();
  var matKhau = $("#txtTour").val();
  var ngayKham = $("#txtDate").val();
  var chuyenKhoa = $("#txtChuyenKhoa").val();
  var dichVu = [];
  var tongTien = 0;
  var soDichVu = $(".check-ip:checked").length; // Số lượng checkbox được chọn

  // Biểu thức chính quy cho mã bệnh nhân (bắt đầu bằng BN-YYYYY)
  var maBenhNhanRegex = /^BN-\d{5,}$/;
  // Biểu thức chính quy cho mật khẩu (từ 6 chữ số trở lên)
  var matKhauRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
  // Kiểm tra ngày khám phải sau ngày hiện tại
  var ngayHienTai = new Date();
  var ngayKhamDate = new Date(ngayKham);
  var isValidNgayKham = ngayKhamDate > ngayHienTai;
  if (!maBenhNhanRegex.test(maBenhNhan)) {
  alert("Mã bệnh nhân không hợp lệ! Mã bệnh nhân phải bắt đầu bằng BN- và theo sau là 5 chữ số.");
  return;
  }
  if (!matKhauRegex.test(matKhau)) {
  alert("Mật khẩu không hợp lệ! Mật khẩu phải bao gồm ít nhất 6 chữ & số.");
  return;
  }
  if (!isValidNgayKham) {
  alert("Ngày khám không hợp lệ! Ngày khám phải sau ngày hiện tại.");
  return;
  }
  
  // // Tính tổng tiền tương ứng với số lượng checkbox được chọn
  if (soDichVu > 0) {
    tongTien = soDichVu * 5000; 
    dichVu.push();
  }

  // Tạo row mới trong table và hiển thị thông tin từ modal
  var table = $("table");
  var newRow = $("<tr>");
  var cols = "";
  cols += "<td>" + (table.find("tr").length) + "</td>";
  cols += "<td>" + maBenhNhan + "</td>";
  cols += "<td>" + matKhau + "</td>";
  cols += "<td>" + ngayKham + "</td>";
  cols += "<td>" + dichVu.join(", ") + " " + formatCurrency(tongTien) + "</td>";
  cols += "<td>" + chuyenKhoa + "</td>";
  newRow.append(cols);
  table.append(newRow);

  // Reset form và đóng modal
  $("#myModal").modal("hide");
  $("form").trigger("reset");
  $(".check-ip:checked").prop("checked", false);
});

function formatCurrency(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}      
});      
  