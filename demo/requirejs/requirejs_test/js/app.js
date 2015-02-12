/**
 * Created by qianzhangsheng on 14-10-31.
 */
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: "jquery-1.10.2.min",
        sub: "../app/sub",
        sup: "../app/sup",
        a: "../app/a",
        b: "../app/b"
    }
});
requirejs(["jquery", "sub", "a"], function ($, sub, a) {
    console.log(sub.add(1, 1));
    console.log(sub.a(3));
    console.log(sub.j());
    console.log(a);
    console.log(sub.sup);
});