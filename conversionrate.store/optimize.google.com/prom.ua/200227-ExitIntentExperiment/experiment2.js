$(function () {
    (function(a){function d(e){0<e.clientY||(b&&clearTimeout(b),0>=a.exitIntent.settings.sensitivity?a.event.trigger("exitintent"):b=setTimeout(function(){b=null;a.event.trigger("exitintent")},a.exitIntent.settings.sensitivity))}function c(){b&&(clearTimeout(b),b=null)}var b;a.exitIntent=function(b,f){a.exitIntent.settings=a.extend(a.exitIntent.settings,f);if("enable"==b)a(window).mouseleave(d),a(window).mouseenter(c);else if("disable"==b)c(),a(window).unbind("mouseleave",d),a(window).unbind("mouseenter",
        c);else throw"Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";};a.exitIntent.settings={sensitivity:300}})(jQuery);

    var showIntentBlock = false;
    var getCookie = function(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'autoEvent',
        'eventCategory': 'Exp - Exit-Intent Popup',
        'eventAction': 'Exp activated'
    });

    var initialCartIds = 0;
    try {
        initialCartIds = AppState.config.CS.SHOPPING_CART.cart_product_ids.length;
    } catch (e) {

    }

    if(getCookie('intentExperimentStarted') !== 'yes') {
        document.cookie = 'intentExperimentStarted=yes';
        localStorage.removeItem('intentPopupShowTimer');
    }

    var showPopup = function() {
        var backet_counter = $('.js-shopping-cart-button-container .x-header__controls-counter');
        var items = parseInt(backet_counter.text());
        if(items && $('#shopping_cart_list_overlay').length === 0) {
            $.exitIntent('disable');
            var intentPopupShowTimer = localStorage.getItem('intentPopupShowTimer');
            if(intentPopupShowTimer !== 'used') {
                localStorage.setItem('intentPopupShowTimer', 'used');
            }


            $('body').addClass('exit-intent-experiment-waiting-for-basket exit-intent-experiment-basket-fake-style');

            backet_counter.click();
            if(window.hj) {
                hj('trigger', 'exit-intent-popup');
            }
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'autoEvent',
                'eventCategory': 'Exp - Exit-Intent Popup',
                'eventAction': 'Popup loaded'
            });
            var pollForBacket = function () {
                if($('#shopping_cart_list_overlay').length) {
                    $('#shopping_cart_list_overlay .x-shc-item__image').each(function () {
                        var self = $(this);
                        self.attr('src',self.attr('src').replace('_w100_h100_','_w150_h150_'));
                    });

                    $('#shopping_cart_list_overlay h4').after('<div class="exit-intent-experiment-alert-box">На складе заканчиваются товары из вашей корзины!</div>');

                    $('#shopping_cart_list_overlay .x-shc-total__controls-wrapper').append('<div class="exit-intent-experiment-order-alert">Успейте оформить заказ!</div>');
                    $('#shopping_cart_list_overlay .x-shc-total__main-control-holder .x-button__text').text('Завершить заказ').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'autoEvent',
                            'eventCategory': 'Exp - Exit-Intent Popup',
                            'eventAction': 'click',
                            'eventLabel': 'Complete order'
                        });
                    });
                    $('#shopping_cart_list_overlay').click(function (event) {
                        if($(event.target).closest('.x-overlay__dialog.x-cart-overlay').length === 0) {
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'autoEvent',
                                'eventCategory': 'Exp - Exit-Intent Popup',
                                'eventAction': 'click',
                                'eventLabel': 'Background to close'
                            });
                        }
                    });
                    $('#shopping_cart_list_overlay .x-overlay__close-button').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'autoEvent',
                            'eventCategory': 'Exp - Exit-Intent Popup',
                            'eventAction': 'click',
                            'eventLabel': 'X to close'
                        });
                    });

                    $('#shopping_cart_list_overlay .x-shc-company').each(function () {
                        var shop = $(this);
                        shop.parent().find('.x-shc-item').each(function () {
                            var item = $(this);
                            item.find('.x-shc-item__info-cell').prepend(shop.clone());
                            var product_name = item.find('.x-shc-item__title-link');
                            product_name.before($('<span style="font-weight: bold;">').text(product_name.text()));
                            product_name.remove();
                            var img = item.find('.x-shc-item__image');
                            var href = img.parent();
                            img.parent().after(img);
                            href.remove();
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
    };

    var pollTimer = setInterval(function () {
        var intentPopupShowTimer = localStorage.getItem('intentPopupShowTimer');
        if(intentPopupShowTimer === 'used') {
            //Timer already used
            clearInterval(pollTimer);
        } else if(!intentPopupShowTimer) {
            //Timer is not set, so we can set one
            var updatedCount = parseInt($('.js-shopping-cart-button-container .x-header__controls-counter').text());
            console.log('poll basket update');
            if(updatedCount && updatedCount > initialCartIds) {
                console.log('poll basket update');
                // Added item into the basket
                showIntentBlock = true;
                initialCartIds = updatedCount;
                var timestamp = new Date().getTime();
                localStorage.setItem('intentPopupShowTimer', timestamp+60*1000);
            }
        } else if(!document.hidden && showIntentBlock === false) {
            //Timer is initialized and document is active so maybe need to show popup
            intentPopupShowTimer = parseInt(intentPopupShowTimer);
            var timestamp = new Date().getTime();
            if(timestamp > intentPopupShowTimer) {
                // Let showup the popup
                $.exitIntent('enable');
                $(document).bind('exitintent',function(){
                    showPopup();
                });
            }
        }
    }, 100);
});