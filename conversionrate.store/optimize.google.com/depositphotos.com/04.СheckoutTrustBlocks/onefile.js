Backbone.$('head').append(`<style>
body .order-info_custom {margin-bottom: 20px;}
.order-info__price-table .order-info__price-row {display: none;}
.order-info__price-table .order-info__price-row:last-child {display: block; text-align: left; margin-top: 10px;}
body .order-info_custom .order-info__sep-box {display: none;}

body .order-info_custom .order-info__details {position: relative;}
.order-info_custom .order-info__details .order-info__items {width: 50%; margin-right: 10%;}
.order-info_custom .order-info__details .order-info__price {width: 40%;}
body .order-info_custom .order-info__price-row:last-child .order-info__price-cell {padding-top: 0;  font-size: 16px !important; line-height: 22px; }
body .order-info_custom .order-info__price-row:last-child .order-info__price-cell:last-child {padding-top: 0;  font-size: 16px !important; line-height: 22px; }
body .order-info_custom .order-info__price-full {font-size: 16px;}
.order-info__item_flexible:last-child {width: 70%;}
.order-info_custom .order-info__item_flexible .order-info__item-text {line-height: 18px; position: relative; top: -2px;}
body .order-info__item {margin-bottom: 12px;}
.order-info__item_re-bill .checkbox-box .icon-checkbox, .order-info__item_flexible .checkbox-box .icon-checkbox {width: 16px; height: 16px;}

body .order-info {position: static;}
.billing-page__cell:first-child {padding-bottom: 160px;}
.billing-page__wrap {position: relative;}
body .order-info ._process {position: absolute; left: 50px; width: 45%; }
.billing-page__container .billing-settings {position: absolute; width: 45%; left: 50px;}
body .billing-process__label_desktop {display: block; width: 80%; margin-left: auto; margin-right: auto;}
.promocode_compact .promocode__link {color: #4792DE; font-weight: bold; font-size: 12px;}


.checkout-trust-blocks {padding-top: 5px;}
.checkout-trust-blocks > div, .checkout-trust-blocks > a {width: 400px; height: 110px; display: block; margin: 20px auto 25px;}
.checkout-trust-blocks .checkout-trust-blocks-1 {background: url(https://rakot.github.io/conversionrate.store/optimize.google.com/depositphotos.com/04.СheckoutTrustBlocks/img1.svg) center no-repeat;}
.checkout-trust-blocks .checkout-trust-blocks-2 {background: url(https://rakot.github.io/conversionrate.store/optimize.google.com/depositphotos.com/04.СheckoutTrustBlocks/img2.svg) center no-repeat;}
.checkout-trust-blocks .checkout-trust-blocks-3 {background: url(https://rakot.github.io/conversionrate.store/optimize.google.com/depositphotos.com/04.СheckoutTrustBlocks/img3.png) center no-repeat; margin-bottom: 0;}
</style>`);

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

        $('.order-info ._process').css('top', ($('.billing-page__cell:first ._errorHolder').last().position().top+30)+'px');
        $('.billing-page__container .billing-settings').css('top', ($('.billing-page__cell:first ._errorHolder').last().position().top+30+$('.order-info ._process').height())+'px');

    }, 100);
});