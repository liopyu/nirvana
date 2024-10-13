// All current code is for 1.19.2
// All commented code is for 1.18.2
// Uncomment it, and comment out the line below it to use this script on 1.18.2

// const enchantedBook = Item.of('minecraft:enchanted_book').ignoreNBT()
/*const enchantedBook = Ingredient.of('minecraft:enchanted_book')
// These functions format various pieces of text. They are here so you can easily modify them
const formatCurse = c => c.darkRed()
const formatSapling = c => c.darkAqua()
const formatEnch = c => c.darkAqua()
const formatDesc = c => Text.of(' ').italic().darkGray().append(c)
const formatHint = c => c.gray()
// onEvent('item.tooltip', event => {
    
    
    
ItemEvents.tooltip(event => {
 event.addAdvanced(Ingredient.all, (stack, a, text) => {
  // if (!(stack.itemStack.isEnchanted() || enchantedBook.test(stack))) return
  if (!(stack.isEnchanted() || enchantedBook.test(stack))) return

  let wasEnch = false
  for (let i = 0;i < text.size();i++) {
   let component = text.get(i)
   // let k = component?.key
   let k = component?.contents?.key
   if (k != null && k.startsWith("enchantment.") && !k.endsWith(".desc")) {
    wasEnch = true
    if (k.contains("curse"))
     formatCurse(component)
     else if (k.contains("heavy"))
     formatCurse(component)
   } 
   if (event.isShift()) {
    i++
    text.add(i, formatDesc(Text.translate(k + ".desc")))
   }
  } else if (wasEnch && !event.isShift()) {
   // We are on the line after enchantments
   wasEnch = false
   text.add(i, formatHint(Text.of('Press SHIFT to see enchantment descriptions')))
   i++
  }
   
   
  }
 })
})*/

// All current code is for 1.19.2
// All commented code is for 1.18.2
// Uncomment it, and comment out the line below it to use this script on 1.18.2

// const enchantedBook = Item.of('minecraft:enchanted_book').ignoreNBT()
const enchantedBook = Ingredient.of('minecraft:enchanted_book')
// These functions format various pieces of text. They are here so you can easily modify them
const formatCurse = c => c.darkRed()
const formatEnch = c => c.darkAqua()
const formatDesc = c => Text.of(' ').italic().darkPurple().append(c)
const formatHint = c => c.gray()
// onEvent('item.tooltip', event => {
ItemEvents.tooltip(event => {
 event.addAdvanced(Ingredient.all, (stack, a, text) => {
  // if (!(stack.itemStack.isEnchanted() || enchantedBook.test(stack))) return
  if (!(stack.isEnchanted())) return

  let wasEnch = false
  for (let i = 0;i < text.size();i++) {
   let component = text.get(i)
   // let k = component?.key
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
    // We are on the line after enchantments
    wasEnch = false
    text.add(i, formatHint(Text.of('§6Hold SHIFT for enchantment descriptions')))
    i++
   }
  }
 })
})