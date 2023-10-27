const $InputConstants = Java.loadClass("com.mojang.blaze3d.platform.InputConstants")
const $SophisticatedKeybinds = Java.loadClass('net.p3pp3rf1y.sophisticatedbackpacks.client.KeybindHandler')

ClientEvents.tick(e => {
    if($SophisticatedKeybinds.BACKPACK_OPEN_KEYBIND.isUnbound()) return
    $SophisticatedKeybinds.BACKPACK_OPEN_KEYBIND.setKey($InputConstants.UNKNOWN)
    //e.player.tell("§eSophisticated Backpack Keybind Is A Disabled Feature In This Pack!:trollface:")
    //e.player.statusMessage = Text.red("My Message here")
    if($SophisticatedKeybinds.BACKPACK_OPEN_KEYBIND.isDown()) console.log('player clicked the button!')
})

/*const $SophisticatedKeybinds = Java.loadClass('net.p3pp3rf1y.sophisticatedbackpacks.client.KeybindHandler')
ClientEvents.tick(e => {
    if($SophisticatedKeybinds.BACKPACK_OPEN_KEYBIND.isDown()) {
      ++e.player.persistentData.backpackgui
      Client.setCurrentScreen(null)
      e.player.tell('hey this disabled because me like when game harder ~ lio')
}
})
ClientEvents.tick(e => {
      if (e.player.persistentData.backpackgui >= 1) {
    Client.setCurrentScreen(null)
        e.player.tell('test')
        e.player.persistentData.backpackgui = 0
    }
    //console.log(e.player?.class?.simpleName)
})*/