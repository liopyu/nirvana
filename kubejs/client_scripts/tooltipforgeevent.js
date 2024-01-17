let rangeAttack = Text.translate("generic.attack_range").string
/**
 * 
 * @param {Internal.ItemTooltipEvent} event 
 * @returns 
 */
global.tooltips = event => {
  let { toolTip, itemStack } = event
  if (toolTip == null) return
  let isEnchantedBook = (itemStack.id == 'minecraft:enchanted_book')
  for (let i = 0; i < toolTip.length; i++) {
    let component = toolTip.get(i)
    let string = component?.siblings[0]?.string
    if (string) {
      if (string.includes(rangeAttack)) {
        toolTip.remove(i)
        i--
      }
    }
    if (!isEnchantedBook) continue
    let key = component?.contents?.key
    if (key) {
      if (key.startsWith("%s ┇ %s") || key == "info.apotheosis.book_range") {
        toolTip.remove(i)
        i--
      }
    }
  }
}

const $MinecraftForge = Java.loadClass('net.minecraftforge.common.MinecraftForge')
const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')

if ($KubeJS.clientScriptManager.firstLoad) {
  $MinecraftForge.EVENT_BUS.addListener('LOW', false, Java.loadClass('net.minecraftforge.event.entity.player.ItemTooltipEvent'), event => global.tooltips(event))
}