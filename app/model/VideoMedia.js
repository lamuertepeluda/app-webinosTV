Ext.define('webinosTV.model.VideoMedia', {
    extend: 'webinosTV.model.Media',
    
    config: {
        fields: [
            { name: 'format', type: 'string' },
            { name: 'length', type: 'int' }
        ]
    }
});