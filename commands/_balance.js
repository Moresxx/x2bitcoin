/*CMD
  command: /balance
  help: 
  need_reply: false
  auto_retry_time: 

  <<ANSWER
📲 Account

🔸 Your *replenishments*: *0* BTC

🔸 *Earned* on *partners*: *0* BTC

🔸 Your *payouts*: *0* BTC
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ {title: "Update your wallet", command: "touchButton6" } ]
]
Bot.sendInlineKeyboard(buttons, "You can change your wallet anytime you want.")
