"use strict";

var slick = require("slick-carousel");

$(".first-carousel").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    asNavFor: ".second-carousel"
});
