Backbone.$(function () {
    var $ = Backbone.$;
    var wrapper = $('.top-button-wrapper');

    wrapper.prepend('<div class="live-chat-floating-duplicate-button">Live chat</div>');
    $('.live-chat-floating-duplicate-button').click(function (e) {
        e.stopImmediatePropagation();
        $('.cmp-livechat-online').click();
        return false;
    });

    setInterval(function () {
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