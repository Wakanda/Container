(function(Container) {
    "use strict";

    Container.addEvents({ 
        'name':'click', 
        'category':'Mouse Events' 
    },{ 
        'name':'dblclick', 
        'description':'On Double Click',
        'category':'Mouse Events'
    },{ 
        'name':'mousedown', 
        'description':'On Mouse Down',
        'category':'Mouse Events'
    },{ 
        'name':'mouseout',
        'description':'On Mouse Out',
         'category':'Mouse Events'
    },{ 
        'name':'mouseover',
        'description':'On Mouse Over',
        'category':'Mouse Events'
    },{ 
        'name':'mouseup',
        'description':'On Mouse Up',
        'category':'Mouse Events'
    },{
        'name':'startResize',
        'description':'On Start Resize',
        'category':'Resize'
    },{ 
        'name':'onResize',
        'description':'On Resize',
        'category':'Resize'
    },{ 
        'name':'stopResize',
        'description':'On Stop Resize',
        'category':'Resize'
    },{ 
        'name':'touchstart',
        'description':'On Touch Start',
        'category':'Touch Events'
    },{ 
        'name':'touchend',
        'description':'On Touch End',
        'category':'Touch Events'
    },{ 
        'name':'touchcancel',
        'description':'On Touch Cancel',
        'category':'Touch Events'
    });

    Container.addLabel({
        'defaultValue': '',
        'position': 'top'
    });

    Container.setPanelStyle({
        'fClass': true, //This property is for the design panel
        'text': true,
        'textShadow': true,
        'dropShadow': true, 
        'innerShadow': true,
        'background': true,
        'border': true,
        'sizePosition': true,
        'label': true,
        'disabled': ['border-radius']
    });
});
