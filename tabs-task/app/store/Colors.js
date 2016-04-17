Ext.define('TabsTask.store.Colors', {
	extend: 'Ext.data.Store',
	alias: 'store.colors',
	fields: ['color'],
	data: [
		{ color: 'red' },
		{ color: 'green' },
		{ color: 'blue' }
	]

});

// var colors = Ext.create('Ext.data.Store', {
// 	fields: ['color'],
// 	data: [
// 		{ color: 'red' },
// 		{ color: 'green' },
// 		{ color: 'blue' }
// 	]
// });