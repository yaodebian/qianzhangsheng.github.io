(function ($) {
    $.getJSON('ajax/test.json', function (data) {
        var items = [];

        $.each(data.comments, function (key, val) {
            items.push('<li class="' + 'tag' + val.tagId + '">' + '<a href="#">' + val.content + '</a>' + '</li>');
        });

        $('<ul/>', {
            'class':'',
            html:items.join('')
        }).appendTo('.tags');
    });
})(jQuery);