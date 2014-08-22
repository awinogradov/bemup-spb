({
    block: 'page',
    title: 'Yeoman BEM',
    favicon: 'favicon.ico',
    head: [{ elem: 'meta', attrs: { name: 'description', content: '' }}],
    styles: [{ elem: 'css', url: 'assets/application.min.css', ie: false }],
    // Uncomment this if you want use AngularJS MVC
    // attrs: {'ng-app': 'bemup-spb'},
    content:[
        {
            elem: 'header',
            tag: 'header',
            content: [
                {
                    tag: 'h2', content: 'Hello, World! This page generated by Yeoman generator-bem.'
                }
            ]
        },
        {
            elem: 'content',
            tag: 'main',
            attrs: { role: 'main' },
            content: [
                {
                    tag: 'p', content: 'Find this in desktop.bundles/index/index.bemjson.js'
                },
                // Uncomment this if you want use AngularJS MVC
                // { block: 'ng-view' }
            ]
        },
        {
            elem: 'footer',
            tag: 'footer',
            content: [
                'License: ',
                {
                    block: 'link',
                    url: 'http://opensource.org/licenses/MIT',
                    content: 'MIT'
                }
            ]
        }
    ],
    scripts: [
        { elem: 'js', url: 'assets/plugins.min.js' },
        // Uncomment this if you want use AngularJS MVC
        // { elem: 'js', url: 'assets/application.min.js' }
    ]
})