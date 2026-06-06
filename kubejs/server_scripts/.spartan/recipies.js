ServerEvents.recipes(event => {
    event.remove({output:'#spartanweaponry:oilable_weapons'})
    event.remove({output:'#spartanweaponry:javelins'})

    event.shaped(
    Item.of('spartanweaponry:steel_longbow'),
    [
        'ABC',
        'B D',
        'CDD'
    ],
    {
        B: 'spartanweaponry:handle',
        A: '#forge:rods/wooden', 
        C: 'gtceu:steel_ingot',
        D: '#c:string'
    }
    )

    event.shaped(
    Item.of('spartanweaponry:steel_heavy_crossbow'),
    [
        'CAC',
        'DED',
        ' B '
    ],
    {
        B: 'spartanweaponry:handle',
        A: 'minecraft:bow', 
        C: 'gtceu:steel_ingot',
        D: '#minecraft:planks',
        E: 'minecraft:tripwire_hook'
    }
    )

    event.shaped(
        Item.of('spartanweaponry:steel_throwing_knife'),
        [
            '   ',
            'AB ',
            '   '
        ],
        {
            A: '#spartanweaponry:handles',
            B: 'gtceu:steel_ingot'
        }
    )

    event.shaped(
        Item.of('spartanweaponry:steel_tomahawk'),
        [
            'AB ',
            ' B ',
            '   '
        ],
        {
            A: '#spartanweaponry:handles',
            B: 'gtceu:steel_ingot'
        }
    )

    event.shaped(
        Item.of('spartanweaponry:steel_boomerang'),
        [
            'BAA',
            'A  ',
            'A  '
        ],
        {
            A: '#minecraft:planks',
            B: 'gtceu:steel_ingot'
        }
    )

    event.shaped(
        Item.of('musketmod:musket_with_bayonet'),
        [
            'AB ',
            'CD ',
            '   '
        ],
        {
            A: 'gtceu:wrought_iron_knife',
            B: 'tfc_items:wrought_iron_rivet',
            C: 'tfc_items:wrought_iron_ring',
            D: 'musketmod:musket'
        }
    )

    event.remove({input:'tfc:metal/knife_blade/wrought_iron'})
})