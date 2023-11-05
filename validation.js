function checkEmptyValue(value, idSpan) {
  if (value == "") {
    document.getElementById(idSpan).innerHTML = "Vui lòng không bỏ trống";
    console.log(value);
    return false;
  } else {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  }
}

function checkAccountLength(value, idSpan, min, max) {
  if (value.length >= min && value.length <= max) {
    document.getElementById(idSpan).innerHTML = "";
    return true;
  } else {
    document.getElementById(
      idSpan
    ).innerHTML = `Vui lòng nhập tài khoản tối đa 4 đến 6 ký số`;
    return false;
  }
}
