import mods.mekanism.api.ingredient.ItemStackIngredient;

//Adds an Enriching Recipe to convert 20 Oak Leaves into an Oak Sapling.

// <recipetype:mekanism:enriching>.addRecipe(name as string, input as ItemStackIngredient, output as IItemStack)

<recipetype:mekanism:enriching>.addRecipe("oak_leaves_to_saplings", ItemStackIngredient.from(<item:minecraft:oak_leaves> * 20), <item:minecraft:oak_sapling>);
<recipetype:mekanism:enriching>.addRecipe("redstone_ore_to_redstone", ItemStackIngredient.from(<item:minecraft:redstone_ore>), <item:minecraft:redstone> * 12);
<recipetype:mekanism:enriching>.addRecipe("deepslate_redstone_ore_to_redstone", ItemStackIngredient.from(<item:minecraft:deepslate_redstone_ore>), <item:minecraft:redstone> * 12);
<recipetype:mekanism:enriching>.addRecipe("dense_redstone_ore_to_redstone", ItemStackIngredient.from(<item:denseores:dense_redstone_ore>), <item:minecraft:redstone> * 24);
<recipetype:mekanism:enriching>.addRecipe("dense_deepslate_redstone_ore_to_redstone", ItemStackIngredient.from(<item:denseores:dense_deepslate_redstone_ore>), <item:minecraft:redstone> * 24);



// <recipetype:mekanism:enriching>.removeByName(name as string)

<recipetype:mekanism:enriching>.removeByName("mekanism:processing/redstone/from_ore");