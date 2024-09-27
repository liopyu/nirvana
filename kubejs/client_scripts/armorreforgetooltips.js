ItemEvents.tooltip(event => {
    let helmets = [
        'minecraft:leather_helmet',
        'minecraft:golden_helmet',
        'minecraft:iron_helmet',
        'minecraft:diamond_helmet',
        'minecraft:netherite_helmet',
        'minecraft:chainmail_helmet',
        'alexsmobs:froststalker_helmet',
        'create:copper_diving_helmet',
        'create:netherite_diving_helmet',
        'bygonenether:gilded_netherite_helmet',
        'forbidden_arcanus:draco_arcanus_helmet',
        'forbidden_arcanus:tyr_helmet',
        'forbidden_arcanus:mortem_helmet',
        'mekanism:mekasuit_helmet',
        'minecolonies:plate_armor_helmet',
        'pneumaticcraft:compressed_iron_helmet',
        'pneumaticcraft:pneumatic_helmet',
        'theabyss:fusion_armor_helmet',
        'theabyss:incorythe_armor_helmet',
        'theabyss:phantom_armor_helmet',
        'theabyss:ignisithe_armor_helmet',
        'theabyss:unorithe_armor_helmet',
        'theabyss:garnite_armor_helmet',
        'theabyss:glacerythe_armor_helmet',
        'theabyss:bone_armor_helmet',
        'theabyss:aberythe_armor_helmet',
        'born_in_chaos_v1:dark_metal_armor_helmet',
        'stalwart_dungeons:tungsten_helmet',
        'stalwart_dungeons:warted_tungsten_helmet',
        'stalwart_dungeons:chorundum_armor_helmet',
        'iter_rpg:sky_armor_helmet',
        'iter_rpg:forest_armor_helmet',
        'iter_rpg:ocean_armor_helmet',
        'iter_rpg:hell_armor_helmet',
        'iter_rpg:end_armor_helmet',
        'enlightened_end:adamantite_armor_helmet',
        'aquaculture:neptunium_helmet',
        'mutationcraft:rusted_metal_armor_helmet',
        'mutationcraft:metal_armor_helmet',
        'magistuarmory:maximilian_helmet',
        'magistuarmory:ceremonialarmet',
        'minecraft:leather_helmet',
        'alexsmobs:fedora',
        'minecolonies:pirate_hat',
        'minecolonies:pirate_cap',
        'quark:forgotten_hat',
        'minecraft:turtle_helmet',
        'alexsmobs:moose_headgear',
        'alexsmobs:frontier_cap',
        'alexsmobs:spiked_turtle_shell',
        'alexsmobs:novelty_hat',
        'ars_nouveau:novice_hood',
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'mutantmore:mutant_wither_skeleton_skull',

    ]
    let chestplates = [
        'minecraft:leather_chestplate',
        'minecraft:golden_chestplate',
        'minecraft:iron_chestplate',
        'minecraft:diamond_chestplate',
        'minecraft:netherite_chestplate',
        'minecraft:chainmail_chestplate',
        'create:copper_backtank',
        'create:netherite_backtank',
        'bygonenether:gilded_netherite_chestplate',
        'forbidden_arcanus:draco_arcanus_chestplate',
        'forbidden_arcanus:tyr_chestplate',
        'forbidden_arcanus:mortem_chestplate',
        'mekanism:mekasuit_bodyarmor',
        'minecolonies:plate_armor_chest',
        'pneumaticcraft:compressed_iron_chestplate',
        'pneumaticcraft:pneumatic_chestplate',
        'theabyss:fusion_armor_chestplate',
        'theabyss:incorythe_armor_chestplate',
        'theabyss:phantom_armor_chestplate',
        'theabyss:ignisithe_armor_chestplate',
        'theabyss:unorithe_armor_chestplate',
        'theabyss:garnite_armor_chestplate',
        'theabyss:glacerythe_armor_chestplate',
        'theabyss:bone_armor_chestplate',
        'theabyss:aberythe_armor_chestplate',
        'born_in_chaos_v1:dark_metal_armor_chestplate',
        'stalwart_dungeons:tungsten_chestplate',
        'stalwart_dungeons:warted_tungsten_chestplate',
        'stalwart_dungeons:chorundum_armor_chestplate',
        'iter_rpg:sky_armor_chestplate',
        'iter_rpg:forest_armor_chestplate',
        'iter_rpg:ocean_armor_chestplate',
        'iter_rpg:hell_armor_chestplate',
        'iter_rpg:end_armor_chestplate',
        'enlightened_end:adamantite_armor_chestplate',
        'aquaculture:neptunium_chestplate',
        'mutationcraft:rusted_metal_armor_chestplate',
        'mutationcraft:metal_armor_chestplate',
        'magistuarmory:maximilian_chestplate',
        'magistuarmory:crusader_chestplate',
        'magistuarmory:ceremonial_chestplate',
        'minecraft:leather_chestplate',
        'minecolonies:pirate_top',
        'minecolonies:pirate_chest',
        'alexsmobs:crocodile_chestplate',
        'alexsmobs:tarantula_hawk_elytra',
        'minecraft:elytra',
        'alexsmobs:rocky_chestplate',
        'alexsmobs:unsettling_kimono',
        'mekanism:jetpack_armored',
        'ars_nouveau:novice_robes',
        'ars_nouveau:apprentice_robes',
        'ars_nouveau:archmage_robes',
        'mutantmonsters:mutant_skeleton_chestplate',
        'mutantmore:mutant_wither_skeleton_chestplate',

    ]
    let leggings = [
        'minecraft:leather_leggings',
        'minecraft:golden_leggings',
        'minecraft:iron_leggings',
        'minecraft:diamond_leggings',
        'minecraft:netherite_leggings',
        'minecraft:chainmail_leggings',
        'bygonenether:gilded_netherite_leggings',
        'forbidden_arcanus:draco_arcanus_leggings',
        'forbidden_arcanus:tyr_leggings',
        'forbidden_arcanus:mortem_leggings',
        'mekanism:mekasuit_pants',
        'minecolonies:plate_armor_legs',
        'pneumaticcraft:compressed_iron_leggings',
        'pneumaticcraft:pneumatic_leggings',
        'theabyss:fusion_armor_leggings',
        'theabyss:incorythe_armor_leggings',
        'theabyss:phantom_armor_leggings',
        'theabyss:ignisithe_armor_leggings',
        'theabyss:unorithe_armor_leggings',
        'theabyss:garnite_armor_leggings',
        'theabyss:glacerythe_armor_leggings',
        'theabyss:bone_armor_leggings',
        'theabyss:aberythe_armor_leggings',
        'born_in_chaos_v1:dark_metal_armor_leggings',
        'stalwart_dungeons:tungsten_leggings',
        'stalwart_dungeons:warted_tungsten_leggings',
        'stalwart_dungeons:chorundum_armor_leggings',
        'iter_rpg:sky_armor_leggings',
        'iter_rpg:forest_armor_leggings',
        'iter_rpg:ocean_armor_leggings',
        'iter_rpg:hell_armor_leggings',
        'iter_rpg:end_armor_leggings',
        'enlightened_end:adamantite_armor_leggings',
        'aquaculture:neptunium_leggings',
        'mutationcraft:rusted_metal_armor_leggings',
        'mutationcraft:metal_armor_leggings',
        'magistuarmory:maximilian_leggings',
        'minecraft:leather_leggings',
        'magistuarmory:cuirassier_leggings',
        'minecolonies:pirate_leggins',
        'minecolonies:pirate_legs',
        'alexsmobs:centipede_leggings',
        'alexsmobs:emu_leggings',
        'mekanism:free_runners_armored',
        'ars_nouveau:novice_leggings',
        'ars_nouveau:apprentice_leggings',
        'ars_nouveau:archmage_leggings',
        'mutantmore:mutant_wither_skeleton_leggings',

    ]
    let boots = [
        'minecraft:leather_boots',
        'minecraft:golden_boots',
        'minecraft:iron_boots',
        'minecraft:diamond_boots',
        'minecraft:netherite_boots',
        'minecraft:chainmail_boots',
        'create:copper_diving_boots',
        'create:netherite_diving_boots',
        'bygonenether:gilded_netherite_boots',
        'forbidden_arcanus:draco_arcanus_boots',
        'forbidden_arcanus:tyr_boots',
        'forbidden_arcanus:mortem_boots',
        'mekanism:mekasuit_boots',
        'minecolonies:plate_armor_boots',
        'pneumaticcraft:compressed_iron_boots',
        'pneumaticcraft:pneumatic_boots',
        'theabyss:fusion_armor_boots',
        'theabyss:incorythe_armor_boots',
        'theabyss:phantom_armor_boots',
        'theabyss:ignisithe_armor_boots',
        'theabyss:unorithe_armor_boots',
        'theabyss:garnite_armor_boots',
        'theabyss:glacerythe_armor_boots',
        'theabyss:bone_armor_boots',
        'theabyss:aberythe_armor_boots',
        'born_in_chaos_v1:dark_metal_armor_boots',
        'stalwart_dungeons:tungsten_boots',
        'stalwart_dungeons:warted_tungsten_boots',
        'stalwart_dungeons:chorundum_armor_boots',
        'iter_rpg:sky_armor_boots',
        'iter_rpg:forest_armor_boots',
        'iter_rpg:ocean_armor_boots',
        'iter_rpg:hell_armor_boots',
        'iter_rpg:end_armor_boots',
        'enlightened_end:adamantite_armor_boots',
        'aquaculture:neptunium_boots',
        'mutationcraft:rusted_metal_armor_boots',
        'mutationcraft:metal_armor_boots',
        'magistuarmory:maximilian_boots',
        'magistuarmory:ceremonial_boots',
        'minecraft:leather_boots',
        'alexsmobs:roadrunner_boots',
        'minecolonies:pirate_boots',
        'minecolonies:pirate_shoes',
        'alexsmobs:flying_fish_boots',
        'ars_nouveau:novice_boots',
        'ars_nouveau:apprentice_boots',
        'ars_nouveau:archmage_boots',
        'mutantmore:mutant_wither_skeleton_boots',

    ]
    event.addAdvanced(leggings, (item, advanced, text) => {
        if (item.nbt == null) { return }


        if (item.nbt.Arcanel) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Dentedl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-2 Locational Armor').red()
            ])
        } else if (item.nbt.Heavyl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item.nbt.Springyl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Springy').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
        } else if (item.nbt.Masterfull) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Toughl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Thickl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Protectivel) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Crumblingl) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on legs:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-1 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        }
    })
    event.addAdvanced(chestplates, (item, advanced, text) => {
        //if (!item.hasNBT()) {return}
        if (item.nbt == null) { return }
        if (item.nbt.Arcanec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Heavyc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item.nbt.Cumbersomec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Cumbersome').darkGray()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-10% Dig Speed').red()
            ])
            text.add([
                Text.of('-10% Attack Speed').red()
            ])
        } else if (item.nbt.Solidc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Solid').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+0.5 Knockback Resistance').blue()
            ])
        } else if (item.nbt.Masterfulc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
            text.add([
                Text.of('+0.5 Knockback Resistance').blue()
            ])
        } else if (item.nbt.Toughc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Thickc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Protectivec) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor').blue()
            ])
        } else if (item.nbt.Crumblingc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-1 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item.nbt.Dentedc) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on body:').gray()
            ])
            text.add([
                Text.of('-2 Locational Armor').red()
            ])
        }
    })
    event.addAdvanced(helmets, (item, advanced, text) => {
        //if (!item.hasNBT()) {return}
        if (item.nbt == null) { return }
        if (item.nbt.Arcaneh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Crumblingh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-6 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item.nbt.Thickh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item.nbt.Luckyh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Lucky').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+0.5 Luck').blue()
            ])
        } else if (item.nbt.Masterfulh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+0.5 Luck').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item.nbt.Toughh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Protectiveh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('+2 Locational Armor').blue()
            ])
        } else if (item.nbt.Dentedh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-4 Locational Armor').red()
            ])
        } else if (item.nbt.Heavyh) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on head:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        }
    })
    event.addAdvanced(boots, (item, advanced, text) => {
        //if (!item.hasNBT()) {return}
        if (item.nbt == null) { return }
        if (item.nbt.Crumblingb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Crumbling').darkRed()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-1 Locational Armor Toughness').red()
            ])
            text.add([
                Text.of('-4.5 Locational Armor').red()
            ])
            text.add([
                Text.of('-1 Magic Shielding').red()
            ])
        } else if (item.nbt.Dentedb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Dented').darkGray()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-3 Locational Armor').red()
            ])
        } else if (item.nbt.Arcaneb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()
            ])
        } else if (item.nbt.Speedyb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Speedy').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+10% Speed').blue()
            ])
        } else if (item.nbt.Tallb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tall').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+0.5 Step Height').blue()
            ])
        } else if (item.nbt.Masterfulb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Masterful').lightPurple()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+0.5 Step Height').blue()
            ])
            text.add([
                Text.of('+10% Speed').blue()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        } else if (item.nbt.Toughb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Tough').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1 Locational Armor Toughness').blue()
            ])
        } else if (item.nbt.Thickb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thick').yellow()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-5% Speed').red()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        } else if (item.nbt.Heavyb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Heavy').red()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('-10% Speed').red()
            ])
        } else if (item.nbt.Protectiveb) {
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Protective').blue()
            ])
            text.add([
                Text.of('When on feet:').gray()
            ])
            text.add([
                Text.of('+1.5 Locational Armor').blue()
            ])
        }
    })
})
/*
    ItemEvents.tooltip(event => {
        let curios = [
            'kubejs:dragon_ring',
            'kubejs:ring_of_faeles',
            'kubejs:elf_ring',
            'kubejs:fairy_ring',
            'kubejs:lightning_dragon_ring',
            'kubejs:ocean_dragon_ring',
            'kubejs:titan_ring',
            'potion_rings_rebooted:potion_ring_of_jump_boost',
            'potion_rings_rebooted:potion_ring',
            'potion_rings_rebooted:potion_ring_of_speed',
            'potion_rings_rebooted:potion_ring_of_regeneration',
            'potion_rings_rebooted:potion_ring_of_strength',
            'potion_rings_rebooted:potion_ring_of_haste',
            'potion_rings_rebooted:potion_ring_of_resistance',
            'ars_nouveau:alchemists_crown',
            'create:goggles',
            'ars_nouveau:amulet_of_mana_boost',
            'ars_nouveau:amulet_of_mana_regen',
            'ars_nouveau:ring_of_greater_discount',
            'ars_nouveau:ring_of_lesser_discount',
            'sophisticatedbackpacks:backpack',
            'supplementaries:quiver',
            'toolbelt:belt',
            'tetra:modular_toolbelt',
            //'#artifacts:artifacts',
            'artifacts:villager_hat',
            'artifacts:superstitious_hat',
            'artifacts:cross_necklace',
            'artifacts:panic_necklace',
            'artifacts:charm_of_sinking',
            'artifacts:cloud_in_a_bottle',
            'artifacts:antidote_vessel',
            'artifacts:universal_attractor',
            'artifacts:feral_claws',
            'artifacts:running_shoes',
            'artifacts:steadfast_spikes',
            'artifacts:flippers',
            'doom:daisy',
            'doom:soulcube',
            'iter_rpg:arcane_bouquet',
            'iter_rpg:ametrine_geode',
            'iter_rpg:possession',
            'iter_rpg:creative_catalyst',
            'iter_rpg:arcane_bouquet',
            'unusualend:golem_orb',
            'unusualend:nether_orb',
            'unusualend:wither_orb',
            'unusualend:shulker_orb',
        ]
        event.addAdvanced(Ingredient.all, (item, advanced, text) => {
             
             
            
            if (item.nbt.Arcane){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Arcane').blue()   
                ])
                text.add([
                    Text.of('When on legs:').gray() 
                ])
                text.add([
                    Text.of('+1 Magic Shielding').blue()  
                ])
            }
        })
    })*/