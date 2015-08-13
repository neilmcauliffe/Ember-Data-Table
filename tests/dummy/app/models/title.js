import DS from 'ember-data';

var Title = DS.Model.extend({
  created: DS.attr('date'),
  type: DS.attr('string'),
  status: DS.attr('string'),
  retailer: DS.attr('string'),
  titlename: DS.attr('string'),
  description: DS.attr('string')
});

Title.reopenClass({
	FIXTURES: [
		{ id: 1, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '1 description'},
		{ id: 2, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '2 description'},
		{ id: 3, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '3 description'},
		{ id: 4, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '4 description'},
		{ id: 5, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '5 description'},
		{ id: 6, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '6 description'},
		{ id: 7, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '7 description'},
		{ id: 8, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '8 description'},
		{ id: 9, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '9 description'},
		{ id: 10, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '10 description'},
		{ id: 11, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '11 description'},
		{ id: 12, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '12 description'},
		{ id: 13, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '13 description'},
		{ id: 14, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '14 description'},
		{ id: 15, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '15 description'},
		{ id: 16, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '16 description'},
		{ id: 17, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '17 description'},
		{ id: 18, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '18 description'},
		{ id: 19, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '19 description'},
		{ id: 20, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '20 description'},
		{ id: 21, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '21 description'},
		{ id: 22, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '22 description'},
		{ id: 23, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '23 description'},
		{ id: 24, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '24 description'},
		{ id: 25, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '25 description'},
		{ id: 26, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '26 description'},
		{ id: 27, created: '10/10/2015', type: 'type', status: 'done', retailer: 'retailer', titlename: 'name', description: '27 description'}
	]
});

export default Title;