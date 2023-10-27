PlayerEvents.loggedIn(event => {
  const {player,server,player:{username}} = event
  
    if (!player.stages.has('new_join')) {
      player.stages.add('new_join');
      server.runCommandSilent(`scoreboard players set ${username} nether 1`)
      server.runCommandSilent(`attribute ${username} forge:entity_gravity base set 0.084`)
      server.runCommandSilent(`curios set body ${username} 0`)
      server.runCommandSilent(`curios set an_focus ${username} 0`)
      server.runCommandSilent(`curios set hands ${username} 0`)
      server.runCommandSilent(`curios set feet ${username} 0`)
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
      player.tell(Text.translate('§bWelcome to Nirvana Craft!! We are currently in beta so if there are any bugs please report them in the discord!'));
      player.tell(Text.translate('Join Us On Discord!').blue().underlined().click('https://discord.gg/pGkUmgGcsY'));
      player.inventory.setStackInSlot(40, '3x minecraft:wheat')
      player.inventory.setStackInSlot(25, '1x minecraft:wheat')
      player.inventory.setStackInSlot(20, '1x minecraft:wheat')
      player.inventory.setStackInSlot(14, '1x minecraft:leather')
      player.inventory.setStackInSlot(34, '2x minecraft:leather')
      player.inventory.setStackInSlot(8, '5x minecraft:beef')
      player.inventory.setStackInSlot(36, 'minecraft:leather_boots')
      player.inventory.setStackInSlot(37, 'magistuarmory:cuirassier_leggings')
      player.inventory.setStackInSlot(0, Item.of('minecraft:written_book', '{author:"̷̵̴̩̰̼͑̽̋",pages:[\'{"text":"My diary\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~~~~~~~~~~\\\\n~~~~~~~~~~~~~~~\\\\n\\\\n~~~~~~"}\',\'{"text":"It seems like I\\\'ve fallen from a high place but the sky is below me...\\\\n\\\\nHow on earth did I get up here??\\\\n\\\\nI was once at home watching livestock and yet now it\\\'s become clear that something has brought me to this strange land... @_@"}\',\'{"text":"I feel like the only way to go is down but will I survive the fall to the earth below??\\\\n\\\\nMaybe I can craft some sort of air ship to get around.\\\\nI\\\'ve built one before for a school science experiment but I have no wool.. Guess I know what I must do.  "}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̸̧̧̢͖̹̜̺̣͖̞̬̖̩͈̹̹͚̤̱̣̙̫̦͉͇͖̫͖̈̈́͆̿̍̈́̊̏̂̿͊̈́̔̍͐̃͌̉̆̓̍̓̚͜͠͠͝ͅ ̶̢̬̹͖̞̩̩̘͕̞͓̪̰̜̮̪̪͔̜̪̪̞̗̰͓͕͕̝̮̩̯͔͖̜̯̺̟͈̞̿̅̊̀̋̽́̋͂͋̌͐̌̇͋̽̈́̆͜͠͝ͅ ̶̡̡̡̨̨̧̤̣̣̜̲͎̻͖̤̻͓͔̤̬͉̗̲͇̺͔̝̦̳̺̯̞͎̳͉̤̲͙̳͎̀͐́͘ͅͅͅ"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̴͇̰͖̤͓̰̭̻̮̹̹͍̟͔̹̹̙͔͈̦̓͆̓͒̀̉͛͠ ̸̧̧̯̞͙̳͎̯̤̖̬͇̖̬̞̭̖͛͑̂̀͛́̊͂̏̂̀̈́͛̂͊̌̃͊̽́͌̓̀̎̄̂̓̂̅̏̆̈́̕̕͝͝͝͝͠"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕ ̴͇̰͖̤͓̰̭̻̮̹̹͍̟͔̹̹̙͔͈̦̓͆̓͒̀̉͛͠ ̸̧̧̯̞͙̳͎̯̤̖̬͇̖̬̞̭̖͛͑̂̀͛́̊͂̏̂̀̈́͛̂͊̌̃͊̽́͌̓̀̎̄̂̓̂̅̏̆̈́̕̕͝͝͝͝͠"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̴͇̰͖̤͓̰̭̻̮̹̹͍̟͔̹̹̙͔͈̦̓͆̓͒̀̉͛͠ ̸̧̧̯̞͙̳͎̯̤̖̬͇̖̬̞̭̖͛͑̂̀͛́̊͂̏̂̀̈́͛̂͊̌̃͊̽́͌̓̀̎̄̂̓̂̅̏̆̈́̕̕͝͝͝͝͠"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":" ̶̨̨͇͚̹͉̟̯̯̫̼̙̫͉̰͙̮͓̩͙͇͔̬͔̱̑͆̐̐͌͐̂̄̓͌͆̋̈́̓̇̽͆̔͛̏̐̚͠ͅ ̸̯͚̬̎́͒̐́̒̑͗͒̔͊̈́̿̀̎̉̆̂̀̈́̄͐̀̔̂͑͆͐̕̚̚̚͝͝͝͝͝ͅ ̵̢̢̛̟͈͔̰͚̝̙̣͖̟̯̠̎̂̿͑̀̉͐͋̈́͗͂͗͛̑̈́́̐̕"}\',\'{"text":"Thank You For Downloading This Pack!\\\\n<3 uwu"}\'],resolved:1,title:"My Diary"}'))
      
    }
    if(!player.persistentData.timer) {player.persistentData.timer = 0}
  });
  
  PlayerEvents.tick(e => {
    let pData = e.player.persistentData
    pData.timer = (++pData.timer) % 20
})

PlayerEvents.tick(e => {
  const {player,server,player: {username}} = e
  let curios = e.player.nbt.ForgeCaps['curios:inventory']
  let pData = e.player.persistentData
  if(pData.timer == 0 & !curios.toString().contains('kubejs:fairy_ring') & !curios.toString().contains('kubejs:dragon_ring') & !curios.toString().contains('kubejs:lightning_dragon_ring') & !curios.toString().contains('kubejs:ring_of_faeles') & !curios.toString().contains('kubejs:elf_ring') & !curios.toString().contains('kubejs:ocean_dragon_ring') & !curios.toString().contains('kubejs:titan_ring')) {
      e.server.runCommandSilent(`execute as ${e.player.username} run origin set @s origins:origin origins:human`)
      e.server.runCommandSilent(`execute as ${e.player.username} run tag @s remove lightningdragon`)
      e.server.runCommandSilent(`execute as ${e.player.username} run tag @s remove oceandragon`)
  }
})
PlayerEvents.tick(event => {
  const {player,server,player:{username}} = event
  if(!(player.age % 20 == 0)) return
  if (player.isCreative() || player.isSpectator()) return
if (player.persistentData.canaccessnetherportal == 1) return
  if (player.block.id == 'minecraft:nether_portal') {
      player.block.set('air')
      player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  }else if (player.block.west == 'minecraft:nether_portal'){
      player.block.west.set('air')
      player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  }else if (player.block.east == 'minecraft:nether_portal'){
      player.block.east.set('air')
      player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  }else if (player.block.north == 'minecraft:nether_portal'){
      player.block.north.set('air')
      player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  }else if (player.block.south == 'minecraft:nether_portal'){
      player.block.south.set('air')
      player.displayClientMessage(Component.of(`It looks like a mysterious force prevents entry.. I'll have to find another way.`).bold().green(), true)
  }
})
PlayerEvents.advancement(event => {
  if(event.advancement.id().toString() == "iheartstriders:enablenether") {
      event.player.persistentData.canaccessnetherportal = 1
  }
})
//ItemEvents.rightClicked('stick', event => {event.player.persistentData.canaccessnetherportal = 0})

  