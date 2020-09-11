let el = document.createElement('script');
el.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
el.async = true;

el.addEventListener('load', function() {
    jQuery.noConflict();
    let $ = jQuery;

    let textData = {
        'Добавьте багаж с 50% скидкой!':'Добавьте багаж с 50% скидкой!',
        'На стойке регистрации стоимость будет в 2 раза больше!':'На стойке регистрации стоимость будет в 2 раза больше!',
        'Включено:':'Включено:',
        'Мы предлагаем полис от компании ERV - лидера по страховым выплатам туристам, путешествующих заграницу.':'Мы предлагаем полис от компании ERV - лидера по страховым выплатам туристам, путешествующих заграницу.',
        'У меня уже есть страховка':'У меня уже есть страховка',
        'Медицинские расходы':'Медицинские расходы',
        'Отмена поездки (болезнь, несчастный случай, смерть)':'Отмена поездки (болезнь, несчастный случай, смерть)',
        'Информационная поддержка':'Информационная поддержка',
        'Потеря багажа':'Потеря багажа',
        'Страхование пассажиров воздушного транспорта':'Страхование пассажиров воздушного транспорта',
        'Ответственность':'Ответственность',
        'Место с доступом к окну':'Место с доступом к окну',
        '(Вид на панораму из окна)':'(Вид на панораму из окна)',
        'Место с доступом к проходу':'Место с доступом к проходу',
        '(Быстрый доступ к центральному проходу)':'(Быстрый доступ к центральному проходу)',
        'Больше места для ног':'Больше места для ног',
        '(Вы получаете +70 см пространства для ног)':'(Вы получаете +70 см пространства для ног)',
        'Место в передней части самолета':'(Более быстрая посадка и выход)',
        'Сидите вместе. Выбирайте удобные места рядом с близкими.':'Сидите вместе. Выбирайте удобные места рядом с близкими.',
        'Бесплатно. Выбор места входит в ваш тариф':'Бесплатно. Выбор места входит в ваш тариф'
    };

    if($('.control-item.change-language .label').text() === 'English') {
        textData = {
            'Добавьте багаж с 50% скидкой!':'Add luggage with 50% discount',
            'На стойке регистрации стоимость будет в 2 раза больше!':'The price for additioal luggage at registration desk will be 100% higher.',
            'Включено:':'Included:',

            'У меня уже есть страховка':'I have insurance',
            'Медицинские расходы':'Medical expenses',
            'Отмена поездки (болезнь, несчастный случай, смерть)':'Trip cancellation',
            'Информационная поддержка':'Support info',
            'Потеря багажа':'Lost luggage',
            'Страхование пассажиров воздушного транспорта':'Air passenger insurance',
            'Ответственность':'Responsibilities',
            'Мы предлагаем полис от компании ERV - лидера по страховым выплатам туристам, путешествующих заграницу.':'We offer policy from the leader in travel insurance ERV',
            'Место с доступом к проходу':'Aisle seat',
            '(Быстрый доступ к центральному проходу)':'',
            'Место с доступом к окну':'Window seat',
            '(Вид на панораму из окна)':'',
            'Больше места для ног':'Extra legroom',
            '(Вы получаете +70 см пространства для ног)':'(70cm extra legroom)',
            'Место в передней части самолета':'Seat near the front',
            '(Более быстрая посадка и выход)':'(Quick onboard and debark)',
            'Сидите вместе. Выбирайте удобные места рядом с близкими.':'Sit near a companion',
            'Бесплатно. Выбор места входит в ваш тариф':'Free. Choose your seat for free'
        };
    }

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
            luggage_container.after('<div class="luggage-warning-container"><div class="luggage-warning-content"><b>'+textData['Добавьте багаж с 50% скидкой!']+'</b> '+textData['На стойке регистрации стоимость будет в 2 раза больше!']+'</div></div>');
        }

        if($('.ancillary-service--header-info.ts-h4').length === 0) {
            $('app-ancillary-insurance .ancillary-service--header-title.ts-h3').after('<div class="ancillary-service--header-info ts-h4">'+textData['Мы предлагаем полис от компании ERV - лидера по страховым выплатам туристам, путешествующих заграницу.']+'</div>');
        }

        if($('.already-has-insurance-button-container .already-has-insurance-button').length === 0) {
            $('app-ancillary-insurance .ancillary-service--header-description').prepend('<div class="already-has-insurance-button-container"><div class="already-has-insurance-button">'+textData['У меня уже есть страховка']+'</div></div>');
            let ins_button = $('.already-has-insurance-button-container .already-has-insurance-button');
            ins_button.click(function () {
                if(ins_button.hasClass('active')) {
                    ins_button.removeClass('active');
                    return false;
                }
                $('app-ancillary-insurance-card.selected .ancillary-insurance-card-container').click();
                ins_button.addClass('active');
            });

            if($('app-ancillary-insurance-card.selected').length) {
                $('.already-has-insurance-button-container .already-has-insurance-button').removeClass('active');
            } else {
                $('.already-has-insurance-button-container .already-has-insurance-button').addClass('active');
            }

            $('app-ancillary-insurance-card ul').remove();

            $('app-ancillary-insurance-card:eq(0) .ts-h5').after('<ul><li>'+textData['Медицинские расходы']+'</li><li>'+textData['Отмена поездки (болезнь, несчастный случай, смерть)']+'</li><li>'+textData['Информационная поддержка']+'</li></ul>');
            $('app-ancillary-insurance-card:eq(1) .ts-h5').after('<ul><li>'+textData['Медицинские расходы']+'</li><li>'+textData['Отмена поездки (болезнь, несчастный случай, смерть)']+'</li><li>'+textData['Информационная поддержка']+'</li><li>'+textData['Потеря багажа']+'</li></ul>');
            $('app-ancillary-insurance-card:eq(2) .ts-h5').after('<ul><li>'+textData['Медицинские расходы']+'</li><li>'+textData['Отмена поездки (болезнь, несчастный случай, смерть)']+'</li><li>'+textData['Информационная поддержка']+'</li><li>'+textData['Потеря багажа']+'</li><li>'+textData['Страхование пассажиров воздушного транспорта']+'</li><li>'+textData['Ответственность']+'</li></ul>');
        } else {
            if($('app-ancillary-insurance-card.selected').length) {
                $('.already-has-insurance-button-container .already-has-insurance-button').removeClass('active');
            } else {
                $('.already-has-insurance-button-container .already-has-insurance-button').addClass('active');
            }
        }


        $('.seatmap-schema-container button.available:not(.experiment-applied)').addClass('experiment-applied').hover(function () {
            let self = $(this);

            let row = parseInt(self.parent().find('.aisle').first().text());
            let text = '';
            if(self.prevAll().length === 0 || self.nextAll().length === 0) {
                text += '<p>'+textData['Место с доступом к окну']+' <span>'+textData['(Вид на панораму из окна)']+'</span></p>'
            }
            if(self.next().hasClass('aisle') || self.prev().hasClass('aisle')) {
                text += '<p>'+textData['Место с доступом к проходу']+' <span>'+textData['(Быстрый доступ к центральному проходу)']+'</span></p>';
            }
            if(self.parent().prev().hasClass('row-emergency-exit')) {
                text += '<p>'+textData['Больше места для ног']+' <span>'+textData['(Вы получаете +70 см пространства для ног)']+'</span></p>';
            }
            if(row < 11) {
                text += '<p>'+textData['Место в передней части самолета']+' <span>'+textData['(Более быстрая посадка и выход)']+'</span></p>';
            }
            $('.ancillary-seatmap-description-about-seat').remove();
            if(text === '') {
                text += '<p>'+textData['Сидите вместе. Выбирайте удобные места рядом с близкими.']+'</p>';
            }

            $('body').append($('<div class="ancillary-seatmap-description-about-seat"></div>').html('<div class="ancillary-seatmap-description-about-seat-bird-wrapper"><div class="ancillary-seatmap-description-about-seat-bird"></div></div><div class="ancillary-seatmap-description-price">&nbsp;</div>'+text).css({
                left: self.offset().left+self.width()+10+'px',
                top: self.offset().top-50+'px'
            }));


            setTimeout(function () {
                let price = $.trim($('div.cdk-overlay-container').text());
                if(price.search(/.*0\.00/) === -1) {
                    $('.ancillary-seatmap-description-price').text(price);
                } else {
                    $('.ancillary-seatmap-description-price').text(textData['Бесплатно. Выбор места входит в ваш тариф']);
                }
            }, 10);
        }, function () {
            $('.ancillary-seatmap-description-about-seat').remove();
        });
    }, 100);
});

document.head.appendChild(el);