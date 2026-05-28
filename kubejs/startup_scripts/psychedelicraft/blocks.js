StartupEvents.registry('block', event => {
  event.create('psychedelicraft:wild_cannabis')
   .displayName('Wild Cannabis')
   .soundType('grass')
   .hardness(1.0)

   .renderType('cutout')
   .noCollision()
   .notSolid()
})