import crafttweaker.api.tag.MCTag;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.item.ItemDefinition;
import stdlib.List;

/*
    Tags are a method of grouping registry objects together (items, blocks, entity_types, and fluids, to name a few).

    Tags are commonly used in recipes to group variants of items together, such as being able to mix Oak planks and Birch planks to make sticks.
    However, Tags are not limited to recipes, and have some very interesting use cases outside of recipes.

    Some interesting use cases for tags are:
    - <tag:blocks:minecraft:bamboo_plantable_on> lets you change what blocks bamboo can be placed on.
    - <tag:blocks:minecraft:climbable> lets you mark blocks as climbable, allowing mobs to climb them like a ladder.
    - <tag:blocks:minecraft:enderman_holdable> lets you make a block holdable by an enderman.
    - <tag:blocks:minecraft:mineable/axe>, <tag:blocks:minecraft:mineable/hoe>, <tag:blocks:minecraft:mineable/pickaxe>, <tag:blocks:minecraft:mineable/shovel> let you make blocks mineable with different tools.
    - <tag:entity_types:minecraft:axolotl_always_hostiles> lets you make axolotl always attach an entity type.
    - <tag:items:minecraft:freeze_immune_wearables> lets you make wearing certain armor items make the player immune to freezing from powder snow.

    There are many more utility tags like the one shown above; you can find all of the tags by using '/ct dump tag' and looking in the 'crafttweaker.log' file or '/ct dump_brackets' and looking in the 'ct_dumps/tag.txt' file.

    While the game currently only registers tags for:
    - Items
    - Blocks
    - Entity Types
    - Fluids
    - Game Events
    - Biomes

    There are a plethora of other types of tags that the game supports.
    You can find a full list by doing '/ct dump tagmanager' and looking in the 'crafttweaker.log' file or '/ct dump_brackets' and looking in the 'ct_dumps/tagmanager.txt' file.

    In CraftTweaker you can:
    - Create new completely new tags.
    - Add elements to existing tags added by the game, Forge, Fabric or any other datapack you may have loaded.
    - Remove elements from existing tags added by the game, Forge, Fabric or any other datapack you may have loaded.

    Some tags, such as 'biome', 'game_event' and 'dimension_type', may not have their elements be exposed to scripts, or are just not easily accessible to scripters to be able to add or remove them from a tag.
    To solve this, CraftTweaker allows you to add and remove from tags using the name of an element, for example instead of writing:
    <tag:items:minecraft:wool>.remove(<item:minecraft:white_wool>);
    You can write:
    <tag:items:minecraft:wool>.removeId(<resource:minecraft:white_wool>);

    Another example, if you wanted to add to a biome tag, you would have to do:
    <tag:worldgen/biome:minecraft:has_structure/shipwreck_beached>.addId(<resource:minecraft:plains>);
    and
    <tag:worldgen/biome:minecraft:has_structure/shipwreck_beached>.removeId(<resource:minecraft:beach>);

    This system gives you the full power of tags that the datapack system provides.

    Now that you hopefully have a basic understanding of Tags and what they can do, the rest of this file will focus on showing examples of creating, modifying, and interacting with Tags.
*/


<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:badlands>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:birch_forest>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:crystal_forest>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:dark_forest>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:desert>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:flower_forest>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:forest>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:jungle>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:mangrove_swamp>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:meadow>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:old_growth_taiga>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:plains>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:prismarine_forest>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:savanna>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:snowy_plains>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:snowy_taiga>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:sparse_jungle>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:sunflower_plains>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:swamp>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:taiga>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:windswept_forest>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:windswept_plains>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:skylands:wooded_badlands>);
<tag:worldgen/biome:minecraft:is_ocean>.addId(<resource:bro:saturated/oceanic>);

<tag:entity_types:minecraft:undead>.add(<entitytype:minecraft:skeleton>);
<tag:entity_types:minecraft:undead>.add(<entitytype:minecraft:husk>);
<tag:entity_types:minecraft:undead>.add(<entitytype:minecraft:zombie>);
<tag:entity_types:minecraft:undead>.add(<entitytype:minecraft:drowned>);

<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:cod>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:salmon>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:squid>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:drowned>); 
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:dolphin>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:axolotl>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:glow_squid>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:guardian>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:pufferfish>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:tadpole>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:tropical_fish>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:turtle>);
<tag:entity_types:minecraft:fish>.add(<entitytype:minecraft:elder_guardian>);

/*<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_mountain>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_badlands>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:forge:is_mesa>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:c:in_mesa>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:forge:is_badlands>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_hill>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_taiga>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_jungle>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:forge:is_jungle>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:c:in_jungle>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:forge:is_forest>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_forest>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:c:forest>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:stony_shore>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:mushroom_fields>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_forest>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_forest>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.remove(<tag:worldgen/biome:minecraft:is_forest>);*/
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.clear();
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.add(<tag:worldgen/biome:tectonic:all_tectonic_biomes>);

<tag:worldgen/biome:cavernous:is_caves_not_deep_dark>.removeId(<resource:minecraft:dripstone_caves>);
<tag:worldgen/biome:cavernous:is_caves_not_deep_dark>.removeId(<resource:minecraft:lush_caves>);
<tag:worldgen/biome:betterstrongholds:has_structure/better_stronghold>.add(<tag:worldgen/biome:cavernous:is_caves_not_deep_dark>);
<tag:worldgen/biome:seafaring:has_structure/undergrounddungeon>.add(<tag:worldgen/biome:cavernous:is_caves_not_deep_dark>);
<tag:worldgen/biome:seafaring:has_structure/undergrounddungeon>.add(<tag:worldgen/biome:tectonic:all_tectonic_biomes>);
/*
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:badlands>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:birch_forest>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:crystal_forest>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:dark_forest>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:desert>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:flower_forest>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:forest>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:jungle>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:mangrove_swamp>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:meadow>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:old_growth_taiga>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:plains>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:prismarine_forest>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:savanna>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:snowy_plains>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:snowy_taiga>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:sparse_jungle>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:sunflower_plains>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:swamp>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:taiga>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:windswept_forest>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:windswept_plains>);
<tag:worldgen/biome:minecraft:is_deep_ocean>.addId(<resource:skylands:wooded_badlands>);
*/
<tag:worldgen/biome:coralreef:has_reef>.add(<tag:worldgen/biome:minecraft:is_ocean>);

<tag:worldgen/biome:awesomedungeonocean:has_structure/frigate_medium_biomes>.add(<tag:worldgen/biome:is_ocean>);
<tag:worldgen/biome:awesomedungeonocean:has_structure/ocean_cage_biomes>.add(<tag:worldgen/biome:is_ocean>);
/*
<tag:worldgen/biome:upgrade_aquatic:has_monster/great_thrasher>.add(<tag:worldgen/biome:minecraft:is_deep_ocean>);
<tag:worldgen/biome:upgrade_aquatic:has_monster/thrasher>.add(<tag:worldgen/biome:minecraft:is_ocean>);
*/
<tag:items:forge:flour>.add(<item:pneumaticcraft:wheat_flour>);
<tag:items:minecraft:planks>.add(<item:quark:vertical_mangrove_planks>);
<tag:items:kubejs:kelp>.add(<item:minecraft:vine>);
<tag:items:kubejs:kelp>.add(<item:minecraft:dried_kelp>);
<tag:items:kubejs:kelp>.add(<item:forbidden_arcanus:cherry_flower_vines>);
<tag:items:kubejs:wetkelp>.add(<item:minecraft:kelp>);
<tag:items:kubejs:wetkelp>.add(<item:upgrade_aquatic:tongue_kelp>);
<tag:items:kubejs:wetkelp>.add(<item:upgrade_aquatic:thorny_kelp>);
<tag:items:kubejs:wetkelp>.add(<item:upgrade_aquatic:ochre_kelp>);
<tag:items:kubejs:wetkelp>.add(<item:upgrade_aquatic:polar_kelp>);
<tag:items:forge:milk>.add(<item:forbidden_arcanus:edelwood_milk_bucket>);
<tag:blocks:minecraft:doors>.add(<block:domum_ornamentum:vanilla_doors_compat>);
<tag:blocks:minecraft:wooden_doors>.add(<block:domum_ornamentum:vanilla_doors_compat>);
<tag:blocks:minecraft:wooden_doors>.add(<block:theabyss:frozen_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:theabyss:blaru_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:theabyss:jungle_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:theabyss:bog_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:theabyss:sal_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:theabyss:slimed_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:theabyss:vigilant_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:born_in_chaos_v1:scorched_planks_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:iter_rpg:sacred_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:enlightened_end:congealed_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:upgrade_aquatic:glass_door>);
<tag:blocks:minecraft:wooden_doors>.add(<block:unusualend:chorus_nest_planks_door>);

<tag:items:kubejs:seagrass>.add(<item:minecraft:seagrass>);
<tag:items:kubejs:seagrass>.add(<item:minecraft:vine>);
<tag:items:kubejs:essence>.add(<item:kubejs:ylf_essence>);
<tag:items:kubejs:essence>.add(<item:kubejs:allay_essence>);
<tag:items:kubejs:essence>.add(<item:iter_rpg:air_fragment>);




/*
<tag:items:toughasnails:drinks>.add(<item:unusualend:chorus_juice>);
<tag:items:toughasnails:thirst/3_thrist_drinks>.add(<item:unusualend:chorus_juice>);
<tag:items:toughasnails:hydration/20_hydration_drinks>.add(<item:unusualend:chorus_juice>);
*/












// Adding to existing Tags

// Adds Dirt to <tag:items:minecraft:planks>, allowing it to be used in place of Planks in recipes.
//<tag:items:minecraft:planks>.add(<item:minecraft:dirt>);

// Adds Diamond Blocks to <tag:blocks:minecraft:bamboo_plantable_on>, allowing bamboo to be placed on it.
//<tag:blocks:minecraft:bamboo_plantable_on>.add(<block:minecraft:diamond_block>);

// Adds Skeletons to <tag:entity_types:minecraft:axolotl_always_hostiles>, making Axolotl attack skeletons.
/*<tag:entity_types:minecraft:axolotl_always_hostiles>.add(<entitytype:endlessocean:spot_billed_pelican>);
<tag:entity_types:minecraft:axolotl_always_hostiles>.add(<entitytype:endlessocean:african_penguin>);
*/


// Removing from existing Tags

// Removes Leather Helmet from <tag:items:minecraft:freeze_immune_wearables>, removing it's ability to prevent freezing.
//<tag:items:minecraft:freeze_immune_wearables>.add(<item:minecraft:leather_helmet>);

// Removes Diamond Blocks from <tag:blocks:minecraft:beacon_base_blocks>, making it that it can't be a Beacon Base.
//<tag:blocks:minecraft:beacon_base_blocks>.remove(<block:minecraft:diamond_block>);

// Removes Rabbits from <tag:entity_types:minecraft:powder_snow_walkable_mobs>, removing their ability to walk on Powder Snow.
//<tag:entity_types:minecraft:powder_snow_walkable_mobs>.remove(<entitytype:minecraft:rabbit>);

// Removes Snowy Taiga from <tag:worldgen/biome:minecraft:has_structure/igloo>, making it that Igloos will never spawn in the biome..
//<tag:worldgen/biome:minecraft:has_structure/igloo>.removeId(<resource:minecraft:snowy_taiga>);


// Creating new Tags
// Tags need to be created before they can be used in a recipe, if you are splitting your Tag creation into a separate script, make sure that the script is loaded before you use it by using the priority preprocessor system.
// A tag is created once an element is added to it, for example:

//<tag:items:crafttweaker:pickaxe>; // Does not create the Tag.
//<tag:items:crafttweaker:pickaxe>.add(<item:minecraft:diamond_pickaxe>); // Creates the Tag and adds a Diamond to it.
//<tag:items:crafttweaker:pickaxe>.add(<item:minecraft:iron_pickaxe>); // Adds Iron Pickaxe to the Tag that was created by the line above.

// Creating a new Menu Tag and adding a Menu to it:
// Note, Menu tags are currently not used in the game, so while this will create the Tag and add the Furnace menu to it, it won't actually do anything in game.
//<tag:menu:crafttweaker:custom_menus>.addId(<resource:minecraft:furnace>);


// Iterating Tags
// If a Tag's element type is exposed to scripters, then you can iterate over it with a for loop like so:

/*for item in <tag:items:minecraft:wool> {

    println(item.commandString);
}*/

// If the Tag has elements which are not exposed to scripters, then you will need to do the following:

/*for id in <tag:items:minecraft:wool>.idElements {

    println(id);
}*/

// Using Tags in recipes

// Item Tags can be used in recipes just like Item's can, like so:
//craftingTable.addShapeless("tag_example_recipe", <item:minecraft:diamond>, [<tag:items:minecraft:logs>, <item:minecraft:dirt>, <tag:items:minecraft:rails>]);

// Tags, however are not IIngredients, so to use IIngredient methods on a Tag, you will need to cast it yourself by doing either:
// - <tag:items:crafttweaker:pickaxe>.asIIngredient()
// - <tag:items:crafttweaker:pickaxe> as IIngredient // requires an import for 'crafttweaker.api.ingredient.IIngredient'
// The script line below will add a recipe that, when crafted, will damage the given element (either a Diamond Pickaxe or an Iron Pickaxe) of the <tag:items:crafttweaker:pickaxe> tag by 2.
craftingTable.addShapeless("ingredient_tag_example_recipe", <item:minecraft:cobblestone>, [<item:minecraft:cobblestone_stairs>, <tag:items:forge:pickaxes>.asIIngredient().transformDamage(2)]);
