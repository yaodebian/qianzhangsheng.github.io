/**
 * Created by qianzhangsheng on 14-11-3.
 * 把canvas通过base64保存为png图片
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = [];
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);