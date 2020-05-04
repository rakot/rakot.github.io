hj('trigger', 'exp-sticky-chat');
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'gaEv',
    'eventCategory': 'Exp - sticky chat',
    'eventAction': 'activated'
});

Backbone.$(function () {
    var $ = Backbone.$;

    setInterval(function () {
        if($('section.cookie-bar:visible').length) {
            if($('body.experiment-cookie-bar-visible').length === 0) {
                $('body').addClass('experiment-cookie-bar-visible');
            }
        } else {
            if($('body.experiment-cookie-bar-visible').length) {
                $('body').removeClass('experiment-cookie-bar-visible');
            }
        }

        if($('.top-button-wrapper').length && $('.top-button-wrapper .live-chat-floating-duplicate-button').length === 0) {
            var wrapper = $('.top-button-wrapper');
            wrapper.prepend('<div class="live-chat-floating-duplicate-button">Live chat</div>');
            $('.live-chat-floating-duplicate-button').click(function (e) {
                e.stopImmediatePropagation();

                // On product page
                if($('.file-view-page_image-huge').length) {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'gaEv',
                        'eventCategory': 'Exp - sticky chat',
                        'eventAction': 'Click on chat',
                        'eventLabel': 'PDP'
                    });
                }
                // On listing
                else {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'gaEv',
                        'eventCategory': 'Exp - sticky chat',
                        'eventAction': 'Click on chat',
                        'eventLabel': 'Product listing'
                    });
                }

                $('.cmp-livechat-online').click();
                return false;
            });
        }

        if($('.modal-container:visible').length && $('.modal-container .live-chat-floating-duplicate-button').length === 0) {
            $('.modal-container').append('<div class="live-chat-floating-duplicate-button">Live chat</div>');
            $('.modal-container .live-chat-floating-duplicate-button').click(function (e) {
                e.stopImmediatePropagation();

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'gaEv',
                    'eventCategory': 'Exp - sticky chat',
                    'eventAction': 'Click on chat',
                    'eventLabel': 'Modal PDP'
                });

                $('.cmp-livechat-online').click();
                return false;
            });
        }
    }, 100);
});