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

$(document).ready(function() {
    $(".second-carousel").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        asNavFor: ".first-carousel",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
