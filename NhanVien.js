function NhanVien() {
  this.taiKhoan = "";
  this.hoTen = "";
  this.email = "";
  this.matKhau = "";
  this.ngayLam = "";
  this.luongCoBan = "";
  this.chucVu = "";
  this.gioLam = "";
  this.tongLuong = function () {
    let tinhTongLuong = 0;
    if (arrIdInput == "Sếp") {
      tinhTongLuong = this.luongCoBan * 3;
    } else if (arrIdInput == "Trưởng Phòng") {
      tinhTongLuong = this.luongCoBan * 2;
    } else {
      tinhTongLuong = this.luongCoBan * 1;
    }
    return tinhTongLuong;
  };
  this.xepLoaiNhanVien = function () {
    if (arrIdInput >= 192) {
      return "Nhân viên xuất sắc";
    } else if (arrIdInput >= 176) {
      return "Nhân viên giỏi";
    } else if (arrIdInput >= 160) {
      return "Nhân viên khá";
    } else {
      return "Nhân viên trung bình";
    }
  };
}
