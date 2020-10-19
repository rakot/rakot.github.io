(function () {
    let $ = jQuery;
    let keradan_enable_log = true;

    function keradan_get_cookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function keradan_set_cookie(name, value, options = {}) {
        if (!options.path) options.path = '/';

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    }
    function keradan_delete_cookie(name) {
        setCookie(name, "", {
            'max-age': -1
        })
    }

    function keradan_log() {
        if(keradan_enable_log) console.log.apply(this, arguments);
    }

    let keradan_ga_event = function(eventAction) {
        let dataLayer = window.dataLayer || [];
        let ga_data = {
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Banner & Popup & Article Banner',
            'eventAction': eventAction
        };
        keradan_log('keradan ga event: ', ga_data);
        if(true) dataLayer.push(ga_data);
    };

    keradan_ga_event('loaded');

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1955547,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    window.hj = window.hj || function(){(hj.q = hj.q || []).push(arguments)};
    try {
        hj('trigger', 'banner_pop-up_article_banner_us');
    }
    catch(e) {}

    let show_popup = function () {
        keradan_ga_event('view popup');
        keradan_set_cookie('delayed_popup_was_shown', 'true');
        // document.cookie = "delayed_popup_was_shown=true; path=/";
        popup_wrapper.classList.toggle('displayed', true);
        setTimeout(() => popup_wrapper.classList.toggle('show', true), 10);
    };

    let close_popup = function () {
        console.log('close_popup');
        popup_wrapper.classList.toggle('show', false);
        setTimeout(() => popup_wrapper.classList.toggle('displayed', false), 300);
    };

    let markup_content = {
        headline: 'How to find out if<br>he is cheating on you?',
        sub_headline: 'This <span>online tool</span> can legally and anonymously check:',
        list_items: '',
        list_items_text: [
            'Who he’s been contacting frequently?',
            'What contact details he is using',
            'Did he download dating apps',
            'Is he married or divorced',
            'Does he have kids?',
            'And a lot more...',
        ],
        list_item_mark: '<svg width="20" height="16" viewBox="0 0 20 16" fill="none"><path d="M19.7071 0.949099C19.3166 0.558552 18.6835 0.558552 18.2929 0.949099L6.31228 12.9298L1.70713 8.32469C1.31662 7.93414 0.683496 7.93418 0.29291 8.32469C-0.0976367 8.71519 -0.0976367 9.34832 0.29291 9.73887L5.60518 15.0511C5.99557 15.4416 6.62916 15.4413 7.01939 15.0511L19.7071 2.36332C20.0977 1.97281 20.0976 1.33965 19.7071 0.949099Z" fill="#E768B5"/></svg>',
        cancel_button_text: 'I prefer not to know about this',
        request_button_text: 'I want to learn more about this tool',
        // request_button_link: 'https://hernorm.com/how-to-find-out-if-hes-cheating/',
        // request_button_link: 'https://www.truthfinder.com/',
        request_button_link: 'http://hernorm.com/recommends/bgc'
    };

    markup_content.list_items_text.forEach(function(text_item){
        markup_content.list_items += `
 			<li>
	 			<span class="mark">${markup_content.list_item_mark}</span>
	 			<span class="text">${text_item}</span>
 			</li>
 		`;
    });

    let styles = `
 		.keradan-delayed-popup-wrapper {
 			position: fixed;
 			top: 0;
 			left: 0;
 			width: 100vw;
 			height: 100vh;
 			display: flex;
 			align-items: center;
 			justify-content: center;
 			background: rgba(0,0,0,0.4);
 			z-index: 2147483647;
 			opacity: 1;
 			transition: opacity 0.3s ease;
 		}
 		.keradan-delayed-popup-wrapper:not(.displayed) {
 			display: none!important;
 		}
 		.keradan-delayed-popup-wrapper:not(.show) {
 			opacity: 0;
 		}
 		.krdndpw .popup {
 			position: relative;
 			display: flex;
 			flex-flow: column;
 			align-items: center;
 			justify-content: center;
 			background: white;
 			width: calc(100vw - 30px);
 			box-sizing: border-box;
 			border-radius: 5px;
 			margin: 0;
 			padding: 15px;
 			transform: translateY(0);
 			transition: transform 0.3s cubic-bezier(0.3, 0.4, 0.2, 1.5);
 		}
 		.keradan-delayed-popup-wrapper:not(.show) .popup {
 			transform: translateY(-5%);
 		}
 		.krdndpw .popup button.close {
 			position: absolute;
		    top: 10px;
		    right: 10px;
		    border: none;
		    background: transparent;
		    opacity: 0.3;
		    width: 26px;
		    height: 26px;
		    padding: 5px;
		    margin: 0;
		    display: flex;
 		}
 		.krdndpw .popup .headline {
 			font-family: PT Serif;
		    font-size: 24px;
		    line-height: 32px;
		    letter-spacing: -0.5px;
		    color: #000000;
		    text-align: center;
		    margin: 0;
    		padding: 0;
    		margin-top: 15px;
 		}
 		.krdndpw .popup .sub-headline {
 			font-family: PT Serif;
		    font-size: 20px;
		    line-height: 26px;
		    letter-spacing: -0.5px;
		    color: #404040;
		    text-align: left;
		    margin: 15px;
    		padding: 0;
 		}
 		.krdndpw .popup .sub-headline span {
 			font-weight: 600;
 			font-style: italic;
 		}
 		.krdndpw .popup ul {
 			margin: 0;
 			padding: 0;
 		}
 		.krdndpw .popup ul li {
 			display: flex;
 			flex-wrap: nowrap;
 			margin: 10px 0;
 		}
 		.krdndpw .popup ul li span.mark {
 			display: flex;
		    width: 33px;
		    justify-content: flex-start;
		    align-items: flex-start;
		    padding-top: 4px;
 		}
 		.krdndpw .popup ul li span.text {
 			font-family: PT Serif;
		    font-size: 20px;
		    line-height: 26px;
		    letter-spacing: -0.5px;
		    max-width: calc(100% - 33px);
 		}
 		.krdndpw .popup button.cancel-button, .krdndpw .popup a.request-button {
 			display: flex;
		    justify-content: center;
		    align-items: center;
		    border: 2px solid #E768B5;
		    box-sizing: border-box;
		    border-radius: 10px;
		    font-family: PT Serif;
		    font-size: 16px;
		    letter-spacing: -0.5px;
		    height: 50px;
		    width: 100%;
 		}
 		.krdndpw .popup button.cancel-button {
 			color: #E768B5;
		    background: transparent;
		    margin-top: 20px;
		    margin-bottom: 10px;
 		}
 		.krdndpw .popup a.request-button {
 			text-decoration: none;
 			color: white;
		    background: #E768B5;
		    margin-bottom: 15px;
		    box-shadow: 0 5px 10px rgba(133, 35, 94, 0.25);
 		}
 		
 		
        .keradan-sticky-box {
            display: flex;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            position: fixed;
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 55px;
            bottom: 0;
            background: #E768B5;
            box-shadow: 0px 0px 10px rgba(133, 35, 94, 0.25);
            color: white;
            text-decoration: none;
            z-index: 2147483647;
        }
        
        .keradan-sticky-box span.text {
            color: white;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.4px;
        }
        
        .keradan-sticky-box span.button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            background: #A53579;
            margin: 0;
            margin-left: 10px;
            border-radius: 50%;
        }
        .keradan-sticky-box span.button svg {
            position: relative;
            left: 1px;
        }
        
        .keradan-article-banner {
            width: auto;
            margin: 0 -15px;
            background: #000 url('https://rakot.github.io/conversionrate.store/optimize.google.com/hernorm.com/01.BannerPopupArticle/bg1.png?v=1') center no-repeat;
            background-size: cover;
        }
        
        .keradan-article-banner-content {
            color: #fff;
            padding: 2em 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            
            text-align: center;
            -webkit-font-smoothing: antialiased;
        }
 		.keradan-article-banner-content h4{
            font-family: PT Serif;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
 		}
 		.keradan-article-banner-content p{
 		    font-family: PT Serif;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 19px;
            text-align: center;
 		}
 		.keradan-article-banner-content p span{
 		    font-family: PT Serif;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 21px;
            text-align: center;
 		}
 		.keradan-article-banner-content a{
 		    display: block;
 		    text-decoration: none !important;
 		    background: #E768B5;
            border-radius: 3px;
            padding: 10px 13px;
            font-family: PT Serif;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 21px;
            color: #FFFFFF;
 		}
 	`;

    let markup = `
 		<div class="popup">
 			<button class="close"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8.88368 8.00076L15.8167 1.06771C16.0608 0.823614 16.0608 0.427865 15.8167 0.183803C15.5726 -0.0602597 15.1769 -0.060291 14.9328 0.183803L7.99975 7.11686L1.06673 0.183803C0.822637 -0.060291 0.426888 -0.060291 0.182826 0.183803C-0.0612362 0.427896 -0.0612675 0.823646 0.182826 1.06771L7.11584 8.00073L0.182826 14.9338C-0.0612675 15.1779 -0.0612675 15.5736 0.182826 15.8177C0.304857 15.9397 0.464825 16.0007 0.624794 16.0007C0.784762 16.0007 0.944699 15.9397 1.06676 15.8177L7.99975 8.88467L14.9328 15.8177C15.0548 15.9397 15.2148 16.0007 15.3747 16.0007C15.5347 16.0007 15.6946 15.9397 15.8167 15.8177C16.0608 15.5736 16.0608 15.1778 15.8167 14.9338L8.88368 8.00076Z" fill="black"/></svg></button>
 			<p class="headline">${markup_content.headline}</p>
 			<p class="sub-headline">${markup_content.sub_headline}</p>
 			<ul>${markup_content.list_items}</ul>
 			<button class="cancel-button">${markup_content.cancel_button_text}</button>
 			<a data-tracking-group="cake" data-action="sale.bgc" href="${markup_content.request_button_link}" class="request-button krdn-affiliate-link">${markup_content.request_button_text}</a>
 		</div>
 	`;
    // <a href="${markup_content.request_button_link}" class="request-button">${markup_content.request_button_text}</a>

    let styles_el = document.createElement('style');
    styles_el.innerHTML = styles;
    document.querySelector('head').append(styles_el);

    let markup_el = document.createElement('div');
    markup_el.classList.add('keradan-delayed-popup-wrapper', 'krdndpw'); // .krdndpw - minified wrapper class for scope
    markup_el.innerHTML = markup;
    document.querySelector('body').append(markup_el);

    var popup_wrapper = document.querySelector('.krdndpw');

    popup_wrapper.addEventListener('click', function(event){
        if (event.target != popup_wrapper) return false;
        keradan_ga_event('close popup - background');
        close_popup();
    });
    popup_wrapper.querySelector('button.close').addEventListener('click', function(){
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Banner & Popup & Article Banner',
            'eventAction': 'click X to close',
            'eventLabel': 'popup'
        });
        close_popup();
    });
    popup_wrapper.querySelector('button.cancel-button').addEventListener('click', function(){
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Banner & Popup & Article Banner',
            'eventAction': 'click on I prefer to do not know about this',
            'eventLabel': 'popup'
        });
        close_popup();
    });
    popup_wrapper.querySelector('a.request-button').addEventListener('click', function(){
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Banner & Popup & Article Banner',
            'eventAction': 'click on I want to learn more about this tool',
            'eventLabel': 'popup'
        });
    });

    let showPopup = function () {
        let keradan_doInit = window.doInit.toString();
        keradan_doInit = window.doInit.toString().replace("jQuery('a[data-tracking-group]').each", "jQuery('.krdn-affiliate-link').each")
            .replace("jQuery('a[data-tracking-group]').click", "jQuery('.krdn-affiliate-link').click")
            .replace("jQuery('a[data-tracking-group]').mousedown", "jQuery('.krdn-affiliate-link').mousedown");

        setTimeout(parseFunction(keradan_doInit)(), 1);
        setTimeout(show_popup, 5);

        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Banner & Popup & Article Banner',
            'eventAction': 'popup loaded',
            'eventLabel': 'popup'
        });

        function parseFunction (str) {
            var fn_body_idx = str.indexOf('{'),
                fn_body = str.substring(fn_body_idx+1, str.lastIndexOf('}')),
                fn_declare = str.substring(0, fn_body_idx),
                fn_params = fn_declare.substring(fn_declare.indexOf('(')+1, fn_declare.lastIndexOf(')')),
                args = fn_params.split(',');

            args.push(fn_body);

            function Fn () {
                return Function.apply(this, args);
            }
            Fn.prototype = Function.prototype;

            return new Fn();
        }
    };


    let text = '3 Ways To Find Out If He’s Cheating?';

    let sticky_box_content = `<span class="text">${text}</span><span class="button"><svg width="10" height="16" viewBox="0 0 10 16" fill="none">
<path d="M9.44469 7.37568L2.32449 0.255608C2.15981 0.090796 1.93997 0 1.70557 0C1.47116 0 1.25133 0.090796 1.08664 0.255608L0.562291 0.779831C0.22109 1.12142 0.22109 1.6766 0.562291 2.01767L6.5413 7.99668L0.555657 13.9823C0.390975 14.1471 0.300049 14.3668 0.300049 14.6011C0.300049 14.8357 0.390975 15.0554 0.555657 15.2203L1.08001 15.7444C1.24482 15.9092 1.46453 16 1.69893 16C1.93334 16 2.15317 15.9092 2.31785 15.7444L9.44469 8.61782C9.60976 8.45248 9.70043 8.23174 9.69991 7.99707C9.70043 7.7615 9.60976 7.54088 9.44469 7.37568Z" fill="white"/>
</svg>
</span>`;
    let sticky_box = $('<a class="keradan-sticky-box"></a>');
    sticky_box.html(sticky_box_content);
    sticky_box.click(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Banner & Popup & Article Banner',
            'eventAction': 'click on Is your partner cheating',
            'eventLabel': 'Sticky banner'
        });
        showPopup();
        return false;
    });

    let show_banner = function () {
        let keradan_doInit = window.doInit.toString();
        keradan_doInit = window.doInit.toString().replace("jQuery('a[data-tracking-group]').each", "jQuery('.krdn-affiliate-link').each")
            .replace("jQuery('a[data-tracking-group]').click", "jQuery('.krdn-affiliate-link').click")
            .replace("jQuery('a[data-tracking-group]').mousedown", "jQuery('.krdn-affiliate-link').mousedown");

        let parseFunction = function(str) {
            var fn_body_idx = str.indexOf('{'),
                fn_body = str.substring(fn_body_idx+1, str.lastIndexOf('}')),
                fn_declare = str.substring(0, fn_body_idx),
                fn_params = fn_declare.substring(fn_declare.indexOf('(')+1, fn_declare.lastIndexOf(')')),
                args = fn_params.split(',');

            args.push(fn_body);

            function Fn () {
                return Function.apply(this, args);
            }
            Fn.prototype = Function.prototype;

            return new Fn();
        };

        if($('.inside-article h3:eq(1)').length) {
            $('.inside-article h3:eq(1)').before(`<div class="keradan-article-banner">
    <div class="keradan-article-banner-content">
        <h4>Is Your Partner Cheating?</h4>
        <p>Uncover Personal Information, Social Media Data<br><span>Online Activity, Photos, and More!!</span></p>
        <a data-tracking-group="cake" data-action="sale.bgc" href="${markup_content.request_button_link}"  class="request-button krdn-affiliate-link">Find out with this tool →</a>
</div>
</div>`);
            $('.keradan-article-banner a').click(function () {
                window.dataLayer = window.dataLayer || [];
                dataLayer.push({
                    'event': 'event-to-ga',
                    'eventCategory': 'Exp - Banner & Popup & Article Banner',
                    'eventAction': 'click on the article banner',
                    'eventLabel': 'article banner'
                });
            });
            setTimeout(parseFunction(keradan_doInit)(), 1);
        }
    };
    show_banner();

    setTimeout(function () {
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp - Banner & Popup & Article Banner',
            'eventAction': 'sticky banner loaded',
            'eventLabel': 'Sticky banner'
        });
        $('body').append(sticky_box);
    }, 10000);
})();