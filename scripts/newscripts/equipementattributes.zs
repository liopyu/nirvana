import crafttweaker.api.entity.attribute.AttributeOperation;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.type.sword.SwordItem;

// IItemStack.addGlobalAttributeModifier(attribute as Attribute, name as string, value as double, operation as AttributeOperation, slotTypes as EquipmentSlot[])

//<item:minecraft:diamond_sword>.addGlobalAttributeModifier(<attribute:minecraft:generic.attack_damage>, "Extra Power", 100, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:mainhand>]);
//<item:minecraft:diamond_chestplate>.addGlobalAttributeModifier(<attribute:minecraft:generic.armor>, "Extra Armor", 10, AttributeOperation.ADDITION, [<constant:minecraft:equipmentslot:chest>]);