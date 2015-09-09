//企业填报数据包含海关代码有 赋值
$("#hgdm_plus").on("click", function () {
    var hgdm = $("#hgdm");
    var hgdm_val = $("#hgdm_val");
    if (hgdm.val() != "") {
        if (hgdm_val.val() == "") {
            hgdm_val.val(function (i, v) {
                return v + hgdm.val();
            });
            hgdm.val("");
        } else {
            hgdm_val.val(function (i, v) {
                return v + "," + hgdm.val();
            });
            hgdm.val("");
        }
    }
});

$("#hgdm_m").on("click", function () {
    $("#hgdm_val").val("");
});