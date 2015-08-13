import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  	// -----------------------------------------------------
    // Appearance: 
    // The table component attempts to follow bootstrap classes 
    // wherever possible
    // -----------------------------------------------------
    
    // Change default div tag to tr
    //
  	tagName: 'tr',
	
	// Specifies the column definition for the entire row
	//
  	columnDefinitions: undefined,

    // -----------------------------------------------------
    // State: 
    // -----------------------------------------------------

	// The record for the row.
	//
  	record: undefined,

  	// A unique key for each row, this may be an id value on the record
  	// or any user defined value as long as it is unique
  	//
  	rowKey: undefined
});
