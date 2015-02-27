$(function () {
    //帮 #menu li 加上 hover 事件
    $("#menu li").hover(function () {
        //先找到 li 中的子选项
        var _this = $(this), _subnav = _this.children("ul");
        //变更目前父选项的背景颜色
        //同时淡入子选项（如果有的话）
        _this.css("backgroundColor", "#06c");
        _subnav.stop(true, true).fadeIn(400);
    }, function () {
        //变更目前父选项的背景颜色
        //同时淡出子选项（如果有的话）
        //也可以把整句拆成上面的写法
        $(this).css("backgroundColor", "").children("ul").stop(true, true).fadeOut(400);
    });
    //取消超链接的虚线框
    $("a").focus(function () {
        this.blur();
    });
});