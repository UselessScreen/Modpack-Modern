TFCEvents.worldgenData(event => {

    function add_psych_crop (event, name, block, properties, [tries, xzSpread, ySpread], placement) {
        const pairs = Object.entries(properties).map(([key, value]) => `${key}=${value}`)
        let blockstate = String(`${block}[${pairs.join(',')}]`)
        console.warn("[GOONblockstate] "+blockstate)
        console.warn("[GOONname] "+name)
        

        event.simpleBlockState(name+"_placement", blockstate, placement => {
            placement.heightMap('world_surface_wg')
            placement.jsonPlacement({
                type: 'block_predicate_filter',
                predicate: { type: 'tfc:replaceable' }
            })
            placement.jsonPlacement({
                type: 'block_predicate_filter',
                predicate: {
                    type: 'would_survive',
                    state: {
                        Name: name,
                        Properties: properties
                    }
                }
            })
        })

        event.randomPatch(name+'_patch', tries, xzSpread, ySpread, `kubejs_tfc:${name}_placement`, placement)
    }
//#region add them
    add_psych_crop(
        event,
        'wild_cannabis',
        'psychedelicraft:cannabis',
        {
            age: '5',
            growing: 'true',
            natural: 'true'
        },
        [30, 15, 4],
        placement => {
            placement.rarityFilter(40)
            placement.inSquare()
            placement.climate(climate => {
                climate.minTemp(0)
                climate.maxTemp(27)
                climate.minRain(150)
                climate.maxRain(400)
                climate.maxForest('edge')
            })
        }
    )
    add_psych_crop(
        event,
        'wild_coffea',
        'psychedelicraft:coffea',
        {
            age: '5',
            growing: 'true',
            natural: 'true',
            top: 'false'
        },
        [30, 15, 4], //change these ([tries, xzSpread, ySpread]) and all of the other stuff
        placement => {
            placement.rarityFilter(25)
            placement.inSquare()
            placement.climate(climate => {
                climate.minTemp(15)
                climate.maxTemp(30)
                climate.minRain(250)
                climate.maxRain(600)
                climate.minForest('normal')
            })
        }
    )
    add_psych_crop(
        event,
        'wild_tobacco',
        'psychedelicraft:tobacco',
        {
            age: '5',
            growing: 'true',
            natural: 'true',
            top: 'false'
        },
        [30, 15, 4], //change these ([tries, xzSpread, ySpread]) and all of the other stuff
        placement => {
            placement.rarityFilter(50)
            placement.inSquare()
            placement.climate(climate => {
                climate.minTemp(20)
                climate.maxTemp(30)
                climate.minRain(250)
                climate.maxRain(500)
                climate.maxForest('edge')
            })
        }
    )
    add_psych_crop(
        event,
        'wild_coca',
        'psychedelicraft:coca',
        {
            age: '5',
            growing: 'true',
            natural: 'true'
        },
        [30, 15, 4],
        placement => {
            placement.rarityFilter(30)
            placement.inSquare()
            placement.climate(climate => {
                climate.minTemp(17)
                climate.maxTemp(27)
                climate.minRain(300)
                climate.maxRain(600)
                climate.maxForest('normal')
            })
        }
    )
    add_psych_crop(
        event,
        'wild_hop',
        'psychedelicraft:hop',
        {
            age: '5',
            growing: 'true',
            natural: 'true'
        },
        [30, 15, 4],
        placement => {
            placement.rarityFilter(40)
            placement.inSquare()
            placement.climate(climate => {
                climate.minTemp(8)
                climate.maxTemp(19)
                climate.minRain(100)
                climate.maxRain(250)
                climate.maxForest('edge')
            })
        }
    )
    add_psych_crop(
        event,
        'wild_belladonna',
        'psychedelicraft:belladonna',
        {
            age: '5'
        },
        [30, 15, 4],
        placement => {
            placement.rarityFilter(25)
            placement.inSquare()
            placement.climate(climate => {
                climate.minTemp(8)
                climate.maxTemp(18)
                climate.minRain(125)
                climate.maxRain(275)
                climate.minForest('normal')
            })
        }
    )
    add_psych_crop(
        event,
        'wild_jimsonweed',
        'psychedelicraft:jimsonweed',
        {
            age: '5'
        },
        [30, 15, 4],
        placement => {
            placement.rarityFilter(25)
            placement.inSquare()
            placement.climate(climate => {
                climate.minTemp(18)
                climate.maxTemp(35)
                climate.minRain(125)
                climate.maxRain(250)
                climate.maxForest('edge')
            })
        }
    )
//#endregion
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_cannabis_patch')
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_coffea_patch')
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_tobacco_patch')
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_coca_patch')
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_hop_patch')
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_belladonna_patch')
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_jimsonweed_patch')
})