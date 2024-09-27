PlayerEvents.tick(event => {
    const { player } = event
    let pData = event.player.persistentData
    if (pData.timer >= 1) return;
    if (pData.firstsleep == 0) return;
    if (pData.firstsleep == 2) return;
    if (pData.firstsleep == 1) {
        ++pData.sleeptimer
    }
    let effect = player.potionEffects
    if (pData.sleeptimer >= 2 && pData.sleeptimer <= 5 && pData.firstsleep == 1) {
        Utils.server.schedule(10, () => {
            effect.add('theabyss:fear', 300, 0, false, false)
            player.removeEffect("minecraft:blindness")
        });
    }
    if (pData.sleeptimer >= 40) {
        if (pData.dimension == 1) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in ae2:spatial_storage run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 2) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in deepwhisperer:deep_space run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 3) {
            Utils.server.schedule(1, () => {
                effect.clear()

            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });

            event.server.runCommandSilent(`execute in minecraft:overworld run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 4) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in minecraft:the_end run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 5) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in minecraft:the_nether run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 6) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in panthalassa:panthalassa run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 7) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in tectonicworld:tectonic run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 8) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });

            event.server.runCommandSilent(`execute in theabyss:frost_world run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 9) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in theabyss:pocket_dimension run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 10) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in theabyss:the_abyss run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        } else if (pData.dimension == 11) {
            Utils.server.schedule(1, () => {
                effect.clear()
                player.displayClientMessage(Component.of('Whoa.. was that a nightmare??..... that place.. it looked so familiar..').darkRed().bold(), true)
            });
            Utils.server.schedule(300, () => {
                pData.firstsleep = 2
                effect.add('minecraft:instant_health', 300, 0, false, false)
            });
            event.server.runCommandSilent(`execute in wabworldgen:tutorial run tp ${event.player.username} ${pData.fsx} ${pData.fsy} ${pData.fsz}`)
        }
    }
})
//Debugging Stuff
/* ItemEvents.rightClicked('minecraft:diamond_sword', event => {
    let pData = event.player.persistentData
    event.player.tell(event.player.persistentData.fsx)
    event.player.tell(event.player.persistentData.fsy)
    event.player.tell(event.player.persistentData.fsz)
    event.player.tell(pData.fsn)
    event.player.tell(pData.fsp)
    event.player.tell(pData.sleeptimer)
    event.player.tell(pData.firstsleep)
    pData.firstsleep = 0
    pData.sleeptimer = 0
}) */
PlayerEvents.loggedIn(event => {
    let pData = event.player.persistentData
    if (pData.firstsleep == 1) return;
    if (pData.firstsleep == 2) return;
    pData.sleeptimer = 0
})

BlockEvents.broken(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
BlockEvents.placed(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
BlockEvents.rightClicked(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
BlockEvents.leftClicked(event => {
    let pData = event.entity.persistentData
    if (pData.firstsleep == 1) {
        event.cancel()
    }
})
EntityEvents.death(event => {
    if (!event.entity.player) return
    let pData = event.entity.persistentData
    let effect = event.player.potionEffects
    if (pData.firstsleep == 1) {
        event.entity.setHealth(20)
        effect.add('minecraft:instant_health', 300, 0, false, false)
        event.cancel()

    }
})

