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
            var f_top = FollowDiv._getScroll()['scrollTop'];
            $('#cssrain').css('top', f_top);
        });
    },
    _getScroll: function () {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
        return {scrollTop: scrollTop};
    }
}
/*
 程序解释：
 document.body.scrollTop就是滚动条顶部到网页顶部的这段距离(当头部没有DOCTYPE声明时).
 window.pageYOffset是NS专用属性，它的含义和IE下的document.body.scrollTop一样.

 document.documentElement.scrollTop也是滚动条顶部到网页顶部的这段距离(当头部含有DOCTYPE声明时).
 */