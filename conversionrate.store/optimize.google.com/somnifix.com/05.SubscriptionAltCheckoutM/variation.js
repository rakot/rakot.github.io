$(function () {
    $('.on-mobile-btn-wrapper').html('<a class="button on-mob-btn yellow">Subscribe & Save<span>Auto-delivery <s>$55.97</s> $49.97</span></a>' +
        '<a class="button on-mob-btn blue">ONE-TIME PURCHASE $55.97</span></a>');

    $('.on-mobile-btn-wrapper a.on-mob-btn.yellow').click(function () {
        addItemToCart(31272810676339, 1, "3", "Months", "95310");
    });

    $('.on-mobile-btn-wrapper a.on-mob-btn.blue').click(function () {
        $('#mobile-header .on-button-get-sominifix-open').click();
        // addItemToCart(32115046056051, 1);
    });

    let activeForm = $('.shopify-product-form:first');

    activeForm.find('.purchase-details ').after('<div class="experiment-buttons">' +
        '<div class="slider-12-weeks" style="display: none;"><a class="button on-mob-btn yellow">Subscribe & Save<span>Auto-delivery <s>$55.97</s> $49.97</span></a><a class="button on-mob-btn blue">ONE-TIME PURCHASE $55.97</span></a></div>' +
        '<div class="slider-12-months" style="display: none;"><a class="button on-mob-btn yellow">Subscribe & Save<span>Auto-delivery <s>$219.97</s> $199.97</span></a><a class="button on-mob-btn blue">ONE-TIME PURCHASE $219.97</span></a></div>' +
        '</div>');

    $('.slider-12-weeks .button.on-mob-btn.yellow').click(function () {
        addItemToCart(31272810676339, 1, "3", "Months", "95310");
    });

    $('.slider-12-weeks .button.on-mob-btn.blue').click(function () {
        addItemToCart(32115046056051, 1);
    });



    $('.slider-12-months .button.on-mob-btn.yellow').click(function () {
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



