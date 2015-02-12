/**
 * Created by qianzhangsheng on 14-11-3.
 */
var querystring = require("querystring");
var fs = require("fs");

function start(response, postData) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(fs.readFileSync(__dirname + "/index.html"));
}

function upload(response, postData) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    var imgdata = querystring.parse(postData).imgdata;
    var imgname = querystring.parse(postData).imgname;
    var base64Data = imgdata.replace(/^data:image\/\w+;base64,/, "");
    var dataBuffer = new Buffer(base64Data, "base64");
    fs.writeFile(imgname + ".png", dataBuffer, function (err) {
        if (err) {
            response.write(err);
        } else {
            response.write("保存成功！");
        }
    });
    response.end();
}
exports.start = start;
exports.upload = upload;