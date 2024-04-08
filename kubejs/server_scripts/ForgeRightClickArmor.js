
const reforgeablea = [
  { item: "forge:armor/diamond", offhand: "minecraft:diamond" },
  { item: "forge:armor/iron", offhand: "minecraft:iron_ingot" },
  { item: "forge:armor/gold", offhand: "minecraft:gold_ingot" },
  { item: "forge:armor/chain", offhand: "tetra:forged_mesh" },
  { item: "forge:armor/frost", offhand: "minecraft:packed_ice" },
  { item: "forge:armor/netherite", offhand: "minecraft:netherite_scrap" },
  { item: "forge:armor/copper", offhand: "minecraft:copper_ingot" },
  { item: "forge:armor/steel", offhand: "magistuarmory:steel_ingot" },
  { item: "forge:armor/draco", offhand: "forbidden_arcanus:dragon_scale" },
  { item: "forge:armor/mortem", offhand: "forbidden_arcanus:cloth" },
  { item: "forge:armor/hdpe", offhand: "mekanism:hdpe_sheet" },
  { item: "forge:armor/compressed_iron", offhand: "pneumaticcraft:ingot_iron_compressed" },
  { item: "forge:armor/fusion", offhand: "theabyss:fusion_ingot" },
  { item: "forge:armor/incorythe", offhand: "theabyss:incorythe_gem" },
  { item: "forge:armor/phantom", offhand: "theabyss:phantom_ingot" },
  { item: "forge:armor/garnite", offhand: "theabyss:garnite_ingot" },
  { item: "forge:armor/glacerythe", offhand: "theabyss:glacerythe_gem" },
  { item: "forge:armor/unorithe", offhand: "theabyss:unorithe_ingot" },
  { item: "forge:armor/ignisithe", offhand: "theabyss:ignisithe_gem" },
  { item: "forge:armor/titan_bone", offhand: "theabyss:fixed_bone" },
  { item: "forge:armor/aberythe", offhand: "theabyss:aberythe_gem" },
  { item: "forge:armor/tungsten", offhand: "stalwart_dungeons:tungsten_ingot" },
  { item: "forge:armor/chorundum", offhand: "stalwart_dungeons:chorundum" },
  { item: "forge:armor/forest", offhand: "iter_rpg:forest_ingot" },
  { item: "forge:armor/ocean", offhand: "iter_rpg:ocean_ingot" },
  { item: "forge:armor/end", offhand: "iter_rpg:end_ingot" },
  { item: "forge:armor/sky", offhand: "iter_rpg:sky_ingot" },
  { item: "forge:armor/hell", offhand: "iter_rpg:hell_ingot" },
  { item: "forge:armor/adamantite", offhand: "enlightened_end:adamantite_ingot" },
  { item: "forge:armor/neptunium", offhand: "aquaculture:neptunium_ingot" },
  { item: "forge:armor/red_wool", offhand: "minecraft:red_wool" },
  { item: "forge:armor/fish_bones", offhand: "alexsmobs:fish_bones" },
  { item: "forge:armor/flying_fish", offhand: "alexsmobs:flying_fish" },
  { item: "forge:armor/dark_metal", offhand: "born_in_chaos_v1:dark_metal_ingot" },
  { item: "forge:armor/rocky_shell", offhand: "alexsmobs:rocky_shell" },
  { item: "forge:armor/phantom_membrane", offhand: "minecraft:phantom_membrane" },
  { item: "forge:armor/tarantula_hawk_wing", offhand: "alexsmobs:tarantula_hawk_wing" },
  { item: "forge:armor/kangaroo_hide", offhand: "alexsmobs:kangaroo_hide" },
  { item: "forge:armor/spiked_scute", offhand: "alexsmobs:spiked_scute" },
  { item: "forge:armor/raccoon_tail", offhand: "alexsmobs:raccoon_tail" },
  { item: "forge:armor/wither_bone", offhand: "mutantmore:repairs_blazing_scimitar" },
  { item: "forge:armor/moose_antler", offhand: "alexsmobs:moose_antler" },
  { item: "forge:armor/leather", offhand: "minecraft:leather" },
  { item: "forge:armor/bone", offhand: "minecraft:bone" },
  { item: "forge:armor/scute", offhand: "minecraft:scute" },
  { item: "forge:armor/crocodile_scute", offhand: "alexsmobs:crocodile_scute" },
  { item: "forge:armor/centipede_leg", offhand: "alexsmobs:centipede_leg" },
  { item: "forge:armor/bronze", offhand: "mekanism:ingot_bronze" },
  { item: "forge:armor/magebloom_fiber", offhand: "ars_nouveau:magebloom_fiber" },
]


function reforgea(event) {
  const { player, item } = event
  for (let i = 0; i < reforgeablea.length; i++) {
    let it = reforgeablea[i]
    let index = event.player.inventory.find(Ingredient.of(`${it.offhand}`))
    if (item.hasTag(it.item) && player.inventory.allItems.some(item => Ingredient.of(it.offhand).test(item))) {
      event.player.inventory.extractItem(index, 1, false).count--
      attributereforgea(event)
      displayreforgea(event)
    }
  }
}
const ATTRIBUTE_LIST_LEGGINGSR = [
  "Arcanel",
  "Crumblingl",
  "Dentedl",
  "Heavyl",
  "Masterfull",
  "Protectivel",
  "Springyl",
  "Thickl",
  "Toughl",
];
function generateRandomAttributeListleggingsr(random) {
  console.log(ATTRIBUTE_LIST_LEGGINGSR)
  let output = '{';
  let chance = Math.ceil(random * ATTRIBUTE_LIST_LEGGINGSR.length);
  for (let i = 0; i < ATTRIBUTE_LIST_LEGGINGSR.length; i++) {
    let attr = ATTRIBUTE_LIST_LEGGINGSR[i];
    output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
    if (i + 1 != ATTRIBUTE_LIST_LEGGINGSR.length) {
      output += ',';
    }
  }

  output += ",Reforged:1b,Leggings:1b";
  output += '}';
  return output;

}

const ATTRIBUTE_LIST_HELMETR = [
  "Arcaneh",
  "Crumblingh",
  "Dentedh",
  "Heavyh",
  "Masterfulh",
  "Protectiveh",
  "Luckyh",
  "Thickh",
  "Toughh",
];
function generateRandomAttributeListhelmetr(random) {
  let output = '{';
  let chance = Math.ceil(random * ATTRIBUTE_LIST_HELMETR.length);
  for (let i = 0; i < ATTRIBUTE_LIST_HELMETR.length; i++) {
    let attr = ATTRIBUTE_LIST_HELMETR[i];
    output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
    if (i + 1 != ATTRIBUTE_LIST_HELMETR.length) {
      output += ',';
    }
  }

  output += ",Reforged:1b,Helmet:1b";
  output += '}';
  return output;

}

const ATTRIBUTE_LIST_CHESTR = [
  "Arcanec",
  "Crumblingc",
  "Dentedc",
  "Heavyc",
  "Masterfulc",
  "Protectivec",
  "Solidc",
  "Cumbersomec",
  "Thickc",
  "Toughc",
];
function generateRandomAttributeListchestr(random) {
  //console.log(ATTRIBUTE_LIST_CHESTR)
  let output = '{';
  let chance = Math.ceil(random * ATTRIBUTE_LIST_CHESTR.length);
  for (let i = 0; i < ATTRIBUTE_LIST_CHESTR.length; i++) {
    let attr = ATTRIBUTE_LIST_CHESTR[i];
    output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
    if (i + 1 != ATTRIBUTE_LIST_CHESTR.length) {
      output += ',';
    }
  }

  output += ",Reforged:1b,Chest:1b";
  output += '}';
  return output;

}

const ATTRIBUTE_LIST_BOOTSR = [
  "Arcaneb",
  "Crumblingb",
  "Dentedb",
  "Heavyb",
  "Masterfulb",
  "Protectiveb",
  "Speedyb",
  "Tallb",
  "Thickb",
  "Toughc",
];
function generateRandomAttributeListbootsr(random) {
  //console.log(ATTRIBUTE_LIST_BOOTSR)
  let output = '{';
  let chance = Math.ceil(random * ATTRIBUTE_LIST_BOOTSR.length);
  for (let i = 0; i < ATTRIBUTE_LIST_BOOTSR.length; i++) {
    let attr = ATTRIBUTE_LIST_BOOTSR[i];
    output += `${attr}:${(chance == (i)) ? 1 : 0}b`;
    if (i + 1 != ATTRIBUTE_LIST_BOOTSR.length) {
      output += ',';
    }
  }

  output += ",Reforged:1b,Boots:1b";
  output += '}';
  return output;

}

function attributereforgea(event) {
  let item = event.player.getHeldItem('main_hand');
  event.server.runCommandSilent(`execute as ${event.player.username} run playsound minecraft:block.anvil.use block @s ${event.player.x} ${event.player.y} ${event.player.z} 0.5 0.5`);
  if (item.hasTag('forge:helmets')) {
    item.nbt.merge(generateRandomAttributeListhelmetr(Math.random()));
  } else if (item.hasTag('forge:chestplates')) {
    item.nbt.merge(generateRandomAttributeListchestr(Math.random()));
  } else if (item.hasTag('forge:boots')) {
    item.nbt.merge(generateRandomAttributeListbootsr(Math.random()));
  } else if (item.hasTag('forge:leggings')) {
    item.nbt.merge(generateRandomAttributeListleggingsr(Math.random()));
  }
}

BlockEvents.leftClicked(event => {
  let pData = event.player.persistentData;
  let air = event.player.getMainHandItem().id == 'minecraft:air'
  if (pData.timestallllll != 1) {
    return;
  }
  if (event.block.id != 'kubejs:reforging_station') {
    return;
  }
  if (air) {
    return;
  }
  //console.log('test')
  reforgea(event)
  pData.timestallllll = 0;
  event.server.schedule(1200, () => {
    pData.timestallllll = 1;
  });
})
BlockEvents.rightClicked(event => {
  let pData = event.player.persistentData;
  let air = event.player.getMainHandItem().id == 'minecraft:air'
  if (pData.timestallllllllll != 1) {
    return;
  }
  if (event.block.id != 'kubejs:reforging_station') {
    return;
  }
  if (air) {
    return;
  }
  //console.log('test')
  reforgea(event)
  pData.timestallllllllll = 0;
  event.server.schedule(1200, () => {
    pData.timestallllllllll = 1;
  });
})

function displayreforgea(event) {
  const { player } = event
  let item = player.getHeldItem('main_hand');
  let color
  let type
  for (let i in item.nbt) {
    if (item.nbt[i] == 1) {
      switch (i) {
        case "Arcaneb": color = 'blue'; type = `Arcane`; break
        case "Crumblingb": color = 'dark_red'; type = `Crumbling`; break
        case "Dentedb": color = 'dark_gray'; type = `Dented`; break
        case "Heavyb": color = 'red'; type = `Heavy`; break
        case "Masterfulb": color = 'light_purple'; type = `Masterful`; break
        case "Protectiveb": color = 'blue'; type = `Protective`; break
        case "Speedyb": color = 'blue'; type = `Speedy`; break
        case "Tallb": color = 'blue'; type = `Tall`; break
        case "Thickb": color = 'yellow'; type = `Thick`; break
        case "Toughb": color = 'blue'; type = `Tough`; break

        case "Arcaneh": color = 'blue'; type = `Arcane`; break
        case "Crumblingh": color = 'dark_red'; type = `Crumbling`; break
        case "Dentedh": color = 'dark_gray'; type = `Dented`; break
        case "Heavyh": color = 'red'; type = `Heavy`; break
        case "Masterfulh": color = 'light_purple'; type = `Masterful`; break
        case "Protectiveh": color = 'blue'; type = `Protective`; break
        case "Luckyh": color = 'blue'; type = `Lucky`; break
        case "Thickh": color = 'yellow'; type = `Thick`; break
        case "Toughh": color = 'blue'; type = `Tough`; break

        case "Arcanel": color = 'blue'; type = `Arcane`; break
        case "Crumblingl": color = 'dark_red'; type = `Crumbling`; break
        case "Dentedl": color = 'dark_gray'; type = `Dented`; break
        case "Heavyl": color = 'red'; type = `Heavy`; break
        case "Masterfull": color = 'light_purple'; type = `Masterful`; break
        case "Protectivel": color = 'blue'; type = `Protective`; break
        case "Springyl": color = 'blue'; type = `Springy`; break
        case "Thickl": color = 'yellow'; type = `Thick`; break
        case "Toughl": color = 'blue'; type = `Tough`; break

        case "Arcanec": color = 'blue'; type = `Arcane`; break
        case "Crumblingc": color = 'dark_red'; type = `Crumbling`; break
        case "Dentedc": color = 'dark_gray'; type = `Dented`; break
        case "Heavyc": color = 'red'; type = `Heavy`; break
        case "Masterfulc": color = 'light_purple'; type = `Masterful`; break
        case "Protectivec": color = 'blue'; type = `Protective`; break
        case "Solidc": color = 'blue'; type = `Solid`; break
        case "Cumbersomec": color = 'dark_gray'; type = `Cumbersome`; break
        case "Thickc": color = 'yellow'; type = `Thick`; break
        case "Toughc": color = 'blue'; type = `Tough`; break

        default:
          actionbar(player.username, "Your fingers fumble and you smash your thumb", 'red', true);
          break
      }
    }
    actionbar(player.username, type, color, true)
  }
}



/**
 * Helper Function to create Actionbar Titles
 * @param {string} - username
 * @param {string} - text
 * @param {string} - color
 * @param {boolean} - bold
 * @param {boolean} - italic
 */
function actionbar(username, text, color, bold, italic) {
  Utils.server.runCommandSilent(
    `title ${username} actionbar ${JSON.stringify({
      text: text,
      bold: bold ?? false,
      italic: italic ?? false,
      color: color ?? "yellow",
    })}`
  )
}
function displayActionBarMessageForReforging(event, itemName, color) {
  const message = "To Reforge You Must Have ";
  const itemNameComponent = Component.of(itemName).color(color).italic();

  event.player.displayClientMessage(
    Component.of(message).color(Color.DARK_GREEN)
      .append(itemNameComponent)
      .append(Component.of(" In Your Inventory!").color(Color.DARK_GREEN)), true
  );
}

function checkMaterials(event) {
  let item = event.player.getHeldItem('main_hand')
  let goldindex = event.player.inventory.allItems.some(Ingredient.of("gold_ingot"))
  let ironindex = event.player.inventory.allItems.some(Ingredient.of("iron_ingot"))
  let diamondindex = event.player.inventory.allItems.some(Ingredient.of("diamond"))
  let chainindex = event.player.inventory.allItems.some(Ingredient.of("tetra:forged_mesh"))
  let frostindex = event.player.inventory.allItems.some(Ingredient.of("packed_ice"))
  let netheriteindex = event.player.inventory.allItems.some(Ingredient.of("netherite_scrap"))
  let copperindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:copper_ingot"))
  let steelindex = event.player.inventory.allItems.some(Ingredient.of("magistuarmory:steel_ingot"))
  let dracoindex = event.player.inventory.allItems.some(Ingredient.of("forbidden_arcanus:dragon_scale"))
  let hdpeindex = event.player.inventory.allItems.some(Ingredient.of("mekanism:hdpe_sheet"))
  let compressed_ironindex = event.player.inventory.allItems.some(Ingredient.of("pneumaticcraft:ingot_iron_compressed"))
  let glacerytheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:glacerythe_gem"))
  let mortemindex = event.player.inventory.allItems.some(Ingredient.of("forbidden_arcanus:cloth"))
  let fusionindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:fusion_ingot"))
  let incorytheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:incorythe_gem"))
  let phantomindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:phantom_ingot"))
  let garniteindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:garnite_ingot"))
  let unoritheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:unorithe_ingot"))
  let ignisitheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:ignisithe_gem"))
  let titan_boneindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:fixed_bone"))
  let tungstenindex = event.player.inventory.allItems.some(Ingredient.of("stalwart_dungeons:tungsten_ingot"))
  let chorundumindex = event.player.inventory.allItems.some(Ingredient.of("stalwart_dungeons:chorundum"))
  let forestindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:forest_ingot"))
  let oceanindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:ocean_ingot"))
  let endindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:end_ingot"))
  let elementalindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:elemental_ingot"))
  let skyindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:sky_ingot"))
  let hellindex = event.player.inventory.allItems.some(Ingredient.of("iter_rpg:hell_ingot"))
  let adamantiteindex = event.player.inventory.allItems.some(Ingredient.of("enlightened_end:adamantite_ingot"))
  let neptuniumindex = event.player.inventory.allItems.some(Ingredient.of("aquaculture:neptunium_ingot"))
  let red_woolindex = event.player.inventory.allItems.some(Ingredient.of("red_wool"))
  let aberytheindex = event.player.inventory.allItems.some(Ingredient.of("theabyss:aberythe_gem"))
  let fish_bonesindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:fish_bones"))
  let flying_fishindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:flying_fish"))
  let dark_metalindex = event.player.inventory.allItems.some(Ingredient.of("born_in_chaos_v1:dark_metal_ingot"))
  let rocky_shellindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:rocky_shell"))
  let phantom_membraneindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:phantom_membrane"))
  let tarantula_hawk_wingindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:tarantula_hawk_wing"))
  let kangaroo_hideindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:kangaroo_hide"))
  let spiked_scuteindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:spiked_scute"))
  let raccoon_tailindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:raccoon_tail"))
  let wither_boneindex = event.player.inventory.allItems.some(Ingredient.of("mutantmore:repairs_blazing_scimitar"))
  let moose_antlerindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:moose_antler"))
  let leatherindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:leather"))
  let boneindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:bone"))
  let scuteindex = event.player.inventory.allItems.some(Ingredient.of("minecraft:scute"))
  let crocodile_scuteindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:crocodile_scute"))
  let centipede_legindex = event.player.inventory.allItems.some(Ingredient.of("alexsmobs:centipede_leg"))
  let bronzeindex = event.player.inventory.allItems.some(Ingredient.of("mekanism:ingot_bronze"))
  let magebloom_fiberindex = event.player.inventory.allItems.some(Ingredient.of("ars_nouveau:magebloom_fiber"))

  let diamond = item.hasTag('forge:armor/diamond')
  let iron = item.hasTag('forge:armor/iron')
  let gold = item.hasTag('forge:armor/gold')
  let chain = item.hasTag('forge:armor/chain')
  let frost = item.hasTag('forge:armor/frost')
  let netherite = item.hasTag('forge:armor/netherite')
  let copper = item.hasTag('forge:armor/copper')
  let steel = item.hasTag('forge:armor/steel')
  let draco = item.hasTag('forge:armor/draco')
  let mortem = item.hasTag('forge:armor/mortem')
  let hdpe = item.hasTag('forge:armor/mortem')
  let compressed_iron = item.hasTag('forge:armor/mortem')
  let fusion = item.hasTag('forge:armor/fusion')
  let incorythe = item.hasTag('forge:armor/incorythe')
  let phantom = item.hasTag('forge:armor/phantom')
  let garnite = item.hasTag('forge:armor/garnite')
  let unorithe = item.hasTag('forge:armor/unorithe')
  let glacerythe = item.hasTag('forge:armor/glacerythe')
  let ignisithe = item.hasTag('forge:armor/ignisithe')
  let titan_bone = item.hasTag('forge:armor/titan_bone')
  let aberythe = item.hasTag('forge:armor/aberythe')
  let tungsten = item.hasTag('forge:armor/tungsten')
  let chorundum = item.hasTag('forge:armor/chorundum')
  let forest = item.hasTag('forge:armor/forest')
  let ocean = item.hasTag('forge:armor/ocean')
  let end = item.hasTag('forge:armor/end')
  let elemental = item.hasTag('forge:armor/elemental')
  let sky = item.hasTag('forge:armor/sky')
  let hell = item.hasTag('forge:armor/hell')
  let adamantite = item.hasTag('forge:armor/adamantite')
  let neptunium = item.hasTag('forge:armor/neptunium')
  let red_wool = item.hasTag('forge:armor/red_wool')
  let fish_bones = item.hasTag('forge:armor/fish_bones')
  let flying_fish = item.hasTag('forge:armor/flying_fish')
  let dark_metal = item.hasTag('forge:armor/dark_metal')
  let rocky_shell = item.hasTag('forge:armor/rocky_shell')
  let phantom_membrane = item.hasTag('forge:armor/phantom_membrane')
  let tarantula_hawk_wing = item.hasTag('forge:armor/tarantula_hawk_wing')
  let kangaroo_hide = item.hasTag('forge:armor/kangaroo_hide')
  let spiked_scute = item.hasTag('forge:armor/spiked_scute')
  let raccoon_tail = item.hasTag('forge:armor/raccoon_tail')
  let wither_bone = item.hasTag('forge:armor/wither_bone')
  let moose_antler = item.hasTag('forge:armor/moose_antler')
  let leather = item.hasTag('forge:armor/leather')
  let bone = item.hasTag('forge:armor/bone')
  let scute = item.hasTag('forge:armor/scute')
  let crocodile_scute = item.hasTag('forge:armor/crocodile_scute')
  let centipede_leg = item.hasTag('forge:armor/centipede_leg')
  let bronze = item.hasTag('forge:armor/bronze')
  let magebloom_fiber = item.hasTag('forge:armor/magebloom_fiber')
  const materialsToCheck = [
    { item: gold, index: goldindex, name: "Gold Ingot", color: Color.GOLD },
    { item: iron, index: ironindex, name: "Iron Ingot", color: Color.GOLD },
    { item: diamond, index: diamondindex, name: "Diamond", color: Color.GOLD },
    { item: chain, index: chainindex, name: "Forged Mesh", color: Color.GOLD },
    { item: frost, index: frostindex, name: "Packed Ice", color: Color.GOLD },
    { item: netherite, index: netheriteindex, name: "Netherite Scrap", color: Color.GOLD },
    { item: copper, index: copperindex, name: "Copper Ingot", color: Color.GOLD },
    { item: steel, index: steelindex, name: "Steel Ingot", color: Color.GOLD },
    { item: draco, index: dracoindex, name: "Dragon Scale", color: Color.GOLD },
    { item: hdpe, index: hdpeindex, name: "HDPE Sheet", color: Color.GOLD },
    { item: compressed_iron, index: compressed_ironindex, name: "Compressed Iron Ingot", color: Color.GOLD },
    { item: mortem, index: mortemindex, name: "Cloth", color: Color.GOLD },
    { item: glacerythe, index: glacerytheindex, name: "Glacerythe Gem", color: Color.GOLD },
    { item: fusion, index: fusionindex, name: "Fusion Ingot", color: Color.GOLD },
    { item: incorythe, index: incorytheindex, name: "Incorythe Gem", color: Color.GOLD },
    { item: phantom, index: phantomindex, name: "Phantom Ingot", color: Color.GOLD },
    { item: garnite, index: garniteindex, name: "Garnite Ingot", color: Color.GOLD },
    { item: unorithe, index: unoritheindex, name: "Unorithe Ingot", color: Color.GOLD },
    { item: ignisithe, index: ignisitheindex, name: "Ignisithe Gem", color: Color.GOLD },
    { item: titan_bone, index: titan_boneindex, name: "Titan Bone", color: Color.GOLD },
    { item: tungsten, index: tungstenindex, name: "Tungsten Ingot", color: Color.GOLD },
    { item: chorundum, index: chorundumindex, name: "Chorundum", color: Color.GOLD },
    { item: forest, index: forestindex, name: "Forest Ingot", color: Color.GOLD },
    { item: ocean, index: oceanindex, name: "Ocean Ingot", color: Color.GOLD },
    { item: end, index: endindex, name: "End Ingot", color: Color.GOLD },
    { item: elemental, index: elementalindex, name: "Elemental Ingot", color: Color.GOLD },
    { item: sky, index: skyindex, name: "Sky Ingot", color: Color.GOLD },
    { item: hell, index: hellindex, name: "Hell Ingot", color: Color.GOLD },
    { item: adamantite, index: adamantiteindex, name: "Adamantite Ingot", color: Color.GOLD },
    { item: neptunium, index: neptuniumindex, name: "Neptunium Ingot", color: Color.GOLD },
    { item: red_wool, index: red_woolindex, name: "Red Wool", color: Color.GOLD },
    { item: aberythe, index: aberytheindex, name: "Aberythe Gem", color: Color.GOLD },
    { item: fish_bones, index: fish_bonesindex, name: "Fish Bones", color: Color.GOLD },
    { item: flying_fish, index: flying_fishindex, name: "Flying Fish", color: Color.GOLD },
    { item: dark_metal, index: dark_metalindex, name: "Dark Metal Ingot", color: Color.GOLD },
    { item: rocky_shell, index: rocky_shellindex, name: "Rocky Shell", color: Color.GOLD },
    { item: phantom_membrane, index: phantom_membraneindex, name: "Phantom Membrane", color: Color.GOLD },
    { item: tarantula_hawk_wing, index: tarantula_hawk_wingindex, name: "Tarantula Hawk Wing", color: Color.GOLD },
    { item: kangaroo_hide, index: kangaroo_hideindex, name: "Kangaroo Hide", color: Color.GOLD },
    { item: spiked_scute, index: spiked_scuteindex, name: "Spiked Scute", color: Color.GOLD },
    { item: raccoon_tail, index: raccoon_tailindex, name: "Raccoon Tail", color: Color.GOLD },
    { item: wither_bone, index: wither_boneindex, name: "Wither Rib/Wither Limb", color: Color.GOLD },
    { item: moose_antler, index: moose_antlerindex, name: "Moose Antler", color: Color.GOLD },
    { item: leather, index: leatherindex, name: "Leather", color: Color.GOLD },
    { item: bone, index: boneindex, name: "Bone", color: Color.GOLD },
    { item: scute, index: scuteindex, name: "Scute", color: Color.GOLD },
    { item: crocodile_scute, index: crocodile_scuteindex, name: "Crocodile Scute", color: Color.GOLD },
    { item: centipede_leg, index: centipede_legindex, name: "Centipede Leg", color: Color.GOLD },
    { item: bronze, index: bronzeindex, name: "Bronze Ingot", color: Color.GOLD },
    { item: magebloom_fiber, index: magebloom_fiberindex, name: "Magebloom Fiber", color: Color.GOLD }
  ];
  for (let material of materialsToCheck) {
    if (material.item && material.index === false) {
      displayActionBarMessageForReforging(event, material.name, material.color);
    }
  }
}

BlockEvents.leftClicked(event => {
  let item = event.player.getHeldItem('main_hand')
  let offHandItem = event.player.getHeldItem('off_hand');
  let pData = event.player.persistentData;
  let air = event.player.getMainHandItem().id == 'minecraft:air'
  if (!pData.timestalllll) { pData.timestalllll = 1 }
  if (pData.timestalllll != 1) { return }
  if (event.block.id != 'kubejs:reforging_station') { return }
  if (air) { return }
  pData.timestalllll = 0;
  checkMaterials(event)
  event.server.schedule(1200, () => {

    pData.timestalllll = 1;
  });
})
PlayerEvents.loggedIn(event => {
  let pData = event.player.persistentData
  pData.timestalllll = 1
  pData.timestallllll = 1
  pData.timestallllllll = 1;
  pData.timestallllllllll = 1;
})

BlockEvents.rightClicked(event => {
  let item = event.player.getHeldItem('main_hand')
  let offHandItem = event.player.getHeldItem('off_hand');
  let pData = event.player.persistentData;
  let air = event.player.getMainHandItem().id == 'minecraft:air'
  if (!pData.timestallllllll) { pData.timestallllllll = 1 }
  if (pData.timestallllllll != 1) { return }
  if (event.block.id != 'kubejs:reforging_station') { return }
  if (air) { return }
  pData.timestallllllll = 0;
  checkMaterials(event)
  event.server.schedule(1200, () => {

    pData.timestallllllll = 1;
  });
})






