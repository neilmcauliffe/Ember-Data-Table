/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-data-table',

  blueprintsPath: function(){
  	return path.join(__dirname, 'blueprints');
  },
  included: function(app){
    this._super.included(app);

    app.import('bower_components/ember-data-table/dist/ember-data-table.js');
  }
};
