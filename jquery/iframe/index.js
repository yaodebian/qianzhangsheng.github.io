/* iframe自动高度 */
var adjustIframe = function (id) {
    var iframe = document.getElementById(id)

    var callback = function () {
        var idoc = iframe.contentWindow && iframe.contentWindow.document || iframe.contentDocument;
        var iheight = Math.max(idoc.body.scrollHeight, idoc.documentElement.scrollHeight); //取得其高
        //window.console && window.console.log(iheight);
        iframe.style.height = iheight + "px";
    };
    if (iframe.attachEvent) {
        iframe.attachEvent("onload", callback);
    } else {
        iframe.onload = callback
    }
};

$(document).ready(function () {
    adjustIframe("userRight");
});