let el = document.createElement('script');
el.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
el.async = true;

el.addEventListener('load', function() {
    jQuery.noConflict();
    let $ = jQuery;
    setInterval(function () {
        if($('.luggage-content-not-included-caption').length === 0) {
            let luggage_container = $('app-ancillary-luggage-view > .included-in-fare');
            luggage_container.find('i.icon-info').remove();
            let luggage_content = luggage_container.children('div:first');
            let luggage_contents = luggage_content.contents();
            let luggage_part1 = $('<div class="luggage-content"></div>');
            luggage_part1.append(luggage_contents[0]);
            luggage_part1.append($('<div class="luggage-content-blue-button"></div>').append(luggage_contents[1]));
            let luggage_part2 = $('<div class="luggage-content"></div>');
            luggage_part2.append('<div class="luggage-content-not-included-caption">Включено:</div>');
            luggage_part2.append($('<div class="luggage-content-transparent-button"></div>').append(luggage_contents[3]));
            luggage_content.html('').append($('<div class="luggage-content-container"></div>').append(luggage_part1).append(luggage_part2));
            luggage_container.after('<div class="luggage-warning-container"><div class="luggage-warning-content"><b>Добавьте багаж с 50% скидкой!</b> На стойке регистрации стоимость будет в 2 раза больше!</div></div>');
        }


        if($('.ancillary-service--header-info.ts-h4').length) {
            $('app-ancillary-insurance .ancillary-service--header-title.ts-h3').after('<div class="ancillary-service--header-info ts-h4">Мы предлагаем полис от компании ERV - лидера по страховым выплатам туристам, путешествующих заграницу.</div>');
            $('app-ancillary-insurance .ancillary-service--header-description').prepend('<div class="already-has-insurance-button-container"><div class="already-has-insurance-button">У меня уже есть страховка</div></div>');
            let ins_button = $('.already-has-insurance-button-container .already-has-insurance-button');
            ins_button.click(function () {
                if(ins_button.hasClass('active')) {
                    ins_button.removeClass('active');
                    return false;
                }
                $('app-ancillary-insurance-card.selected').click();
                ins_button.addClass('active');
            });
        }


        $('.seatmap-schema-container button.available:not(.experiment-applied)').addClass('experiment-applied').hover(function () {
            let self = $(this);

            let width = Math.floor(($('.ancillary-seatmap-view--seatmap-block .mobile-scroll-container').width() - $('.ancillary-seatmap-view--seatmap-block .seatmap-schema-container').width())/2);
            if(width > 100) {
                width = width - 15;
            } else {
                width = 130;
            }

            let row = parseInt(self.parent().find('.aisle').text());
            let text = '';
            if(self.prevAll().length === 0 || self.nextAll().length === 0) {
                text += '<p>Место с доступом к окну <span>(Вид на панораму из окна)</span></p>'
            }
            if(self.next().hasClass('aisle') || self.prev().hasClass('aisle')) {
                text += '<p>Место с доступом к проходу <span>(Быстрый доступ к центральному проходу)</span></p>';
            }
            if(self.parent().prev().hasClass('row-emergency-exit')) {
                text += '<p>Больше места для ног <span>(Вы получаете +70 см пространства для ног)</span></p>';
            }
            if(row < 11) {
                text += '<p>Место в передней части самолета <span>(Более быстрая посадка и выход)</span></p>';
            }
            $('.ancillary-seatmap-description-about-seat').remove();
            if(text !== '') {
                $('.ancillary-seatmap-view--seatmap-block').append($('<div class="ancillary-seatmap-description-about-seat"></div>').css('width',width+'px').html('<div class="ancillary-seatmap-description-price">&nbsp;</div>'+text));
            }
            setTimeout(function () {
                let price = $('div.cdk-overlay-container').text();
                $('.ancillary-seatmap-description-price').text(price);
            }, 10);
        }, function () {
            // $('.ancillary-seatmap-description-about-seat').remove();
        });
    }, 100);
});

document.head.appendChild(el);