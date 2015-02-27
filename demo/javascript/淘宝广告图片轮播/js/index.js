var PicPlay = function (opts) {
    this.imgs = this.gets("A", opts.panel);
    var nav = this.get(opts.nav);
    this.btns = this.gets("A", opts.nav);
    var This = this;
    this.prev = null;
    for (var i = 0; i < this.btns.length; ++i) {
        this.btns[i].index = i;
        this.btns[i].onclick = function () {
            clearTimeout(This.opTimer);
            This.pos = this.index;
            This.show();
        };
    }
    nav.onmouseover = function () {
        clearInterval(This.autoTimer);
    };
    nav.onmouseout = function () {
        This.auto();
    };
    this.pos = 0;
    this.zi = 99;
    this.auto();
};
PicPlay.prototype = {
    get: function (id) {
        return document.getElementById(id);
    },
    gets: function (tag, id) {
        return (id == undefined ? document : this.get(id)).getElementsByTagName(tag);
    },
    set: function (el, val) {
        el.style.filter = "alpha(opacity=)" + parseInt(val * 100) + ")";
        el.style.opacity = val;
    },
    up: function (el) {
        el.style.display = "block";
        el.style.zIndex = this.zi++;
        this.set(el, 0);
    },
    show: function () {
        var idx = Math.abs(this.pos++ % this.imgs.length);
        var c = this.imgs[idx];
        this.up(c);
        var This = this, i = 0;
        if (this.prev)this.prev.className = "";
        this.btns[idx].className = "current";
        this.prev = this.btns[idx];
        new function () {
            i += 0.03;
            This.set(c, i);
            if (i < 1)This.opTimer = setTimeout(arguments.callee, 10);
        };
        return this;
    },
    auto: function () {
        var This = this;
        this.autoTimer = setInterval(function () {
            This.show()
        }, 2000);
    }
};
//自定义
var myPics = new PicPlay({
    nav: "cp_pics_nav",
    panel: "cp_pics",
    auto: true
});