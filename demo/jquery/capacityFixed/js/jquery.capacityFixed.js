(function($){
    $.fn.capacityFixed = function(options) {
        var opts = $.extend({},$.fn.capacityFixed.deflunt,options);
        var FixedFun = function(element) {
            var top = opts.top;
            var right = ($(window).width()-opts.pageWidth)/2+opts.right;
            element.css({
                "right":right,
                "top":top
            });
            $(window).resize(function(){
                var right = ($(window).width()-opts.pageWidth)/2+opts.right;
                element.css({
                    "right":right
                });
            });
            $(window).scroll(function() {
                var scrolls = $(this).scrollTop();
                if (scrolls > top) {
                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            top: 0
                        });
                    } else {
                        element.css({
                            top: scrolls
                        });
                    }
                }else {
                    element.css({
                        position: "absolute",
                        top: top
                    });
                }
            });
            element.find(".close-ico").click(function(event){
                element.remove();
                event.preventDefault();
            })
        };
        return $(this).each(function() {
            FixedFun($(this));
        });
    };
    $.fn.capacityFixed.deflunt={
		right:100,//相对于页面宽度的右边定位
        top:30,
        pageWidth:960
	};
})(jQuery);