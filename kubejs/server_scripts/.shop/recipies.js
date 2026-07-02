ServerEvents.recipes(event => {
    event.shaped(
    Item.of('spudaciousshops:shop_spruce_red'),
    [
        'ABA',
        'ACA',
        'AAA'
    ],
    {
        B: '#minecraft:wool',
        A: '#tfc:lumber', 
        C: "#forge:chests/wooden"
    }
    )

    event.shaped(
    Item.of('spudaciousshops:crate_shop'),
    [
        '   ',
        'ACA',
        'AAA'
    ],
    {
        A: '#tfc:lumber',
        C: "#forge:chests/wooden"
    }
    )

    event.shaped(
    Item.of('spudaciousshops:shelf_shop_spruce'),
    [
        '   ',
        ' C ',
        'AAA'
    ],
    {
        A: '#tfc:lumber', 
        C: "#forge:chests/wooden"
    }
    )
})