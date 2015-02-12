/**
 * Created by qianzhangsheng on 14-10-31.
 */
define(["sup"], function (sup) {
    var add = function (x, y) {
        return x + y;
    };

    var a = function (x) {
        return x;
    };
    var b = function (x) {
        return x + 5;
    };

    var j = function () {
        return $().jquery;
    };

    return {
        add: add,
        a: b,
        j: j,
        sup: sup
    };
});