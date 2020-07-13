$(function () {
    let map = {
        '/collections/mens-watches/products/ascari-two-tone-gold-steel-link?variant=22619994882133': ['/collections/mens-rings/products/round-signet-gold?variant=22538107355221','/collections/mens-rings/products/narrow-split-gold?variant=22537938141269','/collections/mens-rings/products/narrow-twist-gold?variant=22537739534421'],
        '/collections/mens-watches/products/okeanos-green-steel-link?variant=22077049045077': ['/collections/mens-rings/products/round-signet?variant=22537990996053','/collections/mens-rings/products/narrow-split?variant=22537882533973','/collections/mens-rings/products/narrow-twist?variant=22537639460949'],
        '/collections/mens-watches/products/ascari-black-steel-link?variant=22235605827669': ['/collections/mens-rings/products/round-signet?variant=22537990996053', '/collections/mens-rings/products/narrow-split?variant=22537882533973', '/collections/mens-rings/products/narrow-twist?variant=22537639460949'],
        '/collections/mens-watches/products/ascari-indigo-rose-gold-rubber?variant=22619762327637': ['/collections/mens-rings/products/round-signet-gold?variant=22538107355221', '/collections/mens-rings/products/narrow-split-gold?variant=22537938141269','/collections/mens-rings/products/narrow-twist-gold?variant=22537739534421'],
        '/collections/mens-watches/products/odyssey-steel-link?variant=31699896500309': ['/collections/mens-rings/products/round-signet?variant=22537990996053','/collections/mens-rings/products/narrow-split?variant=22537882533973','/collections/mens-rings/products/narrow-twist?variant=22537639460949'],
        '/collections/mens-watches/products/ascari-grand-prix-gp-1952?variant=31516824928341': ['/collections/mens-rings/products/round-signet-gold?variant=22538107355221', '/collections/mens-rings/products/narrow-split-gold?variant=22537938141269', '/collections/mens-rings/products/narrow-twist-gold?variant=22537739534421'],
        '/collections/mens-watches/products/venice-moonphase-black-gold-mesh?variant=7759681454133': ['/collections/mens-rings/products/round-signet-gold?variant=22538107355221', '/collections/mens-rings/products/narrow-split-gold?variant=22537938141269', '/collections/mens-rings/products/narrow-twist-gold?variant=22537739534421'],
        '/collections/mens-watches/products/ascari-tuscany-rubber?variant=22619920990293': ['/collections/mens-rings/products/round-signet?variant=22537990996053', '/collections/mens-rings/products/narrow-split?variant=22537882533973', '/collections/mens-rings/products/narrow-twist?variant=22537639460949'],
        '/collections/mens-watches/products/venice-moonphase-silver-mesh?variant=7759541862453': ['/collections/mens-rings/products/round-signet?variant=22537990996053', '/collections/mens-rings/products/narrow-split?variant=22537882533973', '/collections/mens-rings/products/narrow-twist?variant=22537639460949']
    };

    let loadCarouselItem = function(item) {
        return new Promise((resolve, reject) => {
            $.get(item, function (data) {
                resolve(data);
            });
        });
    };

    let findCollectionByHref = function(href) {
        for(var i in map) {
            if(i.indexOf(href) !== -1) {
                return map[i];
            }
        }
        return false;
    };

    let isSliding = false;
    let buildItemFromPage = function(page, href) {
        return $('<div class="cart-popup__carousel_slide"></div>').append(
            $('<a>').click(function () {
                if(!isSliding) {
                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'event-to-ga',
                        'eventCategory': 'Exp - Slide-In Cart',
                        'eventAction': 'click',
                        'eventLabel': 'product'
                    });
                }
            }).attr('href',href).append(
                $('<img class="cart-popup__carousel_slide_image">').attr('src',page.find('meta[itemprop="image"]').attr('content'))
            ).append(
                $('<div class="cart-popup__carousel_slide_title"></div>').html(page.find('.product-single__title').text())
            ).append(
                $('<div class="cart-popup__carousel_slide_price">').html(page.find('#ProductPrice-product-template, #ProductPrice-product-sections-template').html())
            )
        )
    };

    let initCarousel = false;
    let cartPoller = setInterval(function () {
        $('.ajaxcart__row>.grid>.grid__item>a').each(function () {
            if(initCarousel) {
                return true;
            }
            let self = $(this);
            let collection = findCollectionByHref(self.attr('href'));
            if(collection) {
                initCarousel = true;
                clearInterval(cartPoller);
                Promise.all([loadCarouselItem(collection[0]), loadCarouselItem(collection[1]), loadCarouselItem(collection[2])]).then((values) => {
                    let page1 = $(values[0].replace(/<img(?!.*?\scaptcha)[^>]*>/g,""));
                    let page2 = $(values[1].replace(/<img(?!.*?\scaptcha)[^>]*>/g,""));
                    let page3 = $(values[2].replace(/<img(?!.*?\scaptcha)[^>]*>/g,""));
                    $('.drawer__cart .drawer__footer').prepend('<div class="carousel-wrapper"><div class="show-more-button">Show More</div><div class="carousel-wrapper-content"></div></div>');
                    let slickContainer = $('.drawer__cart .carousel-wrapper-content');
                    slickContainer.append(buildItemFromPage(page1, collection[0]));
                    slickContainer.append(buildItemFromPage(page2, collection[1]));
                    slickContainer.append(buildItemFromPage(page3, collection[2]));
                    $('.drawer__cart .carousel-wrapper .show-more-button').click(function () {
                        window.dataLayer = window.dataLayer || [];
                        dataLayer.push({
                            'event': 'event-to-ga',
                            'eventCategory': 'Exp - Slide-In Cart',
                            'eventAction': 'click',
                            'eventLabel': 'Show more'
                        });
                    });

                    let slickPoller = setInterval(function () {
                        if(slickContainer.is(':visible')) {
                            clearInterval(slickPoller);
                            hj('trigger', 'slide-in_cart');
                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'event-to-ga',
                                'eventCategory': 'Exp - Slide-In Cart',
                                'eventAction': 'loaded'
                            });
                            slickContainer.slick({
                                infinite: true,
                                slidesToShow: 2,
                                slidesToScroll: 1,
                                adaptiveHeight: true,
                                nextArrow: '.drawer__cart .show-more-button'
                            });
                            $(document).resize();
                            slickContainer.on('beforeChange', function() {
                                isSliding = true;
                            });
                            let slide_num = -1;
                            slickContainer.on('afterChange', function(slick, slide) {
                                if(slide.currentSlide > slide_num) {
                                    slide_num = slide.currentSlide;
                                    window.dataLayer = window.dataLayer || [];
                                    dataLayer.push({
                                        'event': 'event-to-ga',
                                        'eventCategory': 'Exp - Slide-In Cart',
                                        'eventAction': 'scroll',
                                        'eventLabel': 'product',
                                        'eventValue': slide_num
                                    });
                                    console.log(slide_num);
                                }
                                isSliding = false;
                            });
                        }
                    }, 100);
                });
            }
        });
    }, 100);
});