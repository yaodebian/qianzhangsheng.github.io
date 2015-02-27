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
            var f_top = $(window).scrollTop();
            $('#cssrain').css('top', f_top);
        });
    }
};