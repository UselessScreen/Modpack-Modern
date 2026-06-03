TFCEvents.worldgenData(event => {
    // event.simpleBlockState('wild_cannabis_placement', 'psychedelicraft:cannabis', placement => {
    event.simpleBlockState('wild_cannabis_placement', 'psychedelicraft:cannabis[age=0,growing=false,natural=true]', placement => {
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
                    Name: 'psychedelicraft:cannabis',
                    Properties: {
                        age: '0',
                        growing: 'false',
                        natural: 'true'
                    }
                }
            }
        })
    })

    event.randomPatch('wild_cannabis_patch', 30, 15, 4, 'kubejs_tfc:wild_cannabis_placement', placement => {
        placement.rarityFilter(10)
        placement.inSquare()
        placement.climate(climate => {
            climate.minTemp(0)
            climate.maxTemp(100)
            climate.minRain(0)
            climate.maxRain(400)
            climate.maxForest('normal')
        })
    })
})
ServerEvents.tags('worldgen/placed_feature', event => {
    event.add('tfc:feature/crops', 'kubejs_tfc:wild_cannabis_patch')
})