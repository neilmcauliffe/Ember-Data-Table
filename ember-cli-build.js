/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.componentlocation = 'bower_components';

  // bootstrap
  app.import(app.componentlocation +'/bootstrap/dist/js/bootstrap.js');
  app.import(app.componentlocation +'/bootstrap/dist/css/bootstrap.css');

  return app.toTree();
};
