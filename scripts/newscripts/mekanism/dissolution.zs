import mods.mekanism.api.ingredient.ChemicalStackIngredient.GasStackIngredient;
import mods.mekanism.api.ingredient.ItemStackIngredient;
import mods.mekanism.api.ingredient.ChemicalStackIngredient.SlurryStackIngredient;
import mods.mekanism.api.ingredient.FluidStackIngredient;

//Adds a Dissolution Recipe that uses 100 mB of Sulfuric Acid (1 mB per tick) to convert Salt into 10 mB of Hydrogen Chloride.

// <recipetype:mekanism:dissolution>.addRecipe(name as string, itemInput as ItemStackIngredient, gasInput as GasStackIngredient, output as ICrTChemicalStack)

<recipetype:mekanism:dissolution>.addRecipe("raw_tungsten_to_tungsten_slurry", ItemStackIngredient.from(<item:stalwart_dungeons:raw_tungsten> * 3), GasStackIngredient.from(<gas:mekanism:sulfuric_acid> * 1), <slurry:moremekanismprocessing:dirty_tungsten> * 2000);
<recipetype:mekanism:dissolution>.addRecipe("tungsten_ore_to_tungsten_slurry", ItemStackIngredient.from(<item:stalwart_dungeons:tungsten_ore>), GasStackIngredient.from(<gas:mekanism:sulfuric_acid> * 1), <slurry:moremekanismprocessing:dirty_tungsten> * 200);

//<recipetype:mekanism:dissolution>.addRecipe("raw_zinc_to_zinc_slurry", ItemStackIngredient.from(<tag:items:forge:raw_materials/zinc> * 3), GasStackIngredient.from(<gas:mekanism:sulfuric_acid> * 1), <slurry:moremekanismprocessing:dirty_zinc> * 2000);
//<recipetype:mekanism:dissolution>.addRecipe("zinc_ore_to_zinc_slurry", ItemStackIngredient.from(<tag:items:forge:ores/zinc>), GasStackIngredient.from(<gas:mekanism:sulfuric_acid> * 1), <slurry:moremekanismprocessing:dirty_zinc> * 200);

<recipetype:mekanism:dissolution>.addRecipe("raw_bismuth_to_bismuth_slurry", ItemStackIngredient.from(<item:enlightened_end:raw_bismuth> * 3), GasStackIngredient.from(<gas:mekanism:sulfuric_acid> * 1), <slurry:moremekanismprocessing:dirty_bismuth> * 2000);
<recipetype:mekanism:dissolution>.addRecipe("bismuth_ore_to_bismuth_slurry", ItemStackIngredient.from(<item:enlightened_end:bismuth_ore>), GasStackIngredient.from(<gas:mekanism:sulfuric_acid> * 1), <slurry:moremekanismprocessing:dirty_bismuth> * 200);
<recipetype:mekanism:dissolution>.addRecipe("raw_bismuth_block_to_bismuth_slurry", ItemStackIngredient.from(<item:enlightened_end:raw_bismuth_block>), GasStackIngredient.from(<gas:mekanism:sulfuric_acid> * 2), <slurry:moremekanismprocessing:dirty_bismuth> * 6000);

//Alternate implementations of the above recipe are shown commented below. These implementations make use of implicit casting to allow easier calling:
// <recipetype:mekanism:dissolution>.addRecipe("salt_to_hydrogen_chloride", <item:mekanism:salt>, GasStackIngredient.from(<gas:mekanism:sulfuric_acid>), <gas:mekanism:hydrogen_chloride> * 10);
// <recipetype:mekanism:dissolution>.addRecipe("salt_to_hydrogen_chloride", ItemStackIngredient.from(<item:mekanism:salt>), <gas:mekanism:sulfuric_acid>, <gas:mekanism:hydrogen_chloride> * 10);
// <recipetype:mekanism:dissolution>.addRecipe("salt_to_hydrogen_chloride", <item:mekanism:salt>, <gas:mekanism:sulfuric_acid>, <gas:mekanism:hydrogen_chloride> * 10);


/*
 * Removes two Dissolution Recipes:
 * 1) The recipe for producing Hydrofluoric Acid from Fluorite.
 * 2) The recipe for producing Dirty Lead Slurry from Lead Ore.
*/

// <recipetype:mekanism:dissolution>.removeByName(name as string)

//<recipetype:mekanism:dissolution>.removeByName("mekanism:processing/uranium/hydrofluoric_acid");
//<recipetype:mekanism:dissolution>.removeByName("mekanism:processing/lead/slurry/dirty/from_ore");