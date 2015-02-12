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

var overSlide = {
	index: 0,
	init: function() {
		var dv = document.getElementById("slideBox").getElementsByTagName("div");
		var li = document.getElementById("slideBox").getElementsByTagName("li");
		for (var i = 0; i < li.length; i++) {
			li[i].onmouseover = (function(e) {
				return function() {
					var d = e % 2;
					var c = d == 0 ? 'l' : 'r';
					var pos = this.className;
					if (pos.indexOf("_h") != -1) return;
					li[overSlide.index].className = li[overSlide.index].className.replace("_h", "");
					dv[overSlide.index].className = "hide";
					this.className = c + '_h';
					dv[e].className = "cont_" + c;
					overSlide.index = e;
				}
			})(i);
		}
	}
}
addLoadEvent(overSlide.init);