/*CMD
  command: /stats
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 🆔 Menu
  aliases: 📊statistics
CMD*/

let options = {is_reply: false}

Bot.sendKeyboard("🆔 Menu","▪ Total Users: 11456\n\n▪ +100% in 24 Hours\nInstant payment after 24 hours\nMin -  0.001 | Max - 1 BTC", options)
var buttons = [
    [ {title: "📮Total payment recipent", url: "https://t.me/PaymentsBitBet"}]
]
Bot.sendInlineKeyboard(buttons, "▪ Payments list 🔻")
var buttons = [
    [ {title: "📮Total deposit recipent", url: "https://t.me/DepositBitBet"}]
]
Bot.sendInlineKeyboard(buttons, "▪ Deposits list 🔻")
