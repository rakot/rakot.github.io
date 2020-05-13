$(function () {
    hj('trigger', 'pdp_on_homepage');
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - PDP on Homepage',
        'eventAction': 'loaded'
    });

    var container = $('#s-d1e202a5-0760-4602-81b0-89b3f970e472');
    var pdpBlock = $('<div class="experiment-pdp-block section">' +
        '<div class="experiment-carousel"></div>' +
        '<div class="experiment-buy-block">' +
            '<div class="buy-button-mobile">' +
                '<span class="first-line">Get 1 pack for $19.97</span>' +
                '<span class="second-line">28 strips / pack</span>' +
            '</div>' +
        '</div>' +
        '</div>');

    pdpBlock.find('.experiment-carousel').append('<div class="product-gallery product-gallery--bottom-thumbnails">\n' +
        '    <div class="product-gallery__main_experiment">\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="0"\n' +
        '                    data-image-id="2118043205675"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="1"\n' +
        '                    data-image-id="7070998724651"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="2"\n' +
        '                    data-image-id="7070998364203"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="3"\n' +
        '                    data-image-id="7070998429739"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="4"\n' +
        '                    data-image-id="7070998528043"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="5"\n' +
        '                    data-image-id="7070998560811"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="6"\n' +
        '                    data-image-id="7070998462507"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="7"\n' +
        '                    data-image-id="7070998626347"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="8"\n' +
        '                    data-image-id="7070998659115"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="9"\n' +
        '                    data-image-id="7070998298667"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_50x.jpg?v=1586442873"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="10"\n' +
        '                    data-image-id="2118043107371"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_2000x.jpg?v=1586442873"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_200x.jpg?v=1586442873 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_400x.jpg?v=1586442873 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_600x.jpg?v=1586442873 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_800x.jpg?v=1586442873 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_1200x.jpg?v=1586442873 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_2000x.jpg?v=1586442873 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '        <div class="product-gallery__image">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_50x.jpg?v=1567795979"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="11"\n' +
        '                    data-image-id="2118043369515"\n' +
        '                    data-sizes="auto"\n' +
        '                    data-src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_2000x.jpg?v=1567795979"\n' +
        '                    srcset="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_200x.jpg?v=1567795979 200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_400x.jpg?v=1567795979 400w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_600x.jpg?v=1567795979 600w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_800x.jpg?v=1567795979 800w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_1200x.jpg?v=1567795979 1200w,\n' +
        '                            //cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_2000x.jpg?v=1567795979 2000w"\n' +
        '            />\n' +
        '        </div>\n' +
        '    </div>\n' +
        '\n' +
        '    <div class="product-gallery__thumbnails product-gallery__thumbnails--bottom-thumbnails is-slide-nav--true">\n' +
        '        <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">\n' +
        '            <img src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-1_400x.jpg?v=1586442873"\n' +
        '                 alt="SomniFix Mouth Strips" data-index="0" data-image-id="2118043205675"\n' +
        '                 data-featured-image="2118043205675"/>\n' +
        '        </div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Promotes-Nose-Breathing-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="1"\n' +
        '                data-image-id="7070998724651"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-Release-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="2"\n' +
        '                data-image-id="7070998364203"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Easy-to-Apply-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="3"\n' +
        '                data-image-id="7070998429739"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Excellent-for-CPAP-Users-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="4"\n' +
        '                data-image-id="7070998528043"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/No-Sticky-Residue-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="5"\n' +
        '                data-image-id="7070998560811"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Environmentally-Friendly-Material-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="6"\n' +
        '                data-image-id="7070998462507"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Nose-Breathing-is-Better-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="7"\n' +
        '                data-image-id="7070998626347"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Perfect-for-Travel-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="8"\n' +
        '                data-image-id="7070998659115"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/Do-Not-Use-web_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="9"\n' +
        '                data-image-id="7070998298667"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column"\n' +
        '             data-title="SomniFix Mouth Strips"><img\n' +
        '                src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-0_400x.jpg?v=1586442873"\n' +
        '                alt="SomniFix Mouth Strips"\n' +
        '                data-index="10"\n' +
        '                data-image-id="2118043107371"\n' +
        '                data-featured-image="2118043205675"\n' +
        '        /></div>\n' +
        '        <div class="product-gallery__thumbnail one-fifth column" data-title="SomniFix Mouth Strips">\n' +
        '            <img\n' +
        '                    src="//cdn.shopify.com/s/files/1/2572/8006/products/product-image-2_400x.jpg?v=1567795979"\n' +
        '                    alt="SomniFix Mouth Strips"\n' +
        '                    data-index="11"\n' +
        '                    data-image-id="2118043369515"\n' +
        '                    data-featured-image="2118043205675"\n' +
        '            /></div>\n' +
        '    </div>\n' +
        '</div>');

    var enableCarousel = function(){
        var $el = $('.experiment-carousel .product-gallery__main_experiment');
        var $thumbnailProductGallery = $el.parents('.product-gallery').find('.product-gallery__thumbnails');
        $el.flickity({
            wrapAround: true
        });

        $thumbnailProductGallery.flickity({
            wrapAround: true,
            asNavFor: $el[0]
        });

        setTimeout(function () {
            $el.flickity('resize');
            $thumbnailProductGallery.flickity('resize');
        }, 500);
        $(window).on('load', function () {
            $el.flickity('resize');
            $thumbnailProductGallery.flickity('resize');
        });
    };

    container.after(pdpBlock);

    $(function () {
        enableCarousel();
    });


    $('.experiment-pdp-block .buy-button-mobile').click(function () {
        var variant = 6709349548075;
        var qty = 1;

        $.post('/cart/add.js',{
            id: variant,
            quantity: qty
        }, function () {
            window.location.href = 'https://somnifix.com/checkout';
        });

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - PDP on Homepage',
            'eventAction': 'Click on Buy now'
        });
    });

    $(document).on('click','.flickity-prev-next-button', function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - PDP on Homepage',
            'eventAction': 'Click on slider'
        });
    });

});