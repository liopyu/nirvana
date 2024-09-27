/*ItemEvents.tooltip(event => {
    event.addAdvanced("%food", (stack, advanced, lines) => {
        let props = stack.item.foodProperties;
        if (props == null || props.effects.isEmpty())
            return;
        let attrLines = []
        props.effects.forEach((pair) => {
            let effect = pair.getFirst();
            let chance = pair.getSecond();
            let cs = chance < 1 ? `${Math.floor(chance * 100)}% ` : "";
            let duration = effect.duration / 20
            let minute = Math.floor(duration / 60);
            let seconds = `${duration % 60}`;
            if (seconds.length == 1)
                seconds = "0" + seconds;
            let es = effect.effect.beneficial ? "§9" : "§c"
            lines.add(`${es}${cs}${effect.effect.displayName.getString()} (${minute}:${seconds})`)
            effect.effect.attributeModifiers.forEach((attribute, modifier) => {
                let attrName = Text.translate(attribute.descriptionId).getString();
                let prefix = "+"
                if (modifier.operation.ordinal() == 0) {
                    let amount = modifier.amount;
                    prefix += Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
                } else {
                    let amount = modifier.amount * 100;
                    prefix += Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
                    prefix += "%"
                }
                let effectString = modifier.amount > 0 ? "§9" : "§c";
                attrLines.push(`${effectString}${prefix} ${attrName}`)
            })
        })
        if (attrLines.length > 0) {
            lines.add("")
            lines.add(`§5${Text.translate("tooltip.kubejs.effect.applied").getString()}`)
            lines.addAll(attrLines)
        }
    })
})*/