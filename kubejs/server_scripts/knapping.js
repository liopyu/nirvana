BlockEvents.rightClicked(event => {
    if (event.hand == 'OFF_HAND') return
    const { player, block, server } = event
    let item = player.getHeldItem('main_hand')
    let air = player.getMainHandItem().id == 'minecraft:air'
    if (!block.hasTag('minecraft:titanbreakables')) { return }
    if (air) { return }
    if (item.count <= 0) return
    if (item.id == 'minecraft:flint') {
        player.sendData('knapping')
        //server.runCommandSilent(`execute as ${player.username} run playsound minecraft:knapping block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            item.count--
            block.popItemFromFace('2x kubejs:flint_shard', "up")
        }
    }
})
PlayerEvents.loggedIn(event => {
    const { player } = event
    let pData = player.persistentData
    pData.sawing = 1
})

ItemEvents.rightClicked(event => {
    const { player, player: { mainHandItem, offHandItem } } = event;
    if (mainHandItem.id !== 'minecraft:air' && offHandItem.id !== 'minecraft:air' &&
        offHandItem.count > 0 && mainHandItem.count > 0 && mainHandItem.hasTag('kubejs:knives')) {
        let leatherCount;
        switch (offHandItem.id) {
            case 'minecraft:leather_boots':
                leatherCount = 1;
                break;
            case 'minecraft:leather_leggings':
                leatherCount = 3;
                break;
            case 'minecraft:leather_chestplate':
                leatherCount = 4;
                break;
            case 'minecraft:leather_helmet':
                leatherCount = 2;
                break;
            case 'minecraft:leather_horse_armor':
                leatherCount = 6;
                break;
            default:
                leatherCount = 0;
        }

        if (leatherCount > 0) {
            offHandItem.count--;
            player.give(`${leatherCount}x leather`);
            player.sendData('shear');
        }
    }
});

BlockEvents.broken(event => {
    const { player, block } = event
    if (!player.getHeldItem('main_hand').hasTag('kubejs:knives')) return
    if (block.id == 'minecraft:grass' || block.id == 'minecraft:tall_grass') {
        player.damageHeldItem('main_hand', 1)
    }
})
BlockEvents.rightClicked(event => {
    const { player, block, server } = event;
    const mainHandItem = player.getHeldItem('main_hand');
    const pData = player.persistentData;

    if (pData.sawing !== 1 || !mainHandItem.hasTag('forge:tools/axes') || mainHandItem.count <= 0) {
        return;
    }

    const blockPlankMap = {
        'minecraft:planks': 'minecraft:stick',
        'minecraft:stripped_oak_log': 'minecraft:oak_planks',
        'minecraft:stripped_spruce_log': 'minecraft:spruce_planks',
        'minecraft:stripped_birch_log': 'minecraft:birch_planks',
        'minecraft:stripped_jungle_log': 'minecraft:jungle_planks',
        'minecraft:stripped_acacia_log': 'minecraft:acacia_planks',
        'minecraft:stripped_dark_oak_log': 'minecraft:dark_oak_planks',
        'minecraft:stripped_mangrove_log': 'minecraft:mangrove_planks',
        'minecraft:stripped_crimson_stem': 'minecraft:crimson_planks',
        'minecraft:stripped_warped_stem': 'minecraft:warped_planks',
        'iter_rpg:stripped_sacred_log': 'iter_rpg:sacred_log',
        'theabyss:stripped_blaru_log': 'theabyss:blaru_planks',
        'theabyss:stripped_jungle_log': 'theabyss:jungle_planks',
        'theabyss:stripped_bog_shroom_log': 'theabyss:bog_planks',
        'theabyss:stripped_sal_shroom_log': 'theabyss:sal_planks',
        'theabyss:stripped_slimed_log': 'theabyss:slimed_planks',
        'theabyss:stripped_frozen_log': 'theabyss:frozen_planks',
        'born_in_chaos_v1:stripped_scorched_log': 'born_in_chaos_v1:scorched_planks',
        'enlightened_end:stripped_congealed_stem': 'enlightened_end:congealed_planks',
        'upgrade_aquatic:stripped_driftwood_log': 'upgrade_aquatic:driftwood_planks',
        'upgrade_aquatic:stripped_river_log': 'upgrade_aquatic:river_planks',
        'quark:stripped_blossom_log': 'quark:blossom_planks',
        'quark:stripped_azalea_log': 'quark:azalea_planks',
        'quark:stripped_ancient_log': 'quark:ancient_planks',
        'forbidden_arcanus:stripped_cherry_log': 'forbidden_arcanus:cherry_planks',
        'forbidden_arcanus:stripped_aurum_log': 'forbidden_arcanus:aurum_planks',
        'vinery:stripped_cherry_log': 'vinery:cherry_planks',
    };


    const blockId = block.id;
    const plankId = blockPlankMap[blockId];
    if (block.hasTag('ars_nouveau:stripped_logs')) {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`)
        player.swing()
        if (Math.random() >= 0.5) {
            block.set('air')
            player.damageHeldItem('main_hand', 1)
            block.popItemFromFace('2x ars_nouveau:archwood_planks', "up")
        }
    }
    if (plankId) {
        server.runCommandSilent(`execute as ${player.username} run playsound minecraft:block.wood.place block @s ${player.x} ${player.y} ${player.z} 1 1`);
        player.swing();

        if (Math.random() >= 0.5) {
            block.set('air');
            player.damageHeldItem('main_hand', 1);
            block.popItemFromFace(`2x ${plankId}`, 'up');
        }
    }

    server.schedule(140, () => {
        pData.sawing = 1;
    });
});


PlayerEvents.tick(event => {
    let { player, level } = event
    if (player.age % 80 != 0) return
    let campfireblocktick = BlockPos.findClosestMatch(player.block.pos, 3, 3, pos => {
        let islitlevel = level.getBlock(pos).blockState.lightEmission
        if (islitlevel == 0) return false
        if (!level.getBlock(pos).hasTag("minecraft:campfires")) return false
        return true
    })
    campfireblocktick.ifPresent(() => player.potionEffects.add('minecraft:regeneration', 80, 0, false, true))
})

/* ItemEvents.rightClicked(event => {
    const { item, player, hand, player: { mainHandItem, offHandItem } } = event
    let offhand = player.getHeldItem('off_hand');
    let mainhand = player.getHeldItem('main_hand');
    let apply = (item1, item2, result) => {
        if ((mainHandItem.id == item1 && offHandItem.id == item2) || (mainHandItem.id == item2 && offHandItem.id == item1)) {
            if (offhand.count <= 0 || mainhand.count <= 0) { return }
            if (!hand == 'MAIN_HAND') { return }
            mainHandItem.count--
            offHandItem.count--
            player.give(result)
        }
    }
    apply('minecraft:stripped_oak_log', 'create:andesite_alloy', 'create:andesite_casing')
}) */
