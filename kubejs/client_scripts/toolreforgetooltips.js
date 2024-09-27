ItemEvents.tooltip(event => {
let tools = [
    'minecraft:wooden_sword',
        'minecraft:wooden_shovel',
        'minecraft:wooden_pickaxe',
        'minecraft:wooden_axe',
        'minecraft:wooden_hoe',
        'magistuarmory:wood_stylet',
        'magistuarmory:wood_shortsword',
        'magistuarmory:wood_pike',
        'magistuarmory:wood_ranseur',
        'magistuarmory:wood_ahlspiess',
        'magistuarmory:wood_chivalrylance',
        'magistuarmory:wood_estoc',
        'magistuarmory:wood_zweihander',
        'magistuarmory:wood_flamebladedsword',
        'magistuarmory:wood_lochaberaxe',
        'magistuarmory:wood_concavehalberd',
        'magistuarmory:wood_heavywarhammer',
        'magistuarmory:wood_lucernhammer',
        'forbidden_arcanus:wooden_blacksmith_gavel',
        'stalwart_dungeons:wooden_hammer',
        'iter_rpg:wooden_scythe',
        'aquaculture:wooden_fillet_knife',
        'better_katanas:wood_sword',
        'minecraft:stone_sword',
        'minecraft:stone_shovel',
        'minecraft:stone_pickaxe',
        'minecraft:stone_axe',
        'minecraft:stone_hoe',
        'magistuarmory:stone_stylet',
        'magistuarmory:stone_shortsword',
        'magistuarmory:stone_pike',
        'magistuarmory:stone_ranseur',
        'magistuarmory:stone_ahlspiess',
        'magistuarmory:stone_chivalrylance',
        'magistuarmory:stone_estoc',
        'magistuarmory:stone_zweihander',
        'magistuarmory:stone_flamebladedsword',
        'magistuarmory:stone_lochaberaxe',
        'magistuarmory:stone_concavehalberd',
        'magistuarmory:stone_heavywarhammer',
        'magistuarmory:stone_lucernhammer',
        'forbidden_arcanus:stone_blacksmith_gavel',
        'stalwart_dungeons:stone_hammer',
        'iter_rpg:stone_scythe',
        'aquaculture:stone_fillet_knife',
        'better_katanas:stone_katana',
        'magistuarmory:iron_stylet',
        'magistuarmory:iron_shortsword',
        'magistuarmory:iron_pike',
        'magistuarmory:iron_ranseur',
        'magistuarmory:iron_ahlspiess',
        'magistuarmory:iron_chivalrylance',
        'magistuarmory:iron_estoc',
        'magistuarmory:iron_zweihander',
        'magistuarmory:iron_flamebladedsword',
        'magistuarmory:iron_lochaberaxe',
        'magistuarmory:iron_concavehalberd',
        'magistuarmory:iron_heavywarhammer',
        'magistuarmory:iron_lucernhammer',
        'magistuarmory:messer_sword',
        'forbidden_arcanus:iron_blacksmith_gavel',
        'stalwart_dungeons:iron_hammer',
        'iter_rpg:iron_scythe',
        'aquaculture:iron_fillet_knife',
        'better_katanas:iron_katana',
        'minecolonies:iron_scimitar',
        'mutantmonsters:hulk_hammer',
        'kubejs:iron_saw',
        'kubejs:iron_knife',
        'magistuarmory:gold_stylet',
        'magistuarmory:gold_shortsword',
        'magistuarmory:gold_pike',
        'magistuarmory:gold_ranseur',
        'magistuarmory:gold_ahlspiess',
        'magistuarmory:gold_chivalrylance',
        'magistuarmory:gold_estoc',
        'magistuarmory:gold_zweihander',
        'magistuarmory:gold_flamebladedsword',
        'magistuarmory:gold_lochaberaxe',
        'magistuarmory:gold_concavehalberd',
        'magistuarmory:gold_heavywarhammer',
        'magistuarmory:gold_lucernhammer',
        'forbidden_arcanus:golden_blacksmith_gavel',
        'stalwart_dungeons:golden_hammer',
        'iter_rpg:golden_scythe',
        'aquaculture:gold_fillet_knife',
        'better_katanas:gold_katana',
        'kubejs:gold_saw',
        'kubejs:gold_knife',
        'magistuarmory:diamond_stylet',
        'magistuarmory:diamond_shortsword',
        'magistuarmory:diamond_pike',
        'magistuarmory:diamond_ranseur',
        'magistuarmory:diamond_ahlspiess',
        'magistuarmory:diamond_chivalrylance',
        'magistuarmory:diamond_estoc',
        'magistuarmory:diamond_zweihander',
        'magistuarmory:diamond_flamebladedsword',
        'magistuarmory:diamond_lochaberaxe',
        'magistuarmory:diamond_concavehalberd',
        'magistuarmory:diamond_heavywarhammer',
        'magistuarmory:diamond_lucernhammer',
        'forbidden_arcanus:diamond_blacksmith_gavel',
        'stalwart_dungeons:diamond_hammer',
        'iter_rpg:diamond_scythe',
        'aquaculture:diamond_fillet_knife',
        'better_katanas:diamond_katana',
        'minecolonies:chiefsword',
        'kubejs:diamond_saw',
        'kubejs:diamond_knife',
        'magistuarmory:netherite_stylet',
        'magistuarmory:netherite_shortsword',
        'magistuarmory:netherite_pike',
        'magistuarmory:netherite_ranseur',
        'magistuarmory:netherite_ahlspiess',
        'magistuarmory:netherite_chivalrylance',
        'magistuarmory:netherite_estoc',
        'magistuarmory:netherite_zweihander',
        'magistuarmory:netherite_flamebladedsword',
        'magistuarmory:netherite_lochaberaxe',
        'magistuarmory:netherite_concavehalberd',
        'magistuarmory:netherite_heavywarhammer',
        'magistuarmory:netherite_lucernhammer',
        'forbidden_arcanus:netherite_blacksmith_gavel',
        'stalwart_dungeons:netherite_hammer',
        'iter_rpg:netherite_scythe',
        'better_katanas:netherite_katana',
        'better_katanas:snake_sword',
        'magistuarmory:silver_stylet',
        'magistuarmory:silver_shortsword',
        'magistuarmory:silver_pike',
        'magistuarmory:silver_ranseur',
        'magistuarmory:silver_ahlspiess',
        'magistuarmory:silver_chivalrylance',
        'magistuarmory:silver_estoc',
        'magistuarmory:silver_zweihander',
        'magistuarmory:silver_flamebladedsword',
        'magistuarmory:silver_lochaberaxe',
        'magistuarmory:silver_concavehalberd',
        'magistuarmory:silver_heavywarhammer',
        'magistuarmory:silver_lucernhammer',
        'magistuarmory:steel_stylet',
        'magistuarmory:steel_shortsword',
        'magistuarmory:steel_pike',
        'magistuarmory:steel_ranseur',
        'magistuarmory:steel_ahlspiess',
        'magistuarmory:steel_chivalrylance',
        'magistuarmory:steel_estoc',
        'magistuarmory:steel_zweihander',
        'magistuarmory:steel_flamebladedsword',
        'magistuarmory:steel_lochaberaxe',
        'magistuarmory:steel_concavehalberd',
        'magistuarmory:steel_heavywarhammer',
        'magistuarmory:steel_lucernhammer',
        'kubejs:steel_saw',
        'kubejs:steel_knife',
        'forbidden_arcanus:draco_arcanus_sword',
        'forbidden_arcanus:draco_arcanus_shovel',
        'forbidden_arcanus:draco_arcanus_pickaxe',
        'forbidden_arcanus:draco_arcanus_axe',
        'forbidden_arcanus:draco_arcanus_hoe',
        'forbidden_arcanus:draco_arcanus_scepter',
        'forbidden_arcanus:draco_arcanus_staff',
        'forbidden_arcanus:deorum_sword',
        'forbidden_arcanus:deorum_shovel',
        'forbidden_arcanus:deorum_pickaxe',
        'forbidden_arcanus:deorum_axe',
        'forbidden_arcanus:deorum_hoe',
        'forbidden_arcanus:deorum_blacksmith_gavel',
        'forbidden_arcanus:mystical_dagger',
        'forbidden_arcanus:slimec_pickaxe',
        'theabyss:fusion_sword',
        'theabyss:fusion_shovel',
        'theabyss:fusion_pickaxe',
        'theabyss:fusion_axe',
        'theabyss:fusion_hoe',
        'kubejs:flint_knife',
        'kubejs:flint_pickaxe',
        'kubejs:flint_shovel',
        'kubejs:flint_hoe',
        'theabyss:incorythe_sword',
        'theabyss:incorythe_shovel',
        'theabyss:incorythe_pickaxe',
        'theabyss:incorythe_axe',
        'theabyss:incorythe_hoe',
        'theabyss:phantom_sword',
        'theabyss:phantom_shovel',
        'theabyss:phantom_pickaxe',
        'theabyss:phantom_axe',
        'theabyss:phantom_hoe',
        'theabyss:garnite_sword',
        'theabyss:garnite_shovel',
        'theabyss:garnite_pickaxe',
        'theabyss:garnite_axe',
        'theabyss:garnite_hoe',
        'theabyss:unorithe_sword',
        'theabyss:unorithe_shovel',
        'theabyss:unorithe_pick_axe',
        'theabyss:unorithe_axe',
        'theabyss:unorithe_hoe',
        'theabyss:knight_sword',
        'theabyss:knight_shovel',
        'theabyss:knight_pick_axe',
        'theabyss:knight_axe',
        'theabyss:knight_hoe',
        'theabyss:bricked_knight_sword',
        'theabyss:abyss_sword',
        'theabyss:ignisithe_sword',
        'theabyss:bone_sword_item',
        'theabyss:bone_shovel',
        'theabyss:bone_pickaxe',
        'theabyss:bone_axe',
        'theabyss:bone_hoe',
        'stalwart_dungeons:tungsten_sword',
        'stalwart_dungeons:tungsten_shovel',
        'stalwart_dungeons:tungsten_pickaxe',
        'stalwart_dungeons:tungsten_axe',
        'stalwart_dungeons:tungsten_hoe',
        'stalwart_dungeons:tungsten_hammer',
        'stalwart_dungeons:chorundum_sword',
        'stalwart_dungeons:chorundum_shovel',
        'stalwart_dungeons:chorundum_pickaxe',
        'stalwart_dungeons:chorundum_axe',
        'stalwart_dungeons:chorundum_hoe',
        'iter_rpg:forest_sword',
        'iter_rpg:forest_shovel',
        'iter_rpg:forest_pickaxe',
        'iter_rpg:forest_axe',
        'iter_rpg:forest_hoe',
        'better_katanas:swordoftempest',
        'iter_rpg:ocean_sword',
        'iter_rpg:ocean_shovel',
        'iter_rpg:ocean_pickaxe',
        'iter_rpg:ocean_axe',
        'iter_rpg:ocean_hoe',
        'iter_rpg:end_sword',
        'better_katanas:yami_katana',
        'iter_rpg:elemental_sword',
        'iter_rpg:sky_sword',
        'iter_rpg:sky_shovel',
        'iter_rpg:sky_pickaxe',
        'iter_rpg:sky_axe',
        'iter_rpg:sky_hoe',
        'iter_rpg:hell_sword',
        'iter_rpg:hell_shovel',
        'iter_rpg:hell_pickaxe',
        'iter_rpg:hell_axe',
        'iter_rpg:hell_hoe',
        'better_katanas:murasame',
        'enlightened_end:adamantite_sword',
        'enlightened_end:adamantite_shovel',
        'enlightened_end:adamantite_pickaxe',
        'enlightened_end:adamantite_axe',
        'enlightened_end:adamantite_hoe',
        'aquaculture:neptunium_sword',
        'aquaculture:neptunium_shovel',
        'aquaculture:neptunium_pickaxe',
        'aquaculture:neptunium_axe',
        'aquaculture:neptunium_hoe',
        'aquaculture:neptunium_fillet_knife',
        'theabyss:nosaj_sword',
        'theabyss:incorythe_sword_mkii',
        'better_katanas:void_katana',
        'doom:axe_marauder_open',
        'doom:sentinelhammer',
        'doom:darklordcrucible',
        'theabyss:aberythe_sword',
        'theabyss:aberythe_hoe',
        'theabyss:aberythe_shovel',
        'theabyss:aberythe_pickaxe',
        'theabyss:aberythe_axe',
        'ars_nouveau:enchanters_sword',
        'born_in_chaos_v1:spiritual_sword',
        'born_in_chaos_v1:dark_ritual_dagger',
        'born_in_chaos_v1:sharpened_dark_metal_sword',
        'born_in_chaos_v1:skullbreaker_hammer',
        'born_in_chaos_v1:intoxicating_dagger',
        'born_in_chaos_v1:trident_hayfork',
        'born_in_chaos_v1:soul_cutlass',
        'born_in_chaos_v1:great_reaper_axe',
        'born_in_chaos_v1:nightmare_scythe',
        'iter_rpg:tormentor',
        'mutationcraft:cavalry_sword',
        'mutationcraft:rapier',
        'mutationcraft:battle_axe',
        'mutationcraft:nordic_axe',
        'mutationcraft:pole_axe',
        'mutationcraft:halberd',
        'mutationcraft:flanged_mace',
        'better_katanas:obsidian_katana',
        'better_katanas:emerald_katana',
        'better_katanas:amethyst_katana',
        'stalwart_dungeons:nether_hammer',
        'mutantmore:blazing_scimitar',
        'iter_rpg:shimmer',
        'iter_rpg:humie_butcher',
        'iter_rpg:very_good_and_cheerful_rapier',
        'iter_rpg:bloodthirst',
        'stalwart_dungeons:awful_dagger',
        'minecraft:trident',
        'mekanism:atomic_disassembler',
        'kubejs:copper_saw',
        'kubejs:copper_knife',
        'kubejs:bronze_saw',
        'kubejs:bronze_knife',
        'doom:argent_axe',
        'doom:argent_hoe',
        'doom:argent_paxel',
        'doom:argent_pickaxe',
        'doom:argent_shovel',
        'doom:argent_sword',
        'minecraft:iron_pickaxe',
        'minecraft:iron_shovel',
        'minecraft:iron_hoe',
        'minecraft:iron_axe',
        'minecraft:iron_sword',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_shovel',
        'minecraft:diamond_hoe',
        'minecraft:diamond_axe',
        'minecraft:diamond_sword',
        'minecraft:golden_pickaxe',
        'minecraft:golden_shovel',
        'minecraft:golden_hoe',
        'minecraft:golden_axe',
        'minecraft:golden_sword',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_shovel',
        'minecraft:netherite_hoe',
        'minecraft:netherite_axe',
        'minecraft:netherite_sword',
        
]
    
    event.addAdvanced(tools, (item, advanced, text) => {
        if (!item.hasNBT()) {return}
        if (item.nbt.Rusted){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Rusted').red()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-10% Dig Speed').red()  
            ])
            text.add([
                Text.of('-10% Attack Damage').red()  
            ])
            
        }else if (item.nbt.Clumsy){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Clumsy').red()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-5% Dig Speed').red()  
            ])
            text.add([
                Text.of('-5% Attack Speed').red()  
            ])
        }else if (item.nbt.Elegant){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Elegant').aqua()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('+15% Dig Speed').blue()  
            ])
            text.add([
                Text.of('+15% Attack Speed').blue()  
            ])
        }else if (item.nbt.Broken){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Broken').darkGray()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-15% Attack Damage').red()  
            ])
           
        }else if (item.nbt.Short){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Short').red()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-1 Reach Distance').red()  
            ])
        }else if (item.nbt.Thin){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Thin').yellow()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()  
            ])
            text.add([
                Text.of('-5% Attack Damage').red()  
            ])
            
        }else if (item.nbt.Pokey){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Pokey').yellow()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-10% Dig Speed').red()  
            ])
            text.add([
                Text.of('+5% Attack Damage').blue()  
            ])
        }else if (item.nbt.Vicious){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Vicious').yellow()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('+15% Attack Damage').blue()  
            ])
            text.add([
                Text.of('-0.5 Reach Distance').red()  
            ])
        }else if (item.nbt.Long){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Long').blue()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            
            text.add([
                Text.of('+0.5 Reach Distance').blue()  
            ])
        }else if (item.nbt.Keen){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Keen').blue()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()  
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()  
            ])
            
        }else if (item.nbt.Sweeping){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Sweeping').aqua()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('+20% Attack Speed').blue()  
            ])
            text.add([
                Text.of('+0.5 Reach Distance').blue()  
            ])
        }else if (item.nbt.Legendary){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Legendary').lightPurple()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('+10% Dig Speed').blue()  
            ])
            text.add([
                Text.of('+10% Attack Speed').blue()  
            ])
            text.add([
                Text.of('+15% Attack Damage').blue()  
            ])
            text.add([
                Text.of('+0.5 Reach Distance').blue()  
            ])
        }else if (item.nbt.Worthless){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Worthless').darkRed()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-10% Dig Speed').red()  
            ])
            text.add([
                Text.of('-10% Attack Speed').red()  
            ])
            text.add([
                Text.of('-10% Attack Damage').red()  
            ])
            text.add([
                Text.of('-1 Reach Distance').red()  
            ])
        }else if (item.nbt.Broad){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Broad').yellow()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-5% Dig Speed').red()  
            ])
            text.add([
                Text.of('-5% Attack Speed').red()  
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()  
            ])

        }else if (item.nbt.Bulky){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Bulky').darkGray()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-15% Dig Speed').red()  
            ])
            text.add([
                Text.of('-15% Attack Speed').red()  
            ])
        }else if (item.nbt.Sharp){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Sharp').blue()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('+10% Attack Damage').blue()  
            ])
        }else if (item.nbt.Chipped){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Chipped').red()   
            ])
            text.add([
                Text.of('When in main hand:').gray() 
            ])
            text.add([
                Text.of('-5% Attack Speed').red()  
            ])
            text.add([
                Text.of('-5% Attack Damage').red()  
            ])
        }
    })
    })

    
    
    