$(function () {
    //预设显示第一个tabs
    var _showTab = 0;
    $('.tabs_box').each(function () {
        // 当前标签
        var $tab = $(this);
        var $defaultLi = $('ul.tabs_ul li', $tab).eq(_showTab).addClass('active');
        $($defaultLi.find('a').attr('href')).siblings().hide();
        // 当li标签点击时
        //若要改成鼠标移到li标签就切换时，把click改成mouseover
        $('ul.tabs_ul li', $tab).click(function () {
            //找出li中的超链接href(#id)
            var $this = $(this),
                _clickTab = $this.find('a').attr('href');
            //把当前点击到的li标签加上.active
            //并把兄弟元素中有.active的都移除
            $this.addClass('active').siblings('.active').removeClass('active');
            //淡入相对应的内容并隐藏兄弟元素
            $(_clickTab).stop(false, true).fadeIn().siblings().hide();
            return false;
        }).find('a').focus(function () {
            this.blur();
        });
    });
});