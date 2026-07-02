// Passive sanity drain in the nether dimension
PlayerEvents.tick(event => {
    const { player } = event;

    if (!(event.server.getTickCount() % 20)) { // Every second (20 ticks)
        if (player.level.dimension == 'minecraft:the_nether') {
            player.addSanity(-10);
        }
    }
});

// // Separately, log sanity changes in chat
// SanityEvents.change(event => {
//     const { player } = event;
//     const newSanity = event.getSanity();
//     player.tell(`Sanity: ${newSanity}/100`);
// });