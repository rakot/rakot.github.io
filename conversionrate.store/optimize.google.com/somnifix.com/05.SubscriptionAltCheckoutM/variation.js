$(function () {
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1271698,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'optimize_pdp');

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp — Subscription with alt checkout',
        'eventAction': 'loaded'
    });


    // $('.on-mobile-btn-wrapper').html('<a class="button on-mob-btn yellow">Subscribe & Save<span>Auto-delivery <s>$55.97</s> $49.97</span></a>' +
    //     '<a class="button on-mob-btn blue">ONE-TIME PURCHASE $55.97</span></a>');
    //
    // $('.on-mobile-btn-wrapper a.on-mob-btn.yellow').click(function () {
    //     addItemToCart(31272810676339, 1, "3", "Months", "95310");
    // });
    //
    // $('.on-mobile-btn-wrapper a.on-mob-btn.blue').click(function () {
    //     $('#mobile-header .on-button-get-sominifix-open').click();
    //     // addItemToCart(32115046056051, 1);
    // });

    let activeForm = $('.shopify-product-form:first');

    activeForm.find('.purchase-details ').after('<div class="experiment-buttons">' +
        '<div class="slider-12-weeks" style="display: none;"><a class="button on-mob-btn yellow">Subscribe & Save<span>Auto-delivery <s>$55.97</s> $49.97</span></a><a class="button on-mob-btn blue">ONE-TIME PURCHASE $55.97</span></a></div>' +
        '<div class="slider-12-months" style="display: none;"><a class="button on-mob-btn yellow">Subscribe & Save<span>Auto-delivery <s>$219.97</s> $199.97</span></a><a class="button on-mob-btn blue">ONE-TIME PURCHASE $219.97</span></a></div>' +
        '</div>');

    $('.slider-12-weeks .button.on-mob-btn.yellow').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Subscription with alt checkout',
            'eventAction': 'click on button Subscribe and Save'
        });
        addItemToCart(31272810676339, 1, "3", "Months", "95310");
    });

    $('.slider-12-weeks .button.on-mob-btn.blue').click(function () {
        addItemToCart(32115046056051, 1);
    });



    $('.slider-12-months .button.on-mob-btn.yellow').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp — Subscription with alt checkout',
            'eventAction': 'click on button Subscribe and Save'
        });
        addItemToCart(32190023958643, 1, "12", "Months", "95310");
    });

    $('.slider-12-months .button.on-mob-btn.blue').click(function () {
        addItemToCart(32115046940787, 1);
    });

    let checkActivePack = function() {
        if($('.swatch--1-pack:first').is(':checked')) {
            activeForm.find('.purchase-details').show();
            $('.slider-12-weeks').hide();
            $('.slider-12-months').hide();
        }
        if($('.swatch--3-pack:first').is(':checked')) {
            activeForm.find('.purchase-details').hide();
            $('.slider-12-weeks').show();
            $('.slider-12-months').hide();
        }
        if($('.swatch--12-pack:first').is(':checked')) {
            activeForm.find('.purchase-details').hide();
            $('.slider-12-weeks').hide();
            $('.slider-12-months').show();
        }
    };

    checkActivePack();

    activeForm.find('.swatch > input').change(checkActivePack);
});



