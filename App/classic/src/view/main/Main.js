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

    title: 'Benjamin Garza <div style="font-size: 12px; display: inline; opacity: 60%;"> Software Engineer</div>',

    controller: 'main',
    viewModel: 'main',

    layout: 'fit',

    tabPosition: 'left',
    tabRotation: 0,

    items: [{
        xtype: 'panel',
        iconCls: 'x-fa fa-home',
        tooltip: 'Home'
    }, {
        xtype: 'panel',
        iconCls: 'x-fa fa-user',
        tooltip: 'About'
    }, {
        xtype: 'panel',
        iconCls: 'x-fa fa-terminal',
        tooltip: 'Projects'
    }, {
        xtype: 'panel',
        iconCls: 'x-fa fa-envelope',
        tooltip: 'Contact'
    }]
});
