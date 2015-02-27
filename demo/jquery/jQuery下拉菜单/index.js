$(function () {
    //父菜单
    $("#div ul li").hover(function () {
        $(this).css("background", "#333333").children("ul").slideDown();
    }, function () {
        $(this).css("background", "#ffffff").children("ul").slideUp();
    });
    //子菜单
    $("#div ul li ul li").hover(function () {
        $(this).css("background", "#333333");
    }, function () {
        $(this).css("background", "#666666");
    });
});