/*
 * shihua
 * 359529568@qq.com
 * 2014.12.09
 */
;(function(e) {
  'use strict';
  if ('document' in self && !('classList' in document.createElement('_'))) {
    (function(e) {
      if (!('Element' in e)) return;
      var t = 'classList',
          n = 'prototype',
          r = e.Element[n],
          i = Object,
          s = String[n].trim ||
          function() {
          return this.replace(/^\s+|\s+$/g, '')
          },
          o = Array[n].indexOf ||
          function(e) {
          var t = 0,
              n = this.length;
          for (; t < n; t++) {
            if (t in this && this[t] === e) {
              return t
            }
          }
          return -1
          },
          u = function(e, t) {
          this.name = e;
          this.code = DOMException[e];
          this.message = t
          },
          a = function(e, t) {
          if (t === '') {
            throw new u('SYNTAX_ERR', 'An invalid or illegal string was specified')
          }
          if (/\s/.test(t)) {
            throw new u('INVALID_CHARACTER_ERR', 'String contains an invalid character')
          }
          return o.call(e, t)
          },
          f = function(e) {
          var t = s.call(e.getAttribute('class') || ''),
              n = t ? t.split(/\s+/) : [],
              r = 0,
              i = n.length;
          for (; r < i; r++) {
            this.push(n[r])
          }
          this._updateClassName = function() {
            e.setAttribute('class', this.toString())
          }
          },
          l = f[n] = [],
          c = function() {
          return new f(this)
          };
      u[n] = Error[n];
      l.item = function(e) {
        return this[e] || null
      };
      l.contains = function(e) {
        e += '';
        return a(this, e) !== -1
      };
      l.add = function() {
        var e = arguments,
            t = 0,
            n = e.length,
            r, i = false;
        do {
          r = e[t] + '';
          if (a(this, r) === -1) {
            this.push(r);
            i = true
          }
        } while (++t < n);
        if (i) {
          this._updateClassName()
        }
      };
      l.remove = function() {
        var e = arguments,
            t = 0,
            n = e.length,
            r, i = false;
        do {
          r = e[t] + '';
          var s = a(this, r);
          if (s !== -1) {
            this.splice(s, 1);
            i = true
          }
        } while (++t < n);
        if (i) {
          this._updateClassName()
        }
      };
      l.toggle = function(e, t) {
        e += '';
        var n = this.contains(e),
            r = n ? t !== true && 'remove' : t !== false && 'add';
        if (r) {
          this[r](e)
        }
        return !n
      };
      l.toString = function() {
        return this.join(' ')
      };
    })(self)
  }
  var i = function(n) {
    this.options = n || {};
    this.current = 0;
    this.pageX;
    this.pageY;
    this.height;
    this.width;
    this.flag;
    this.move;
    this.scroll;
    this.$el = document.querySelector(this.options.id);
    this.swipe = this.options.direction || 'X';
    this.resize().init().bindEvents().finish();
  };
  i.prototype.init = function(e) {
    var t = e ? this.$el.children[e] : this.$el.firstElementChild;
    if (!t) throw 'ERROR';
    t.classList.add('moving');
    t.style.webkitTransform = 'translate3d(0,0,0)';
    setTimeout(function() {
      t.classList.remove('moving');
      t.classList.add('active')
    }, 300);
    return this;
  };
  i.prototype.bindEvents = function() {
    var e = this;
    window.addEventListener('resize orientationchange', this.resize.bind(this), false);
    // window.addEventListener('mousewheel', this.mousewheel.bind(this), false);
    'touchstart touchmove touchend touchcancel'.split(' ').forEach(function(t) {
      e.$el.addEventListener(t, e[t].bind(e), false)
    });
    return this;
  };
  i.prototype.getCurrent = function() {
    return this.$el.children[+this.current];
  };
  i.prototype.resize = function() {
    this.width = this.$el.parentNode.clientWidth;
    this.height = this.$el.parentNode.clientHeight;
    return this;
  };
  i.prototype.random = function() {
    var e = this.$el.children.length;
    var t = this.current;
    var n = [];
    var r;
    for (var i = 0; i < e; i++) {
      if (i !== t) n.push(i.toString())
    }
    r = Math.floor(Math.random() * n.length);
    this.go(+n[r])
  };
  i.prototype.mousewheel = function(e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    this.scroll || (this.scroll = !0, (e.wheelDelta>0? this.prev() : this.next()));
  };
  i.prototype.touchstart = function(e) {
    var t = e.touches[0];
    this.flag = null;
    this.move = 0;
    this.pageX = t.pageX;
    this.pageY = t.pageY
  };
  i.prototype.touchmove = function(e) {
    var t = e.touches[0];
    var n = t.pageX - this.pageX;
    var r = t.pageY - this.pageY;
    var i = this.getCurrent();
    var s = i.nextElementSibling;
    var o = i.previousElementSibling;
    if (!this.flag) {
      this.flag = Math.abs(n) > Math.abs(r) ? 'X' : 'Y';
      if (this.flag === this.swipe) {
        i.classList.add('moving');
        s && s.classList.add('moving');
        o && o.classList.add('moving');
      }
    }
    if (this.flag === this.swipe) {
      e.preventDefault();
      e.stopPropagation();
      switch (this.swipe) {
      case 'X':
        this.move = n;
        this.setX(i, n);
        s && this.setX(s, n + this.width);
        o && this.setX(o, n - this.width);
        break;
      case 'Y':
        this.move = r;
        this.setY(i, r);
        s && this.setY(s, r + this.height);
        o && this.setY(o, r - this.height);
        break;
      }
    }
  };
  i.prototype.touchend = function(e) {
    var t = 50;
    var n = this.move;
    var r = this.getCurrent();
    var i = r.nextElementSibling;
    var s = r.previousElementSibling;
    r.classList.remove('moving');
    i && i.classList.remove('moving');
    s && s.classList.remove('moving');
    if (!this.flag) return;
    e.preventDefault();
    if (n < -t && i) return this.next();
    if (n > t && s) return this.prev();
    this.reset();
  };
  i.prototype.touchcancel = function(e) {
    var t = this.getCurrent();
    var n = t.nextElementSibling;
    var r = t.previousElementSibling;
    t.classList.remove('moving');
    n && n.classList.remove('moving');
    r && r.classList.remove('moving');
    this.reset();
  };
  i.prototype.setX = function(e, t, n) {
    e && (e.style.webkitTransform = 'translate3d(' + t + (n || 'px') + ',0,0)');
  };
  i.prototype.setY = function(e, t, n) {
    e && (e.style.webkitTransform = 'translate3d(0,' + t + (n || 'px') + ',0)');
  };
  i.prototype.setCurrent = function(e, t) {
    e && (e.style.webkitTransform = 'translate3d(0,0,0)');
    if (t) {
      this.current = t;
      this.$current = this.$el.children[t];
    }
  };
  i.prototype.next = function() {
    this.go(+this.current + 1);
  };
  i.prototype.prev = function() {
    this.go(+this.current - 1);
  };
  i.prototype.reset = function() {
    var e = this.width;
    var t = this.height;
    var n = this.swipe;
    var r = this.getCurrent();
    var i = r.previousElementSibling;
    var s = r.nextElementSibling;
    this.setCurrent(r);
    i && this['set' + n](i, -(n === 'X' ? e : t));
    s && this['set' + n](s, n === 'X' ? e : t);
  };
  i.prototype.go = function(e) {
    var n = this.getCurrent();
    var r = this.$el.childElementCount;
    var i = this.$el.children[e];
    var s = e < this.current ? -1 : 1;
    if (e === this.current || e < 0 || e >= r) {
      this.scroll = null;
      return;
    }
    this.current = +e;
    this['set' + this.swipe](n, -s * (this.swipe === 'X' ? this.width : this.height));
    this.setCurrent(i, +e);
    this.finish(n, i);
  };
  i.prototype.finish = function(e, t) {
    var self = this;
    self.flag = null;
    var callback = this.options.callback;
    setTimeout(function() {
      e && e.classList.remove('active');
      t && t.classList.add('active');
      self.scroll = null;
    }, 300);
    if (callback && typeof callback === 'function') callback.call(this, this.current);
  };
  window.fullpage = i;
})(this)