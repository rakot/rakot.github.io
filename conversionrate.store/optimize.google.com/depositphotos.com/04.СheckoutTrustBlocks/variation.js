Backbone.$(function () {
    var $ = Backbone.$;

    setInterval(function () {
        if($('.checkout-trust-blocks').length === 0) {
            $('.billing-page__cell:last').append('<div class="checkout-trust-blocks">' +
                '<div class="checkout-trust-blocks-1"></div>' +
                '<div class="checkout-trust-blocks-2"></div>' +
                '<a href="https://trustpilot.com/review/www.depositphotos.com" target="_blank" class="checkout-trust-blocks-3"></a>' +
                '</div>');
        }
    }, 100);
});