$(function () {
    window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
    hj('trigger', 'pl_top_copy');
    window.dataLayer = window.dataLayer || [];
    dataLayer.push({
        'event': 'event-to-ga',
        'eventCategory': 'Exp - PL_top_copy',
        'eventAction': 'loaded'
    });

    $('#CollectionSection .section-header').after('<div class="section-header-view-more">' +
        '<div class="section-header-view-more-wrapper section-header-view-more-state-collapsed">' +
        '<div class="section-header-view-more-collapsed-mobile">' +
        '<p style="margin: 0;">Want to own a luxury watch without paying the high price tag? On average, a luxury watch is sold at a price from 8 to 16 times higher...</p>' +
        '</div>' +
        '<div class="section-header-view-more-collapsed">' +
        '<p style="margin: 0;">Want to own a luxury watch without paying the high price tag? On average, a luxury watch is sold at a price from 8 to 16 times higher than it costs to make it. These markups cover the costs for wholesalers, distributors, retailers, and expensive advertising campaigns. We started Filippo Loreti...</p>' +
        '</div>' +
        '<div class="section-header-view-more-normal">' +
        '<p>Want to own a luxury watch without paying the high price tag?On average, a luxury watch is sold at a price from 8 to 16 times higher than it costs to make it. These markups cover the costs for wholesalers, distributors, retailers, and expensive advertising campaigns.  <br> We started Filippo Loreti because like lots of guys out there we were frustrated with steep and unjustified prices of high-quality watches.</p>' +
        '<p style="margin: 0;">We do things differently. By using a disruptive, direct-to-consumer model we cut out distributors, wholesalers, and retail stores.  This way, by avoiding all the middlemen we can offer you a limited edition luxury watch for less than $200.</p>'+
        '</div>' +
        '</div>' +
        '<div class="section-header-view-more-button">Read more</div>' +
        '</div>');

    var button = $('#CollectionSection .section-header-view-more-button');
    $('.btn-shop-now').click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - PL_top_copy',
            'eventAction': 'click',
            'eventLabel': 'Read more'
        });
    });
    button.click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - PL_top_copy',
            'eventAction': 'click',
            'eventLabel': 'Read more'
        });

        if(button.hasClass('active')) {
            button.removeClass('active').text('Read more');
            $('.section-header-view-more-wrapper')
                .removeClass('section-header-view-more-state-normal')
                .addClass('section-header-view-more-state-collapsed')
            ;
        } else {
            button.addClass('active').text('View less');
            $('.section-header-view-more-wrapper')
                .addClass('section-header-view-more-state-normal')
                .removeClass('section-header-view-more-state-collapsed')
            ;
        }
    });
});