const asalSayiForm = document.getElementById("asal-sayi-bulma");
const sayiInput = document.getElementById("sayi");
const result = document.getElementById("result");

asalSayiForm.addEventListener("submit", (e) => {

  const asalSayiDizisi = []
  let n = Number(sayiInput.value)

  if (n < 2) {
    result.innerHTML = "Asal sayılar 2'den başlar"
    return
  }

  if (n === 2) {
    result.innerHTML = "En küçük asal sayı!"
    return
  }

  //Asal sayı kontrolü ve diziye asal sayıları ekleme fonks.
  for (let i = 2; i*i <= n; i++) {
    if (n % i === 0) {
      asalSayiDizisi.push(i)
      while (n % i === 0) {
        n /= i
      }
    }
  }

  if (n > 1) {
    if (asalSayiDizisi.length === 0) {
      result.innerHTML = "Sayı asaldır.";
    }else {
      asalSayiDizisi.push(n);
    }
  }

  if (asalSayiDizisi.length) {
    result.innerHTML = `Sayı asal değildir!<br>
    Bölündüğü asal sayılar: ${asalSayiDizisi}`
  } else {
    result.innerHTML = "Sayı asaldır"
  }
})