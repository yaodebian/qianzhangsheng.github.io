(function ($) {
    $.getJSON('ajax/test_array.json', function (data) {
        var items = [];

        $.each(data.comments, function (key, val) {
            items.push('<li class="' + 'tag' + val[0] + '">' + '<a href="#">' + val[1] + '</a>' + '</li>');
            //console.log(key + " : " + val);
        });
        $('<ul/>', {
            'class': '',
            html: items.join('')
        }).appendTo('.tags');

        //列出每个 li 的的内容
        $('li').each(function (index) {
            //console.log(index + " : " + $(this).text());
        });
    });
})(jQuery);