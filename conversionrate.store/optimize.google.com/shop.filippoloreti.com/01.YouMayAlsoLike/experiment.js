$(function () {

    let top_sellers = {
        '/mens-watches/products/ascari-two-tone-gold-steel-link?variant=22619994882133': ['/products/brown-italian-leather-strap', '/collections/accessories/products/blue-alligator-python-pattern-leather-strap?variant=31700606517333', '/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap'],
        '/mens-watches/products/okeanos-green-steel-link?variant=22077049045077': ['/products/brown-italian-leather-strap','/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap', '/products/blue-italian-leather-strap-with-alligator-pattern'],
        '/mens-watches/products/ascari-black-steel-link?variant=22235605827669': ['/products/brown-italian-leather-strap', '/collections/accessories/products/blue-alligator-python-pattern-leather-strap?variant=31700606517333','/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap'],
        '/mens-watches/products/ascari-indigo-rose-gold-rubber?variant=22619762327637': ['/products/brown-italian-leather-strap', '/products/blue-italian-leather-strap-with-alligator-pattern', '/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap'],
        '/mens-watches/products/odyssey-steel-link?variant=31699896500309': ['/products/brown-italian-leather-strap', '/collections/accessories/products/blue-alligator-python-pattern-leather-strap?variant=31700606517333', '/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap'],
        '/mens-watches/products/ascari-grand-prix-gp-1952?variant=31516824928341': ['/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap', '/collections/accessories/products/blue-alligator-python-pattern-leather-strap?variant=31700606517333', '/products/brown-italian-leather-strap'],
        '/mens-watches/products/venice-moonphase-black-gold-mesh?variant=7759681454133': ['/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap', '/collections/accessories/products/blue-alligator-python-pattern-leather-strap?variant=31700606517333', '/products/brown-italian-leather-strap'],
        '/mens-watches/products/ascari-tuscany-rubber?variant=22619920990293': ['/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap', '/products/burgundy-italian-leather-strap-with-alligator-pattern', '/products/brown-italian-leather-strap'],
        '/mens-watches/products/venice-moonphase-silver-mesh?variant=7759541862453': ['/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap', '/products/burgundy-italian-leather-strap-with-alligator-pattern', '/products/brown-italian-leather-strap']
    };



    let static_data = {
        '/products/brown-italian-leather-strap': {price:'44.0', title:'Brown Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather008_1200x1920px_RG_180x.jpg?v=1569141784', product: {'Size': 'M', 'Pin color': 'Rose Gold','id': '21261996359765'}},
        '/collections/accessories/products/blue-alligator-python-pattern-leather-strap?variant=31700606517333': {price:'44.0', title:'Blue Alligator Python Pattern Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_BluePython_Gold_180x.jpg?v=1579700848', product: {'Color': 'Gold', 'id': '31700606517333'}},
        '/products/https-yourstore-myshopify-com-products-light-suede-italian-leather-strap': {price:'59.0', title:'Light Suede Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather014_1200x1920px_G_180x.jpg?v=1569075906', product: {'Size': 'M', 'Pin color': 'Gold', 'id': '12462356135989'}},
        '/products/blue-italian-leather-strap-with-alligator-pattern': {price:'59.0', title:'Blue Italian Leather Strap With Alligator Pattern', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather009_1200x1920px_S_180x.jpg?v=1569103308', product: {'Size': 'M', 'Pin color': 'Silver', 'id': '21261993377877'}},
        '/products/burgundy-italian-leather-strap-with-alligator-pattern?variant=22185537634389': {price:'95.0', title:'Burgundy Italian Leather Strap With Alligator Pattern', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather030_1200x1920px_B_180x.jpg?v=1569103309', product: {'Size': 'M', 'Pin color': 'Black', 'id': '22185537634389'}}
    };

    let findCollectionByHref = function(href) {
        for(var i in top_sellers) {
            if(i.indexOf(href) !== -1) {
                return top_sellers[i];
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
            }).attr('href', href).append(
                $('<img class="cart-popup__carousel_slide_image">').attr('src', page.img)
            ).append(
                $('<div class="cart-popup__carousel_slide_title"></div>').html(page.title)
            ).append(
                $('<div class="cart-popup__carousel_slide_price">').html($('<span class="money"></span>').text('$'+page.price))
            ).append(
                $('<div class="cart-popup__carousel_slide_add_button">Add</div>').click(function (e) {
                    e.stopImmediatePropagation();
                    let product_data = page.product;
                    product_data.form_type = 'product';
                    product_data.utf8 = '✓';
                    addProduct(product_data);
                    return false;
                })
            )
        )
    };

    let addProduct = function(id) {
        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: id,
            dataType: 'json'
        }).done(function () {
            $('body').on('added.ajaxProduct');
        });
    };

    let cartPoller = setInterval(function () {
        if($('.drawer__cart .carousel-wrapper').length) {
            return true;
        }
        let collection = [];
        $('.ajaxcart__row>.grid>.grid__item>a').each(function () {
            let self = $(this);
            let data = findCollectionByHref(self.attr('href'));
            if(data) {
                collection = collection.concat(data);
            }
        });

        if(collection) {
            $('.grid--full.cart-subtotal').after('<div class="carousel-wrapper"><h4>You may also like:</h4><div class="show-more-button">Show More</div><div class="carousel-wrapper-content"></div></div>');
            let slickContainer = $('.drawer__cart .carousel-wrapper-content');
            collection.forEach(function (item) {
                slickContainer.append(buildItemFromPage(static_data[item], item));
            });

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
                    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
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
                        }
                        isSliding = false;
                    });
                }
            }, 100);
        }



    }, 100);
});