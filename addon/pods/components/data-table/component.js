import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

    // -----------------------------------------------------
    // Appearance: 
    // The table component attempts to follow bootstrap classes 
    // wherever possible
    // -----------------------------------------------------
    
    // Set a fixed css class of type table
    //
    classNames: ['table'],

    // Depending on the configuration settings set css classes
    // as per bootstrap styling
    //
    classNameBindings: [
        'configuration.tableStriped:table-striped',
        'configuration.tableBordered:table-bordered',
        'configuration.tableCondensed:table-condensed',
        'configuration.tableHover:table-hover'
    ],

    // Change default div tag to table
    //
    tagName: 'table',


    // -----------------------------------------------------
    // State: 
    // -----------------------------------------------------

    // Configuration contains all necessary info to setup the table 
    // Configuration is a POJO that follows a specific schema defining columns
    // bindings behaviour etc.
    //
    configuration: null,

    // The full set of records passed to the table
    //
    records: undefined,

    // The current page of the component
    //
    number: 1,

    // The total number of records available, this includes records not yet retrieved from server
    //
    startIndex: Ember.computed('number', function() {
        var size = this.get('configuration.size');

        return (this.get('number') - 1) * size;
    }),

    // The total number of records available, this includes records not yet retrieved from server
    //
    total: Ember.computed(function() {
        if(Ember.isEmpty(this.get('records.meta')) && Ember.isArray(this.get('records')))
        {
            return this.get('records.length');
        }

        return this.get('records.meta').total;
    }),

    // The data set that will be displayed in the table
    //
    displayRecords: Ember.computed('records', 'number', function() {
        return  this.get('records').slice(this.get('startIndex'), this.get('startIndex') + this.get('configuration.size'));
    }),

    // Returns the list of column definitions from the configuration object
    //
    columnDefinitions: Ember.computed('configuration', function() {
        Ember.assert("Column definition must be greater than zero", Ember.isArray(this.get('configuration.columns')));
        return this.get('configuration.columns');
    }),

    // Returns true if there are records available to display else false
    //
    recordsAvailable: Ember.computed(function() {
        return (!Ember.isArray(this.get('records')) || Ember.isEmpty(this.get('records')) ? false : true);
    }),

    // Retuens the number of columns in the table including the hidden columns
    //
    columnCount: Ember.computed(function() {
        return this.get('columnDefinitions.length');
    }),
    actions: {
        updateRecords: function(page) {
            this.set('number', page);
        }
    },
});
