// minecraft 1.20.1
// using kubejs

// List of block IDs that count as "true" - add any blocks you want here
let validBlocks = [
    // "createdeco:andesite_catwalk",
    // "createdeco:andesite_catwalk_stairs",
    // "createdeco:brass_catwalk",
    // "createdeco:brass_catwalk_stairs",
    // "createdeco:iron_catwalk",
    // "createdeco:iron_catwalk_stairs",
    // "createdeco:copper_catwalk",
    // "createdeco:copper_catwalk_stairs",
    // "createdeco:industrial_iron_catwalk",
    // "createdeco:industrial_iron_catwalk_stairs",
    // "createdeco:zinc_catwalk",
    // "createdeco:zinc_catwalk_stairs",

    // 'minecraft:redstone_block',
    // 'minecraft:lapis_block',
    
    // Add more blocks here if needed, like:
    // 'minecraft:diamond_block',
    // 'minecraft:gold_block',
];

let noDisableBlocks = [
    "minecraft:air",
    // "createdeco:andesite_catwalk_railing",
    // "createdeco:brass_catwalk_railing",
    // "createdeco:iron_catwalk_railing",
    // "createdeco:copper_catwalk_railing",
    // "createdeco:industrial_iron_catwalk_railing",
    // "createdeco:zinc_catwalk_railing",
];

// Speed boost configuration - easily changeable
const SPEED_MULTIPLIER = 5; // 5x speed (amplifier 2 = 3x speed)
const EFFECT_DURATION_TICKS = 40; // 2 seconds (20 ticks = 1 second)
const SPEED_EFFECT_ID = 'minecraft:speed';

// Simple tick counter to avoid spam
let tickCounter = 0;

// Track players and their effect timers using persistent data
// This will persist between script reloads

// Function to run for each player every tick
ServerEvents.tick(event => {
    tickCounter++;
    
    // Basic safety check
    if (!event.server) return;
    
    // Get all online players
    event.server.players.forEach(player => {
        if (!player) return;
        
        try {
            // Get player's current position using the block coordinates and subtract 1 from the y to get the block below the player's feet
            let playerX = Math.floor(player.x);
            let playerY = Math.floor(player.y);
            let playerZ = Math.floor(player.z);
            
            // Get the block below player's feet\
            
            let block2Below = player.level.getBlock(playerX, playerY-2, playerZ);
            let blockBelow = player.level.getBlock(playerX, playerY-1, playerZ);
            let block = player.level.getBlock(playerX, playerY, playerZ);
            // Check if player is standing on any of the valid blocks
            let isOnValidBlock = block.hasTag('tfc:paths');
            let isOnNoDisableBlock = 
            (noDisableBlocks.includes(block.id) && (blockBelow.hasTag('tfc:paths') || block2Below.hasTag('tfc:paths')));
            
            let playerUUID = player.uuid.toString();
            
            // Use persistent data that survives script reloads
            let playerData = player.persistentData;
            
            if (isOnValidBlock) {
                // Player is on a valid block - give speed effect and reset timer (with hidden particles)
                player.runCommandSilent(`effect give @s ${SPEED_EFFECT_ID} ${Math.ceil(EFFECT_DURATION_TICKS/20)} ${SPEED_MULTIPLIER - 1} true`);
                
                // console.log(`start(${playerData.getBoolean('hasSpeedEffect')})`)

                // add player to list
                if (!playerData.getBoolean('hasSpeedEffect')) {
                    console.debug(`${player.username} has speed boost active (standing on ${blockBelow.id})`);
                    playerData.putBoolean('hasSpeedEffect', true);
                    // console.log(`end(${playerData.getBoolean('hasSpeedEffect')})`)
                }
                

                // playerEffectTimers.set(playerUUID, EFFECT_DURATION_TICKS);
                
                // Only log every 20 ticks (once per second) when effect is active
                /* if (tickCounter % 20 === 0) {
                    
                    console.log(`UUID: ${playerUUID}\n ${playerData.getBoolean('hasSpeedEffect')}`)
                } */
            } else if (playerData.getBoolean('hasSpeedEffect')) {
                // player not standing on valid block and has speed
                if (isOnNoDisableBlock) {
                    // if they are jumping, ignore them
                    // console.log('Player standing on noDisableBlock, not removing effect');
                    return;
                }

                console.debug(`removing player from effect list, standing on ${blockBelow}`)
                playerData.putBoolean('hasSpeedEffect', false);
                player.removeEffect(SPEED_EFFECT_ID)
            }
        } catch (e) {
            console.log(`Error processing speed effect for player ${player.username}: ${e}`);
        }
    });
    
    // Clean up disconnected players from the timer map
    // if (tickCounter % 200 === 0) { // Every 10 seconds
    //     let activePlayers = new Set();
    //     // Convert JavaIteratorWrapper to array first
    //     Array.from(event.server.players).forEach(p => {
    //         if (p && p.uuid) {
    //             activePlayers.add(p.uuid.toString());
    //         }
    //     });
    //     for (let uuid of playerEffectTimers.keys()) {
    //         if (!activePlayers.has(uuid)) {
    //             playerEffectTimers.delete(uuid);
    //         }
    //     }
    // }
});


