LootJS.modifiers(event => {
    event
        .addBlockLootModifier('psychedelicraft:wild_cannabis')
        .removeLoot(Ingredient.all)
        .addLoot('psychedelicraft:cannabis_leaf')
        .addLoot('psychedelicraft:cannabis_seeds')
})