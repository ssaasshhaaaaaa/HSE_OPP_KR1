function result() {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let m = parseFloat(document.getElementById('m').value)
    let k = parseFloat(document.getElementById('k').value)
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(m) || isNaN(k) || a <= 0 || b <= 0 || c <= 0 || m <= 0 || k <= 0) {
        document.getElementById('result').innerText = "Неверный формат данных";
    } else {
        if ((a <= m && b <= k) || (a <= k && b <= m) || (a <= m && c <= k) || (a <= k && c <= m) || (c <= m && b <= k) || (c <= k && b <= m)) {
            document.getElementById('result').innerText = "Ответ: Можно!";
        } else {
            document.getElementById('result').innerText = "Ответ: Нельзя!";
        }
        document.getElementById('a').readOnly = true;
        document.getElementById('b').readOnly = true;
        document.getElementById('c').readOnly = true;
        document.getElementById('m').readOnly = true;
        document.getElementById('k').readOnly = true;
        res = document.getElementById('result').innerText
        document.getElementById('answer').value = res;
        document.getElementById('submit').disabled = false;
    }
}
function resetForm() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('m').value = '';
    document.getElementById('k').value = '';
    document.getElementById('result').innerText = '';
    document.getElementById('submit').disabled = true;
    document.getElementById('a').readOnly = false;
    document.getElementById('b').readOnly = false;
    document.getElementById('c').readOnly = false;
    document.getElementById('m').readOnly = false;
    document.getElementById('k').readOnly = false;
    document.getElementById('answer').value = '';
}