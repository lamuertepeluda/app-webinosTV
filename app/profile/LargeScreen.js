Ext.define('webinosTV.profile.LargeScreen', {
  extend: 'Ext.app.Profile',
  //define any additional classes your Profile needs here
  config: {
    views: ['BrowserView', 'DeviceQueueColumn'],
    models: [],
    stores: [],
    controllers: ['SelectSourceDeviceController'],
    ratio: 23 / 1680  //computed by hand: body font-size/document clientWidth on my SGS2
  },
  //this profile will be activated if we detect we're running on a LargeScreen
  isActive: function(app) {
    return (Ext.os.is.Desktop || Ext.os.is.Tablet); //WARNING this is either true or undefined, not false!!!
  },
  launch: function() {
    Ext.create('webinosTV.view.largescreen.BrowserView');
  }
});