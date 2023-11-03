"use strict";
var server = require("server");

server.get("ShowSlot", function(req, res, next) {
    res.render("renderContentSlot");
    return next();
});

module.exports = server.exports();
