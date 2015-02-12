//定义一个全局变量
var scr_a = null;
//var scr_b;
//页面响应时加载
$.ajax({
    url: "input_form.html",
    cache: false,
    success: function(html) {
        $(".content-form").append(html);
        //这里scrollHeight = offsetHeight,所以忙活了一个中午取值都不对
        //scr_a = document.getElementById("wrapper").scrollHeight;
        //console.log(scr_a);
        scr_a = document.documentElement.offsetHeight - document.documentElement.clientHeight - 1;
        //console.log(scr_a);
    }
});

//scroll ready
var hasShow = false;
$(window).bind("scroll", function() {
    if (hasShow) {
        $(window).unbind("scroll");
        return;
    }
    //Ajax请求开始显示
    $("#loading").ajaxStart(function() {
        $(this).show();
    });
    var t = $(document).scrollTop();
    //console.log(t);
    if (t > scr_a) {
        hasShow = true;
        //延迟2秒加载测试Ajax效果
        setTimeout(function() {
            $.ajax({
                url: "input_form.html",
                cache: false,
                success: function(html) {
                    $(".content-form").append(html);
                    //scr_b = document.documentElement.offsetHeight - document.documentElement.clientHeight - 1;
                    //console.log(scr_b);
                }
            });
        }, 2000);
    }
    //Ajax请求结束隐藏
    $("#loading").ajaxStop(function() {
        $(this).hide();
    });
});