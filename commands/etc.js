/*CMD
  command: etc
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ {title: "📮Total payment recipent", url: "https://t.me/payments_doubleprofit"}]
]
Bot.sendInlineKeyboard(buttons, "▪ Total payments")
var buttons = [
      [ {title: "📮Total deposit recipent", url: "http://t.me/deposits_doubleprofit" } ]]
Bot.sendInlineKeyboard(buttons, "▪ Total deposits")
