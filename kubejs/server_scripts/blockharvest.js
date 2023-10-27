let Block = Java.loadClass('net.minecraft.world.level.block.Block')
BlockEvents.rightClicked(event => {
    const {block,player,server,level} = event
    const {x,y,z} = block
    if (block.hasTag('minecraft:crops')) {
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        let mcPlayer = player
        if (mcBlock.isMaxAge(blockState)) {
            let loot = Block.getDrops(blockState, mcLevel, block.pos, null, mcPlayer, mcPlayer.getMainHandItem())
            let seedYeeted = false
            for (let i in loot) {
                if (loot[i].id == mcBlock.getCloneItemStack(mcLevel, block.pos, blockState).id) {
                    loot[i].count--
                    seedYeeted = true
                    break
                }
            }
            loot.forEach(item => {
                Block.popResource(mcLevel, block.pos, item)
            })
            if (seedYeeted) {
                
                block.set(block.id, {age: '0'})
                server.runCommandSilent(`playsound minecraft:block.crop.break block @a ${block.x} ${block.y} ${block.z}`)
                server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup block @a ${block.x} ${block.y} ${block.z} 0.1 1`)
                player.addXP(2)
            } else { //if no seed was dropped for some odd reason
                mcLevel.destroyBlock(block.pos, true, null, 32)
            }
            player.swing()
            event.cancel()
        }
    }
})

BlockEvents.broken(event => {
    const {block,player,server,level} = event
    const {x,y,z} = block
    if (block.hasTag('minecraft:crops')) {
        let mcLevel = level
        let blockState = mcLevel.getBlockState(block.pos)
        let mcBlock = blockState.block
        if (mcBlock.isMaxAge(blockState)) {
            server.runCommandSilent(`playsound minecraft:entity.experience_orb.pickup block @a ${block.x} ${block.y} ${block.z} 0.1 1`)
            player.addXP(2)
        }
    }
})

