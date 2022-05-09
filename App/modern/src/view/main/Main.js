/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('Portfolio.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox'
    ],

    controller: 'main',
    viewModel: 'main',

    tabBarPosition: 'bottom',

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
