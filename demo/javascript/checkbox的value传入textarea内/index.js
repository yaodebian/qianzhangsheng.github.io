function calc() {
    var oform = document.myform;
    var len = oform.elements.length;
    var allstr = "";
    for (var i = 0; i < len; i++) {
        if (oform.elements[i].checked) {
            var s = oform.elements[i].value;
            if (allstr != "") {
                allstr += "\r\n";
            }
            allstr += s;
        }

    }
    document.myform.info.value = allstr;
}