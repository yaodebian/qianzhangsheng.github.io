(function ($) {
    //json 取值
    $.getJSON('ajax/test_array.json', function (data) {
        var items = [];
        //把值动态插入到页面上
        $.each(data.comments, function (key, val) {
            items.push('<li class="' + 'tag' + key + '">' + '<a target="_blank" href="' + val[0] + '">' + val[1] + '</a>' + '<span>X</span>' + '</li>');
            //console.log(key + " : " + val);
        });
        $('<ul/>', {
            'class': 'tag_ul',
            html: items.join('')
        }).appendTo('.tags');

        //列出每个 li 的的内容
        $('li').each(function (index) {
            //console.log(index + " : " + $(this).text());
        });

        //删除当前标签
        $('li span').each(function (index) {
            $(this).click(function () {
                $(this).parent().remove();
            });
        });
    });
})(jQuery);