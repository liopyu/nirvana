PlayerEvents.loggedIn( event => {
  const {player,server,player: {persistentData,username}} = event
    persistentData.putInt("ArcaneLevel", 0)
    persistentData.putInt("aimingLevel", 0)
    persistentData.putInt("armoredLevel", 0)
    persistentData.putInt("athleticLevel", 0)
    persistentData.putInt("clunkyLevel", 0)
    persistentData.putInt("flailingLevel", 0)
    persistentData.putInt("focusingLevel", 0)
    persistentData.putInt("gracefulLevel", 0)
    persistentData.putInt("healthyLevel", 0)
    persistentData.putInt("horribleLevel", 0)
    persistentData.putInt("luckyLevel", 0)
    persistentData.putInt("prospectingLevel", 0)
    persistentData.putInt("punishingLevel", 0)
    persistentData.putInt("shieldingLevel", 0)
    persistentData.putInt("speedyLevel", 0)
    persistentData.putInt("springyLevel", 0)
    persistentData.putInt("strengtheningLevel", 0)
    persistentData.putInt("undyingLevel", 0)
    persistentData.putInt("unluckyLevel", 0)
  })
  PlayerEvents.respawned( event => {
  const {player,server,player: {persistentData,username}} = event
    persistentData.putInt("ArcaneLevel", 0)
    persistentData.putInt("aimingLevel", 0)
    persistentData.putInt("armoredLevel", 0)
    persistentData.putInt("athleticLevel", 0)
    persistentData.putInt("clunkyLevel", 0)
    persistentData.putInt("flailingLevel", 0)
    persistentData.putInt("focusingLevel", 0)
    persistentData.putInt("gracefulLevel", 0)
    persistentData.putInt("healthyLevel", 0)
    persistentData.putInt("horribleLevel", 0)
    persistentData.putInt("luckyLevel", 0)
    persistentData.putInt("prospectingLevel", 0)
    persistentData.putInt("punishingLevel", 0)
    persistentData.putInt("shieldingLevel", 0)
    persistentData.putInt("speedyLevel", 0)
    persistentData.putInt("springyLevel", 0)
    persistentData.putInt("strengtheningLevel", 0)
    persistentData.putInt("undyingLevel", 0)
    persistentData.putInt("unluckyLevel", 0)
  })
  PlayerEvents.tick(event => {
    const {player,entity,player: {persistentData}} = event
    if(!(player.age % 20 == 0)) return
    let curios = player.nbt.ForgeCaps['curios:inventory']
    if (!curios.toString().contains('kubejs:elf_ring') && !curios.toString().contains('kubejs:titan_ring') && !curios.toString().contains('kubejs:dragon_ring') && !curios.toString().contains('kubejs:ring_of_faeles') && !curios.toString().contains('kubejs:lightning_dragon_ring') && !curios.toString().contains('kubejs:ocean_dragon_ring') && !curios.toString().contains('kubejs:fairy_ring')) {
      player.persistentData.putInt('ringLevel', 0)
    }
    if (!curios.toString().contains('kubejs:titan_ring')) {
      persistentData.hastitanring = 0
      player.removeAttribute('minecraft:generic.max_health', '-123924,5555,155221,-3120')
    }
    if (!curios.toString().contains('kubejs:dragon_ring')) {
      persistentData.hasdragonring = 0
      player.removeAttribute('minecraft:generic.max_health', '-123924,5550,155221,-3120')
    }
    if (!curios.toString().contains('kubejs:ring_of_faeles')) {
      persistentData.hasfaelesring = 0
      player.removeAttribute('minecraft:generic.max_health', '-123924,5551,155221,-3120')
    }
    if (!curios.toString().contains('kubejs:lightning_dragon_ring')) {
      persistentData.haslightningdragonring = 0
      player.removeAttribute('minecraft:generic.max_health', '-123924,5553,155221,-3120')
    }
    if (!curios.toString().contains('kubejs:ocean_dragon_ring')) {
      persistentData.hasoceandragonring = 0
      player.removeAttribute('minecraft:generic.max_health', '-123924,5554,155221,-3120')
    }
    if (!curios.toString().contains('kubejs:fairy_ring')) {
      persistentData.hasfairyring = 0
      player.removeAttribute('minecraft:generic.max_health', '-123924,5552,155221,-3120')
    }
    
  })

  