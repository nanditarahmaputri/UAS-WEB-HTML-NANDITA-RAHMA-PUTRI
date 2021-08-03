function hasil() {
  var harga = parseInt(document.getElementById("harga").value);
  var jumlah = parseInt(document.getElementById("jumlah").value);
  var total = harga * jumlah;
  document.getElementById("total").innerHTML = total;
  var diskon = 0.1;
  var bayar;
  if (total > 100000) {
    bayar = total - total * diskon;
    document.getElementById("bayar").innerHTML = bayar;
    document.getElementById("diskon").innerHTML = "10%";
  } else {
    document.getElementById("bayar").innerHTML = bayar;
    document.getElementById("diskon").innerHTML = "0%";
  }
}
