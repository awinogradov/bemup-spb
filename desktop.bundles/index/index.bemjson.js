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
        { elem: 'meta', attrs : { name : 'apple-mobile-web-app-status-bar-style', content : 'black-translucent' } },
        { elem: 'link', attrs : { href : 'images/apple-touch-icon.png', rel : 'apple-touch-icon' } },
        { elem: 'link', attrs : { href : 'images/apple-touch-icon-120x120.png', rel : 'apple-touch-icon', size : '120x120' } }
    ],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    content :[
        {
            elem : 'header',
            tag : 'header',
            content : [
                {
                    tag : 'h2', content : 'Привет, пупсик! Я тебя люблю!'
                },
                {
                    block : 'link',
                    url : 'http://yandex.ru',
                    content : 'Ссылка'
                },
                {
                    block : 'button',
                    mods : { theme : 'normal', size : 'xl' },
                    text : 'Кнопа'
                }
            ]
        },
        {
            elem : 'content',
            tag : 'main',
            attrs : { role : 'main' },
            content : [

            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [

            ]
        }
    ],
    scripts : [
        { elem : 'js', url : 'assets/application.min.js' }
    ]
})
