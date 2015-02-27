$(function () {
    function fn_load(count) {
        window.setTimeout(function () {
            count++;
            if (count < 20) {
                $('#num span').attr('innerHTML', "..." + count + "%");
                fn_load(count);
            } else if (count < 40) {
                $('#num span').css({"color": "#b88686"});
                $('#num span').attr('innerHTML', "..." + count + "%");
                fn_load(count);
            } else if (count < 60) {
                $('#num span').css({"color": "#b74e4e"});
                $('#num span').attr('innerHTML', "..." + count + "%");
                fn_load(count);
            } else if (count < 80) {
                $('#num span').css({"color": "#b52121"});
                $('#num span').attr('innerHTML', "..." + count + "%");
                fn_load(count);
            } else if (count < 100) {
                $('#num span').css({"color": "#ca0000"});
                $('#num span').attr('innerHTML', "..." + count + "%");
                fn_load(count);
            } else {
                location.href = "http://www.baidu.com/";
            }
        }, 50);
    }
    fn_load(0);
});