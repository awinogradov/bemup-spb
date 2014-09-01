({
    block : 'page',
    title : 'BEMup SPB-2014',
    favicon : 'favicon.ico',
    head : [
        { elem: 'meta', attrs : { name : 'title', content : 'BEMup SPB-2014' } },
        { elem: 'meta', attrs : { name : 'description', content : 'Application prototyping with BEM' } },
        { elem: 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1.0' } },
        { elem: 'meta', attrs : { name : 'apple-mobile-web-app-title', content : 'BEMup' } },
        { elem: 'meta', attrs : { name : 'apple-mobile-web-app-capable', content : 'yes' } },
        { elem: 'link', attrs : { href : 'images/apple-touch-icon.png', rel : 'apple-touch-icon' } },
        { elem: 'link', attrs : { href : 'images/apple-touch-icon-120x120.png', rel : 'apple-touch-icon', size : '120x120' } },
    ],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    content :[
        {
            elem : 'header',
            tag : 'header',
            content : [
                { block : 'city', content : 'Москва' },
                {
                    block : 'title',
                    content : [
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 6 },
                                    content : [
                                        {
                                            block : 'logo',
                                            service : 'Такси'
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 6 },
                                    content : [
                                        { block : 'burger' }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'content',
            tag : 'main',
            attrs : { role : 'main' },
            content : [
                {
                    block : 'form',
                    tag : 'form',
                    attrs : { role : 'form' },
                    content : [
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Откуда'
                                },
                                {
                                    block : 'input',
                                    mods : { 'has-clear' : true, theme : 'normal', size : 'l', 'has-label' : true },
                                    val : 'Ольховская улица, 4с2'
                                }
                            ]
                        },
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'label',
                                    content : 'Куда'
                                },
                                {
                                    block : 'input',
                                    mods : { 'has-clear' : true, theme : 'normal', size : 'l', 'has-label' : true }
                                }
                            ]
                        },
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'select',
                                    mods : { mode: 'radio', theme : 'normal', size : 'l' },
                                    options : (function () {
                                        var days      = [],
                                            date      = new Date(),
                                            day       = date.getDay(),
                                            month     = date.getMonth() + 1,
                                            month_str = month < 10 ? '0' + month : month;

                                        // Yes! This is don't work when today is 29-30 number of day,
                                        // but this is not problem - this is prototype ;-)
                                        days.push({ text : 'Сегодня (' + day + '.' + month_str + ')', checked : true });
                                        days.push({ text : 'Завтра (' + (day + 1)  + '.' + month_str + ')' });
                                        days.push({ text : 'Послезавтра (' + (day + 2)  + '.' + month_str + ')' });

                                        return days;
                                    })()
                                }
                            ]
                        },
                        {
                            block : 'line',
                            content : [
                                {
                                    elem : 'col',
                                    mods : { dsw : 6 },
                                    content : [
                                        {
                                            block : 'control-group',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode: 'radio', theme : 'normal', size : 'l' },
                                                    options : (function () {
                                                        var hours = [],
                                                            date  = new Date();

                                                        for (var i = 0; i < 24; i++) {
                                                            hours.push({ text : i, checked : i == date.getHours() ? true : false });
                                                        }

                                                        return hours;
                                                    })()
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem : 'col',
                                    mods : { dsw : 6 },
                                    content : [
                                        {
                                            block : 'control-group',
                                            content : [
                                                {
                                                    block : 'select',
                                                    mods : { mode: 'radio', theme : 'normal', size : 'l' },
                                                    options : (function () {
                                                        var time    = [],
                                                            date    = new Date(),
                                                            minutes = Math.ceil(date.getMinutes()*0.1)/0.1;

                                                        for (var i = 0; i < 60; i += 5) {
                                                            time.push({ text : i, checked : i == minutes ? true : false });
                                                        }

                                                        return time;
                                                    })()
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'select',
                                    mods : { mode: 'radio', theme : 'normal', size : 'l' },
                                    options : [
                                        { text : 'Эконом от 199 Р', checked : true },
                                        { text : 'Комфорт от 250 Р' },
                                        { text : 'Бизнес от 750 Р' }
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'link',
                                    mods : { view: 'list-row' },
                                    url : '#',
                                    content : 'Фильтровать таксопарки'
                                }
                            ]
                        },
                        {
                            block : 'control-group',
                            content : [
                                {
                                    block : 'link',
                                    mods : { view: 'list-row' },
                                    url : '#',
                                    content : 'Требования к автомобилю'
                                }
                            ]
                        },
                        {
                            block : 'control-group',
                            content : [

                            ]
                        },
                        {
                            block : 'actions',
                            content : [
                                {
                                    block : 'button',
                                    mods : { theme : 'normal', action : true, size : 'xl' },
                                    text : 'Вызвать такси'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [
                {
                    block : 'menu',
                    content : [
                        {
                            block : 'menu-item',
                            content : [
                                {
                                    block : 'copyright',
                                    content : [
                                        '©&nbsp;2009–2014&nbsp;&nbsp;«',
                                        {
                                            block : 'link',
                                            url : 'yandex.ru',
                                            target : '_blank',
                                            content : 'Яндекс'
                                        },
                                        '»'
                                    ]
                                }
                            ]
                        },
                        {
                            block : 'menu-item',
                            content : [
                                {
                                    block : 'link',
                                    url : 'taxi.yandex.ru',
                                    content : 'Полная версия'
                                }
                            ]
                        },
                        {
                            block : 'menu-item',
                            content : [
                                {
                                    block : 'link',
                                    url : '#',
                                    content : 'Информация о тарифах'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    scripts : [
        { elem : 'js', url : 'assets/application.min.js' }
    ]
})
