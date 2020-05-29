Backbone.$(function () {
    var $ = Backbone.$;
    var setCookie = function(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";path=/";
    };

    var getCookie = function(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    setInterval(function () {
        $('.button-add-to-favorites:not(.button-add-to-favorites-extra-event)').addClass('button-add-to-favorites-extra-event').on('click',function () {
            $('.fav-panel__tab-icon').addClass('extra-notify-icon');

            if($('.fav-panel__wrapper:visible').length === 0) {
                var favorites_extra_event = getCookie('favorites-extra-event');
                if(favorites_extra_event !== 'done') {
                    $('.fav-panel__tab').trigger('click');
                    setCookie('favorites-extra-event','done');
                }
            }
        });
    }, 500);

    setInterval(function () {
        let countImages = $('.fav-panel__content .fav-panel__container:not(.extra-clicking-action-done) .file-box .file-box__link:visible').length;
        if(countImages) {
            if($('.select-all._action .checkbox-box-partial').length === 1) {
                $('.select-all._action .checkbox-box-partial').removeClass('checkbox-box-partial');
                $('.select-all._action input:checked').removeAttr('checked');
            }
            if($('.select-all._action input:checked').length === 0) {
                let downloadAllButton = $('<a class="download-all-images" href="/subscribe.html">Download '+countImages+' Images</a>');
                $('.fav-panel__content .fav-panel__container:not(.extra-clicking-action-done)').addClass('extra-clicking-action-done').append(downloadAllButton);
                $('.select-all._action > label').trigger('click');
            }
        }
    }, 100);
});