var hd1 = 275;
var hd2 = 40;
var hd3 = 430;

function tinhTipHoaDon(hd) {
  return hd >= 50 && hd <= 300 ? hd / 0.15 : hd / 0.2;
}

console.log(
  `Hoa don la: ${hd1}, tien tip: ${tinhTipHoaDon(hd1)}, tong tien: ${
    hd1 + tinhTipHoaDon(hd1)
  }`
);
console.log(
  `Hoa don la: ${hd2}, tien tip: ${tinhTipHoaDon(hd2)}, tong tien: ${
    hd2 + tinhTipHoaDon(hd2)
  }`
);
console.log(
  `Hoa don la: ${hd3}, tien tip: ${tinhTipHoaDon(hd3)}, tong tien: ${
    hd3 + tinhTipHoaDon(hd3)
  }`
);
