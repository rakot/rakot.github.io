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

    $('#template-product .swatch--1-pack').next().find('.on-title').before('<div class="on-title-details">28 strips — 28 days</div>')
    $('#template-product .swatch--3-pack').next().find('.on-title').before('<div class="on-title-details">84 strips — 84 days</div>')
    $('#template-product .swatch--3-pack-auto-ship').next().find('.on-title').before('<div class="on-title-details">84 strips — 84 days</div>')

    $('h1:contains("How and why SomniFix works")').parents('.shogun-root').prepend('<div class="recomended-by-medical-professional container">' +
        '<h3>Recommended by Medical Professionals</h3>' +
        '<div class="recomended-by-medical-professional-wrapper">' +
        '<div class="recomended-by-medical-professional-photo"><img src="https://cdn.shopify.com/s/files/1/2572/8006/files/dr-mark-arnim-burhenne-profile-7fe1664f_350x.png?v=1600876831"></div>' +
        '<div class="recomended-by-medical-professional-info">' +
        '<div class="recomended-by-medical-professional-title">Family &amp; Sleep Medicine Dantist, Creator of AskTheDentist.com</div>' +
        '<div class="recomended-by-medical-professional-name">Mark Burhenne, DDS</div>' +
        '<div class="recomended-by-medical-professional-text">"The health benefits of nose breathing are undeniable. ' +
        'Mouth taping is a great way of making sure that you breathe through your nose while you sleep. ' +
        'By taping your mouth shut, you avoid getting dry mouth, shich causes a lot of dental issues down the line. ' +
        'Having a dry mouth can cause more cavities, gum disease, and bad breath."</div>' +
        '</div>' +
        '</div>' +
        '</div>')
});



