Ext.define('webinosTV.profile.Phone', {
  extend: 'Ext.app.Profile',
  //define any additional classes your Profile needs here
  config: {
    views: ['BrowserView', 'DeviceQueueColumn'],
    models: [],
    stores: [],
    controllers: ['SelectSourceDeviceController'],
    ratio: 23 / 460  //computed by hand: body font-size/document clientWidth on my PC
  },
  //this profile will be activated if we detect we're running on a Phone
  isActive: function(app) {
    return Ext.os.is.Phone; //WARNING this is either true or undefined, not false!!!
  },
  launch: function() {
    Ext.create('webinosTV.view.phone.BrowserView');
  }
});