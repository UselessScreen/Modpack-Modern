//food conversions

ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('psychedelicraft:tomato'),
        [
            'tfc:food/tomato',
        ]
    )
    event.shapeless(
        Item.of('psychedelicraft:wine_grapes'),
        [
            '#firmalife:foods/grapes',
        ]
    )

    event.remove({output: 'psychedelicraft:tomato_seeds', type: 'minecraft:crafting_shapeless'})
})

//total gregification

ServerEvents.recipes(event => {
    event.shaped(
    Item.of('psychedelicraft:drying_table'),
    [
        'ABA',
        'BCB',
        '   '
    ],
    {
        B: '#tfc:lumber',
        A: 'gtceu:wrought_iron_plate', 
        C: 'minecraft:redstone'
    }
    )

    event.shaped(
    Item.of('psychedelicraft:iron_drying_table'),
    [
        'ABA',
        'BCB',
        '   '
    ],
    {
        B: '#tfc:lumber',
        A: 'gtceu:steel_plate', 
        C: 'minecraft:redstone'
    }
    )

    event.remove({output: 'psychedelicraft:iron_drying_table', input: 'minecraft:iron_ingot'})
    event.remove({output: 'psychedelicraft:drying_table', input: '#minecraft:planks'})


    event.shaped(
    Item.of('psychedelicraft:flask'),
    [
        ' A ',
        'ABA',
        'AAA'
    ],
    {
        A: 'gtceu:bronze_ingot',
        B: '#forge:glass_panes'
    }
    )
    event.shaped(
    Item.of('psychedelicraft:distillery'),
    [
        'AA ',
        'B  ',
        '   '
    ],
    {
        A: 'gtceu:bronze_ingot',
        B: 'psychedelicraft:flask'
    }
    )

    event.remove({output: 'psychedelicraft:flask', input: 'minecraft:copper_ingot'})
    event.remove({output: 'psychedelicraft:distillery', input: 'minecraft:copper_ingot'})

    event.shaped(
    Item.of('psychedelicraft:bottle_rack'),
    [
        'ABA',
        'BAB',
        'ABA'
    ],
    {
        A: 'minecraft:stick',
        B: '#tfc:lumber'
    }
    )
    event.remove({output: 'psychedelicraft:bottle_rack', input: '#minecraft:planks'})

    event.shaped(
    Item.of('psychedelicraft:mash_tub'),
    [
        'A A',
        'B B',
        'AAA'
    ],
    {
        A: '#tfc:lumber',
        B: 'gtceu:steel_rod'
    }
    )
    event.remove({output: 'psychedelicraft:mash_tub', input: '#minecraft:planks'})

    event.shaped(
    Item.of('psychedelicraft:pump'),
    [
        'AAA',
        'ACA',
        'ABA'
    ],
    {
        A: '#tfc:rock/bricks',
        B: 'minecraft:redstone',
        C: 'gtceu:glass_tube'
    }
    )
    event.remove({output: 'psychedelicraft:pump', input: 'psychedelicraft:glass_tube'})

    event.shaped(
    Item.of('psychedelicraft:oak_barrel'),
    [
        'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: '#tfc:lumber',
        B: 'tfc:metal/ingot/black_steel'
    }
    )

    event.shaped(
    Item.of('psychedelicraft:rift_jar'),
    [
        'ABA',
        'CA ',
        'ADA'
    ],
    {
        A: '#c:glass_blocks',
        B: 'firmalife:cork',
        C: 'minecraft:gold_ingot',
        D: 'tfc:metal/ingot/blue_steel'
    }
    )
    event.remove({output: 'psychedelicraft:rift_jar', input: '#minecraft:planks'})


    event.shaped(
    Item.of('psychedelicraft:smoking_pipe'),
    [
        '  A',
        ' B ',
        'CB '
    ],
    {
        A: 'gtceu:wrought_iron_ingot',
        B: 'minecraft:stick',
        C: '#tfc:lumber'
    }
    )
    event.remove({output: 'psychedelicraft:smoking_pipe', input: '#minecraft:planks'})

    event.shaped(
    Item.of('psychedelicraft:syringe', 2),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        A: 'gtceu:wrought_iron_ingot',
        B: '#c:glass_blocks'
    }
    )
    event.shaped(
    Item.of('psychedelicraft:syringe', 4),
    [
        ' A ',
        ' B ',
        '   '
    ],
    {
        A: 'gtceu:steel_ingot',
        B: '#c:glass_blocks'
    }
    )
})

//psychotic breakdown


//Theres a way tfg does custom recipies for machines, but I don't think it will be neccesary. (It has a lot of custom checks for dimensions and gravity and climate for example) Also I couldn't figure out how to do it so here we are.
//You can also add more custom checks of your own but still I don't think thats neccesary for our purposes.

//future ted here ignore above i figured out how to do it. You have to declare some things in the "main" script for whatever type of script you are making. 
//Github for reference https://github.com/TerraFirmaGreg-Team/Modpack-Modern/blob/ba31aaf9404cf928421a3d553311626181490965/kubejs/startup_scripts/main_startup_script.js#L42
//still not neccesary for most of what we are doing though

//This could be useful for when you make the rest of the wild "crops" (I will be using this for a large number of ps fluids as it is much easier and takes less lines)

ServerEvents.recipes(event => {
    //bath salts
    event.recipes.gtceu.macerator('obsidian_powder')
        .itemInputs(
            '1x minecraft:obsidian'
        )
        .itemOutputs(
            '3x psychedelicraft:obsidian_dust'
        )
        .duration(100)
        .EUt(3)
    event.recipes.gtceu.chemical_reactor('bath_salts')
        .itemInputs(
            '1x psychedelicraft:obsidian_dust'
        )
        .inputFluids(Fluid.of('minecraft:water', 300))
        .inputFluids(Fluid.of('minecraft:lava', 300))
        .outputFluids(Fluid.of('psychedelicraft:bath_salts', 10))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.canner('bath_salts_syringe')
        .inputFluids(Fluid.of('psychedelicraft:bath_salts', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {fluid: 'psychedelicraft:bath_salts', amount: 810}}))
        .duration(20)
        .EUt(3)



    //adjust mg, bd, and jw initial extract distillation amounts based on original psych amounts later when we get it working.
    //morning glory
    event.recipes.gtceu.distillery('morning_glory_extract_flower')
        .itemInputs('1x psychedelicraft:morning_glory')
        .outputFluids(Fluid.of('psychedelicraft:morning_glory_extract', 20))
        .inputFluids(Fluid.of('minecraft:water', 100))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('morning_glory_extract_seeds')
        .itemInputs('1x psychedelicraft:morning_glory_seeds')
        .outputFluids(Fluid.of('psychedelicraft:morning_glory_extract', 50))
        .inputFluids(Fluid.of('minecraft:water', 100))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('morning_glory_perfume_distillation')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_extract', 100))
        .outputFluids(Fluid.of('psychedelicraft:morning_glory_perfume', 10))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('morning_glory_extract_distillation')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_perfume', 100))
        .outputFluids(Fluid.of('psychedelicraft:morning_glory_concentrate', 10))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('morning_glory_acid_distillation')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_concentrate', 100))
        .outputFluids(Fluid.of('psychedelicraft:acid', 50))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.canner('mg_extract_syringe')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_extract', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {fluid: 'psychedelicraft:morning_glory_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('mg_perfume_syringe')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_perfume', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {attributes: {distillation: 1}, fluid: 'psychedelicraft:morning_glory_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('mg_concentrate_syringe')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_concentrate', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {attributes: {distillation: 2}, fluid: 'psychedelicraft:morning_glory_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('mg_acid_syringe')
        .inputFluids(Fluid.of('psychedelicraft:acid', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {fluid: 'psychedelicraft:acid', amount: 810}}))
        .duration(20)
        .EUt(3)



    //belladonna
    event.recipes.gtceu.distillery('belladonna_extract_flower')
        .itemInputs('1x psychedelicraft:belladonna_berries')
        .outputFluids(Fluid.of('psychedelicraft:belladonna_extract', 20))
        .inputFluids(Fluid.of('minecraft:water', 100))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('belladonna_extract_seeds')
        .itemInputs('1x psychedelicraft:belladonna_seeds')
        .outputFluids(Fluid.of('psychedelicraft:belladonna_extract', 50))
        .inputFluids(Fluid.of('minecraft:water', 100))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('belladonna_perfume_distillation')
        .inputFluids(Fluid.of('psychedelicraft:belladonna_extract', 100))
        .outputFluids(Fluid.of('psychedelicraft:belladonna_perfume', 10))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('belladonna_extract_distillation')
        .inputFluids(Fluid.of('psychedelicraft:belladonna_perfume', 100))
        .outputFluids(Fluid.of('psychedelicraft:belladonna_concentrate', 10))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('belladonna_atropine_distillation')
        .inputFluids(Fluid.of('psychedelicraft:belladonna_concentrate', 100))
        .outputFluids(Fluid.of('psychedelicraft:atropine', 50))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.canner('bd_extract_syringe')
        .inputFluids(Fluid.of('psychedelicraft:belladonna_extract', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {fluid: 'psychedelicraft:belladonna_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('bd_perfume_syringe')
        .inputFluids(Fluid.of('psychedelicraft:belladonna_perfume', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {attributes: {distillation: 1}, fluid: 'psychedelicraft:belladonna_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('bd_concentrate_syringe')
        .inputFluids(Fluid.of('psychedelicraft:belladonna_concentrate', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {attributes: {distillation: 2}, fluid: 'psychedelicraft:belladonna_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('bd_atropine_syringe')
        .inputFluids(Fluid.of('psychedelicraft:atropine', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {fluid: 'psychedelicraft:atropine', amount: 810}}))
        .duration(20)
        .EUt(3)

    //jimsonweed
    event.recipes.gtceu.distillery('jimsonweed_extract_flower')
        .itemInputs('1x psychedelicraft:jimsonweed_seed_pod')
        .outputFluids(Fluid.of('psychedelicraft:jimsonweed_extract', 20))
        .inputFluids(Fluid.of('minecraft:water', 100))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('jimsonweed_extract_seeds')
        .itemInputs('1x psychedelicraft:jimsonweed_seeds')
        .outputFluids(Fluid.of('psychedelicraft:jimsonweed_extract', 50))
        .inputFluids(Fluid.of('minecraft:water', 100))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('jimsonweed_perfume_distillation')
        .inputFluids(Fluid.of('psychedelicraft:jimsonweed_extract', 100))
        .outputFluids(Fluid.of('psychedelicraft:jimsonweed_perfume', 10))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('jimsonweed_extract_distillation')
        .inputFluids(Fluid.of('psychedelicraft:jimsonweed_perfume', 100))
        .outputFluids(Fluid.of('psychedelicraft:jimsonweed_concentrate', 10))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.distillery('jimsonweed_atropine_distillation')
        .inputFluids(Fluid.of('psychedelicraft:jimsonweed_concentrate', 100))
        .outputFluids(Fluid.of('psychedelicraft:atropine', 50))
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.canner('jimsonweed_extract_syringe')
        .inputFluids(Fluid.of('psychedelicraft:jimsonweed_extract', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {fluid: 'psychedelicraft:jimsonweed_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('jimsonweed_perfume_syringe')
        .inputFluids(Fluid.of('psychedelicraft:jimsonweed_perfume', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {attributes: {distillation: 1}, fluid: 'psychedelicraft:jimsonweed_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('jimsonweed_concentrate_syringe')
        .inputFluids(Fluid.of('psychedelicraft:jimsonweed_concentrate', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {attributes: {distillation: 2}, fluid: 'psychedelicraft:jimsonweed_extract', amount: 810}}))
        .duration(20)
        .EUt(3)
    event.recipes.gtceu.canner('jimsonweed_atropine_syringe')
        .inputFluids(Fluid.of('psychedelicraft:atropine', 10))
        .itemInputs('psychedelicraft:syringe')
        .itemOutputs(Item.of('psychedelicraft:syringe', {psychedelicraft_fluids: {fluid: 'psychedelicraft:atropine', amount: 810}}))
        .duration(20)
        .EUt(3)

    //poppies/morphine
    event.recipes.gtceu.distillery('morphine_from_poppy')
        .itemInputs('1x tfc:plant/poppy')
        .outputFluids(Fluid.of('psychedelicraft:morphine', 1))
        .inputFluids(Fluid.of('minecraft:water', 100))
        .duration(200)
        .EUt(30)

    //solids
    event.recipes.gtceu.fluid_solidifier('crystal_meth_perfume')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_perfume', 1000))
        .itemOutputs('psychedelicraft:methamphetamine_powder')
        .duration(500)
        .EUt(15)
    event.recipes.gtceu.fluid_solidifier('lsd_tab')
        .inputFluids(Fluid.of('psychedelicraft:acid', 1000))
        .itemOutputs('psychedelicraft:lsd_pill')
        .duration(500)
        .EUt(15)
    event.recipes.gtceu.fluid_solidifier('heroin')
        .inputFluids(Fluid.of('psychedelicraft:morphine', 1000))
        .itemOutputs('psychedelicraft:heroine_powder')
        .duration(500)
        .EUt(15)
    event.recipes.gtceu.chemical_reactor('crack_cocaine')
        .inputFluids(Fluid.of('gtceu:ethanol', 500))
        .itemInputs('1x psychedelicraft:cocaine_powder')
        .itemOutputs('psychedelicraft:crack_cocaine')
        .duration(500)
        .EUt(128)
    event.recipes.gtceu.chemical_reactor('blue_meth')
        .inputFluids(Fluid.of('psychedelicraft:morning_glory_concentrate', 1000))
        .inputFluids(Fluid.of('tfc:light_blue_dye', 250))
        .itemOutputs('psychedelicraft:blue_methamphetamine_powder')
        .duration(500)
        .EUt(128)
})