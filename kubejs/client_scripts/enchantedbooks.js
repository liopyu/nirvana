/* const enchantedBook = Ingredient.of('minecraft:enchanted_book')
const formatCurse = c => c.darkRed()
const formatEnch = c => c.darkAqua()
const formatDesc = c => Text.of(' ').italic().darkPurple().append(c)
const formatHint = c => c.gray()



ItemEvents.tooltip(event => {
    event.addAdvanced(Ingredient.all, (stack, item, text) => {

        if (!(stack.isEnchanted() || enchantedBook.test(stack))) return
        let wasEnch = false
        if (item.nbt.Enchantments || item.nbt.StoredEnchantments) {
            for (let i = 0; i < text.size(); i++) {
                let component = text.get(i)
                let k = component?.contents?.key
                if (k != null && k.startsWith("enchantment.") && !k.endsWith(".desc")) {
                    wasEnch = true
                    if (k.contains("curse"))
                        formatCurse(component)
                    else if (k.contains("heavy"))
                        formatCurse(component)
                    else
                        formatEnch(component)
                    if (event.isShift()) {
                        i++
                        text.add(i, formatDesc(Text.translate(k + ".desc")))
                    }
                } else if (wasEnch && !event.isShift()) {
                    wasEnch = false
                    text.add(i, formatHint(Text.of('§6Hold SHIFT for enchantment descriptions')))
                    i++
                }
            }
        }
    })
}) */

const enchantedBook = Ingredient.of('minecraft:enchanted_book')
const formatCurse = c => c.darkRed()
const formatEnch = c => c.darkAqua()
const formatDesc = c => Text.of(' ').italic().darkPurple().append(c)
const formatHint = c => c.gray()
ItemEvents.tooltip(event => {
    event.addAdvanced(Ingredient.all, (stack, a, text) => {
        if (!(stack.isEnchanted() || enchantedBook.test(stack))) return
        let wasEnch = false
        for (let i = 0; i < text.size(); i++) {
            let component = text.get(i)
            let k = component?.contents?.key
            if (k != null && k.startsWith("enchantment.") && !k.endsWith(".desc")) {
                wasEnch = true
                if (k.contains("curse") || k.contains("heavy"))
                    formatCurse(component)
                else
                    formatEnch(component)
                if (event.isShift()) {
                    i++
                    text.add(i, formatDesc(Text.translate(k + ".desc")))
                }
            } else if (wasEnch && !event.isShift()) {
                wasEnch = false
                text.add(i, formatHint(Text.of('Press SHIFT to see enchantment descriptions')))
                i++
            }
        }
    })
})