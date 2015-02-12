$(document).ready(function(){
	//input获得焦点后把label隐藏,[0]结果集中第一个结果的DOM对象
	$("#q").focus(function(){
		$("label[for='q']")[0].style.display = 'none';
	});
	//input失去焦点后label重新显示,[0]结果集中第一个结果的DOM对象
	$("#q").blur(function(){
		if(this.value == ""){
			$("label[for='q']")[0].style.display = '';
		}
	});
});