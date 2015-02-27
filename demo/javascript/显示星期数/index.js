//addLoadEvent方法
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}
//当天星期几方法
function d_Date() {
    var n_date = new Date();
    var d_week = n_date.getDay();
    //alert(d_week);
    var d_getUl = document.getElementById("uldate");
    var d_getLi = d_getUl.getElementsByTagName("li");
    for (var i = 0; i < d_getLi.length; i++) {
        if (d_week == i) {
            d_getLi[i].className = "color_red";
        }
        //console.log(i);
    }
}
addLoadEvent(d_Date);