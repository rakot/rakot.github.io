$(function () {
    if($('.product-single__meta .add-to-cart').length) {
        window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
        hj('trigger', 'pdp_sticky');
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - NewPDP_sticky',
            'eventAction': 'loaded'
        });

        $('.product-single__meta .add-to-cart').click(function () {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'event-to-ga',
                'eventCategory': 'Exp - NewPDP_sticky',
                'eventAction': 'click',
                'eventLabel': 'Add to Cart'
            });
        });

        var body = $('body');
        var goal25 = false;
        var goal50 = false;
        var goal75 = false;
        var goal100 = false;
        body.prepend('<div class="sticky-progress-bar"><div></div></div>');
        var scrollProgress = function () {
            var height = body.height()-$(window).height();
            var scroll = $(document).scrollTop();
            var percent = Math.round(scroll/height*100);
            if(percent >= 25 && goal25 === false ) {
                goal25 = true;
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - NewPDP_sticky',
                    'eventAction': 'scroll',
                    'eventLabel': '25%'
                });
            }
            if(percent >= 50 && goal50 === false ) {
                goal50 = true;
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - NewPDP_sticky',
                    'eventAction': 'scroll',
                    'eventLabel': '50%'
                });
            }
            if(percent >= 75 && goal75 === false ) {
                goal75 = true;
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - NewPDP_sticky',
                    'eventAction': 'scroll',
                    'eventLabel': '75%'
                });
            }
            if(percent >= 100 && goal100 === false ) {
                goal100 = true;
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - NewPDP_sticky',
                    'eventAction': 'scroll',
                    'eventLabel': '100%'
                });
            }
            $('.sticky-progress-bar div').css('width', percent +'%');
        };
        scrollProgress();
        $(document).scroll(scrollProgress);
    }
});