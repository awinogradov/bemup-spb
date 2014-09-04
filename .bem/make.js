var dirs = require('../package.json')._directories,
    path = require('path'),
    U    = require('bem').util;

require('bem-tools-autoprefixer').extendMake(MAKE);

MAKE.decl('Arch', {

    blocksLevelsRegexp : /^.+?\.blocks$/,
    bundlesLevelsRegexp : /^.+?\.bundles$/

});

MAKE.decl('BundleNode', {

    getTechs: function() {

        return [
            'bemjson.js',
            'bemdecl.js',
            'deps.js',
            'stylus',
            'css',
            'bemhtml',
            'browser.js+bemhtml',
            'html'
        ];

    },

    getForkedTechs : function() {
        return this.__base().concat(['browser.js+bemhtml', 'stylus']);
    },

    getPlatform : function(levelpath) {
        return levelpath.split('.')[0].replace(/-([a-z])/gi, function(_, letter) {
            return letter.toUpperCase();
        });
    },

    getApplicationLevels : function() {
        return [
            'libs/bem-core/common.blocks',
            'libs/bem-core/desktop.blocks',
            'libs/bem-components/common.blocks',
            'libs/bem-components/desktop.blocks',
            'libs/bem-components/design/common.blocks',
            'libs/bem-components/design/desktop.blocks',
            'libs/bem-grid/common.blocks',
            'common.blocks',
            'design/common.blocks',
            'application.blocks',
            'design/application.blocks'
        ];
    },

    getLevels : function() {
        var resolve = path.resolve.bind(path, this.root),
            buildLevel = this.getLevelPath(),
            getPlatformLevelsFn = 'get' + U.toUpperCaseFirst(this.getPlatform(buildLevel)) + 'Levels',
            levels = [];

        if(typeof this[getPlatformLevelsFn] === 'function') {
            Array.prototype.push.apply(levels, this[getPlatformLevelsFn].apply(this, arguments));
        }

        if(!levels.length) {
            return [];
        }

        return levels
            .map(function(path) { return resolve(path); })
            .concat(resolve(path.dirname(this.getNodePrefix()), 'blocks'));
    },

    'create-css-node' : function(tech, bundleNode, magicNode) {
        var source = this.getBundlePath('stylus');
        if(this.ctx.arch.hasNode(source)) {
            return this.createAutoprefixerNode(tech, this.ctx.arch.getNode(source), bundleNode, magicNode);
        }
    }

});

MAKE.decl('AutoprefixerNode', {

    getPlatform : function() {
        return this.output.split('.')[0];
    },

    getBrowsers : function() {
        var platform = this.getPlatform();
        switch(platform) {

        case 'application':
            return [
                'last 2 versions',
                'ie 10',
                'ff 24',
                'opera 12.16',
                'android 4',
                'ios 6'
            ];
        }

        return this.__base();
    }

});

MAKE.decl('BundlesLevelNode', {
    buildMergedBundle: function() {
        return true;
    },
    mergedBundleName: function() {
        return dirs.assets.folder;
    }
});
