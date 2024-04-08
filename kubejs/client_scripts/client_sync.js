let datapackets = [
    'knapping',
    'grave_scroll',
    'magicmirror',
    'shear'
]
datapackets.forEach(element => {
    NetworkEvents.dataReceived(element, event => {
        if (element == 'knapping') Client.player.playNotifySound("minecraft:knapping", "blocks", 1, 1)
        if (element == 'grave_scroll') Client.player.playNotifySound("minecraft:block.portal.trigger", "players", 1, 1)
        if (element == 'magicmirror') Client.player.playNotifySound("minecraft:teleport", "players", 1, 1)
        if (element == 'shear') Client.player.playNotifySound("minecraft:entity.sheep.shear", "players", 1, 1)
    })
});

ItemEvents.rightClicked(event => {
    const { player, player: { mainHandItem, offHandItem } } = event;
    if (mainHandItem.id !== 'minecraft:air' && offHandItem.id !== 'minecraft:air' &&
        offHandItem.count > 0 && mainHandItem.count > 0 && mainHandItem.hasTag('kubejs:knives')) {
        offHandItem.count--;
    }
});
