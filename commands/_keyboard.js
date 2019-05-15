/*CMD
  command: /keyboard
  help: 
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 🆔 Menu
  aliases: ➕ add deposit
CMD*/

var buttons = [
    [ {title: "Get wallet admin", command: "/gen" } ]
]
Bot.sendInlineKeyboard(buttons, "▪ Your billing address generated and will be available for 30 minutes.\n▪ After you make a deposit, the  will be automatically deposited to your account after a few second.\n▪ Minimum deposit 0.001 ฿\n▪ Maximum deposit 1 ฿")
