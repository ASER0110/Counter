let num = 0;

function increase() {
    num += 1
    document.getElementById("count").innerHTML = num;
}
function reset() {
    num = 0
    document.getElementById("count").innerHTML = num;
}
function decrease() {
    if (num > 0) {
        num -= 1
        document.getElementById("count").innerHTML = num;
    }
}