window.jQuery = window.$ = require("jquery");
var slick = require("slick-carousel");
var processInclude = require("./util");
var processInclude = require("./renderCarousels");

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
    processInclude(require("../../../../../app_storefront_base/cartridge/client/default/js/main"));
    processInclude(require("./components/test"));
});

