"use strict";

var slick = require("slick-carousel");

$(document).ready(function() {
    $(".first-carousel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        asNavFor: ".second-carousel"
    });
});
