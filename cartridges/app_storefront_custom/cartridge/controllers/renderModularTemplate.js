"use strict";
var server = require("server");

server.get("Show", function(req, res, next) {
    res.render("modularTemplate");
    return next();
});

module.exports = server.exports();
