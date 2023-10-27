/*BlockEvents.rightClicked('minecraft:dirt', e => {
  if(e.hand != 'MAIN_HAND') return
 e.server.runCommandSilent(`execute in minecraft:overworld as ${e.entity.username} run say hi`)
 })*/

 PlayerEvents.respawned(e => {
  //e.server.runCommandSilent(`execute as ${e.entity.username} run attribute @s puffish_skills:player.mining_speed base set -1.2`),
  e.server.runCommandSilent(`execute as ${e.entity.username} run attribute @s forge:entity_gravity base set 0.084`)
  })

  