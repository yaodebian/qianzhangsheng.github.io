var effects = ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp', 'fadeIn', 'fadeInDown',
  'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'flipInX',
  'flipInY', 'lightSpeedIn', 'rotateIn', 'rotateInDownLeft', 'rotateInDownRight', 'rotateInUpLeft', 'rotateInUpRight',
  'rollIn', 'zoomIn', 'zoomInDown', 'zoomInLeft', 'zoomInRight', 'zoomInUp'];

	/*<--
	--bounce:上下跳动
	--flash:闪动
	--pulse:心跳
	--rubberBand:左右上下跳动
	--shake:左右抖动
	--swing:钟摆
	--tada:大小抖动
	--wobble:左边中心跳动
	-->*/
	
$(document).ready(function() {
  var $icons = $('.icon.symbol, .icon.text, .icon.photo')
    , $share = $('#pg05_5')
    , $body = $('body')
	, pid = 0
    , audio = document.querySelector('#music-src');

  //立即分享点击事件
  $('#pg05_5').on('click', function() {
	$body.addClass('mask');
  });
   $('#phone').on('change', function() {
	$('#pg05_8').show();
	$('#pg05_5').show();
   })
  //提交按钮点击事件
  $('#pg05_4').on('click', function() {
	$('#pg05_8').show();
	$('#pg05_5').show();
	if( $('#pg05_4').attr("disabled") == "disabled"){
		return false;
	}
	var phone = $('#phone').val();
	 if($.trim(phone)==null || $.trim(phone)==""){
		alert("请输入手机号！" );
		$('#pg05_8').show();
		$('#pg05_5').show();
		return ;
	 }
	 
	var tel=/^[1][3-8]\d{9}$/;
	if(!tel.test(phone)){
		alert("请输入正确的手机号！" );
		$('#pg05_8').show();
		$('#pg05_5').show();
		return ;
	}
	
	$.ajax({
		url:"http://dev.vxtong.com/index.php?g=Ixwap&m=nuannan&a=insertdata",
		type:'POST',
		dataType:'json',
		data:{
			phone:phone,
			pid:pid,
		},
		success: function(data){
			console.log(data);
			if(data == 1 || data == 3){
				alert('提交成功，感谢参与！');
				$('#pg05_8').show();
				$('#pg05_5').show();
			}
			  
			$('#pg05_4').attr("disabled","disabled");
			$('#phone').val("");
			$('#phone').attr("readonly",true);
			$body.addClass('mask');
		},
		failure:function(re){
			alert('提交失败，请稍后重试！');
		}
	});
  });
  

  $('#shareit').on('click', function() {
	$body.removeClass('mask');
	$('#pg05_8').show();
	$('#pg05_5').show();
  });
  
  //围观暖男爆照点击事件
  $('#pg03_2').on('click', function() {
	$('#pg03_1').hide();
	$('#pg03_2').hide();
	$('#pg03_3').hide();
	$('#pg03_hand').hide();
			
	for(var i=1;i<=9;i++){
		$('#pg04_'+i).show();
		$('#pg04_'+i).addClass('animated fadeIn');
	}
  });
  
  $('#pg03_hand').on('click', function() {
	$('#pg03_1').hide();
	$('#pg03_2').hide();
	$('#pg03_3').hide();
	$('#pg03_hand').hide();
	
	for(var i=1;i<=9;i++){
		$('#pg04_'+i).show();
		$('#pg04_'+i).addClass('animated fadeIn');
	}
  });
  
  //再来一次点击事件
	for(var i=1;i<=9;i++){
		$('#pg04_'+i).on('click', function() {
			$(this).addClass('animated flipInY');
			pid = $(this).attr('id').replace('pg04_','');
			$('#pg05_1 img').attr('src','imgs/04/04_0'+pid+'.png');
			
			$('#pg04_10').show();
			$('#pg04_10').addClass('animated fadeInUp');
			
			$('#pg00_1').hide();
			$('#pg00_2').hide();
			$('#pg00_3').hide();
			$('#pg00_arrow').hide();
			$('#scene1').hide();
			$('#scene2').hide();
			$('#scene3').hide();
			
			$('#wrapper').fullpage.moveTo(1);
			setTimeout(function(){
				showForm();
			},1000);
			hidePersons();
		});
	}
	
  var hidePersons = function(){
	$('#scene3').hide();
	setTimeout(function(){
		for(var i=1;i<=9;i++){
			$('#pg04_'+i).hide();
		}
	},300);
  }
  
  var showForm = function(){
	$('#pg05_1').show();
	$('#pg05_1').addClass('animated fadeInUp');
	
	$('#pg05_2').show();
	$('#pg05_2').addClass('animated fadeInUp');
	$('#pg05_3').show();
	$('#pg05_3').addClass('animated fadeInUp');
	$('#pg05_4').show();
	$('#pg05_4').addClass('animated fadeInUp');
	$('#pg05_5').show();
	$('#pg05_5').addClass('animated fadeInUp');
	
	$('#pg05_6').show();
	$('#pg05_6').addClass('animated flash ');
	$('#pg05_7').show();
	$('#pg05_7').addClass('animated flash ');
	$('#pg05_8').show();
	$('#pg05_8').addClass('animated fadeInUp');
  }
  

  $('#music').on('click', function() {
    $(this).toggleClass('disabled');

    var target = $(this)[0]
      , method = audio.paused ? 'play' : 'pause';

    audio[method] && audio[method]();
  });
	
  var glassWobble = function(){
	setTimeout(function(){
		$('#loading').hide();
		//$('#pg00_2').addClass('');
	},800);
  }
  
  var pres = 'scene0';
  
  var wrapperInit = function(){
	$('#wrapper').show();
	
	$('#wrapper').fullpage({
		sectionSelector: '.scene',
		touchSensitivity: 1,
		afterLoad: function(anchor, index) {
		  var $current = $('.scene.active');
		  var $sceneid = $current.attr('id');
		  $current.find('.bg').addClass('active');
		  var $icons = $current.find('.icon.symbol, .icon.text, .icon.photo');
		  var $iconst = $current.find('.icon');
				
			if(pres < $sceneid){
				pres = $sceneid;
				$iconst.each(function() {
					$(this).hide();
				  });
			}else{
				  $iconst.each(function() {
					$(this).attr('class','icon');
					if($(this).attr('id')=='pg00_2' && pres=='scene1')$(this).show();
				  });
				  
				pres = $sceneid;
				return;
			}
		  
		  if($sceneid == "scene1"){
			setTimeout(function(){
				$('#pg01_1').show();
				$('#pg01_1').addClass('animated zoomInUp');
			},150*1);
			setTimeout(function(){
				$('#pg01_2').show();
				$('#pg01_2').addClass('animated zoomInUp');
			},150*2);
			setTimeout(function(){
				$('#pg01_3').show();
				$('#pg01_3').addClass('animated zoomInUp');
			},150*3);
			setTimeout(function(){
				$('#pg01_4').show();
				$('#pg01_4').addClass('animated zoomInUp');
			},150*4);
			setTimeout(function(){
				$('#pg01_5').show();
				$('#pg01_5').addClass('animated zoomInUp');
			},150*5);
			setTimeout(function(){
				$('#pg01_6').show();
				$('#pg01_6').addClass('animated zoomInUp');
			},150*6);
			setTimeout(function(){
				$('#pg01_7').show();
				$('#pg01_7').addClass('animated zoomInUp');
			},150*7);
			setTimeout(function(){
				$('#pg01_8').show();
				$('#pg01_8').addClass('animated zoomInUp');
			},150*8);
			setTimeout(function(){
				$('#pg01_9').show();
				$('#pg01_9').addClass('animated zoomInUp');
			},150*9);
			setTimeout(function(){
				$('#pg01_10').show();
				$('#pg01_10').addClass('animated zoomInUp');
			},150*10);
			setTimeout(function(){
				$('#pg01_11').show();
				$('#pg01_11').addClass('animated zoomInUp');
			},150*11);
			
			setTimeout(function(){
				$('#pg01_arrow').show();
			},150*14);
		  }else if($sceneid == "scene2"){
			setTimeout(function(){
				$('#pg02_1').show();
				$('#pg02_1').addClass('animated fadeInUpBig');
			},150*1);
			setTimeout(function(){
				$('#pg02_2').show();
				$('#pg02_2').addClass('animated fadeInUpBig');
			},150*3);
			setTimeout(function(){
				$('#pg02_3').show();
				$('#pg02_3').addClass('animated fadeInUpBig');
			},150*5);
			
			setTimeout(function(){
				$('#pg02_arrow').show();
			},150*9);
		  }else if($sceneid == "scene3"){
			$('#pg03').find('div').each(function(){
				$(this).hide();
			})
			setTimeout(function(){
				$('#pg03_1').show();
				$('#pg03_1').addClass('animated zoomIn');
			},150*1);
			setTimeout(function(){
				$('#pg03_2').show();
				$('#pg03_hand').show();
				//$('#pg03_2').addClass('animated zoomIn');
			},150*3);
			setTimeout(function(){
				$('#pg03_3').show();
				$('#pg03_3').addClass('animated zoomIn');
			},150*5);
		  }else{
			  $icons.each(function() {
				$(this).addClass('animated ' + effects[Math.floor(Math.random() * effects.length)]);
			  });
		  }

		  if(!$current.find('#child').length) return;
		},
		onLeave: function() {
		  var $current = $('.scene.active');
		  $current.find('.bg').removeClass('active');
		}
	});
  }	
  
  $("#share-text").load(function(){
	$('#loading').addClass('animated zoomOutDown');
	setTimeout(function(){
		wrapperInit();
		/*$(function(){
			var _width = parseInt(($(document).width() - $('#pg00').width()) / 2);
			var _height = parseInt($('#pg00_1 img').height() * 206 / 310);
			$('#pg00_4').width(_width).height(_height).css('right', -_width-1 + 'px');
		})*/
		glassWobble();
	},500);
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
  link = link.replace('index.html', '');

  var img = link + 'imgs/share.jpg'
    , desc = '暖男天团照流出，带你发现不一样的搜狗'
    , title = '你印象中的程序猿是什么样？'
    , appid = '';

  function shareFriend(argv) {
    WeixinJSBridge.invoke('sendAppMessage',{
      'appid': appid,
      'img_url': img,
      'img_width': '200',
      'img_height': '200',
      'link': link+'index.html',
      'desc': desc,
      'title': title
    }, function(res){
		(dataForWeixin.callback)();
	});
    $body.removeClass('mask');
  }

  function shareTimeline(argv) {
    WeixinJSBridge.invoke('shareTimeline', {
      'img_url': img,
      'img_width': '200',
      'img_height': '200',
      'link': link+'index.html',
      'desc': desc,
      'title': title
    }, function(res){
		(dataForWeixin.callback)();
	});
    $body.removeClass('mask');
  }

  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.on('menu:share:appmessage', shareFriend);
    WeixinJSBridge.on('menu:share:timeline', shareTimeline);
  }, false);
});