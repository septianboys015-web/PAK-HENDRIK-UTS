function hitung(operator) {
  let a = parseFloat(document.getElementById("angka1").value);
  let b = parseFloat(document.getElementById("angka2").value);
  let hasil = 0;

  switch(operator) {
    case '+': hasil = a + b; break;
    case '-': hasil = a - b; break;
    case '*': hasil = a * b; break;
    case '/': hasil = b !== 0 ? a / b : '∞'; break;
  }

  document.getElementById("hasil").innerText = hasil;
}

// Fungsi reset kalkulator
function reset() {
  document.getElementById("angka1").value = 0;
  document.getElementById("angka2").value = 0;
  document.getElementById("hasil").innerText = 0;
}
