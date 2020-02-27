$(function () {
    (function(a){function d(e){0<e.clientY||(b&&clearTimeout(b),0>=a.exitIntent.settings.sensitivity?a.event.trigger("exitintent"):b=setTimeout(function(){b=null;a.event.trigger("exitintent")},a.exitIntent.settings.sensitivity))}function c(){b&&(clearTimeout(b),b=null)}var b;a.exitIntent=function(b,f){a.exitIntent.settings=a.extend(a.exitIntent.settings,f);if("enable"==b)a(window).mouseleave(d),a(window).mouseenter(c);else if("disable"==b)c(),a(window).unbind("mouseleave",d),a(window).unbind("mouseenter",
        c);else throw"Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";};a.exitIntent.settings={sensitivity:300}})(jQuery);

    $.exitIntent('enable');
    $(document).bind('exitintent',
        function() {
            var backet_counter = $('.js-shopping-cart-button-container .x-header__controls-counter');
            var items = parseInt(backet_counter.text());
            if(items && $('#shopping_cart_list_overlay').length === 0) {
                $('body').addClass('exit-intent-experiment-waiting-for-basket exit-intent-experiment-basket-fake-style');
                backet_counter.click();
                $.exitIntent('disable');
                var pollForBacket = function () {
                    if($('#shopping_cart_list_overlay').length) {
                        $('#shopping_cart_list_overlay h4').after('<div class="exit-intent-experiment-alert-box">На складе заканчиваются товары из вашей корзины!</div>');

                        $('#shopping_cart_list_overlay .x-shc-total__controls-wrapper').append('<div class="exit-intent-experiment-order-alert">Успейте оформить заказ!</div>');
                        $('#shopping_cart_list_overlay .x-shc-total__main-control-holder .x-button__text').text('Завершить заказ');
                        $('#shopping_cart_list_overlay .x-shc-company').each(function () {
                            var shop = $(this);
                            shop.parent().find('.x-shc-item').each(function () {
                                var item = $(this);
                                item.find('.x-shc-item__info-cell').prepend(shop.clone());
                            });
                            shop.remove();
                        });


                        $('body').removeClass('exit-intent-experiment-waiting-for-basket');
                        var pollForClose = function () {
                            if($('#shopping_cart_list_overlay').length) {
                                setTimeout(pollForClose, 100);
                            } else {
                                $('body').removeClass('exit-intent-experiment-basket-fake-style');
                            }
                        };
                    } else {
                        setTimeout(pollForBacket, 100);
                    }
                };
                pollForBacket();
            }
        }
    );
});