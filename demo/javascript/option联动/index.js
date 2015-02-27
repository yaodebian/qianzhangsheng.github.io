var get_select = document.getElementById("selectSub");
var grow = get_select.getElementsByTagName("option").length;//组数
var showGrow = 0;//已打开组
showSelect(showGrow);
function showSelect(id) {
    for (var i = 0; i < grow; i++) {
        document.getElementById("c0" + i).style.display = "none";
    }
    document.getElementById("c0" + id).style.display = "block";
    showGrow = id;
}