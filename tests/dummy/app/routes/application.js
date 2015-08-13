import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        var conf =  {
            // Makes table more compact by cutting cell padding in half
            //
            tableCondensed: false,

            // Adds zebra-striping to any table row within <tbody> (not available in IE8)
            //
            tableStriped: true,

            // Adds border on all sides of the table and cells
            //
            tableBordered: true,

            // Enables a hover state on table rows within a <tbody>
            //
            tableHover: false,

            // The .table-responsive class creates a responsive table. 
            // The table will then scroll horizontally on small devices (under 768px).
            //
            tableResponsive: true,

            // Enable pagination if this is false no paging control is displayed
            // 
            paginationEnabled: true,

            // Show the pagination control as a pager (no page numbers)
            //
            isPager: false,

            // Shows a link to first and last page on the pager control
            // 
            showFirstLast: true,

            // Specify the number of records to show on a page
            // 
            size: 10,

            // Specify the number of links to display on the pagination control
            //
            displayPages: 5,

            // An array of column-definition objects specifying the coulumns of the table
            //
            columns: [{
                visible: true,
                title: "Created",
                content: "created",
                rowKeyBinding: null,
                showRowKey: false,
                template: null
            }, {
                visible: true,
                title: "Type",
                content: "type",
                rowKeyBinding: null,
                showRowKey: false,
                template: null
            }, {
                visible: true,
                title: "Status",
                content: "status",
                rowKeyBinding: null,
                showRowKey: false,
                template: null
            }, {
                visible: true,
                title: "Retailer",
                content: "retailer",
                rowKeyBinding: null,
                showRowKey: false,
                template: null
            }, {
                visible: true,
                title: "Title Name",
                content: "titlename",
                rowKeyBinding: null,
                showRowKey: false,
                template: null
            }, {
                visible: true,
                title: "Description",
                content: "description",
                rowKeyBinding: null,
                showRowKey: false,
                template: null
            }, {
                visible: true,
                title: "Actions",
                content: "",
                rowKeyBinding: null,
                showRowKey: false,
                template: null
            }],
            rows: {

            },
            cell: {

            }
        };


        return Ember.RSVP.hash({
            titledata: this.get('store').find('title'),
            tableSettings: conf
        });
    }
});