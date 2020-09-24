$(function () {
    $('#template-product .purchase-details .button--add-to-cart span').text('checkout with credit card');
    $('#template-product .purchase-details .button--add-to-cart').append('<div class="notify-one-step-away"><div class="notify-one-step-away-wrapper">' +
        '<div class="notify-one-step-away-wrapper-green">You are one step away <br> from significantly improving your sleep</div>' +
        '<div class="notify-one-step-away-wrapper-gray">' +
        '<span class="notify-one-step-away-wrapper-flag">Made in USA - top quality</span>' +
        '<span class="notify-one-step-away-wrapper-li">30 day money back guarantee</span>' +
        '<span class="notify-one-step-away-wrapper-li">60,000 of grateful customers</span>' +
        '<span class="notify-one-step-away-wrapper-li">99% customer satisfaction rate</span>' +
        '</div>' +
        '</div></div>');

    $('#template-product .swatch--1-pack').next().find('.on-title').before('<div class="on-title-details">28 strips — 28 days</div>');
    $('#template-product .swatch--3-pack').next().find('.on-title').before('<div class="on-title-details">84 strips — 84 days</div>');
    $('#template-product .swatch--3-pack-auto-ship').next().find('.on-title').before('<div class="on-title-details">84 strips — 84 days</div>');

    let notify_one_step_away = $('.notify-one-step-away');
    let form = $('#template-product .purchase-details').parent();

    $('#template-product  .purchase-details').hover(function () {
        form.addClass('notify-one-step-away-visible');
        notify_one_step_away.removeAttr('style');
    }, function () {
        form.removeClass('notify-one-step-away-visible');
    });

    $('#template-product  .on-payment-wrapper img').hover(function () {
        let self = $(this).parent();
        if(self.hasClass('on-item on-item-1')) {
            notify_one_step_away.css({
                'margin-left': '-'+Math.round(self.width()/2)+'px',
                'bottom': (self.height()*2+60).toString()+'px'
            });
        }
        if(self.hasClass('on-item on-item-2')) {
            notify_one_step_away.css({
                'margin-left': Math.round(self.width()/2)+'px',
                'bottom': (self.height()*2+60).toString()+'px'
            });
        }
        if(self.hasClass('on-item on-item-3')) {
            notify_one_step_away.css({
                'margin-left': '-'+Math.round(self.width()/2)+'px',
                'bottom': (self.height()+50).toString()+'px'
            });
        }
        if(self.hasClass('on-item on-item-4')) {
            notify_one_step_away.css({
                'margin-left': Math.round(self.width()/2)+'px',
                'bottom': (self.height()+50).toString()+'px'
            });
        }
        form.addClass('notify-one-step-away-visible');
    }, function () {
        form.removeClass('notify-one-step-away-visible');
    });

});



