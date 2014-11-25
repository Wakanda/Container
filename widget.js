WAF.define('Container', ['waf-core/widget'], function(widget) {
    "use strict";

    var Container = widget.create('Container', {
    	addTabIndex : function(){

    	},
        init: function() {
        	if(!this.hasClass('well'))
        		this.addClass('well');
        }
    });
    Container.inherit(WAF.require('waf-behavior/layout/container'));

    return Container;
});
