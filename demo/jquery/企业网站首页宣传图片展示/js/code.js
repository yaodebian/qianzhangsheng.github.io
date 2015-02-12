// JavaScript Document
var _c = _h = 0;
$(document).ready(function(){
    $('#play > li').click(function(){
        var i = $(this).attr('alt') - 1;
        clearInterval(_h);
        _c = i;
        //play();
        change(i);       
    })
    $("#pic img").hover(function(){clearInterval(_h)}, function(){play()});
    play();
	//超链接失去焦点
	$('#pic a').focus(function(){
		this.blur();
	});
})

function play(){
    _h = setInterval("auto()", 5000);
}

//选择数字和选择图片相对应
function change(i){
    $('#play > li').css('background-image','url(images/img_switch_nav.gif)').eq(i).css('background-image','url(images/img_switch_nav_selected.gif)').blur();
    $("#pic img").fadeOut('slow').eq(i).fadeIn('slow').blur();
}

function auto(){   
    _c = _c > 2 ? 0 : _c + 1;
    change(_c);
}