ItemEvents.tooltip(event => {
    let trinket = [
        'potion_rings_rebooted:potion_ring_of_jump_boost',
        'potion_rings_rebooted:potion_ring',
        'potion_rings_rebooted:potion_ring_of_speed',
        'potion_rings_rebooted:potion_ring_of_regeneration',
        'potion_rings_rebooted:potion_ring_of_strength',
        'potion_rings_rebooted:potion_ring_of_haste',
        'potion_rings_rebooted:potion_ring_of_resistance',
        'ars_nouveau:alchemists_crown',
        'ars_nouveau:amulet_of_mana_boost',
        'ars_nouveau:amulet_of_mana_regen',
        'ars_nouveau:ring_of_greater_discount',
        'ars_nouveau:ring_of_lesser_discount',
        'sophisticatedbackpacks:backpack',
        'supplementaries:quiver',
        'toolbelt:belt',
        'tetra:modular_toolbelt',
        '#artifacts:artifacts',
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
        'create:goggles',
        'kubejs:dragon_ring',
        'kubejs:ring_of_faeles',
        'kubejs:elf_ring',
        'kubejs:fairy_ring',
        'kubejs:lightning_dragon_ring',
        'kubejs:ocean_dragon_ring',
        'kubejs:titan_ring',
        'doom:daisy',
        'doom:soulcube',
        'iter_rpg:arcane_bouquet',
        'iter_rpg:ametrine_geode',
        'iter_rpg:possession',
        'iter_rpg:creative_catalyst',
        'unusualend:golem_orb',
        'unusualend:nether_orb',
        'unusualend:wither_orb',
        'unusualend:shulker_orb',
        'iter_rpg:whetstone',
        'iter_rpg:forgotten_knowledge',
        'iter_rpg:sharp_bone',
        'ae2:wireless_crafting_terminal',
        'aetwtlib:wireless_pattern_access_terminal',
        'aetwtlib:wireless_pattern_encoding_terminal',
        'aetwtlib:wireless_universal_terminal',
        'pneumaticcraft:memory_stick',
        'ars_nouveau:belt_of_levitation',
        'ars_nouveau:belt_of_unstable_gifts',
        'ars_nouveau:summon_focus',
        'ars_nouveau:shapers_focus',
        'ars_nouveau:alchemists_crown',
        'sophisticatedbackpacks:gold_backpack',
        'sophisticatedbackpacks:iron_backpack',
        'sophisticatedbackpacks:diamond_backpack',
        'sophisticatedbackpacks:netherite_backpack',

    ]
    event.addAdvanced(trinket, (item, advanced, text) => {
        if (!item.hasNBT()) {return}
        
        if (item.nbt.Prospecting){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Prospecting').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Dig Speed').blue()  
            ])
        }else if (item.nbt.Clunky){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Clunky').darkGray()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('-5% Dig Speed').red()  
            ])
            text.add([
                Text.of('-5% Speed').red()  
            ])
            text.add([
                Text.of('-5% Attack Speed').red()  
            ])
        }else if (item.nbt.Healthy){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Healthy').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+2 Max Health').blue()  
            ])
        }else if (item.nbt.Aiming){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Aiming').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Projectile Damage').blue()  
            ])
        }else if (item.nbt.Undying){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Undying').lightPurple()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Damage Resistance').blue()  
            ])
            text.add([
                Text.of('+2 Max Health').blue()  
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()  
            ])
        }else if (item.nbt.Punishing){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Punishing').lightPurple()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Projectile Damage').blue()  
            ])
            text.add([
                Text.of('+3% Attack Damage').blue()  
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()  
            ])
        }else if (item.nbt.Focusing){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Focusing').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()  
            ])
            text.add([
                Text.of('+0.5 MP Regen').blue()  
            ])
        }else if (item.nbt.Arcane){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Arcane').lightPurple()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Magic Damage').blue()  
            ])
            text.add([
                Text.of('+1 MP Regen').blue()  
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()  
            ])
        }else if (item.nbt.Flailing){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Flailing').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Attack Speed').blue()  
            ])
        }else if (item.nbt.Lucky){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Lucky').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+0.2 Luck').blue()  
            ])
        }else if (item.nbt.Athletic){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Athletic').aqua()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+5% Speed').blue()  
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()  
            ])
        }else if (item.nbt.Horrible){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Horrible').darkGray()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('-5% Projectile Damage').red()  
            ])
            text.add([
                Text.of('-5% Attack Damage').red()  
            ])
            text.add([
                Text.of('-5% Magic Damage').red()  
            ])
        }else if (item.nbt.Graceful){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Graceful').aqua()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Dig Speed').blue()  
            ])
            text.add([
                Text.of('+3% Attack Speed').blue()  
            ])
        }else if (item.nbt.Unlucky){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Unlucky').red()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('-0.2 Luck').red()  
            ])
        }else if (item.nbt.Strengthening){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Strengthening').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Attack Damage').blue()  
            ])
        }else if (item.nbt.Speedy){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Speedy').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+5% Speed').blue()  
            ])
        }else if (item.nbt.Armored){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Armored').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+3% Damage Resistance').blue()  
            ])
        }else if (item.nbt.Shielding){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Shielding').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+1 Magic Shielding').blue()  
            ])
        }else if (item.nbt.Springy){
            text.add([
                Text.of('Quality: ').gray(),
                Text.of('Springy').blue()   
            ])
            text.add([
                Text.of('When in any curios slot:').gray() 
            ])
            text.add([
                Text.of('+0.5 Jump Height').blue()  
            ])
        }
    })
    })

    ItemEvents.tooltip(event => {
    event.addAdvanced('kubejs:reforging_station', (item, advanced, text) => {
      
        
        text.add([
            Text.of('Used to Reforge Items').gray(),
        ])
        text.add([
            Text.of('Right/Left click ').blue(),
            Text.of('with any ').blue(),
            Text.of('Curios/Armor ').darkAqua()
        ])
        text.add([
            Text.of('or ').darkAqua() 
        ])
       
        text.add([
            Text.of('Right click ').blue(),
            Text.of('with any ').blue(),
            Text.of('Weapon/Tool ').darkAqua() 
        ])
        text.add([
            Text.of('to see reforge ingredient!').blue()  
        ])
    
})
})

   /*
    //const $AetherMenus = Java.loadClass("com.aetherteam.aether.api.AetherMenus")
    ClientEvents.tick(event => {
        //event.player.tell(Client.currentScreen.class) //uncomment this line to print the current screen to chat. ⚠WARNING⚠: SPAMMY
        if (Client.currentScreen?.class == 'class net.minecraft.client.gui.screens.inventory.InventoryScreen') {
            //Client.player.tell('Sorry, pausing has been disabled! Continue playing')
            Client.setCurrentScreen(AetherTitleScreen())
        }
    })
    */