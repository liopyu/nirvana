import mods.mekanism.api.FloatingLong;
import mods.mekanism.api.ingredient.ItemStackIngredient;

//Adds an Energy Conversion Recipe that allows converting Redstone Ore into 45 kJ of power.

// <recipetype:mekanism:energy_conversion>.addRecipe(name as string, input as ItemStackIngredient, output as FloatingLong)

<recipetype:mekanism:energy_conversion>.addRecipe("redstone_ore_to_power", ItemStackIngredient.from(<item:minecraft:redstone_ore>), FloatingLong.create(45000));
<recipetype:mekanism:energy_conversion>.addRecipe("deepslate_redstone_ore_to_power", ItemStackIngredient.from(<item:minecraft:deepslate_redstone_ore>), FloatingLong.create(45000));
<recipetype:mekanism:energy_conversion>.addRecipe("dense_redstone_ore_to_power", ItemStackIngredient.from(<item:denseores:dense_redstone_ore>), FloatingLong.create(90000));
<recipetype:mekanism:energy_conversion>.addRecipe("dense_deepslate_redstone_ore_to_power", ItemStackIngredient.from(<item:denseores:dense_deepslate_redstone_ore>), FloatingLong.create(90000));
<recipetype:mekanism:energy_conversion>.addRecipe("arcane_powder_to_power", ItemStackIngredient.from(<item:iter_rpg:arcane_powder>), FloatingLong.create(100000));
//<recipetype:mekanism:energy_conversion>.addRecipe("lightning_bottle_to_power", ItemStackIngredient.from(<item:biomemakeover:lightning_bottle>), FloatingLong.create(500000));
//Alternate implementations of the above recipe are shown commented below. These implementations make use of implicit casting to allow easier calling:
// <recipetype:mekanism:energy_conversion>.addRecipe("redstone_ore_to_power", <tag:items:forge:ores/redstone>, FloatingLong.create(45000));
// <recipetype:mekanism:energy_conversion>.addRecipe("redstone_ore_to_power", ItemStackIngredient.from(<tag:items:forge:ores/redstone>), 45000);
// <recipetype:mekanism:energy_conversion>.addRecipe("redstone_ore_to_power", <tag:items:forge:ores/redstone>, 45000);
