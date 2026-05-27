ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('psychedelicraft:tomato'),
        [
            'tfc:food/tomato',
        ]
    )

    event.remove({output: 'psychedelicraft:tomato_seeds', type: 'minecraft:crafting_shapeless'})
})