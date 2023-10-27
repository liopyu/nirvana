PlayerEvents.tick(event => {
    let item = event.player.getHeldItem('main_hand')
  let air = event.player.getMainHandItem().id == 'minecraft:air'
  let pData = event.player.persistentData
  if(pData.timer == 0 || pData.timer == 5 || pData.timer == 10 || pData.timer == 15 || pData.timer == 20) {
  if(item.hasNBT()) {
    if (item.nbt.Worthless) {
        event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/worthless/worthless`)

        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)

    }else if (item.nbt.Broken) {
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/broken/broken`)

      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
  }else if (item.nbt.Bulky) {
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/bulky/bulky`)

    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Rusted) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/rusted/rusted`)

    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Clumsy) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Chipped) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/chipped/chipped`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Short) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/short/short`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Broad) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/broad/broad`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Thin) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/thin/thin`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Pokey) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/pokey/pokey`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Vicious) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/vicious/vicious`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Long) {
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/long/long`)

      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
  }else if (item.nbt.Sharp) {
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/sharp/sharp`)

    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Keen) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/keen/keen`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Gracefull) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Sweeping) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}else if (item.nbt.Legendary) {
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/tools/legendary/legendary`)

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
}


  }else return (
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/rusted/rusted`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/clumsy/clumsy`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/chipped/chipped`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/short/short`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broad/broad`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/thin/thin`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/pokey/pokey`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/vicious/vicious`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/long/long`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sharp/sharp`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/keen/keen`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/gracefull/gracefull`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/sweeping/sweeping`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/legendary/legendary`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/bulky/bulky`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/broken/broken`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/tools/worthless/worthless`)
    //event.player.tell('removed tool powers')
  )
  }

  })