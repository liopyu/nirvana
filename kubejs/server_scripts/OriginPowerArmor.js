PlayerEvents.tick(event => {
  let helmetslot = event.player.getItemBySlot(5)
  let chestslot = event.player.getItemBySlot(4)
  let legslot = event.player.getItemBySlot(3)
  let bootslot = event.player.getItemBySlot(2)
  let item = event.player.getHeldItem('main_hand')
  let air = event.player.getMainHandItem().id == 'minecraft:air'
  let pData = event.player.persistentData
  let test = (helmetslot) => event.player.tell(helmetslot)
  let tell = (string) => event.player.tell(string)
  //test(helmetslot)
  
  
  if(pData.timer == 0 || pData.timer == 5 || pData.timer == 10 || pData.timer == 15 || pData.timer == 20) {
    
  
    if (helmetslot.hasNBT() && helmetslot.nbt.Helmet) {
      
      if (helmetslot.nbt.Arcaneh) {
        //tell('arcane')
          event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
  
      }else if(helmetslot.nbt.Crumblingh) {
        //tell('crumbling')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else if(helmetslot.nbt.Dentedh) {
        //tell('dented')
        
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else if(helmetslot.nbt.Heavyh) {
        //tell('heavy')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else if(helmetslot.nbt.Masterfulh) {
        //tell('masterful')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else if(helmetslot.nbt.Protectiveh) {
        //tell('protective')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else if(helmetslot.nbt.Luckyh) {
        //tell('lucky')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else if(helmetslot.nbt.Thickh) {
        //tell('thick')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else if(helmetslot.nbt.Toughh) {
        //tell('tough')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }else {
        //tell('nbt no attributeh')
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
        event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
      }
  }
  if (legslot.hasNBT() && legslot.nbt.Leggings){
    if (legslot.nbt.Arcanel) {
      //tell('Arcanel')
      event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Crumblingl) {
    //tell('Crumblingl')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Dentedl) {
    //tell('Dentedl')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Heavyl) {
    //tell('Heavyl')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Masterfull) {
    //tell('Masterfull')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Protectivel) {
    //tell('Protectivel')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Springyl) {
    //tell('Springyl')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Thickl) {
    //tell('Thickl')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else if(legslot.nbt.Toughl) {
    //tell('Toughl')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }else {
    //tell('nbt no attributel')
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
  }
}
if (chestslot.hasNBT() && chestslot.nbt.Chest){
  if (chestslot.nbt.Arcanec) {
    //tell('Arcanec')
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Crumblingc) {
  //tell('Crumblingc')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Dentedc) {
  //tell('Dentedc')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Heavyc) {
  //tell('Heavyc')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Masterfulc) {
  //tell('Masterfulc')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Protectivec) {
  //tell('Protectivec')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Solidc) {
  //tell('Solidc')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Cumbersomec) {
  //tell('Cumbersomec')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Thickc) {
  //tell('Thickc')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else if(chestslot.nbt.Toughc) {
  //tell('Toughc')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
        
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
    event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}else {
  //tell('nbt no attributec')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}
}
if (bootslot.hasNBT() && bootslot.nbt.Boots){
  if (bootslot.nbt.Arcaneb) {
    //tell('Arcaneb')
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Crumblingb) {
  //tell('Crumblingb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Dentedb) {
  //tell('Dentedb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Heavyb) {
  //tell('Heavyb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Masterfulb) {
  //tell('Masterfulb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Protectiveb) {
  //tell('Protectiveb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Speedyb) {
  //tell('Speedyb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Tallb) {
  //tell('Tallb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Thickb) {
  //tell('Thickb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else if(bootslot.nbt.Toughb) {
  //tell('Toughb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
        
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
  event.server.runCommandSilent(`power grant ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}else {
  //tell('nbt no attributeb')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`),
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}
 } 
 if (!helmetslot.hasNBT()) {
  //tell('no helmet nbt')

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`)
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
 }
if (!chestslot.hasNBT()) {
  //tell('no chest nbt')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`)
}
if (!legslot.hasNBT()) {
  //tell('no legs nbt')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`)
}
if (!bootslot.hasNBT()) {
  //tell('no boots nbt')
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`)
event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`)
}
 
 
 
 
 /*(
  event.player.//tell('test'),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`),
  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`),

  event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`),

    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`),

    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
)*/
  }/*else if(!item.hasNBT()) return (
    event.player.//tell('test'),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/arcane`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/crumbling`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/dented`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/heavy`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tall`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/masterful`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/protective`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/speedy`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/thick`),
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/boots/tough`),
  
    event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/arcane`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/crumbling`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/dented`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/heavy`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/solid`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/masterful`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/protective`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/cumbersome`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/thick`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/chestplate/tough`),
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/arcane`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/crumbling`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/dented`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/heavy`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/springy`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/masterful`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/protective`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/thick`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/leggings/tough`),
  
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/arcane`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/crumbling`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/dented`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/heavy`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/lucky`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/masterful`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/protective`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/thick`),
      event.server.runCommandSilent(`power revoke ${event.player.username} genesis:magicshield/equippedarmor/helmet/tough`)
  )*/
  }

  )

