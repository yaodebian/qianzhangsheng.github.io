$(document).ready(function(){
	setClickable();
});

//Ajax文本框方法
function setClickable(){
	$('#editInPlace').click(function(){
		var textarea = '<div><textarea rows="10" cols="60">'+$(this).html()+'</textarea>';
		var button	= '<div><input type="button" value="SAVE" class="saveButton" /> OR <input type="button" value="CANCEL" class="cancelButton" /></div></div>';
		var revert = $(this).html();
		$(this).after(textarea+button).remove();
		$('.saveButton').click(function(){saveChanges(this, false);});
		$('.cancelButton').click(function(){saveChanges(this, revert);});
	})
	.mouseover(function(){
		$(this).addClass("editable");
	})
	.mouseout(function(){
		$(this).removeClass("editable");
	});
}

//存储页面
function saveChanges(obj, cancel){
	if(!cancel){
		var t = $(obj).parent().siblings(0).val();
		$.post("test2.php",{content:t},	function(txt){	alert(txt);});
	}else{
		var t = cancel;
	}
	if(t==''){
		t='(click to add text)';
	}
	$(obj).parent().parent().after('<div id="editInPlace">'+t+'</div>').remove();
	setClickable();
}	