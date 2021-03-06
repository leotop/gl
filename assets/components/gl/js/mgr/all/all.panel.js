gl.panel.All = function(config) {

    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        cls: 'gl-formpanel',
        layout: 'anchor',
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {
                border: false,
                autoHeight: true
            },
            border: true,
            hideMode: 'offsets',
            items: [{
                title: _('gl_data'),
                layout: 'anchor',
                items: [{
                    html: _('gl_data_intro'),
                    cls: 'panel-desc'
                }, {
                    xtype: 'gl-grid-data',
                    cls: 'main-wrapper'
                }]
            }, {
                title: _('gl_countries'),
                layout: 'anchor',
                items: [{
                    html: _('gl_countries_intro'),
                    cls: 'panel-desc'
                }, {
                    xtype: 'gl-grid-country',
                    cls: 'main-wrapper'
                }]
            }, {
                title: _('gl_regions'),
                layout: 'anchor',
                items: [{
                    html: _('gl_regions_intro'),
                    cls: 'panel-desc'
                }, {
                    xtype: 'gl-grid-region',
                    cls: 'main-wrapper'
                }]
            }, {
                title: _('gl_cities'),
                layout: 'anchor',
                items: [{
                    html: _('gl_cities_intro'),
                    cls: 'panel-desc'
                }, {
                    xtype: 'gl-grid-city',
                    cls: 'main-wrapper'
                }]
            }]
        }]
    });
    gl.panel.All.superclass.constructor.call(this, config);
};
Ext.extend(gl.panel.All, MODx.Panel);
Ext.reg('gl-panel-all', gl.panel.All);
