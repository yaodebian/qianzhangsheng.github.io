$(document).ready(function () {
    /*FF和IE7可以通过position:fixed来定位，只有ie6需要动态设置高度.*/
    if ($.browser.msie && $.browser.version == 6) {
        FollowDiv.follow();
    }
});
FollowDiv = {
    follow: function () {
        $('#cssrain').css('position', 'absolute');
        $(window).scroll(function () {
            var f_top = $(window).scrollTop() + $(window).height() - $("#cssrain").height() - parseFloat($("#cssrain").css("borderTopWidth")) - parseFloat($("#cssrain").css("borderBottomWidth"));
            $('#cssrain').css('top', f_top);
        });
    }
}
/*
 此例子中:
 放右下角的是时候，需要 滚动条高度+屏幕高度 - div高度（包括边框）
 */