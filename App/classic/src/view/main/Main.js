/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Portfolio.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'Portfolio.view.main.MainController',
        'Portfolio.view.main.MainModel'
    ],

    title: 'Ben Garza',
    iconCls: 'x-fa fa-user',

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',

    tabPosition: 'left',
    tabRotation: 0,

    items: [{
        title: 'About Me'
    }, {
        title: 'Interests'
    }, {
        title: 'Sample Projects'
    }, {
        title: 'Resume'
    }]
});
