Ext.define('webinosTV.model.Media', {
  extend: 'Ext.data.Model',
  alternateClassName: 'webinosMedia',
  config: {
    fields: [
      {name: 'id', type: 'string'},
      {name: 'title', type: 'string'},
      {name: 'file', type: 'string'},
      {name: 'meta', type: 'auto'},
      {name: 'type', type: 'string'}
    ]
  }
});