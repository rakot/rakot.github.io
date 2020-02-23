try {
    hj('trigger', 'credit-offer');
}
catch (e) { }

var el = document.createElement('script');
el.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
el.async = true;
el.addEventListener('load', function() {
    jQuery.noConflict();
    jQuery(function () {
        var last_pathname  = '';
        var is_pathname_changed = false;
        var $ = jQuery;
        var pollForCreditButton = function() {
            if(last_pathname !== location.pathname && last_pathname !== '') {
                is_pathname_changed = true;
            }
            last_pathname = location.pathname;

            if(is_pathname_changed) {
                $('.credit-information .button.experiment-already-started').removeClass('experiment-already-started');
                $('.product-credit-offers-container').remove();
                is_pathname_changed = false;
            }

            if($('.credit-information .button:not(.experiment-already-started)').length && $('.credit-information .content-information a').length) {
                var global_container = $('.page-content-global-container');
                if(!global_container.hasClass('credit-offer-experiment-activated')) {
                    global_container.addClass('credit-offer-experiment-activated')
                }
                if($('.product-buy-container .buy-button-placeholder .wait-button-container').length) {
                    global_container.removeClass('credit-offer-experiment-activated');
                    return;
                }

                $('body').addClass('hide-modal-for-experiment');
                $('.credit-information .button').addClass('experiment-already-started').click();
                $('.page-container').removeClass('blurred');
                if($('.product-credit-offers-container').length) {
                    $('.product-credit-offers-container').remove();
                }
                var credit_offer = $('<div class="product-credit-offers-container"><div class="product-credit-offers-title">Кредитные предложения</div>' +
                    '<div class="product-credit-offers">' +
                    '<div class="product-credit-offers-list"><div class="product-credit-offers-first"></div><div class="product-credit-offers-caption">при оплате частями или покупке в рассрочку.</div><div class="product-credit-offers-bank-list"></div></div>' +
                    '<div class="product-credit-offers-buttons">' +
                    '<div class="button"><div class="buy-button-placeholder"><div class="buy-button sp valign-wrapper false"><span>Купить в кредит</span></div></div></div>' +
                    '<div class="button get-details">Узнать детали</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');

                credit_offer.find('.product-credit-offers-buttons .button').click(function () {
                    $('.credit-information .button').click();
                });

                var replace_symbol = $('.product-buy-container .left-part .content-information .content-row div.price-difference .title').html();
                if(replace_symbol) {
                    replace_symbol = replace_symbol.replace(':', '&nbsp;-&nbsp;');
                    $('.product-buy-container .left-part .content-information .content-row div.price-difference .title').html(replace_symbol);
                }

                var pollForPrices = function () {
                    if($('.rodal .credit-price').html()) {
                        var offer = $('<div></div>');
                        var offer_price = $('.credit-information .content-information a').text().split(' ');
                        offer.append('<div class="text from-caption">От</div>').append($('<div class="value"></div>').text(offer_price[0])).append('<div class="text currency">грн. в месяц</div>');
                        // console.log(offer_price);


                        $('.rodal .credit-suggestion').each(function () {
                            var self = $(this);
                            if(!self.hasClass('bold')) {
                                self.find('.image-logo').clone().html();
                                self.find('.credit-information .title-text').text();
                                credit_offer.find('.product-credit-offers-bank-list').append($('<div class="bank-logo"></div>').append(self.find('.image-logo').clone().html()).append($('<div class="popup"></div>').html(self.find('.credit-information .title-text').text())));
                            }
                        });

                        credit_offer.find('.product-credit-offers-first').append(offer.html());

                        $('.product-buy-container').after(credit_offer);
                        $('.page-container').addClass('blurred');
                        $('body').removeClass('hide-modal-for-experiment');
                        $('.rodal-close').click();
                    } else {
                        // console.log('credit window poll');
                        setTimeout(pollForPrices, 100);
                    }
                };
                pollForPrices();
            } else {
                // console.log('credit button poll');
            }
        };
        setInterval(pollForCreditButton, 300);
    });
});
document.head.appendChild(el);