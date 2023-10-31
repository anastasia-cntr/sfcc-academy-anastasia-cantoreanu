"use strict";
var server = require("server");

server.get("ShowCarousels", function(req, res, next) {
    var carousel1 = dw.content.ContentMgr.getContent("SFRA-carousel1");
    var carousel2 = dw.content.ContentMgr.getContent("SFRA-carousel2");
    res.render("renderCarousels", { carousel1: carousel1, carousel2: carousel2 });
    return next();
});
module.exports = server.exports();
