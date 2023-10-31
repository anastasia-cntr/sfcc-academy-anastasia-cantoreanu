"use strict";
var server = require("server");

server.get("Show", function(req, res, next) {
    var myAsset = dw.content.ContentMgr.getContent("footer-your-benefits-section");
    res.render("service/rendering", { myAsset: myAsset });
    next();
});
module.exports = server.exports();
