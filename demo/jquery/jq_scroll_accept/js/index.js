$(function () {
    //先取得 #terms 及其各种高度
    //判断是否停用 $submit
    var $terms = $("#terms");
    var _height = $terms.height();
    var _scrollHeight = $terms.prop("scrollHeight");
    var _maxScrollHeight = _scrollHeight - _height - 20;
    var _least = 0;
    var $submit = $("#submit").attr("disabled", _maxScrollHeight > _least);

    //当 #terms 中 scroll 滚动时
    $("#terms").scroll(function () {
        var $this = $(this);
        //如果高度达到了就启用 $submit
        if (_maxScrollHeight - $this.scrollTop() <= _least) {
            $submit.attr("disabled", false);
        }
    });
});