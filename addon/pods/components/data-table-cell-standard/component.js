import Ember from 'ember';

export default Ember.Component.extend({

	// -----------------------------------------------------
    // Appearance: 
    // The table component attempts to follow bootstrap classes 
    // wherever possible
    // -----------------------------------------------------
    
    // Change default div tag to td
    //
	tagName: 'td',

	// Specifies the column definition to which the cell belongs
	//
	columnDefinition: undefined,

    // -----------------------------------------------------
    // State: 
    // -----------------------------------------------------

	// The record for the row to which the cell belongs
	// this should be updated to only get the cell content
	//
	record: undefined,

	// The content that is displayed in the cell
	//
	content: Ember.computed('record', function(){
		if(!Ember.isEmpty(this.get('columnDefinition.content')))
		{
			return this.get('record').get(this.get('columnDefinition.content'));
		}
	})
});
