// priority: 0
"use strict";

TFCEvents.worldgenData(event => {
	event.forestEntry('psychedelicraft:juniper_forest_entry',
		climate => {
			climate.maxTemp(50)
			climate.minTemp(10)
			climate.minRain(1)
			climate.fuzzy(true)
		},
		'psychedelicraft:juniper_wood', // bush log
		'psychedelicraft:juniper_leaves', // bush leaves
		'psychedelicraft:juniper_log', // fallen log
		'beneath:wood/fallen_leaves/crimson', // fallen leaves
		[ // ground cover
			'tfg:fake_sapling/crimson',
			'beneath:wood/fallen_leaves/crimson',
			'beneath:wood/twig/crimson',
			'tfg:groundcover/wraptor_feather',
			'tfg:groundcover/glider_feather'
		],
		'psychedelicraft:earth/tree/juniper', // tree feature
		'psychedelicraft:earth/tree/juniper_dead', // dead tree feature
		'psychedelicraft:earth/tree/juniper', // old growth tree feature
		null, // krummholz
		null, // chance for old growth
		null, // chance for old growth in non-old growth forests
		null, // chance for a fallen tree
		null, // chance for a dead tree
		null, // false (default) to spawn with the ocean floor heightmap, true for world surface
		placement => {}
	)
})

ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:feature/forest_entries', 'psychedelicraft:juniper_forest_entry')
})