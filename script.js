function hitung(operator) {
  let a = document.getElementById("angka1").value;
  let b = document.getElementById("angka2").value;

  // cek apakah kosong
  if (a === "" || b === "") {
    document.getElementById("hasil").innerText = "Error: isi angka dulu!";
    return;
  }

  a = parseFloat(a);
  b = parseFloat(b);

  let hasil = 0;

  switch(operator) {
    case '+': 
      hasil = a + b; 
      break;
    case '-': 
      hasil = a - b; 
      break;
    case '*': 
      hasil = a * b; 
      break;
    case '/': 
      if (b === 0) {
        document.getElementById("hasil").innerText = "Error: tidak bisa dibagi dengan 0!";
        return;
      }
      hasil = a / b; 
      break;
  }

  document.getElementById("hasil").innerText = hasil;
}

// Fungsi reset kalkulator
function reset() {
  document.getElementById("angka1").value = "";
  document.getElementById("angka2").value = "";
  document.getElementById("hasil").innerText = "0";
}
