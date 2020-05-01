console.log('Floating Experiment Loaded');
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
                $('.cmp-livechat-online').click();
                return false;
            });
        }

        if($('.modal-container:visible').length && $('.modal-container .live-chat-floating-duplicate-button').length === 0) {
            $('.modal-container').append('<div class="live-chat-floating-duplicate-button">Live chat</div>');
            $('.modal-container .live-chat-floating-duplicate-button').click(function (e) {
                e.stopImmediatePropagation();
                $('.cmp-livechat-online').click();
                return false;
            });
        }
    }, 100);
});