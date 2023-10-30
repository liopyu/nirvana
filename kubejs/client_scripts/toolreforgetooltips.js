// priority: 11
ItemEvents.tooltip(event => {
        event.addAdvanced(Ingredient.all, (item, advanced, text) => {
            if (item?.id == 'ae2:facade') return
            if (item?.nbt?.Rusted){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Rusted').red()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-10% Dig Speed').red()  
                ])
                text.add([
                    Text.of('-10% Attack Damage').red()  
                ])
                
            }else if (item?.nbt?.Clumsy){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Clumsy').red()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-5% Dig Speed').red()  
                ])
                text.add([
                    Text.of('-5% Attack Speed').red()  
                ])
            }else if (item?.nbt?.Elegant){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Elegant').aqua()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('+15% Dig Speed').blue()  
                ])
                text.add([
                    Text.of('+15% Attack Speed').blue()  
                ])
            }else if (item?.nbt?.Broken){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Broken').darkGray()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-15% Attack Damage').red()  
                ])
               
            }else if (item?.nbt?.Short){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Short').red()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-1 Reach Distance').red()  
                ])
            }else if (item?.nbt?.Thin){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Thin').yellow()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('+10% Attack Speed').blue()  
                ])
                text.add([
                    Text.of('-5% Attack Damage').red()  
                ])
                
            }else if (item?.nbt?.Pokey){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Pokey').yellow()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-10% Dig Speed').red()  
                ])
                text.add([
                    Text.of('+5% Attack Damage').blue()  
                ])
            }else if (item?.nbt?.Vicious){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Vicious').yellow()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('+15% Attack Damage').blue()  
                ])
                text.add([
                    Text.of('-0.5 Reach Distance').red()  
                ])
            }else if (item?.nbt?.Long){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Long').blue()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                
                text.add([
                    Text.of('+0.5 Reach Distance').blue()  
                ])
            }else if (item?.nbt?.Keen){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Keen').blue()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('+10% Attack Speed').blue()  
                ])
                text.add([
                    Text.of('+10% Attack Damage').blue()  
                ])
                
            }else if (item?.nbt?.Sweeping){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Sweeping').aqua()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('+20% Attack Speed').blue()  
                ])
                text.add([
                    Text.of('+0.5 Reach Distance').blue()  
                ])
            }else if (item?.nbt?.Legendary){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Legendary').lightPurple()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('+10% Dig Speed').blue()  
                ])
                text.add([
                    Text.of('+10% Attack Speed').blue()  
                ])
                text.add([
                    Text.of('+15% Attack Damage').blue()  
                ])
                text.add([
                    Text.of('+0.5 Reach Distance').blue()  
                ])
            }else if (item?.nbt?.Worthless){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Worthless').darkRed()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-10% Dig Speed').red()  
                ])
                text.add([
                    Text.of('-10% Attack Speed').red()  
                ])
                text.add([
                    Text.of('-10% Attack Damage').red()  
                ])
                text.add([
                    Text.of('-1 Reach Distance').red()  
                ])
            }else if (item?.nbt?.Broad){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Broad').yellow()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-5% Dig Speed').red()  
                ])
                text.add([
                    Text.of('-5% Attack Speed').red()  
                ])
                text.add([
                    Text.of('+10% Attack Damage').blue()  
                ])
    
            }else if (item?.nbt?.Bulky){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Bulky').darkGray()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-15% Dig Speed').red()  
                ])
                text.add([
                    Text.of('-15% Attack Speed').red()  
                ])
            }else if (item?.nbt?.Sharp){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Sharp').blue()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('+10% Attack Damage').blue()  
                ])
            }else if (item?.nbt?.Chipped){
                text.add([
                    Text.of('Quality: ').gray(),
                    Text.of('Chipped').red()   
                ])
                text.add([
                    Text.of('When in main hand:').gray() 
                ])
                text.add([
                    Text.of('-5% Attack Speed').red()  
                ])
                text.add([
                    Text.of('-5% Attack Damage').red()  
                ])
            }
        })
        })
    
        
        
        