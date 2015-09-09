$(function () {
    /* 执行征求意见 */
    $(".zqyj").smartFloat();
});
/* 征求意见 */
$.fn.smartFloat = function () {
    var position = function (element) {
        $(window).scroll(function () {
            var scrolls = $(this).scrollTop();
            if (scrolls > 0) {
                element.css({
                    position: "fixed",
                    bottom: 100
                });
            }
        });
    };
    return $(this).each(function () {
        position($(this));
    });
};