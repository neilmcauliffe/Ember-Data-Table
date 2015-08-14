import Ember from 'ember';

export default Ember.Component.extend({

    // -----------------------------------------------------
    // Appearance: 
    // The pager component attempts to follow bootstrap classes 
    // wherever possible
    // -----------------------------------------------------

    // To use a html tag other than div set it here
    //
    tagName: 'ul',

    // Sets up the component to be a full pagination control or pager, Default: pager
    //
    classNameBindings: ['isPager:pager:pagination'],

    // Text to be displayed on the next link, Default: Next
    //
    nextText: 'Next',

    // Text to be displayed on the previous link, Default: Previous
    //
	previousText: 'Previous',

    // Text to be displayed on the first link, Default: First
    //
    firstText: 'First',

    // Text to be displayed on the last link, Default: Last
    //
    lastText: 'Last',

    // Sets the number of pages to be visible when using full pagination, Default: 10
    //
    _displayPages: undefined,
    displayPages: Ember.computed('_displayPages', {
        get(key) {
            return Ember.isEmpty(this.get('_displayPages')) ? 10 : this.get('_displayPages');
        },
        set(key, value) {
            this.set('_displayPages', value);   
        }
    }).volatile(),

    // Show links to the first page and last page when not in pager mode
    //
    showFirstLast: true,

    // -----------------------------------------------------
    // Behaviour: 
    // -----------------------------------------------------

    // Sets the component to display full pagination control or pager control, Default: false
    //
    isPager: false,

    // Sets the state of the component, if no size is available then the pager is disabled
    // No size may be available if the data set is small and should be displayed without paging
    //
    enabled: Ember.computed('size', function() {
        return !Ember.isEmpty('size');
    }),

    // -----------------------------------------------------
    // State: 
    // -----------------------------------------------------

    // Returns the total number of pages available given the size of the page 
    // and the total records found
    //
    totalPages: Ember.computed('number', 'size', 'total', function() {
        return Math.ceil(this.get('total') / this.get('size'));
    }),

    // The current page of the component
    //
    number: 1,

    // The size each page should be
    //
    size: undefined,

    // The total number of records available, this includes records not yet retrieved from server
    //
    total: undefined,

    // Returns a value if the user can naviagate to the next page
    //
    navigateNext: Ember.computed('number', 'size', 'total', function() {
        return (this.get('number') < this.get('totalPages') || !this.get('enabled') ? true : false);
    }),

    // Returns a value if the user can naviagate to the previous page
    //
    navigatePrevious: Ember.computed('number', 'size', 'total', function() {
        return (this.get('number') !== 1 || !this.get('enabled') ? true : false);
    }),
    visiblePages: Ember.computed('number', 'size', 'total', function () {
        var pages = Ember.A([]);

        if(this.get('total') < this.get('size')){
            return pages;
        }

        var half = Math.floor(this.get('displayPages') / 2);
        var firstDisplayPage = this.get('number') - half + 1 - this.get('displayPages') % 2;
        var lastDisplayPage = this.get('number') + half;

        if (firstDisplayPage <= 0) {
            firstDisplayPage = 1;
            lastDisplayPage = this.get('displayPages');
        }
        if (lastDisplayPage > this.get('totalPages')) {
            lastDisplayPage = this.get('totalPages');
        }

        var pageCounter = firstDisplayPage;
        while (pageCounter <= lastDisplayPage) {
            pages.push(pageCounter);
            pageCounter++;
        }

        return pages;
    }),
    actions: {
        nextPage: function() {
            if (this.get('navigateNext')) {
                this.send('gotoPage', this.get('number') + 1);
            }
        },
        previousPage: function() {
            if (this.get('navigatePrevious')) {
                this.send('gotoPage', this.get('number') -1);
            } 
        },
        first: function() {
            this.send('gotoPage', 1);
        },
        last: function() {
            this.send('gotoPage', this.get('totalPages'));
        },
        gotoPage: function(page) {
            this.set('number', page);
            this.sendAction('pageChanged', page);
            this._log('goToPage');
        }
    },
    didInsertElement: function() {
         // this._log('didInsertElement');
    },
    _log: function(source){
        // Log to console for debug:
        //
        console.log('---------------------------');
        console.log('Source: '+ source);
        console.log('Current Page: '  + this.get('number'));
        console.log('Page size: '  + this.get('size'));
        console.log('Total: '  + this.get('total'));
        console.log('Display Pages: '  + this.get('displayPages'));
        console.log('---------------------------');
    }
});