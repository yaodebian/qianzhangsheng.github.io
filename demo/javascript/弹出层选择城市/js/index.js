/* ------使用说明----- */
/*
	添加城市方法：
	    添加组：找到id 是 "selectSub"中select标签下，添加option标签 value属性递增，找到 id 是 "selectSub",按照原有格式添加div,其id属性递增
	添加二级傅选矿选项
		复制 id 是 "selectSub" 下任意input标签，粘贴在需要添加的位置。
*/
var grow = ceng("selectSub").getElementsByTagName("option").length; //组数
var showGrow = 0; //已打开组
var selectCount = 0; //已选数量 
showSelect(showGrow);
var items = ceng("selectSub").getElementsByTagName("input");
//alert(maxItem);
//var lenMax = 2; 
//alert(1);
function ceng(o) { //获取对象
	if (typeof(o) == "string")
		return document.getElementById(o);
	return o;
}

function openBg(state) { //遮照打开关闭控制
	if (state == 1) {
		ceng("bg").style.display = "block";
		var h = document.body.offsetHeight > document.documentElement.offsetHeight ? document.body.offsetHeight : document.documentElement.offsetHeight;
		//alert(document.body.offsetHeight);
		//alert(document.documentElement.offsetHeight);
		var w = document.body.offsetWidth > document.documentElement.offsetWidth ? document.body.offsetWidth : document.documentElement.offsetWidth;
		//alert(document.body.offsetHeight);
		//alert(document.documentElement.offsetHeight);
		ceng("bg").style.height = h + "px";
		ceng("bg").style.width = w - 21 + "px";
	} else {
		ceng("bg").style.display = "none";
	}
}

function openSelect(state) { //选择城市层关闭打开控制
	if (state == 1) {
		ceng("selectItem").style.display = "block";
		ceng("selectItem").style.left = (ceng("bg").offsetWidth - ceng("selectItem").offsetWidth) / 2 + "px";
		ceng("selectItem").style.top = document.body.scrollTop + 100 + "px";
	} else {
		ceng("selectItem").style.display = "none";
	}
}

function showSelect(id) {
	for (var i = 0; i < grow; i++) {
		ceng("c0" + i).style.display = "none";
	}
	ceng("c0" + id).style.display = "block";
	showGrow = id;
}

function open(id, state) { //显示隐藏控制
	if (state == 1)
		ceng(id).style.display = "block";
	ceng(id).style.diaplay = "none";
}

function addPreItem() {
	ceng("previewItem").innerHTML = "";
	var len　 = 0;
	for (var i = 0; i < items.length; i++) {
		if (items[i].checked == true) {
			//len++;
			//if(len > lenMax)
			//{
			//	alert("不能超过" + lenMax +"个选项！")
			//	return false;
			//}
			var mes = "<input type='checkbox' checked='true' value='" + items[i].value + "' onclick='copyItem(\"previewItem\",\"previewItem\");same(this);'>" + items[i].value;
			ceng("previewItem").innerHTML += mes;
			//alert(items[i].value);
		}
	}
}

function makeSure() {
	//alert(1);
	//ceng("makeSureItem").innerHTML = ceng("previewItem").innerHTML;
	openBg(0);
	openSelect(0);
	copyItem("previewItem", "makeSureItem")
}

function copyHTML(id1, id2) {
	ceng(id2).innerHTML = ceng("id1").innerHTML;
}

function copyItem(id1, id2) {

	var mes = "";
	var items2 = ceng(id1).getElementsByTagName("input");
	for (var i = 0; i < items2.length; i++) {
		if (items2[i].checked == true) {
			mes += "<input type='checkbox' checked='true' value='" + items2[i].value + "' onclick='copyItem(\"" + id2 + "\",\"" + id1 + "\");same(this);'>" + items2[i].value;
		}
	}
	ceng(id2).innerHTML = "";
	ceng(id2).innerHTML += mes;
	//alert(ceng(id2).innerHTML);
}

function same(ck) {
	for (var i = 0; i < items.length; i++) {
		if (ck.value == items[i].value) {
			items[i].checked = ck.checked;
		}
	}
}
/* 鼠标拖动 */
var oDrag = "";
var ox, oy, nx, ny, dy, dx;

function drag(e, o) {
	var e = e ? e : event;
	var mouseD = document.all ? 1 : 0;
	if (e.button == mouseD) {
		oDrag = o.parentNode;
		//alert(oDrag.id);
		ox = e.clientX;
		oy = e.clientY;
	}
}

function dragPro(e) {
	if (oDrag != "") {
		var e = e ? e : event;
		//ceng(oDrag).style.left = ceng(oDrag).offsetLeft + "px";
		//ceng(oDrag).style.top = ceng(oDrag).offsetTop + "px";
		dx = parseInt(ceng(oDrag).style.left);
		dy = parseInt(ceng(oDrag).style.top);
		//dx = ceng(oDrag).offsetLeft;
		//dy = ceng(oDrag).offsetTop;
		nx = e.clientX;
		ny = e.clientY;
		ceng(oDrag).style.left = (dx + (nx - ox)) + "px";
		ceng(oDrag).style.top = (dy + (ny - oy)) + "px";
		ox = nx;
		oy = ny;
	}
}
document.onmouseup = function() {
	oDrag = "";
}
document.onmousemove = function(event) {
	dragPro(event);
}