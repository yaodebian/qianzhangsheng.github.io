$.fn.allChose = function (opts) {
  var set = $.extend({
    name: ''
  }, opts || {});
  var T = $(this),
      items = $('input[type="checkbox"][name="' + set.name + '"]');
  T.click(function () {
    items.prop('checked', this.checked);
  });
  items.click(function () {
    T.prop('checked', items.not(':checked').length === 0);
  });
};

$(function () {

  $('.allChose').each(function () {
    $(this).allChose({name: 'userId'});
    $(this).click(function () {
      $('.allChose').prop('checked', this.checked);
    });
  });

});