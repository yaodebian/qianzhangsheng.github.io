var r = document.getElementsByTagName("input");
var imgs = document.getElementsByTagName("img");
for (var i = 0, Len = r.length; i < Len; i++) {
    (function (i) {
        var el = r[i], prev;
        el.onclick = function () {
            prev = getPrev(el);
            for (var j = 0, len = imgs.length; j < len; j++) {
                removeClass(imgs[j], "current");
            }
            addClass(prev, "current");
        }
    })(i);
}
function addClass(obj, str) {
    var re = new RegExp("\\b" + str + "\\b", "gi");
    var _class = obj.className;
    if (!re.test(_class)) {
        obj.className += " " + str + " ";
    }
}
function removeClass(obj, str) {
    var re = new RegExp("\\b" + str + "\\b", "gi");
    var _class = obj.className;
    if (re.test(_class)) {
        obj.className = obj.className.replace(str, " ");
    }
}
function getPrev(obj) {
    var prevNode = obj.previousSibling;
    if (!prevNode)return;
    while (true) {
        if (prevNode.nodeType == 1) {
            break;
        } else {
            if (prevNode.previousSibling) {
                prevNode = prevNode.previousSibling;
            }
        }
    }
    return prevNode;
}