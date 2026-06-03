ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator('trinitite_dust')
        .itemInputs('crusty_chunks:trinitite')
        .itemOutputs('tfg:trinitite_dust')
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.centrifuge('trinitite_dust_centrifuge')
        .itemInputs('23x tfg:trinitite_dust')
        .itemOutputs('22x gtceu:stone_dust')
        .itemOutputs('1x gtceu:small_gold_dust')
        .itemOutputs('1x gtceu:small_quartzite_dust')
        .itemOutputs('1x gtceu:small_potassium_feldspar_dust')
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.rock_breaker('trinitite_gen')
        .notConsumable('crusty_chunks:trinitite')
        .itemOutputs('crusty_chunks:trinitite')
        .duration(10)
        .EUt(5)

    event.recipes.gtceu.macerator('radioactive_ash_dust')
        .itemInputs('crusty_chunks:radioactive_ash_full_block')
        .itemOutputs('tfg:radioactive_ash_dust')
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.centrifuge('radash_dust_centrifuge')
        .itemInputs('19x tfg:radioactive_ash_dust')
        .itemOutputs('18x gtceu:stone_dust')
        .itemOutputs('1x tfg:tiny_nuclear_residue_dust')
        .itemOutputs('3x gtceu:tiny_uraninite_dust')
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.rock_breaker('radash_gen')
        .notConsumable('crusty_chunks:radioactive_ash_full_block')
        .itemOutputs('crusty_chunks:radioactive_ash_full_block')
        .duration(10)
        .EUt(5)
    event.recipes.gtceu.mixer('smoke_formula')
        .itemInputs('gtceu:sodium_bicarbonate_dust')
        .itemInputs('minecraft:sugar')
        .itemOutputs('2x tfg:smoke_formula_dust')
        .duration(200)
        .EUt(30)

    //#region Crafting table recipies

    event.shaped(
    Item.of('crusty_chunks:grenade'),
    [
        ' A ',
        'BCB',
        ' D '
    ],
    {
        A: 'gtceu:small_steel_gear',
        B: 'gtceu:steel_plate',
        C: 'minecraft:gunpowder',
        D: 'gtceu:steel_rod'
    })

    event.shaped(
    Item.of('crusty_chunks:incendiary_grenade'),
    [
        ' A ',
        'BCB',
        ' D '
    ],
    {
        A: 'gtceu:small_steel_gear',
        B: 'gtceu:steel_plate',
        C: 'gtceu:phosphorous_dust',
        D: 'gtceu:steel_rod'
    })

    event.shaped(
    Item.of('crusty_chunks:smoke_grenade'),
    [
        ' A ',
        'BCB',
        ' D '
    ],
    {
        A: 'gtceu:small_steel_gear',
        B: 'gtceu:steel_plate',
        C: 'tfg:smoke_formula_dust',
        D: 'gtceu:steel_rod'
    })

    event.remove({output: '#crusty_chunks:mass1'})

    event.shaped(
    Item.of('crusty_chunks:explosive_barrel'),
    [
        'A A',
        'ABA',
        'AAA'
    ],
    {
        A: '#tfc:lumber',
        B: 'minecraft:gunpowder',
    })

    event.remove({input: 'crusty_chunks:volatile_dust'})

    event.shaped(
    Item.of('crusty_chunks:impact_fuze'),
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        A: 'gtceu:steel_rod',
        B: 'minecraft:gunpowder',
        C: 'minecraft:flint',
    })

    event.shaped(
    Item.of('crusty_chunks:gas_bomb'),
    [
        ' A ',
        'CBC',
        ' D '
    ],
    {
        A: 'crusty_chunks:impact_fuze',
        B: 'gtceu:arsenic_dust',
        C: 'gtceu:steel_plate',
        D: 'gtceu:steel_rod'
    })

    event.remove({input: 'crusty_chunks:toxic_agent'})

    event.shaped(
    Item.of('crusty_chunks:small_bomb'),
    [
        ' A ',
        'CBC',
        ' D '
    ],
    {
        A: 'crusty_chunks:impact_fuze',
        B: 'gtceu:gunpowder',
        C: 'gtceu:steel_plate',
        D: 'gtceu:steel_rod'
    })

    event.shaped(
    Item.of('crusty_chunks:redstone_tnt'),
    [
        ' A ',
        'CBC',
        'CBC'
    ],
    {
        A: 'crusty_chunks:impact_fuze',
        B: 'gtceu:gunpowder',
        C: 'gtceu:steel_plate',
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_core'),
    [
        'A A',
        'BCB',
        'A A'
    ],
    {
        A: 'gtceu:steel_plate',
        B: 'gtceu:steel_rod',
        C: 'gtceu:circuits/mv',
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_thruster'),
    [
        'BCB',
        'ADA',
        'A A'
    ],
    {
        A: 'gtceu:steel_plate',
        B: 'vintageimprovements:aluminum_sheet',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:power_thruster'
    })

    event.shaped(
    Item.of('crusty_chunks:torpedo_thruster'),
    [
        'BCB',
        'ADA',
        'A A'
    ],
    {
        A: 'gtceu:steel_plate',
        B: 'vintageimprovements:aluminum_sheet',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_electric_motor'
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_fins'),
    [
        'C C',
        'A A',
        'CCC'
    ],
    {
        A: 'vintageimprovements:aluminum_sheet',
        C: 'gtceu:steel_plate',
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_heavy_warhead'),
    [
        ' A ',
        'CBC',
        'DBD'
    ],
    {
        A: 'crusty_chunks:impact_fuze',
        B: 'gtceu:gunpowder',
        C: 'gtceu:steel_plate',
        D: 'vintageimprovements:aluminum_sheet'
    })

    event.remove({input: 'crusty_chunks:bent_component'})

    event.shaped(
    Item.of('crusty_chunks:ordinance_incendiary_warhead'),
    [
        ' A ',
        'CBC',
        'DBD'
    ],
    {
        A: 'crusty_chunks:impact_fuze',
        B: 'gtceu:phosphorus_dust',
        C: 'gtceu:steel_plate',
        D: 'vintageimprovements:aluminum_sheet'
    })
    
    event.shaped(
    Item.of('crusty_chunks:ordinance_inline_warhead'),
    [
        'DBD',
        'CBC',
        'DBD'
    ],
    {
        A: 'crusty_chunks:impact_fuze',
        B: 'gtceu:gunpowder',
        C: 'gtceu:steel_plate',
        D: 'vintageimprovements:aluminum_sheet'
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_kinetic_head'),
    [
        ' A ',
        'CBC',
        'ADA'
    ],
    {
        A: 'gtceu:steel_ingot',
        B: 'crusty_chunks:ordinance_heavy_warhead',
        C: 'gtceu:steel_plate',
        D: 'gtceu:steel_rod'
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_ir_seeker_head'),
    [
        ' E ',
        'CBC',
        'ADA'
    ],
    {
        A: '#gtceu:circuits/hv',
        B: 'tfc:lens',
        C: 'gtceu:titanium_plate',
        D: 'crusty_chunks:redstone_tnt',
        E: 'gtceu:exquisite_sodalite_gem'
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_sarh_seeker'),
    [
        'AEA',
        'CBC',
        '   '
    ],
    {
        A: '#gtceu:circuits/hv',
        B: 'crusty_chunks:redstone_tnt',
        C: 'gtceu:titanium_plate',
        E: 'ad_astra:radio'
    })

    event.remove({input: 'crusty_chunks:advanced_component'})

    event.shaped(
    Item.of('crusty_chunks:ordinance_cluster_warhead'),
    [
        'ABA',
        'A A',
        '   '
    ],
    {
        A: 'gtceu:steel_plate',
        B: 'crusty_chunks:cluster_of_bombs',
    })

    event.shaped(
    Item.of('crusty_chunks:fission_bomb'),
    [
        'ABA',
        'C C',
        'ABA'
    ],
    {
        A: 'gtceu:lead_block',
        B: 'crusty_chunks:shielding_component',
        C: '#gtceu:circuits/hv'
    })

    event.shaped(
    Item.of('crusty_chunks:shielding_component'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        B: 'gtceu:lead_block',
        A: 'gtceu:steel_ingot',
        C: 'crusty_chunks:neutron_reflector'
    })

    event.shaped(
    Item.of('crusty_chunks:neutron_reflector'),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: 'gtceu:beryllium_ingot',
        B: 'gtceu:steel_plate',
    })

    event.remove({input: 'crusty_chunks:steel_ingot'})
    event.remove({input: 'crusty_chunks:steel_plate'})

    event.shaped(
    Item.of('crusty_chunks:ordinance_inline_fission_warhead'),
    [
        ' A ',
        'ABA',
        'CDC'
    ],
    {
        A: 'gtceu:titanium_plate',
        B: 'crusty_chunks:fission_bomb',
        C: '#gtceu:circuits/hv',
        D: 'minecraft:redstone_repeater'
    })

    event.shaped(
    Item.of('crusty_chunks:ordinance_fission_initiator_head'),
    [
        ' B ',
        'ACA',
        'ADA'
    ],
    {
        A: 'gtceu:titanium_plate',
        B: 'crusty_chunks:impact_fuze',
        C: 'minecraft:gunpowder',
        D: 'gtceu:beryllium_ingot'
    })

    event.shaped(
    Item.of('crusty_chunks:fission_core'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'gtceu:titanium_plate',
        B: 'crusty_chunks:shielding_component',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:uranium_235_ingot'
    })

    event.shaped(
    Item.of('crusty_chunks:implosion_lens'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'gtceu:titanium_plate',
        B: 'gtceu:beryllium_ingot',
        C: 'minecraft:gunpowder',
        D: 'gtceu:uranium_235_ingot'
    })

    event.shaped(
    Item.of('crusty_chunks:land_mine'),
    [
        ' A ',
        ' C ',
        'B B'
    ],
    {
        A: 'gtceu:small_steel_gear',
        B: 'gtceu:steel_plate',
        C: 'minecraft:gunpowder',
    })
    //#endregion
});