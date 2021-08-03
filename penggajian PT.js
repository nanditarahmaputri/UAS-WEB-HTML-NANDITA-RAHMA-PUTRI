function hasil() {
  var jamkerja = parseInt(document.getElementById("jam kerja").value);
  var upahperjam = parseInt(document.getElementById("upah").value);
  var gaji = jamkerja * upahperjam;
  document.getElementById("gaji").innerHTML = gaji;
  var tunjanak = 0.1;
  var total;
  if (gaji > 0) {
    total = gaji + gaji * tunjanak;
    document.getElementById("total").innerHTML = total;
    document.getElementById("tunjanak").innerHTML = "10%";
  } else {
    document.getElementById("total").innerHTML = total;
    document.getElementById("tunjanak").innerHTML = "0%";
  }
}
