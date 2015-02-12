function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
function nav_bg() {
	var getli = document.getElementById("item");
	var lilength = getli.getElementsByTagName("li");
	//最后一个li为样式的占位符故-1
	for(var i=0; i<lilength.length-1; i++ ) {
		//遍历每个菜单项增加onClick事件
		var nodeItem = document.getElementById("item"+i);
		//菜单激活动态样式
		nodeItem.onclick = function() {
			//清空焦点以外的样式
			for(var n=0; n<lilength.length; n++) {
				document.getElementsByTagName("li")[n].className = "";
			}
			this.className = "active";
			//检验匹配数字
			var linkNode = parseInt( this.id.substring(4,5) );
			var getchli = document.getElementById("bot");
			var chlilength = getchli.getElementsByTagName("ul");
			//按顺序匹配菜单项和菜单内容
			for (var j=0; j<chlilength.length; j++) {
				var nodeSubItem = document.getElementById("sub-item"+j);
				//如果菜单项和菜单内容匹配则显示，否则隐藏
				if ( linkNode == j ) {
					nodeSubItem.style.display = "block";
				} else {
					nodeSubItem.style.display = "none";
				}
			}
		}
	}
}
addLoadEvent(nav_bg);