Ext.define('webinosTV.model.AudioMedia', {
  extend: 'webinosTV.model.Media',
  config: {
    fields: [
      {name: 'artist', type: 'string'},
      {name: 'album', type: 'string'}
    ]
  }
});