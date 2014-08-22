({
    block: 'page',
    title: 'BEMup SPB-2014',
    favicon: 'favicon.ico',
    head: [{ elem: 'meta', attrs: { name: 'description', content: '' }}],
    styles: [{ elem: 'css', url: 'assets/application.min.css', ie: false }],
    content:[
        {
            elem: 'header',
            tag: 'header',
            content: [
                {
                    tag: 'h2', content: 'Hello, World! This is the first screen of application.'
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
                }
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
        { elem: 'js', url: 'assets/application.min.js' }
    ]
})
