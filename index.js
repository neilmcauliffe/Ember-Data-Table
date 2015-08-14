/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-data-table',

  included: function(app){
    this._super.included(app);

    // app.import(app.bowerDirectory + '/ember-data-table/dist/ember-data-table.js');
  }
};
