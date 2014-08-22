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
        { elem: 'meta', attrs : { name : 'apple-mobile-web-app-status-bar-style', content : 'black' } },
        { elem: 'link', attrs : { href : 'images/apple-touch-icon.png', rel : 'apple-touch-icon' } },
        { elem: 'link', attrs : { href : 'images/apple-touch-icon-120x120.png', rel : 'apple-touch-icon', size : '120x120' } },
        { elem: 'link', attrs : { href : 'images/apple-touch-icon-152x152.png', rel : 'apple-touch-icon', size : '152x152' } }
    ],
    styles : [{ elem : 'css', url : 'assets/application.min.css' }],
    content :[
        {
            elem : 'header',
            tag : 'header',
            content : [
                {
                    tag : 'h2', content : 'Hello, World! This is the first screen of application.'
                }
            ]
        },
        {
            elem : 'content',
            tag : 'main',
            attrs : { role : 'main' },
            content : [
                {
                    tag : 'p', content : 'Find this in desktop.bundles/index/index.bemjson.js'
                }
            ]
        },
        {
            elem : 'footer',
            tag : 'footer',
            content : [
                'License: ',
                {
                    block : 'link',
                    url : 'http://opensource.org/licenses/MIT',
                    content : 'MIT'
                }
            ]
        }
    ],
    scripts : [
        { elem : 'js', url : 'assets/application.min.js' }
    ]
})
