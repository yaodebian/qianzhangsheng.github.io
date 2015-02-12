/* ==========================================================
 * index.js v20141205
 * ==========================================================
 * Copyright shihua
 *
 * 边锋招聘移动端页面-纯原生版
 * ========================================================== */

//loading模块
(function(){
  var r = function(e, t, n) {
    if (!t || !Array.isArray(t) || !t.length) return;
    this.progress = e;
    this.items = t;
    this.prefix = n.prefix || "";
    this.complete = n.complete || false;
  };
  r.prototype.load = function() {
    var e = 0;
    var t = this.items;
    var n = this.items.length;
    var r = this.complete;
    var i = this;
    t.forEach(function(t) {
      var s = new Image;
      s.onload = s.onerror = s.onabort = function() {
        if (++e === n && typeof r === "function") r.call(i);
        i.progress.innerText = Math.floor(100 * e / n) + "%"
      };
      s.src = i.prefix + t
    })
  };
  window.preload = r;
})();
(function() {
  var ui = {
    $hz: document.querySelector('.hz')
  , $sh: document.querySelector('.sh')
  , $pagesix: document.querySelector('#pagesix')
  , $pagefive: document.querySelector('#pagefive')
  , $btnBack: document.querySelector('#btnBack')
  , $btnNext: document.querySelectorAll('.js-nextBtn')
  , $fullpage: document.querySelectorAll('#fullpage')
  , $progress: document.querySelector('#progress')
  };
  var oPage = {
    init: function() {
      this.view();
      this.listen();
    }
  , view: function() {
      var self = this;
      window.oPageConfig.oData.page == 0 || self.fGoToPageFive();
      ui.$progress.style.display = 'block';
      (new window.preload(ui.$progress, ['page-01-img.png', 'section-two-bg.png', 'section-three-bg.png', 'page-04-present.png', 'page-05-map.png', 'page-06-back.png', 'mail-box-txt.png'], {
        prefix: '../i/',
        complete: function() {
          var e = document.querySelector('#loader');
          var t = document.querySelector('#fullpage');
          t.style.display = 'block';
          // fullpage初始化
          window.fullpage = new fullpage({
            'id': '#fullpage'
          , 'direction': 'Y'
          , 'callback': function(index){
              if(index == 2){
                setTimeout(function(){
                  self.fRunRound();
                }, 1800);
              }
            }
          });
          window.oPageConfig.oData.page == 0 || window.fullpage.go(window.oPageConfig.oData.page);
          setTimeout(function() {
            e.style.display = "none"
          }, 300);
        }
      })).load();
      // 横屏提示
      self.orient();
    }
  , listen: function() {
      var self = this;
      window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', self.orient, false);
      for(var i =0; i< ui.$btnNext.length; i++){
        ui.$btnNext[i].addEventListener('click' , function(e){
          self.fGoNextPage(e);
        }, false);
      }
      ui.$hz.addEventListener('click' , function(){
        setTimeout(function(){
          window.oPageConfig.oData.city = 'hz';
          ui.$pagesix.className +=' '+'active';
        }, 100);
      }, false);
      ui.$sh.addEventListener('click' , function(){
        setTimeout(function(){
          window.oPageConfig.oData.city = 'sh';
          ui.$pagesix.className +=' '+'active';
        }, 100);
      }, false);
      ui.$pagesix.addEventListener('touchmove' , function(e){
         e.preventDefault();
      }, false);
      ui.$btnBack.addEventListener('click' , function(){
        var reg = new RegExp('(\\s|^)'+ 'active' +'(\\s|$)');
        ui.$pagesix.className = ui.$pagesix.className.replace(reg,' ');
      }, false);
      var data = window.oPageConfig.oData['shareData'];
      var callback = '';
      wechat('friend', data, callback);     // 朋友
      wechat('timeline', data, callback);   // 朋友圈
    }
  , orient: function() {
      var $welcome = document.getElementById('welcome');
      if (window.orientation == 0 || window.orientation == 180) {
        // 竖屏
        $welcome.style.display = 'none';
        return false;
      } else if (window.orientation == 90 || window.orientation == -90) {
        // 横屏
        $welcome.style.display = 'block';
        return false;
      }
    }
  , fGoToPageFive: function(){
    ui.$pagefive.style.display = 'none';
    ui.$pagesix.className +=' '+'active';
    setTimeout(function(){
       ui.$pagefive.style.display = 'block';
    }, 800);
    }
  , fGoNextPage: function(e){
      e.preventDefault();
      window.fullpage.next();
    }
  , getElementsByClass: function(children, parent) {
      var balls = document.getElementById(parent);
      var classElements = [],allElements = balls.getElementsByTagName('*');
      for (var i=0; i< allElements.length; i++ )
      {
        if (allElements[i].className == children || allElements[i].className.indexOf(children)>-1) {
          classElements.push(allElements[i]);
        }
      }
      return classElements;
    }
  , fRunRound: function(){
      var self = this;
      clearInterval(window.roundtimer);
      window.roundtimer =null;
      var r = 117;      //定义运动半径
      var a = 0;        //每圆的初始化定位
      var b = 0;        //速度变化量
      var l = -12;      //圆组的水平位置（圆组已脱离外容器）
      var t = 284;      //圆组的垂直位置（圆组已脱离外容器）
      var z = 100;      //层级值
      var w = 35;       //圆的初始宽度
      var h = 35;       //圆的初始高度
      var speed = 0.28;  //运动的速度值
      var $balls = self.getElementsByClass('ball', 'balls');
      window.roundtimer = setInterval(function(){                             //计时器下遍历所有圆，所有圆都同时运动
        for(var i = 0;i<$balls.length;i++){
          a = (i+1)*60;//循环定位每圆各自初始化的位置
          b += speed;  //以下是圆周算法用法
          $balls[i].style.width = Math.ceil(w+40*Math.sin((a+b)*2*Math.PI/360)/5)+'px';
          $balls[i].style.height = Math.ceil(h+40*Math.sin((a+b)*2*Math.PI/360)/5)+'px';
          $balls[i].style.marginLeft = Math.ceil(l+r*Math.cos((a+b)*2*Math.PI/360))+'px';
          $balls[i].style.top = Math.ceil(t+r/3*Math.sin((a+b)*2*Math.PI/360))+'px';
        }
       },20);
      setTimeout(self.stopRound, 3600);
    }
  , stopRound: function() {
      clearInterval(window.roundtimer);
      window.roundtimer = null;
    }
  };
  oPage.init();
})();