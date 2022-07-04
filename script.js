var ulang = true;
while (ulang) {
  var kesempatan = 3;
  var angka = 5;
  var hasil = "";

  while (kesempatan >= 0) {
    var pilihan = parseInt(prompt("Masukkan Angka 1-10"));
    if (pilihan === angka) {
      hasil = "BENAR";
      alert(hasil);
      break;
    } else if (pilihan < angka) {
      hasil = "RENDAH";
      kesempatan--;
      alert("Terlalu " + hasil + " angka yang anda tebak adalah " + pilihan + "\ntersisa " + kesempatan + " kesempatan lagi.");
    } else if (pihan > angka) {
      hasil = "TINGGI";
      kesempatan--;
      alert("Terlalu " + hasil + " angka yang anda tebak adalah " + pilihan + "\ntersisa " + kesempatan + " kesempatan lagi.");
    }

    if (kesempatan === 0) {
      alert("anda gagal");
    }
  }
  ulang = confirm("Lagi?");
}
