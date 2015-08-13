module.exports = {
  description: 'ember-data-table'

  included: function(app){
    this._super.included(app);

    app.import('bower_components/ember-data-table/dist/ember-data-table.js');
  },

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
