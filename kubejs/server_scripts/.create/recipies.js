ServerEvents.recipes(event => {
    event.shaped(
    Item.of('createbigcannons:casting_sand', 2),
    [
        'AB ',
        'BA ',
        '   '
    ],
    {
        B: 'tfc:sand/white',
        A: 'minecraft:clay_ball', 
    }
    )

    event.shaped(
    Item.of('createbigcannons:very_small_cast_mould'),
    [
        ' A ',
        ' A ',
        ' A '
    ],
    {
        A: 'tfc:stick_bunch', 
    }
    )
    event.shaped(
    Item.of('createbigcannons:autocannon_barrel_cast_mould'),
    [
        ' A ',
        ' A ',
        ' A '
    ],
    {
        A: 'forge:rods/woood', 
    }
    )
    event.shaped(
    Item.of('createbigcannons:autocannon_recoil_spring_cast_mould'),
    [
        ' A ',
        ' A ',
        ' B '
    ],
    {
        A: 'forge:rods/woood',
        B: 'gtceu:small_wooden_gear'
    }
    )
    event.shaped(
    Item.of('createbigcannons:autocannon_breech_cast_mould'),
    [
        ' A ',
        ' A ',
        ' B '
    ],
    {
        A: '#forge:rods/woood',
        B: 'gtceu:wood_gear'
    }
    )
    event.shaped(
    Item.of('createbigcannons:small_cast_mould'),
    [
        ' A ',
        ' A ',
        ' A '
    ],
    {
        A: '#minecraft:fences', 
    }
    )
    event.shaped(
    Item.of('createbigcannons:medium_cast_mould'),
    [
        ' A ',
        ' A ',
        ' A '
    ],
    {
        A: 'tfc:stick_bundle', 
    }
    )
    event.shaped(
    Item.of('createbigcannons:large_cast_mould'),
    [
        ' A ',
        ' A ',
        ' A '
    ],
    {
        A: '#tfc:lumber', 
    }
    )
    event.shaped(
    Item.of('createbigcannons:very_large_cast_mould'),
    [
        ' A ',
        ' A ',
        ' A '
    ],
    {
        A: '#minecraft:logs', 
    }
    )
    event.shaped(
    Item.of('createbigcannons:cannon_end_cast_mould'),
    [
        ' A ',
        ' A ',
        ' B '
    ],
    {
        A: '#minecraft:logs',
        B: '#minecraft:fences'
    }
    )
    event.shaped(
    Item.of('createbigcannons:sliding_breech_cast_mould'),
    [
        ' A ',
        ' B ',
        ' A '
    ],
    {
        A: '#minecraft:logs',
        B: '#minecraft:planks'
    }
    )
    event.shaped(
    Item.of('createbigcannons:screw_breech_cast_mould'),
    [
        ' A ',
        ' B ',
        ' B '
    ],
    {
        A: '#minecraft:logs',
        B: 'gtceu:small_wooden_gear'
    }
    )






    //sound of steam
    event.shaped(
    Item.of('pipeorgans:prestant'),
    [
        'DBE',
        ' A ',
        ' C '
    ],
    {
        A: 'create:zinc_ingot',
        B: 'vintageimprovements:zinc_sheet',
        C: 'pipeorgans:base',
        D: '#forge:tools/saws',
        E: '#forge:tools/hammers'
    }
    )

    event.shaped(
    Item.of('pipeorgans:english_horn'),
    [
        'DBE',
        ' A ',
        ' C '
    ],
    {
        A: 'pipeorgans:iron_boot',
        B: 'gtceu:wrought_iron_plate',
        C: 'pipeorgans:base',
        D: '#forge:tools/saws',
        E: '#forge:tools/hammers'
    }
    )

    event.shaped(
    Item.of('pipeorgans:rohrflote'),
    [
        'CAD',
        ' A ',
        ' B '
    ],
    {
        A: 'gtceu:wrought_iron_ingot',
        B: 'pipeorgans:base',
        C: '#forge:tools/saws',
        D: '#forge:tools/hammers'
    }
    )
    event.shaped(
    Item.of('pipeorgans:hohlflute'),
    [
        'DBE',
        ' B ',
        ' C '
    ],
    {
        B: '#tfc:lumber',
        C: 'pipeorgans:base',
        D: '#forge:tools/saws',
        E: '#forge:tools/hammers'
    }
    )
    event.shaped(
    Item.of('pipeorgans:viola'),
    [
        'DAE',
        ' B ',
        ' C '
    ],
    {
        A: '#tfg:hardwood',
        B: 'minecraft:iron_ingot',
        C: 'pipeorgans:base',
        D: '#forge:tools/saws',
        E: '#forge:tools/hammers'
    }
    )
    event.shaped(
    Item.of('pipeorgans:vox_celeste'),
    [
        'DBE',
        ' B ',
        ' C '
    ],
    {
        B: 'minecraft:iron_ingot',
        C: 'pipeorgans:base',
        D: '#forge:tools/saws',
        E: '#forge:tools/hammers'
    }
    )
    event.shaped(
    Item.of('pipeorgans:haunted_whistle'),
    [
        'DBE',
        ' B ',
        ' C '
    ],
    {
        B: 'minecraft:nether_bricks',
        C: 'pipeorgans:base',
        D: '#forge:tools/saws',
        E: '#forge:tools/hammers'
    }
    )

	event.recipes.tfc.anvil('pipeorgans:iron_boot', 'gtceu:double_wrought_iron_plate', ['bend_last', 'shrink_second_last', 'shrink_third_last'])
		.tier(3)
		.id('tfc:anvil/pipe_iron_boot')
})