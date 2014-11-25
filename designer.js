(function(Container) {
    "use strict";

    Container.addEvents({ 
        'name':'click', 
        'category':'Mouse Events' 
    },{ 
        'name':'dblclick', 
        'category':'Mouse Events'
    },{ 
        'name':'mousedown', 
        'category':'Mouse Events'
    },{ 
        'name':'mouseout',
         'category':'Mouse Events'
    },{ 
        'name':'mouseover',
        'category':'Mouse Events'
    },{ 
        'name':'mouseup',
        'category':'Mouse Events'
    },{ 
        'name':'startResize',
        'category':'Resize'
    },{ 
        'name':'onResize',
        'category':'Resize'
    },{ 
        'name':'stopResize',
        'category':'Resize'
    },{ 
        'name':'touchstart',
        'category':'Touch Events'
    },{ 
        'name':'touchend',
        'category':'Touch Events'
    },{ 
        'name':'touchcancel',
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
