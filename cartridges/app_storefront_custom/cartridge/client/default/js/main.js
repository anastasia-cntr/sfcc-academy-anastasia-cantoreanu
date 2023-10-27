window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');
var clicked = 0;

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
});

/* Function commented out to test css only functionality

$(document).ready(function() {
    $("#couponCodeAnchor").click(function() {
        if (clicked == 0) {
            $(".form-group.hidden").css("display", "block");
            clicked = 1;
        } else {
            $(".form-group.hidden").css("display", "none");
            clicked = 0;
        }
    });
});

*/
