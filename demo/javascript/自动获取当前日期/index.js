function autoDate() {
    var tDay = new Date();
    var tMonth = tDay.getMonth() + 1;
    var tDate = tDay.getDate();
    if (tMonth < 10) tMonth = "0" + tMonth;
    if (tDate < 10) tDate = "0" + tDate;
    document.getElementById("tDate").value = tDay.getFullYear() + "年" + tMonth + "月" + tDate + "日";
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(function () {
    autoDate();
});