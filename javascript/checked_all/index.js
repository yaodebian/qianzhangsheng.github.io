var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        if (event.target) {
            return event.target;
        } else {
            return event.srcElement;
        }
    }
};
EventUtil.addHandler(window, "load", function () {
    var checked_box = document.getElementById('checked_box'),
        checked_all = document.getElementById('checked_all'),
        boxItem = checked_box.getElementsByTagName('input'),
        len = boxItem.length;
    EventUtil.addHandler(checked_box, 'click', function (e) {
        var e = EventUtil.getEvent(e),
            target = EventUtil.getTarget(e);
        if (target.nodeName == 'INPUT' && target.id == 'checked_all') {
            if (target.checked) {
                for (var i = 0; i < len; i++) {
                    boxItem[i].checked = true;
                }
            } else {
                for (var i = 0; i < len; i++) {
                    boxItem[i].checked = false;
                }
            }
        } else {
            var ite = 0;
            for (var i = 0; i < len; i++) {
                if (boxItem[i].checked) {
                    ite++;
                }
            }
            if (ite == len - 1) {
                checked_all.checked = false;
            }
            if (ite == len) {
                checked_all.checked = true;
            }
        }
    });
})