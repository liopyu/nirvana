ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerSleepInBedEvent', event => {
    global.firstsleep(event)
})
global.firstsleep = event => {
	let player = event.entity;
    //player.tell('test')
    let pData = player.persistentData
    let night = player.level.isNight()
    if (pData.firstsleep != 1 && pData.firstsleep != 2 && night) {
        Utils.server.schedule(30, () => {
            Utils.server.runCommandSilent(`execute in theabyss:the_abyss run tp ${player.username} 0 200 0`)
        });
        
    
    
    pData.firstsleep = 1
    pData.fsx = player.x
    pData.fsy = player.y
    pData.fsz = player.z
    if (player.level.dimension.path == 'spatial_storage') {
        pData.dimension = 1
    }else if (player.level.dimension.path == 'deep_space') {
        pData.dimension = 2
    }else if (player.level.dimension.path == 'overworld') {
        pData.dimension = 3
    }else if (player.level.dimension.path == 'the_end') {
        pData.dimension = 4
    }else if (player.level.dimension.path == 'the_nether') {
        pData.dimension = 5
    }else if (player.level.dimension.path == 'panthalassa') {
        pData.dimension = 6
    }else if (player.level.dimension.path == 'tectonic') {
        pData.dimension = 7
    }else if (player.level.dimension.path == 'frost_world') {
        pData.dimension = 8
    }else if (player.level.dimension.path == 'pocket_dimension') {
        pData.dimension = 9
    }else if (player.level.dimension.path == 'the_abyss') {
        pData.dimension = 10
    }else if (player.level.dimension.path == 'tutorial') {
        pData.dimension = 11
    }
    }
  }


  ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerWakeUpEvent', event => {
    global.wakeup(event)
})
  
global.wakeup = event => {
    let player = event.entity;
    Utils.server.runCommandSilent(`scoreboard players reset ${player.username} TiempoEnCama`)
}


