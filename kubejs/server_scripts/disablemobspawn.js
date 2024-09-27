const forbiddenDimensions = ['spatial_storage', 'overworld', 'the_end', 'the_nether', 'panthalassa', 'tectonic', 'tutorial'];
EntityEvents.spawned(event => {
    const { entity, entity: { pos, type, level: { dimension: { path } } } } = event;
    if (type.includes('mutationcraft') && forbiddenDimensions.includes(path)) {
        console.log(pos);
        console.log('Assimilated Being Tried Spawning Where It Shouldnt');
        event.cancel();
    }
    if (entity.getType() == 'mutationcraft:helicopter') {
        event.cancel()
    }
    if (entity.getType() == 'vinery:wandering_winemaker') {
        console.log(`Vinery's Wandering Winemaker is disabled in this pack because of conflicts with fresh animations. To re-enable this edit the kubejs>server_scripts>disablemobspawn.js`)
        event.cancel()
    }
});


BlockEvents.broken(event => {
    const { block, player, server } = event
    const { x, y, z } = block
    if (block.id == 'minecraft:spawner') {
        let xp = block.createEntity("minecraft:experience_orb")
        xp.mergeNbt(`{Value:35,Age:0,Invulnerable:0b}`)
        xp.spawn()
    }
})
BlockEvents.rightClicked(event => {
    const { block, player, server } = event
    const { x, y, z } = block
    let righthand = player.getHeldItem('main_hand')
    let lefthand = player.getHeldItem('off_hand')
    if (block.hasTag('minecraft:beds') && (player.level.dimension.path == 'deep_space' || player.level.dimension.path == 'the_abyss' || player.level.dimension.path == 'frost_world')) {
        player.tell(`§dYou'll need a campfire to set your spawn because don't feel like sleeping in an unknown dimension..`)
        event.cancel()
    }
    if (block.hasTag('comforts:sleeping_bags') && (player.level.dimension.path == 'deep_space' || player.level.dimension.path == 'the_abyss' || player.level.dimension.path == 'frost_world')) {
        player.tell(`§dYou don't feel like falling asleep in an unknown dimension..`)
        event.cancel()
    }
    if (block.id == 'hexfortress:locked_chest' && (righthand.id != 'hexfortress:blaze_key')) {
        player.tell(`§aIt looks like I need a key to open this. Maybe the Guardian has it?`)
    }
})
BlockEvents.placed(event => {
    const { block, player, server } = event
    const { x, y, z } = block
    let namespace = player.level.dimension.namespace
    let path = player.level.dimension.path
    if (block.hasTag('waystones:waystone')) {
        event.server.runCommandSilent(`execute in ${namespace}:${path} run spawnpoint ${player.username} ${player.x.toFixed(0)} ${player.y.toFixed(0)} ${player.z.toFixed(0)}`)
    }
})

BlockEvents.rightClicked(event => {
    const { block, player, server } = event
    let namespace = player.level.dimension.namespace
    let path = player.level.dimension.path
    if (block.hasTag('waystones:waystone')) {
        event.server.runCommandSilent(`execute in ${namespace}:${path} run spawnpoint ${player.username} ${player.x.toFixed(0)} ${player.y.toFixed(0)} ${player.z.toFixed(0)}`)
    }
})
ItemEvents.rightClicked(event => {
    const { player, server, item, item: { id }, player: { username } } = event
    if (!player.getSpawnLocation()) return
    const { x, y, z } = player.getSpawnLocation()
    let dim = player.getRespawnDimension().location()
    if (id == 'magicmirror:magicmirror') {
        server.runCommandSilent(`execute in ${dim} run execute as ${player.username} run tp ${x} ${y} ${z}`)
        player.addItemCooldown('magicmirror:magicmirror', 25)
        player.sendData('magicmirror')
    }
})
ItemEvents.rightClicked(event => {
    const { player, server, item, item: { id }, player: { username, x, y, z } } = event;
    const backpackIds = [
        'sophisticatedbackpacks:backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack'
    ];
    if (backpackIds.includes(id)) {
        player.displayClientMessage(Component.of('I think I should place this down to open it.').green().bold(), true)
        event.cancel();
    }
    if (id == 'kubejs:grave_scroll') {
        player.sendData('grave_scroll')
    }
});

EntityEvents.death(event => {
    const { entity, entity: { x, y, z, tags, type }, server } = event
    let mob = type.toString()
    if (tags.contains('slime_tower_guardian_spawn')) {
        if (mob != 'minecraft:bat') return
        let slime1 = entity.level.getBlock(x.toFixed(0), y.toFixed(0), z.toFixed(0)).createEntity("minecraft:slime")
        let slime2 = entity.level.getBlock(x.toFixed(0), y.toFixed(0), z.toFixed(0)).createEntity("minecraft:slime")
        let slime3 = entity.level.getBlock(x.toFixed(0), y.toFixed(0), z.toFixed(0)).createEntity("minecraft:slime")
        slime1.customName = Component.of(Text.of('ֆʟɨʍʏ ǟɮօʍɨռǟȶɨօռ').green().bold())
        slime3.mergeNbt(`{Size:1}`)
        slime2.mergeNbt(`{Size:2}`)
        slime1.mergeNbt(`{Tags: ["slime_tower_guardian"],DeathLootTable:"keebsz:entities/slime_tower_guardian",Size:3,Attributes:[{Name:"generic.max_health",Base:200d}],ArmorDropChances:[1f,1f,1f,1f],Health:200,ArmorItems:[{},{},{id:"hexfortress:blaze_key",tag:{display:{Lore:['"Tower Guardian Key"'],Name:'"гเ๓ยгย"'}},Count:1},{id:"hexfortress:blaze_key",tag:{display:{Lore:['"Tower Guardian Key"'],Name:'"гเ๓ยгย"'}},Count:1}]}`)
        slime2.startRiding(slime1)
        slime3.startRiding(slime2)
        slime1.spawn()
        slime2.spawn()
        slime3.spawn()
    } else if (tags.contains('blazeguardian')) {
        if (mob != 'minecraft:bat') return
        let mutant_blaze = entity.level.getBlock(x, y, z).createEntity("mutantmore:mutant_blaze")
        mutant_blaze.mergeNbt(`{CustomName:'[{"text":"IПFΣЯПΛL ƬIƬΛП","bold":true,"color":"gray"}]',Health:150,NoGravity:1b,PersistenceRequired:1b,Tags:[blaze_tower_guardian],DeathLootTable:"keebsz:entities/blaze_guardian",Attributes:[{Name:"generic.max_health",Base:150d},{Name:"generic.follow_range",Base:40d}]}`)
        mutant_blaze.spawn()
    } else if (tags.contains('trader')) {
        if (mob != 'minecraft:silverfish') return
        let trader = entity.level.getBlock(x, y, z).createEntity("wandering_trader")
        let trader1 = entity.level.getBlock(x, y, z).createEntity("wandering_trader")
        trader.spawn()
        trader1.spawn()
    }
})
