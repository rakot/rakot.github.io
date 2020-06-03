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

    hj('trigger', 'new_add_to_favorites_flow');
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'gaEv',
        'eventCategory': 'Exp - optimize add to favourites flow',
        'eventAction': 'activated'
    });


    setInterval(function () {
        $('.button-add-to-favorites:not(.button-add-to-favorites-extra-event)').addClass('button-add-to-favorites-extra-event').on('click',function () {
            $('.fav-panel__tab-icon').addClass('extra-notify-icon');

            if($('.fav-panel__wrapper:visible').length === 0 && Backbone.$('.not-auth-box__btn').length === 0) {
                var favorites_extra_event = getCookie('favorites-extra-event');
                if(favorites_extra_event !== 'done') {
                    $('.fav-panel__tab').trigger('click');
                    setCookie('favorites-extra-event','done');
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'gaEv',
                        'eventCategory': 'Exp - optimize add to favourites flow',
                        'eventAction': 'Favourites menu activated'
                    });
                    hj('trigger', 'favorites_menu_activated');
                }
            }
        });
    }, 500);

    setInterval(function () {
        let countImages = $('.fav-panel__content .fav-list:not(.extra-clicking-action-done) .file-box__link:visible').length;
        if(countImages && $('.download-all-images').length === 0) {
            Backbone.$('.fav-panel__content .fav-list:not(.extra-clicking-action-done)  ._favorite-file').each(function () {
                let self = Backbone.$(this);
                self.find('.icon-checkbox-l:not(.checked)').trigger('click');
            });

            let downloadAllButton = $('<a class="download-all-images" href="/subscribe.html">Download '+countImages+' Images</a>');
            downloadAllButton.click(function () {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'gaEv',
                    'eventCategory': 'Exp - optimize add to favourites flow',
                    'eventAction': 'Click to download images in the favourites menu'
                });
            });
            $('.fav-panel__content .fav-list:not(.extra-clicking-action-done)').addClass('extra-clicking-action-done');
            $('.fav-panel__content .fav-panel__container').append(downloadAllButton);
            if(countImages === 0) {
                downloadAllButton.hide();
            }
        }

        let selectedImages = $('.fav-panel__content .fav-list  ._favorite-file ._select.checked').length;
        let downloadAllButton = $('.fav-panel__content .download-all-images');
        downloadAllButton.text('Download '+selectedImages+' Images');
        if(selectedImages === 0) {
            downloadAllButton.hide();
        } else {
            downloadAllButton.show();
        }
    }, 100);
});