var arrIdInput = [
  "taiKhoan",
  "hoTen",
  "email",
  "matKhau",
  "ngayLam",
  "luongCoBan",
  "chucVu",
  "gioLam",
];

var arrIdSpan = [
  "tbTaiKhoan",
  "tbHoTen",
  "tbEmail",
  "tbMatKhau",
  "tbNgay",
  "tbLuongCoBan",
  "tbChucVu",
];

var arrNhanVien = [];

function getValueUser() {
  event.preventDefault();
  var nhanVien = new NhanVien();
  console.log(nhanVien);
  for (let i = 0; i < arrIdInput.length; i++) {
    let valueInput = document.getElementById(arrIdInput[i]).value;
    console.log(valueInput);
    nhanVien[arrIdInput[i]] = valueInput;
  }
  console.log(nhanVien);
  arrNhanVien.push(nhanVien);
  console.log(arrNhanVien);
  renderDisplay(arrNhanVien);
  // event.preventDefault();
  // var nhanVien = new NhanVien();
  // if (nhanVien) {
  //   arrNhanVien.push(nhanVien);
  //   saveLocalStorage("arrNhanVien", arrNhanVien);
  //   renderDisplay();
  //   document.getElementById("formNhanVien").reset();
  // }
  // var isValid = true;
  // for (var i = 0; i < arrIdInput.length; i++) {
  //   var valueInput = document.getElementById(arrIdInput[i]).value;
  //   if (arrIdInput[i] == "email") {
  //     isValid &= checkEmailValue(
  //       valueInput,
  //       arrIdSpan[i] && checkEmailValue(valueInput, arrIdSpan[i])
  //     );
  //   } else if (arrIdInput[i] == "matKhau") {
  //     isValid &=
  //       checkEmptyValue(valueInput, arrIdSpan[i]) &&
  //       checkEmptyValue(valueInput, arrIdSpan[i], 6, 10);
  //   } else {
  //     isValid &= checkEmptyValue(valueInput, arrIdSpan[i]);
  //   }
  //   nhanVien[arrIdInput[i]] = valueInput;
  // }
  // console.log(isValid);
  // if (isValid) {
  //   return sinhVien;
  // }
}
document.getElementById("btnThemNV").onclick = getValueUser;

// function addUser() {
//   event.preventDefault();
//   var nhanVien = getValueUser();
//   if (nhanVien) {
//     arrNhanVien.push(nhanVien);
//     saveLocalStorage("arrNhanVien", arrNhanVien);
//     renderDisplay();
//     document.getElementById("formNhanVien").reset();
//   }
// }

function renderDisplay(arr) {
  if (arr == undefined) {
    arr = arrNhanVien;
  }
  console.log(arr);
  var content = "";
  for (var z = 0; z < arr.length; z++) {
    var nhanVien = new NhanVien();
    var valueNhanVien = arr[z];
    Object.assign(nhanVien, valueNhanVien);
    console.log(nhanVien);
    content += `
    <tr>
    <td>${nhanVien.taiKhoan}</td>
    <td>${nhanVien.hoTen}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.ngayLam}</td>
    <td>${nhanVien.chucVu}</td>
    <td>${nhanVien.tongLuong()}</td>
    <td>${nhanVien.xepLoaiNhanVien()}</td>
    <td>
    <button class="btn btn-danger" onclick="deleteUser('${
      nhanVien.taiKhoan
    }')">Xóa</button>
    <button onclick="getInfoUser('${
      nhanVien.taiKhoan
    }')" class="btn btn-warning">Sửa</button>
    </td>
   </tr>
      `;
  }
  console.log(content);
  document.getElementById("tableDanhSach").innerHTML = content;
}

function deleteUser(txtTaiKhoan) {
  arrNhanVien.splice(txtTaiKhoan, 1);
  renderDisplay();
}

function saveLocalStorage(key, value) {
  var valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}

function getLocalStorage(key) {
  var arrLocal = JSON.parse(localStorage.getItem(key));
  console.log(arrLocal);
  if (arrLocal) {
    arrNhanVien = arrLocal;
  }
}
getLocalStorage("arrNhanVien");

function getInfoUser(txtTaiKhoan) {
  console.log(txtTaiKhoan);
  var nhanVien = {};
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].taiKhoan == txtTaiKhoan) {
      nhanVien = arrNhanVien[i];
    }
  }
  console.log(nhanVien);
  for (var z = 0; z < arrIdInput.length; z++) {
    document.getElementById(arrIdInput[z]).value = nhanVien[arrIdInput[z]];
    if (arrIdInput[z] == "taiKhoan") {
      document.getElementById(arrIdInput[z]).readOnly = true;
    }
  }
}

// function editValueUser() {
//   var nhanVien = getValueUser();
//   var index = -1;
//   for (var i = 0; i < arrNhanVien.length; i++) {
//     if (nhanVien.taiKhoan == arrNhanVien[i].taiKhoan) {
//       index = i;
//     }
//   }
//   document.getElementById("taiKhoan").readOnly = false;
//   document.getElementById("formNhanVien").reset();
//   console.log(index);
//   arrNhanVien[index] = nhanVien;
//   saveLocalStore("arrNhanVien", arrNhanVien);
//   renderDisplay();
// }

// document.getElementById("btnCapNhat").onclick = editValueUser;

// function Edit(item) {
//   var el = document.getElementById("update_name");
//   el.value = names[item];
//   document.getElementById("edit").style.display = "inline";
//   document.getElementById("create").style.display = "none";
//   self = this;

//   document.getElementById("update").onsubmit = function () {
//     var name = el.value;
//     if (name) {
//       self.names.splice(item, 1, name.trim());
//       self.displayData();
//       buttonToggle();
//       document.getElementById("create").style.display = "inline";
//     }
//   };
// }

function editUser() {
  var nhanVien = getValueUser();
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (nhanVien.taiKhoan == arrNhanVien[i].taiKhoan) {
      index = i;
    }
  }
  document.getElementById("taiKhoan").readOnly = false;
  document.getElementById("formNhanVien").reset();
  console.log(index);
  arrNhanVien[index] = nhanVien;
  saveLocalStore("arrNhanVien", arrNhanVien);
  renderDisplay();
}
document.getElementById("btnCapNhat").onclick = editUser;
