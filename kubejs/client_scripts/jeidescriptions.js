ItemEvents.tooltip(event => {
	event.addAdvanced('scalinghealth:heart_crystal', (item, advanced, text) => {
	  text.add(1, Component.yellow('I think my pet would like this more than me. '))
	})
	event.addAdvanced('scalinghealth:power_crystal', (item, advanced, text) => {
		text.add(1, Component.yellow('I think my pet would like this more than me. '))
	  })
	  event.addAdvanced('ylf_mod:brokenice', (item, advanced, text) => {
		text.add(1, Component.darkPurple('Like catnip is to a cat, Broken Ice is to a Ylf.'))
	  })
	  event.addAdvanced('mekanism:mekasuit_helmet', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
	  event.addAdvanced('mekanism:mekasuit_bodyarmor', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
	  event.addAdvanced('mekanism:mekasuit_pants', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
	event.addAdvanced('mekanism:mekasuit_boots', (item, advanced, text) => {
		text.add(1, Component.green('Negates 20% locational damage when powered.'))
	  })
  })