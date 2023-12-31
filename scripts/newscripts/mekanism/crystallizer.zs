import mods.mekanism.api.ingredient.ChemicalStackIngredient.GasStackIngredient;
import mods.mekanism.api.ingredient.ChemicalStackIngredient.InfusionStackIngredient;

/*
 * Adds two Crystallizing Recipes that do the following:
 * 1) Adds a recipe that produces one Osmium Ingot out of 200 mB of Osmium.
 * 2) Adds a recipe that produces one Gold Nugget out of 9 mB of the Gold Infuse Type.
*/

// <recipetype:mekanism:crystallizing>.addRecipe(name as string, input as ChemicalStackIngredient, output as IItemStack)

//<recipetype:mekanism:crystallizing>.addRecipe("osmium_ingotification", GasStackIngredient.from(<gas:mekanism:osmium> * 200), <item:mekanism:ingot_osmium>);
//An alternate implementation of the above recipe are shown commented below. This implementation makes use of implicit casting to allow easier calling:
// <recipetype:mekanism:crystallizing>.addRecipe("osmium_ingotification", <gas:mekanism:osmium> * 200, <item:mekanism:ingot_osmium>);

//<recipetype:mekanism:crystallizing>.addRecipe("gold_infusion_to_gold", InfusionStackIngredient.from(<tag:mekanism/infuse_type:mekanism:gold>, 9), <item:minecraft:gold_nugget>);
//An alternate implementation of the above recipe are shown commented below. This implementation makes use of implicit casting to allow easier calling:
// <recipetype:mekanism:crystallizing>.addRecipe("gold_infusion_to_gold", <tag:mekanism/infuse_type:mekanism:gold> * 9, <item:minecraft:gold_nugget>);


