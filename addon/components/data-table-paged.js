import Ember from 'ember';

export default Ember.Component.extend({

	// -----------------------------------------------------
    // Appearance: 
    // The table component attempts to follow bootstrap classes 
    // wherever possible
    // -----------------------------------------------------

    // Sets up the table to be bootstrap responsive if it is specified in the settings
    //
	classNameBindings: ['settings.tableResponsive:table-responsive'],


    // -----------------------------------------------------
    // State: 
    // -----------------------------------------------------

    // The total number of records available, this includes records not yet retrieved from server
    //
    total: Ember.computed(function() {
        if(Ember.isEmpty(this.get('records.meta')) && Ember.isArray(this.get('records')))
        {
            return this.get('records.length');
        }

        return this.get('records.meta.count');
    }).volatile(),

    // The current page of the component
    //
    number: 1,

	// Records available to display
	//
  	records: undefined,

  	actions: {
        pageChanged: function(page) {
            if(Ember.isEmpty(this.get('records.meta')) && Ember.isArray(this.get('records')))
            {
                this.sendAction('pageChanged', page);
            }

            this.set('number', page);
        }
    }
});
