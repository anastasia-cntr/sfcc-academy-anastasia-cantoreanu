window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');
var processInclude = require("./renderCarousels");

$(document).ready(function () {
    processInclude(require('../../../../../app_storefront_base/cartridge/client/default/js/main'));
    processInclude(require('./components/test'));
});

