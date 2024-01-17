PlayerEvents.loggedIn(event => {
  const { player, server, player: { username, persistentData, inventory } } = event
  if (!player.stages.has('new_join')) {

    server.runCommandSilent(`scoreboard players set ${username} nether 1`)
    server.runCommandSilent(`attribute ${username} forge:entity_gravity base set 0.084`)
    server.runCommandSilent(`curios set body ${username} 0`)
    server.runCommandSilent(`curios set an_focus ${username} 0`)
    server.runCommandSilent(`curios set hands ${username} 0`)
    server.runCommandSilent(`curios set feet ${username} 0`)
    server.scheduleInTicks(1500, () => {

      persistentData.firstworldjoin = 1
      server.runCommandSilent(`power grant ${username} genesis:magicshield/aiming/aiming1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/aiming/aiming2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/aiming/aiming3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/aiming/aiming4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/aiming/aiming5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/aiming/aiming6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/aiming/aiming7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/athletic/athletic1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/athletic/athletic2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/athletic/athletic3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/athletic/athletic4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/athletic/athletic5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/athletic/athletic6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/athletic/athletic7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/arcane/arcane1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/arcane/arcane2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/arcane/arcane3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/arcane/arcane4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/arcane/arcane5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/arcane/arcane6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/arcane/arcane7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/armored/armored1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/armored/armored2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/armored/armored3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/armored/armored4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/armored/armored5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/armored/armored6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/armored/armored7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/clunky/clunky1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/clunky/clunky2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/clunky/clunky3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/clunky/clunky4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/clunky/clunky5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/clunky/clunky6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/clunky/clunky7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/flailing/flailing1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/flailing/flailing2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/flailing/flailing3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/flailing/flailing4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/flailing/flailing5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/flailing/flailing6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/flailing/flailing7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/focusing/focusing1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/focusing/focusing2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/focusing/focusing3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/focusing/focusing4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/focusing/focusing5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/focusing/focusing6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/focusing/focusing7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/graceful/graceful1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/graceful/graceful2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/graceful/graceful3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/graceful/graceful4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/graceful/graceful5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/graceful/graceful6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/graceful/graceful7`)
      /*server.runCommandSilent(`power grant ${username} genesis:magicshield/healthy/healthy1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/healthy/healthy2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/healthy/healthy3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/healthy/healthy4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/healthy/healthy5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/healthy/healthy6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/healthy/healthy7`)*/
      server.runCommandSilent(`power grant ${username} genesis:magicshield/horrible/horrible1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/horrible/horrible2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/horrible/horrible3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/horrible/horrible4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/horrible/horrible5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/horrible/horrible6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/horrible/horrible7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/lucky/lucky1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/lucky/lucky2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/lucky/lucky3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/lucky/lucky4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/lucky/lucky5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/lucky/lucky6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/lucky/lucky7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/prospecting/prospecting1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/prospecting/prospecting2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/prospecting/prospecting3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/prospecting/prospecting4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/prospecting/prospecting5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/prospecting/prospecting6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/prospecting/prospecting7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/punishing/punishing1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/punishing/punishing2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/punishing/punishing3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/punishing/punishing4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/punishing/punishing5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/punishing/punishing6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/punishing/punishing7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/shielding/shielding1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/shielding/shielding2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/shielding/shielding3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/shielding/shielding4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/shielding/shielding5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/shielding/shielding6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/shielding/shielding7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/speedy/speedy1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/speedy/speedy2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/speedy/speedy3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/speedy/speedy4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/speedy/speedy5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/speedy/speedy6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/speedy/speedy7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/springy/springy1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/springy/springy2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/springy/springy3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/springy/springy4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/springy/springy5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/springy/springy6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/springy/springy7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/strengthening/strengthening1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/strengthening/strengthening2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/strengthening/strengthening3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/strengthening/strengthening4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/strengthening/strengthening5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/strengthening/strengthening6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/strengthening/strengthening7`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/undying/undying1`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/undying/undying2`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/undying/undying3`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/undying/undying4`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/undying/undying5`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/undying/undying6`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/undying/undying7`)

      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/arcane`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/dented`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/heavy`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/lucky`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/masterful`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/protective`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/thick`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/helmet/tough`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/arcane`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/crumbling`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/dented`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/heavy`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/springy`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/masterful`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/protective`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/thick`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/leggings/tough`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/arcane`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/dented`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/heavy`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/solid`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/masterful`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/protective`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/thick`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/chestplate/tough`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/arcane`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/crumbling`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/dented`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/heavy`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/tall`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/masterful`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/protective`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/speedy`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/thick`)
      server.runCommandSilent(`power grant ${username} genesis:magicshield/equippedarmor/boots/tough`)
      player.stages.add('new_join');
    })

    player.tell(Text.translate('§bWelcome to Nirvana Craft!! We are currently in beta so if there are any bugs please report them in the discord!'));
    player.tell(Text.translate('Join Us On Discord!').blue().underlined().click('https://discord.gg/pGkUmgGcsY'));
    inventory.setStackInSlot(40, '3x minecraft:wheat')
    inventory.setStackInSlot(25, '1x minecraft:wheat')
    inventory.setStackInSlot(20, '1x minecraft:wheat')
    inventory.setStackInSlot(14, '1x minecraft:leather')
    inventory.setStackInSlot(34, '2x minecraft:leather')
    inventory.setStackInSlot(8, '5x minecraft:beef')
    inventory.setStackInSlot(36, 'minecraft:leather_boots')
    inventory.setStackInSlot(37, 'magistuarmory:cuirassier_leggings')
    inventory.setStackInSlot(0, Item.of('minecraft:written_book', '{author:"̷̵̴̩̰̼͑̽̋",pages:[\'{"text":"My diary\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~"}\',\'{"text":"It seems like I\\\'ve fallen from a high place but the sky is below me...\\\\n\\\\nHow on earth did I get up here??\\\\n\\\\nI was once at home watching livestock and yet now it\\\'s become clear that something has brought me to this strange land... @_@"}\',\'{"text":"I feel like the only way to go is down but will I survive the fall to the earth below??\\\\n\\\\nMaybe I can craft some sort of air ship to get around.\\\\nI\\\'ve built one before for a school science experiment but I have no wool.. Guess I know what I must do.  "}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̴͇̰͖̤͓̰̭̻̮̹̹͍̟͔̹̹̙͔͈̦̓͆̓͒̀̉͛͠ ̸̧̧̯̞͙̳͎̯̤̖̬͇̖̬̞̭̖͛͑̂̀͛́̊͂̏̂̀̈́͛̂͊̌̃͊̽́͌̓̀̎̄̂̓̂̅̏̆̈́̕̕͝͝͝͝͠"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕ ̴͇̰͖̤͓̰̭̻̮̹̹͍̟͔̹̹̙͔͈̦̓͆̓͒̀̉͛͠ ̸̧̧̯̞͙̳͎̯̤̖̬͇̖̬̞̭̖͛͑̂̀͛́̊͂̏̂̀̈́͛̂͊̌̃͊̽́͌̓̀̎̄̂̓̂̅̏̆̈́̕̕͝͝͝͝͠"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̴͇̰͖̤͓̰̭̻̮̹̹͍̟͔̹̹̙͔͈̦̓͆̓͒̀̉͛͠ ̸̧̧̯̞͙̳͎̯̤̖̬͇̖̬̞̭̖͛͑̂̀͛́̊͂̏̂̀̈́͛̂͊̌̃͊̽́͌̓̀̎̄̂̓̂̅̏̆̈́̕̕͝͝͝͝͠"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":"Thank You For Downloading This Pack!\\\\n<3 uwu"}\'],resolved:1,title:"My Diary"}'))

  }
  persistentData.craftsaw = 1
  persistentData.jump = 1
  if (!player.persistentData.timer) { player.persistentData.timer = 0 }
});

PlayerEvents.tick(e => {
  let pData = e.player.persistentData
  pData.timer = (++pData.timer) % 20
})

PlayerEvents.tick(e => {
  const { player, server, player: { username, persistentData, nbt } } = e
  let curios = nbt.ForgeCaps['curios:inventory']
  if (persistentData.timer == 0 & !curios.toString().contains('kubejs:fairy_ring') & !curios.toString().contains('kubejs:dragon_ring') & !curios.toString().contains('kubejs:lightning_dragon_ring') & !curios.toString().contains('kubejs:ring_of_faeles') & !curios.toString().contains('kubejs:elf_ring') & !curios.toString().contains('kubejs:ocean_dragon_ring') & !curios.toString().contains('kubejs:titan_ring')) {
    server.runCommandSilent(`execute as ${username} run origin set @s origins:origin origins:human`)
    server.runCommandSilent(`execute as ${username} run tag @s remove lightningdragon`)
    server.runCommandSilent(`execute as ${username} run tag @s remove oceandragon`)
  }
})
PlayerEvents.tick(event => {
  const { player, server, player: { username, persistentData, block, block: { id, south, west, north, east } } } = event
  if (!(player.age % 20 == 0)) return
  if (player.isCreative() || player.isSpectator()) return
  if (persistentData.canaccessnetherportal == 1) return
  if (id == 'minecraft:nether_portal') {
    block.set('air')
    player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  } else if (west == 'minecraft:nether_portal') {
    west.set('air')
    player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  } else if (east == 'minecraft:nether_portal') {
    east.set('air')
    player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  } else if (north == 'minecraft:nether_portal') {
    north.set('air')
    player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  } else if (south == 'minecraft:nether_portal') {
    south.set('air')
    player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  }
})
/* PlayerEvents.tick(event => {
  const { player, server, player: { username, persistentData, block, block: { id, south, west, north, east } } } = event
  if (!(player.age % 20 == 0) || player.isCreative() || player.isSpectator() || persistentData.canaccessnetherportal == 1) return

  const checkAndClearPortal = (portalDirection) => {
    if (portalDirection == 'minecraft:nether_portal') {
      block.set('air')
      player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
    }
  }

  checkAndClearPortal(id)
  checkAndClearPortal(west)
  checkAndClearPortal(east)
  checkAndClearPortal(north)
  checkAndClearPortal(south)
}) */
PlayerEvents.advancement(event => {
  if (event.advancement.id().toString() == "iheartstriders:enablenether") {
    event.player.persistentData.canaccessnetherportal = 1
  }
})
PlayerEvents.respawned(e => {
  e.server.runCommandSilent(`execute as ${e.entity.username} run attribute @s forge:entity_gravity base set 0.084`)
})
/* PlayerEvents.loggedIn(event => {
  const {player,server,player:{persistentData,username}} = event
  persistentData.timerlog = 1
})
  PlayerEvents.tick(event => {
    const {player,server,server:{persistentData,username}} = event
    if (!(player.age % 20 == 0)) return
    player.tell(persistentData.timerlog)
    if (persistentData.timerlog <= 20) {
    ++persistentData.timerlog
  }
  }) */