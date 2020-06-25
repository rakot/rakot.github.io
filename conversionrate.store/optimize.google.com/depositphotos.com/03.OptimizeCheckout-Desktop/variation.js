Backbone.$(function () {
    var $ = Backbone.$;
    var jQuery = $;
    var setCookie = function(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";path=/";
    };

    var getCookie = function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    (function(a){function d(e){0<e.clientY||(b&&clearTimeout(b),0>=a.exitIntent.settings.sensitivity?a.event.trigger("exitintent"):b=setTimeout(function(){b=null;a.event.trigger("exitintent")},a.exitIntent.settings.sensitivity))}function c(){b&&(clearTimeout(b),b=null)}var b;a.exitIntent=function(b,f){a.exitIntent.settings=a.extend(a.exitIntent.settings,f);if("enable"==b)a(window).mouseleave(d),a(window).mouseenter(c);else if("disable"==b)c(),a(window).unbind("mouseleave",d),a(window).unbind("mouseenter",
        c);else throw"Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";};a.exitIntent.settings={sensitivity:300}})(jQuery);

    var image = sessionStorage.getItem('ItemMaxSizeLoad');
    if(!image) {
        return false;
    }

    hj('trigger', 'optimize_checkout');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'gaEv',
        'eventCategory': 'Exp - optimize checkout',
        'eventAction': 'eperiment activated'
    });

    var processHoverEvent = 1;

    var applyStyle = function () {
        if($('.billing-process__btn-dsc').length === 0) {
            $('.billing-process__btn').unbind('hover').hover(function () {
                if(processHoverEvent) {
                    processHoverEvent = 0;
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'gaEv',
                        'eventCategory': 'Exp - optimize checkout',
                        'eventAction': 'process order hover popup activated'
                    });
                }
            });

            $('.billing-page__container .billing-process .billing-process__btn')
                .after('<div class="billing-process__btn-dsc">' +
                    '<div class="billing-process__btn-dsc-green">You are one step away from downloading the selected image</div>' +
                    '<div class="billing-process__btn-dsc-gray">Cancel anytime</div>' +
                    '</div>');
        }

        if($('.billing-page__wrap').hasClass('experiment-applied')) {
            return false;
        }
        $('.billing-page__wrap').addClass('experiment-applied');
        var leftCell =  $('.billing-page__cell').first().addClass('first-cell');
        var rightCell = $('.billing-page__cell').last().addClass('last-cell');

        $('.billing-page__wrap').prepend('<div class="experiment-progress-steps">' +
            '<div><div class="experiment-choose-your-plan"><span></span>Choose your plan</div><div class="experiment-make-a-payment"><span></span>Make a payment</div><div class="clearfix"></div></div>' +
            '<div class="experiment-progress-bar"><div class="experiment-progress-bar-fill">75% done</div></div>' +
            '</div>');

        // leftCell.prepend($('.order-info_custom .order-info__items'));
        var image = $('<img class="order-image-preview">').attr('src', image);
        leftCell.prepend(image);
        leftCell.prepend('<p class="order-info__title_caption">You are one step away from downloading this image with the selected plan.</p>');
        leftCell.prepend($('.order-info__title'));

        image.load(function () {
            var height = $('.order-image-preview').height();
            var offset = $('.order-image-preview').position;
            var top = height+offset.top+20;
            $('.order-info_custom .order-info__items').css('top',top+'px');
        });

        var billing = $('.billing-pay__pay-methods');
        var billingNext = billing.nextAll();

        rightCell.prepend(billingNext);
        rightCell.prepend(billing);
    };
    setInterval(applyStyle, 100);

    $('body').append('<div class="one-step-away-overlay"><div class="one-step-away-window"><div class="one-step-away-close"></div><div class="one-step-away-wrapper"><h4>You are one step away<br>from downloading your image</h4><p>After completing your order you will be able to download the selected image <br> and other images according to your plan.</p></div></div></div>');
    $('.one-step-away-overlay .one-step-away-close').click(function () {
        $('.one-step-away-overlay').hide();
    });


    var popupShown = false;
    if(getCookie('checkoutExitPopupShown') === 'yes') {
        popupShown = true;
    }
    var timer = Date.now();
    $(document).on('mousemove click',function () {
        timer = Date.now();
    });

    $.exitIntent('enable');
    $(document).bind('exitintent',
        function() {
            if(popupShown) {
                return;
            }
            setCookie('checkoutExitPopupShown','yes');
            popupShown = true;
            $('.one-step-away-overlay').show();
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'gaEv',
                'eventCategory': 'Exp - optimize checkout',
                'eventAction': '9 seconds popup activated'
            });
        });
    var checkInterval = setInterval(function () {
        if(Date.now() - timer > 15000) {
            clearInterval(checkInterval);
            if(popupShown) {
                return;
            }
            setCookie('checkoutExitPopupShown','yes');
            popupShown = true;
            $('.one-step-away-overlay').show();
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'gaEv',
                'eventCategory': 'Exp - optimize checkout',
                'eventAction': '9 seconds popup activated'
            });
        }
    },1);
});