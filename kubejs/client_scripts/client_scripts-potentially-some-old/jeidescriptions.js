
JEIEvents.information(e => {
    e.addItem('scalinghealth:power_crystal', ['I think my pet would like this more than me.'])
    e.addItem('scalinghealth:heart_crystal', ['I think my pet would like this more than me.'])
    /*e.addItem('ae2things:disk_drive_1k', ['Unlimited Item Types!'])
    e.addItem('ae2things:disk_drive_4k', ['Unlimited Item Types!'])
    e.addItem('ae2things:disk_drive_16k', ['Unlimited Item Types!'])
    e.addItem('ae2things:disk_drive_64k', ['Unlimited Item Types!'])
    e.addItem('ae2things:disk_drive_256k', ['Unlimited Item Types!'])*/
    /*const items = [{
            id: 'ae2things:disk_drive_1k',
            desc: ['Unlimited Item Types!.']
        },
        
    ]*/
    items.forEach(i => e.addItem(i.id, i.desc))
})

ItemEvents.tooltip(tooltip => {
	tooltip.addAdvanced('scalinghealth:heart_crystal', (item, advanced, text) => {
	  text.add(1, Component.yellow('I think my pet would like this more than me. '))
	})
	tooltip.addAdvanced('scalinghealth:power_crystal', (item, advanced, text) => {
		text.add(1, Component.yellow('I think my pet would like this more than me. '))
	  })
	/*tooltip.addAdvanced('ae2things:disk_drive_4k', (item, advanced, text) => {
		text.add(1, Component.blue('Unlimited Item Types!'))
	  })
	tooltip.addAdvanced('ae2things:disk_drive_16k', (item, advanced, text) => {
		text.add(1, Component.blue('Unlimited Item Types!'))
	  })
	tooltip.addAdvanced('ae2things:disk_drive_64k', (item, advanced, text) => {
		  text.add(1, Component.blue('Unlimited Item Types!'))
		})
	tooltip.addAdvanced('ae2things:disk_drive_256k', (item, advanced, text) => {
		text.add(1, Component.blue('Unlimited Item Types!'))
	  })
	tooltip.addAdvanced('ae2things:disk_drive_1k', (item, advanced, text) => {
		text.add(1, Component.blue('Unlimited Item Types!'))
	  })*/
	  tooltip.addAdvanced('ylf_mod:brokenice', (item, advanced, text) => {
		text.add(1, Component.darkPurple('Like catnip is to a cat, Broken Ice is to a Ylf.'))
	  })
	tooltip.addAdvanced('mekanism:mekasuit_helmet', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
	tooltip.addAdvanced('mekanism:mekasuit_bodyarmor', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
	tooltip.addAdvanced('mekanism:mekasuit_pants', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
	tooltip.addAdvanced('mekanism:mekasuit_boots', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
	  
  })