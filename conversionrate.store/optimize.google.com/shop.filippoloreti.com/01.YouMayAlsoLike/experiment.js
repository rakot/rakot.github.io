$(function () {
    let top_sellers = {
        '/mens-watches/products/ascari-two-tone-gold-steel-link?variant=22619994882133': ['/accessories/products/brown-italian-leather-strap-with-alligator-pattern-florence?variant=21261996589141', '/accessories/products/stainless-steel-black-mesh-bracelet?variant=12594184912949', '/accessories/products/black-vintage-italian-leather-strap'],
        '/mens-watches/products/okeanos-green-steel-link?variant=22077049045077': ['/accessories/products/stainless-steel-mesh-bracelet?variant=12594134417461','/accessories/products/light-grey-vintage-italian-leather-strap','/accessories/products/https-yourstore-myshopify-com-products-green-italian-leather-strap'],
        '/mens-watches/products/ascari-black-steel-link?variant=22235605827669': ['/accessories/products/black-vintage-italian-leather-strap','/accessories/products/stainless-steel-black-mesh-bracelet?variant=12594184912949','/accessories/products/sand-grey-suede-italian-leather-strap?variant=12462357807157'],
        '/mens-watches/products/ascari-indigo-rose-gold-rubber?variant=22619762327637': ['/accessories/products/stainless-steel-rose-gold-mesh-bracelet?variant=31884126715989','/accessories/products/blue-italian-leather-strap-with-alligator-pattern-florence?variant=21261995933781','/accessories/products/essence-blue-leather-strap-1'],
        '/mens-watches/products/odyssey-steel-link?variant=31699896500309': ['/accessories/products/https-yourstore-myshopify-com-products-classic-grey-italian-leather-strap','/accessories/products/black-italian-leather-strap-with-alligator-pattern','/accessories/products/https-yourstore-myshopify-com-products-grey-italian-leather-strap-with-alligator-pattern-florence'],
        '/mens-watches/products/ascari-grand-prix-gp-1952?variant=31516824928341': ['/accessories/products/stainless-steel-rose-gold-mesh-bracelet?variant=31884126715989','/accessories/products/brown-oily-italian-leather-strap','/accessories/products/black-italian-leather-strap-with-alligator-pattern'],
        '/mens-watches/products/venice-moonphase-black-gold-mesh?variant=7759681454133': ['/accessories/products/stainless-steel-gold-mesh-bracelet','/accessories/products/black-italian-leather-strap-with-alligator-pattern?variant=21261993017429','/accessories/products/black-vintage-italian-leather-strap?variant=22185251962965'],
        '/mens-watches/products/ascari-tuscany-rubber?variant=22619920990293': ['/accessories/products/stainless-steel-mesh-bracelet?variant=12594134417461','/accessories/products/classic-black-italian-leather-strap','/accessories/products/black-italian-leather-strap-with-alligator-pattern-florence?variant=22185728016469'],
        '/mens-watches/products/venice-moonphase-silver-mesh?variant=7759541862453': ['/accessories/products/black-vintage-italian-leather-strap','/accessories/products/classic-brown-italian-leather-strap?variant=21625681707093','/accessories/products/burgundy-italian-leather-strap-with-alligator-pattern']
    };

    let static_data = {
        '/accessories/products/brown-italian-leather-strap-with-alligator-pattern-florence?variant=21261996589141': {price:'59.0', title:'Brown Italian Leather Strap With Alligator Pattern Florence', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather028_1200x1920px_G_180x.jpg?v=1569103309'},
        '/accessories/products/stainless-steel-black-mesh-bracelet?variant=12594184912949': {price:'69.0', title:'Stainless Steel Milanese Black Mesh Bracelet', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/MeshStrap_Front_Black_Comp_001_180x.jpg?v=1569123954'},
        '/accessories/products/black-vintage-italian-leather-strap': {price:'59.0', title:'Black Vintage Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather013_1200x1920px_S_180x.jpg?v=1569158401'},

        '/accessories/products/stainless-steel-mesh-bracelet?variant=12594134417461': {price:'69.0', title:'Stainless Steel Milanese Mesh Bracelet', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/MeshStrap_Front_Silver_Comp_001_180x.jpg?v=1569123953'},
        '/accessories/products/light-grey-vintage-italian-leather-strap': {price:'59.0', title:'Light Grey Vintage Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather015_1200x1920px_G_180x.jpg?v=1569075907'},
        '/accessories/products/https-yourstore-myshopify-com-products-green-italian-leather-strap': {price:'59.0', title:'Green Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather012_1200x1920px_G_180x.jpg?v=1569075913'},

        '/accessories/products/black-vintage-italian-leather-strap?variant=22185251962965': {price:'59.0', title:'Black Vintage Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather013_1200x1920px_S_180x.jpg?v=1569158401'},
        '/accessories/products/sand-grey-suede-italian-leather-strap?variant=12462357807157': {price:'59.0', title:'Sand Grey Suede Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather022_1200x1920px_G_180x.jpg?v=1569075907'},

        '/accessories/products/stainless-steel-rose-gold-mesh-bracelet?variant=31884126715989': {price:'89.0', title:'Stainless Steel Milanese Rose Gold Mesh Bracelet', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/MeshStrap_Front_RoseGold_Comp_001_180x.jpg?v=1569123954'},
        '/accessories/products/blue-italian-leather-strap-with-alligator-pattern-florence?variant=21261995933781': {price:'44.0', title:'Blue Italian Leather Strap With Alligator Pattern Florence', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather023_1200x1920px_B_180x.jpg?v=1569103309'},
        '/accessories/products/essence-blue-leather-strap-1': {price:'59.0', title:'Essence Blue Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/LeatherSeamlessStrap_18mm_Front_Leather_Blue_RG_180x.jpg?v=1569157892'},

        '/accessories/products/https-yourstore-myshopify-com-products-classic-grey-italian-leather-strap': {price:'59.0', title:'Classic Grey Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather006_1200x1920px_S_180x.jpg?v=1569075914'},
        '/accessories/products/black-italian-leather-strap-with-alligator-pattern': {price:'59.0', title:'Black Italian Leather Strap With Alligator Pattern', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather021_1200x1920px_RG_180x.jpg?v=1569144451'},
        '/accessories/products/https-yourstore-myshopify-com-products-grey-italian-leather-strap-with-alligator-pattern-florence': {price:'44.0', title:'Grey Italian Leather Strap With Alligator Pattern Florence', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather024_1200x1920px_S_180x.jpg?v=1569075914'},

        '/accessories/products/brown-oily-italian-leather-strap': {price:'59.0', title:'Brown Oily Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather004_1200x1920px_B_180x.jpg?v=1569181935'},
        '/accessories/products/stainless-steel-gold-mesh-bracelet': {price:'69.0', title:'Stainless Steel Milanese Gold Mesh Bracelet', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/MeshStrap_Front_Gold_Comp_001_180x.jpg?v=1569123953'},
        '/accessories/products/black-italian-leather-strap-with-alligator-pattern?variant=21261993017429': {price:'59.0', title:'Black Italian Leather Strap With Alligator Pattern', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather021_1200x1920px_RG_180x.jpg?v=1569144451'},

        '/accessories/products/classic-black-italian-leather-strap': {price:'44.0', title:'Classic Black Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather016_1200x1920px_S_180x.jpg?v=1569158404'},
        '/accessories/products/black-italian-leather-strap-with-alligator-pattern-florence?variant=22185728016469': {price:'44.0', title:'Black Italian Leather Strap With Alligator Pattern Florence', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather025_1200x1920px_G_180x.jpg?v=1569158419'},
        '/accessories/products/classic-brown-italian-leather-strap?variant=21625681707093': {price:'59.0', title:'Classic Brown Italian Leather Strap', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/fv3H1HsJTuiKzVYqJvBU_Strap_Leather002_1200x1920px_G_180x.jpg?v=1569126793'},
        '/accessories/products/burgundy-italian-leather-strap-with-alligator-pattern': {price:'95.0', title:'Burgundy Italian Leather Strap With Alligator Pattern', img:'https://cdn.shopify.com/s/files/1/0020/1896/7605/products/Strap_Leather030_1200x1920px_B_180x.jpg?v=1569103309'}
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
            }).attr('href','/collections'+href).append(
                $('<img class="cart-popup__carousel_slide_image">').attr('src', page.img)
            ).append(
                $('<div class="cart-popup__carousel_slide_title"></div>').html(page.title)
            ).append(
                $('<div class="cart-popup__carousel_slide_price">').html($('<span class="money"></span>').text('$'+page.price))
            )
        )
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

        console.log(collection);
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