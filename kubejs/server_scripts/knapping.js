BlockEvents.rightClicked(event => {
    const {player, block, server} = event
    let item = player.getHeldItem('main_hand')
    let offHandItem = player.getHeldItem('off_hand');
    let pData = player.persistentData;
    let air = player.getMainHandItem().id == 'minecraft:air'
    if (pData.knapping != 1) { return }
    if (!block.hasTag('minecraft:titanbreakables')){ return }
    if (air){ return }
    if (item.count <= 0) return
    pData.knapping = 0;

    if (item.id == 'minecraft:flint') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:knapping block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            item.count--
            player.spawnAtLocation('2x kubejs:flint_shard')
        }
    }


    server.schedule(140, () => {
        
        pData.knapping = 1;
        
    });
    
})

PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData
    pData.knapping = 1
    pData.sawing = 1
})

ItemEvents.rightClicked(event => {
    const {player, item, server} = event
    let offHandItem = player.getHeldItem('off_hand');
    let mainhanditem = player.getHeldItem('main_hand');
    let pData = player.persistentData;
    let air = player.getMainHandItem().id == 'minecraft:air'
    if (air) return
    if (offHandItem.id == 'minecraft:air') return
    if (offHandItem.count <= 0 || mainhanditem.count <= 0) return
    

    if (mainhanditem.hasTag('kubejs:knives') && offHandItem.id == 'minecraft:leather_boots') {
        offHandItem.count--
        player.give('leather')
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:entity.sheep.shear player @s ${player.x} ${player.y} ${player.z} 1 1`)
        
    }else if (mainhanditem.hasTag('kubejs:knives') && offHandItem.id == 'minecraft:leather_leggings') {
        offHandItem.count--
        player.give('3x leather')
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:entity.sheep.shear player @s ${player.x} ${player.y} ${player.z} 1 1`)
        
    }else if (mainhanditem.hasTag('kubejs:knives') && offHandItem.id == 'minecraft:leather_chestplate') {
        offHandItem.count--
        player.give('4x leather')
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:entity.sheep.shear player @s ${player.x} ${player.y} ${player.z} 1 1`)
        
    }else if (mainhanditem.hasTag('kubejs:knives') && offHandItem.id == 'minecraft:leather_helmet') {
        offHandItem.count--
        player.give('2x leather')
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:entity.sheep.shear player @s ${player.x} ${player.y} ${player.z} 1 1`)
        
    }else if (mainhanditem.hasTag('kubejs:knives') && offHandItem.id == 'minecraft:leather_horse_armor') {
        offHandItem.count--
        player.give('6x leather')
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:entity.sheep.shear player @s ${player.x} ${player.y} ${player.z} 1 1`)
        
    }

      
})

BlockEvents.broken(event => {
    const {player, block, server} = event
    let item = player.getHeldItem('main_hand')
    if (!item.hasTag('kubejs:knives')) return;
    if (block.id == 'minecraft:grass') {
    event.player.damageHeldItem('main_hand', 1) 
    }else if (block.id == 'minecraft:tall_grass') {
        event.player.damageHeldItem('main_hand', 1) 
        }
    
})



BlockEvents.rightClicked(event => {
    const {player, block, server} = event
    let item = player.getHeldItem('main_hand')
    let pData = player.persistentData;
    if (pData.sawing != 1) { return }
    if (!item.hasTag('forge:tools/axes')){ return }
    if (item.count <= 0) return
    pData.sawing = 0;
    if (block.hasTag('minecraft:planks')) {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.hit block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:stick')
        }
    }

    if (block.id == 'minecraft:stripped_oak_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:oak_planks')
        }
    }else if (block.id == 'minecraft:stripped_spruce_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:spruce_planks')
        }
    }else if (block.id == 'minecraft:stripped_birch_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:birch_planks')
        }
    }else if (block.id == 'minecraft:stripped_jungle_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:jungle_planks')
        }
    }else if (block.id == 'minecraft:stripped_acacia_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:acacia_planks')
        }
    }else if (block.id == 'minecraft:stripped_dark_oak_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:dark_oak_planks')
        }
    }else if (block.id == 'minecraft:stripped_mangrove_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:mangrove_planks')
        }
    }else if (block.id == 'minecraft:stripped_crimson_stem') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:crimson_planks')
        }
    }else if (block.id == 'minecraft:stripped_warped_stem') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x minecraft:warped_planks')
        }
    }else if (block.id == 'iter_rpg:stripped_sacred_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x iter_rpg:sacred_log')
        }
    }else if (block.id == 'theabyss:stripped_blaru_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x theabyss:blaru_planks')
        }
    }else if (block.id == 'theabyss:stripped_jungle_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x theabyss:jungle_planks')
        }
    }else if (block.id == 'theabyss:stripped_bog_shroom_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x theabyss:bog_planks')
        }
    }else if (block.id == 'theabyss:stripped_sal_shroom_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x theabyss:sal_planks')
        }
    }else if (block.id == 'theabyss:stripped_slimed_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x theabyss:slimed_planks')
        }
    }else if (block.id == 'theabyss:stripped_frozen_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x theabyss:frozen_planks')
        }
    }else if (block.id == 'born_in_chaos_v1:stripped_scorched_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x born_in_chaos_v1:scorched_planks')
        }
    }else if (block.id == 'enlightened_end:stripped_congealed_stem') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x enlightened_end:congealed_planks')
        }
    }else if (block.id == 'upgrade_aquatic:stripped_driftwood_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x upgrade_aquatic:driftwood_planks')
        }
    }else if (block.id == 'upgrade_aquatic:stripped_river_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x upgrade_aquatic:river_planks')
        }
    }else if (block.hasTag('ars_nouveau:stripped_logs')) {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x ars_nouveau:archwood_planks')
        }
    }else if (block.id == 'quark:stripped_blossom_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x quark:blossom_planks')
        }
    }else if (block.id == 'quark:stripped_azalea_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x quark:azalea_planks')
        }
    }else if (block.id == 'quark:stripped_ancient_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x quark:ancient_planks')
        }
    }else if (block.id == 'forbidden_arcanus:stripped_cherry_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x forbidden_arcanus:cherry_planks')
        }
    }else if (block.id == 'forbidden_arcanus:stripped_aurum_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x forbidden_arcanus:aurum_planks')
        }
    }else if (block.id == 'vinery:stripped_cherry_log') {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            event.player.damageHeldItem('main_hand', 1) 
            player.spawnAtLocation('2x vinery:cherry_planks')
        }
    }


    server.schedule(140, () => {
        
        pData.sawing = 1;
    });
    
})




