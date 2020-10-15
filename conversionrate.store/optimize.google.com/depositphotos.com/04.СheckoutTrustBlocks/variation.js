Backbone.$(function () {
    var $ = Backbone.$;
    var startHotjar = true;

    setInterval(function () {

        $('.billing-page label.merchant-manager__field:not(.event-listener-already-here)').addClass('event-listener-already-here').click(function () {
            let self = $(this);
            if(self.data('id')) {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'click on text field',
                    'eventLabel': 'Name of field: '+self.data('id'),
                    'eventValue': ' '
                });
            }
        });

        $('.pay-method__icon_applepay:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment - Checkout: trust blocks',
                'eventAction': 'click on payment service',
                'eventLabel': 'Apple Pay',
                'eventValue': ' '
            });
        });
        $('.pay-method__icon_googlepay:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
            console.log('gpay');
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment - Checkout: trust blocks',
                'eventAction': 'click on payment service',
                'eventLabel': 'Google Pay',
                'eventValue': ' '
            });
        });
        $('.pay-method__icon_paypal:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment - Checkout: trust blocks',
                'eventAction': 'click on payment service',
                'eventLabel': 'PayPal',
                'eventValue': ' '
            });
        });
        $('.pay-method__icon_segpay:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment - Checkout: trust blocks',
                'eventAction': 'click on payment service',
                'eventLabel': 'SegPay',
                'eventValue': ' '
            });
        });
        $('.pay-method__icon_paymentwall:not(.event-listener-already-here)').addClass('event-listener-already-here').prev().click(function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Experiment - Checkout: trust blocks',
                'eventAction': 'click on payment service',
                'eventLabel': 'PaymentWall',
                'eventValue': ' '
            });
        });

        if($('.checkout-trust-blocks').length === 0) {
            if(startHotjar) {
                startHotjar = false;
                try {
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:410340,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                    window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
                    hj('trigger', 'Experiment__Checkout_trust_blocks');
                }
                catch(e) {}
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'loaded',
                    'eventLabel': ' ',
                    'eventValue': ' '
                });
            }

            $('.order-info ._process').css('top', ($('.billing-page__cell:first ._errorHolder').position().top+10)+'px');
            $('.billing-page__container .billing-settings').css('top', ($('.billing-page__cell:first ._errorHolder').position().top+10+$('.order-info ._process').height())+'px');

            $('.billing-page__cell:last').append('<div class="checkout-trust-blocks">' +
                '<div class="checkout-trust-blocks-1"></div>' +
                '<div class="checkout-trust-blocks-2"></div>' +
                '<a href="https://trustpilot.com/review/www.depositphotos.com" target="_blank" class="checkout-trust-blocks-3"></a>' +
                '</div>');
            $('.checkout-trust-blocks-3').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'click on link Trustpilot',
                    'eventLabel': ' ',
                    'eventValue': ' '
                });
            });

            $('.pay-methods-select__types .pay-type:first').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'click on payment method',
                    'eventLabel': 'Credit card',
                    'eventValue': ' '
                });
            });

            $('.pay-methods-select__types .pay-type:first').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'click on payment method',
                    'eventLabel': 'Other Payment Methods',
                    'eventValue': ' '
                });
            });

            $('._process .billing-process .billing-process__btn').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'click on button Process Order',
                    'eventLabel': ' ',
                    'eventValue': ' '
                });
            });

            $('.promocode__link').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'click on link Apply Promo Code',
                    'eventLabel': ' ',
                    'eventValue': ' '
                });
            });

            $('.footer__link.cmp-contact-us').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Experiment - Checkout: trust blocks',
                    'eventAction': 'click on link Contact Us',
                    'eventLabel': 'To pay by check or bank transfer, please Contact Us',
                    'eventValue': ' '
                });
            });
        }
    }, 100);
});