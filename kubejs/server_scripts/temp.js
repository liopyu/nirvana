/* ServerEvents.tick(event => {
    const {server,server: {persistentData}} = event
    let sData = persistentData
    if(sData.servertimer != 0) return
    global.tooltips2(event)
})
const $REIRuntime = Java.loadClass('me.shedaniel.rei.api.client.REIRuntime')
global.tooltips2 = (event) => {
    console.log($REIRuntime.getInstance().getStage())
    console.log('before')
    
    if ($REIRuntime.getInstance().getStage() == 'START') {
      console.log($REIRuntime.getInstance().getStage())
      console.log('first')
    }
  
    if ($REIRuntime.getInstance().getStage() == 'END') {
      console.log($REIRuntime.getInstance().getStage())
      console.log('second')
    } 
  } */
