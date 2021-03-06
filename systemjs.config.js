System.config({
    paths: {
        'npm:': '/node_modules/'
    },
    map: {
        app: 'test-app',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        'core-js': 'npm:core-js',
        'zone.js': 'npm:zone.js',
        'rxjs': 'npm:rxjs',
        'tslib': 'npm:tslib/tslib.js'
    },
    packages: {
        'test-app': {
            defaultExtension: 'js'
        },
        'src': {
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js', main: "index.js"
        },
        "rxjs/operators": { "main": "index.js", "defaultExtension": "js" },
        "rxjs/internal-compatibility": { "main": "index.js", "defaultExtension": "js" },
        "rxjs/testing": { "main": "index.js", "defaultExtension": "js" },
        'rxjs/ajax': { main: 'index.js', defaultExtension: 'js' },
        'rxjs/webSocket': { main: 'index.js', defaultExtension: 'js' },
        'core-js': {},
        'zone.js': {}
    }
});