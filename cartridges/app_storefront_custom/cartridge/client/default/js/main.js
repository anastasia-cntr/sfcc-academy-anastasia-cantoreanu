window.jQuery = window.$ = require("jquery");
var processInclude = require("./util");
var slick = require("slick-carousel");

$(document).ready(function() {
    $(".homepage-product-listing.row").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
    processInclude(require("../../../../../app_storefront_base/cartridge/client/default/js/main"));
    processInclude(require("./components/test"));
});

