Ext.define('webinosTV.model.Category', {
  extend: 'Ext.data.Model',
  alternateClassName: ['webinosCategory'],
  config: {
    fields: [
      {name: 'id', type: 'string'},
      {name: 'category', type: 'string'},
      {name: 'mediaCategoryName', type: 'string'}
    ]
  }
});