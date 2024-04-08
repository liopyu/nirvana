//Thank you @pie (Jerry Rig Everything) for this script simplification, without it these files would be thousands of lines longer!!
const ATTRIBUTE_LIST = [
    "Undying",
    "Punishing",
    "Arcane",
    "Strengthening",
    "Springy",
    "Speedy",
    "Shielding",
    "Prospecting",
    "Lucky",
    "Horrible",
    "Healthy",
    "Graceful",
    "Focusing",
    "Flailing",
    "Clunky",
    "Athletic",
    "Armored",
    "Aiming",
];
function generateRandomAttributeList(random) {
    let output = '{';
    let chance = Math.ceil(random * ATTRIBUTE_LIST.length);
    for (let i = 0; i < ATTRIBUTE_LIST.length; i++) {
        let attr = ATTRIBUTE_LIST[i];
        output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
        if (i + 1 != ATTRIBUTE_LIST.length) {
            output += ',';
        }
    }

    output += ",Reforged:1b";
    output += '}';
    return output;
}
function toolTip(event, item) {
    let offHandItem = event.player.getHeldItem('off_hand');
    event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
    item.nbt.merge(generateRandomAttributeList(Math.random()));
    offHandItem.count--
    const nbtKeys = Object.keys(item.nbt);
    const defaultTooltip = 'Your fingers fumble and you smash your thumb';

    let tooltipMessage = defaultTooltip;
    let color = 'red';

    for (const key of nbtKeys) {
        if (item.nbt[key]) {
            tooltipMessage = key;
            color = getColor(key);
            break;
        }
    }

    event.player.displayClientMessage(Component.of(tooltipMessage)[color]().bold(), true);
}

function getColor(key) {
    const colorMap = {
        Arcane: 'lightPurple',
        Undying: 'lightPurple',
        Punishing: 'lightPurple',
        Graceful: 'aqua',
        Athletic: 'aqua',
        Strengthening: 'blue',
        Springy: 'blue',
        Speedy: 'blue',
        Shielding: 'blue',
        Prospecting: 'blue',
        Lucky: 'blue',
        Healthy: 'blue',
        Focusing: 'blue',
        Flailing: 'blue',
        Armored: 'blue',
        Aiming: 'blue',
        Clunky: 'blue',
        Horrible: 'darkGray'
    };

    return colorMap[key] || 'red';
}
const matchingValues = [
    { tag: 'kubejs:trinkets_gold', offHandItem: 'minecraft:gold_ingot', nbt: false },
    { tag: 'kubejs:trinkets_spectral_silt', offHandItem: 'kubejs:spectral_silt', nbt: true },
    { tag: 'kubejs:trinkets_ars', offHandItem: 'ars_nouveau:source_gem', nbt: true },
    { tag: 'kubejs:trinkets_leather', offHandItem: 'minecraft:leather', nbt: true },
    { tag: 'kubejs:trinkets_cosmic_cloud', offHandItem: 'kubejs:cosmic_cloud', nbt: true },
    { tag: 'kubejs:trinkets_unspecified', offHandItem: 'kubejs:cosmic_cloud', nbt: true },
    { tag: 'kubejs:trinkets_arcane_powder', offHandItem: 'iter_rpg:arcane_powder', nbt: true },
    { tag: 'kubejs:trinkets_iron', offHandItem: 'minecraft:iron_ingot', nbt: true },
    { tag: 'kubejs:trinkets_netherite', offHandItem: 'minecraft:netherite_scrap', nbt: true },
    { tag: 'kubejs:trinkets_diamond', offHandItem: '#forge:gems/diamond', nbt: true },
    { tag: 'kubejs:trinkets_dragon_breath', offHandItem: 'minecraft:dragon_breath', nbt: true }
];

function checkConditions(event, item, offHandItem, matchingValues) {
    if (offHandItem.count > 0) {
        for (const value of matchingValues) {
            if (item.hasTag(value.tag) && event.player.offHandItem == value.offHandItem && (!value.nbt || item.nbt.Reforged)) {
                return true;
            }
        }
    }
    return false;
}
function displayActionBarMessage(event, message, item) {
    let itemName;
    let color;

    switch (true) {
        case item.hasTag('kubejs:trinkets_gold'):
            itemName = 'Gold Ingot';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_ars'):
            itemName = 'Source Gem';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_leather'):
            itemName = 'Leather';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_cosmic_cloud'):
        case item.hasTag('kubejs:trinkets_unspecified'):
            itemName = 'Cosmic Cloud';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_arcane_powder'):
            itemName = 'Arcane Powder';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_dragon_breath'):
            itemName = 'Dragon Breath';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_spectral_silt'):
            itemName = 'Spectral Silt';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_certus_quartz'):
            itemName = 'Quartz';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_redstone'):
            itemName = 'Redstone Dust';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_iron'):
            itemName = 'Iron Ingot';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_diamond'):
            itemName = 'Diamond';
            color = Color.GOLD;
            break;
        case item.hasTag('kubejs:trinkets_netherite'):
            itemName = 'Netherite Scrap';
            color = Color.GOLD;
            break;
        default:
            itemName = 'Unknown Item';
            color = Color.WHITE;
            break;
    }

    return event.player.displayClientMessage(
        Component.of(message)
            .color(Color.DARK_GREEN)
            .append(Component.of(itemName).color(color).italic())
            .append(Component.of(' In Off-Hand!')).color(Color.DARK_GREEN), true
    );
}
function displayNeededItem(event, item, offHandItem) {
    if ((item.hasTag('kubejs:trinkets_gold') && event.player.offHandItem != 'minecraft:gold_ingot') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_gold')) ||
        (item.hasTag('kubejs:trinkets_ars') && event.player.offHandItem != 'ars_nouveau:source_gem') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_ars')) ||
        (item.hasTag('kubejs:trinkets_leather') && event.player.offHandItem != 'minecraft:leather') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_leather')) ||
        (item.hasTag('kubejs:trinkets_cosmic_cloud') && event.player.offHandItem != 'kubejs:cosmic_cloud') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_cosmic_cloud')) ||
        (item.hasTag('kubejs:trinkets_unspecified') && event.player.offHandItem != 'kubejs:cosmic_cloud') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_unspecified')) ||
        (item.hasTag('kubejs:trinkets_arcane_powder') && event.player.offHandItem != 'iter_rpg:arcane_powder') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_arcane_powder')) ||
        (item.hasTag('kubejs:trinkets_dragon_breath') && event.player.offHandItem != 'minecraft:dragon_breath') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_dragon_breath')) ||
        (item.hasTag('kubejs:trinkets_spectral_silt') && event.player.offHandItem != 'kubejs:spectral_silt') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_spectral_silt')) ||
        (item.hasTag('kubejs:trinkets_certus_quartz') && event.player.offHandItem != '#forge:gems/quartz') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_certus_quartz')) ||
        (item.hasTag('kubejs:trinkets_redstone') && event.player.offHandItem != 'minecraft:redstone') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_redstone')) ||
        (item.hasTag('kubejs:trinkets_iron') && event.player.offHandItem != 'minecraft:iron_ingot') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_iron')) ||
        (item.hasTag('kubejs:trinkets_diamond') && event.player.offHandItem != '#forge:gems/diamond') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_diamond')) ||
        (item.hasTag('kubejs:trinkets_netherite') && event.player.offHandItem != 'minecraft:netherite_scrap') ||
        (!offHandItem.count > 0 && item.hasTag('kubejs:trinkets_netherite'))) {
        displayActionBarMessage(event, 'To Reforge hold ', item);
    } else return;
}
BlockEvents.leftClicked(event => {
    let offHandItem = event.player.getHeldItem('off_hand');
    let item = event.player.getHeldItem('main_hand');
    let pData = event.player.persistentData;
    let air = event.player.getMainHandItem().id == 'minecraft:air'
    if (pData.timestall != 1) {
        return;
    }
    if (event.block.id != 'kubejs:reforging_station') {
        return;
    }
    if (air) {
        return;
    }
    //event.player.tell(event.block.id)
    event.player.sendInventoryUpdate()
    pData.timestall = 0;
    event.server.schedule(1200, () => {
        pData.timestall = 1;
    });
    if (checkConditions(event, item, offHandItem, matchingValues)) {
        toolTip(event, item, offHandItem);
    } else displayNeededItem(event, item, offHandItem)
});
PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData
    //pData.forgecheck = 0
    pData.timestall = 1
    pData.timestalllllllll = 1
})
BlockEvents.rightClicked(event => {
    let offHandItem = event.player.getHeldItem('off_hand');
    let item = event.player.getHeldItem('main_hand');
    let pData = event.player.persistentData;
    let air = event.player.getMainHandItem().id == 'minecraft:air'
    if (pData.timestalllllllll != 1) {
        return;
    }
    if (event.block.id != 'kubejs:reforging_station') {
        return;
    }
    if (air) {
        return;
    }
    //event.player.tell(event.block.id)
    event.player.sendInventoryUpdate()
    pData.timestalllllllll = 0;
    event.server.schedule(1200, () => {
        pData.timestalllllllll = 1;
    });
    if (checkConditions(event, item, offHandItem, matchingValues)) {
        toolTip(event, item, offHandItem);
    } else displayNeededItem(event, item, offHandItem)
});

