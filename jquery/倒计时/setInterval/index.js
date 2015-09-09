var num = 1;
var f_load;
function loadfn() {
    if (num < 100) {
        num++;
        $("div#load span").html("..." + num + "%");
    } else if (num == 100) {
        $("div#load span").html("..." + num + "%").css({"color": "#b10000"});
        location.href = "http://www.baidu.com/";
        clearInterval(f_load);
    }
}
f_load = setInterval("loadfn()", 50);