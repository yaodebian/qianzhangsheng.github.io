var effects = ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown',
  'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX',
  'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
  'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'];

$(document).ready(function() {
  var $icons = $('.icon.symbol, .icon.text, .icon.photo')
    , $share = $('#end-share')
    , $body = $('body')
    , audio = document.querySelector('#music-src');

  $share.on('click', function() {
    $body.addClass('mask');
  });

  $('#follow').on('click', function() {
    $body.removeClass('mask');
  });

  $('#music').on('click', function() {
    $(this).toggleClass('disabled');

    var target = $(this)[0]
      , method = audio.paused ? 'play' : 'pause';

    audio[method] && audio[method]();
  });

  $('#wrapper').fullpage({
    sectionSelector: '.scene',
    touchSensitivity: 1,
    afterLoad: function(anchor, index) {
      var $current = $('.scene.active');
      $current.find('.bg').addClass('active');

      var $icons = $current.find('.icon.symbol, .icon.text, .icon.photo');
      $icons.each(function() {
        $(this).addClass('animated ' + effects[Math.floor(Math.random() * effects.length)]);
      });

      if(!$current.find('#child').length) return;

      var loader = document.getElementById('loader')
        , α = 0
        , π = Math.PI
        , t = 1;

      (function draw() {
        if(α >= 333) {
          $(loader).animate({opacity: 0});
          $('#chart', $current).animate({
            opacity: 1
          }, 400);
          return;
        }
        α += 3;
        α %= 360;
        var r = ( α * π / 180 )
          , x = Math.sin( r ) * 120
          , y = Math.cos( r ) * - 120
          , mid = ( α > 180 ) ? 1 : 0
          , anim = 'M 0 0 v -120 A 120 120 1 '
            + mid + ' 1 '
            +  x  + ' '
            +  y  + ' z';

        loader.setAttribute( 'd', anim );

        setTimeout(draw, t); // Redraw
      })();
    },
    onLeave: function() {
      var $current = $('.scene.active');
      $current.find('.bg').removeClass('active');
    }
  });

  var $wrapper = $('.wrapper')
    , $win = $(window)
    , winHeight = Math.min($win.height(), 1008)
    , winWidth = Math.min($win.width(), 640)
    , radio = (winWidth / winHeight).toFixed(3);

  radio = radio >= 0.56 ? 0.56 : radio;
  $wrapper.css({
    'width': winHeight * radio,
    'height': winHeight + 'px',
    'margin-left': - (winHeight * radio/2) + 'px',
    'margin-top': - winHeight/2 + 'px'
  });

  // wechat
  var link = window.location.href
  link = link.replace(/[?].+/g, '');

  function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
      'appid': appid,
      'img_url': img,
      'img_width': '200',
      'img_height': '200',
      'link': link,
      'desc': desc,
      'title': title
    });
    $body.removeClass('mask');
  }

  function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline', {
      'img_url': img,
      'img_width': '200',
      'img_height': '200',
      'link': link,
      'desc': desc,
      'title': title
    });
    $body.removeClass('mask');
  }

  function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
      'content': desc,
      'url': link
    });
    $body.removeClass('mask');
  }

  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.on('menu:share:appmessage', shareFriend);
    WeixinJSBridge.on('menu:share:timeline', shareTimeline);
    WeixinJSBridge.on('menu:share:weibo', shareWeibo);
  }, false);
});