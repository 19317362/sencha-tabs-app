Ext.define('TabsTask.view.tabs.MyTabs', {
	extend: 'Ext.tab.Panel',

	requires: [
		'Ext.plugin.Viewport',

		'TabsTask.view.tabs.TabsModel',
		'TabsTask.view.tabs.TabsController'
	],

	viewModel: 'tabsmodel',

	referenceHolder: true,

	defaults: {
		xtype: 'panel'
	},

	bodyPadding: 20,
	items: [
		{
			id: 'firstTab',
			title: 'One',
			items: [
				{
					xtype: 'combobox',
					margin: '0 0 20 0',
					fieldLabel: 'Choose color',
					reference: 'color',
					autoSelect: true,
					forceSelection: true,
					editable: false,
					displayField: 'color',
					valueField: 'color',
					store: {
						type: 'colors'
					},
					// bind: {
					// 	store: {
					// 		type: '{colors}',
					// 		value: '{color}'
					// 	}
					// },
					queryMode: 'local',
					publishes: '{value}'
					// publishes: 'value',
					// handler: 'onSelectedColor'

					
				}, {
					xtype: 'textarea',
					fieldLabel: 'Enter Some HTML',
					emptyText: 'HTML code goes here',
					bind: '{boxContent}'
				}
			]
		}, {
			id: 'secondTab',
			title: 'Two',
			items: [
				{
					xtype: 'button',
					text: 'colored button',
					bind: {
						style: {
							backgroundColor: '{color.selection}'
							// backgroundColor: '{color.value }'
							// backgroundColor: '{value}'
							// backgroundColor: '{colors.color}'
						}
					},
					scale: 'medium'
					/*
					listeners: {
						// watch the color change in the combo box
						scope: 'controller',
						tabchange: 'onTabChange'
					},
					*/
				}
			]
		}, {
			id: 'thirdTab',
			title: 'Three',
			bind: {
				html: '{boxContent}'
			}
		}
	]
});