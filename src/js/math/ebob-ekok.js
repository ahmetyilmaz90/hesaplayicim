const result = document.getElementById("result");
const dataArea = document.getElementById("data-area");

function getNumbers(datas) {
    const numbers = datas.match(/-?\d+(\.\d+)?/g) || [];
    return numbers.map(Number);
}

function ebob(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

function ekok(a, b) {
    return (Math.abs(a) / ebob(a, b)) * Math.abs(b);
}

document.getElementById("ebob-ekok-hesaplama").addEventListener("submit", function () {

    const elemans = getNumbers(dataArea.value);

    if (elemans.length < 2) {
        result.innerHTML = "Lütfen en az 2 sayı giriniz.";
        return;
    }

    const ebobSonuc = elemans.reduce((acc, s) => ebob(acc, s));
    const okokSonuc = elemans.reduce((acc, s) => ekok(acc, s));

    result.innerHTML = `EBOB: ${ebobSonuc} <br> EKOK: ${okokSonuc}`;
});