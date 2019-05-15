/*CMD
  command: /support1
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 📍 New Ticket,\n🆔 Menu
  aliases: 📍 support
CMD*/

var buttons =[
[{title:"🆘 Support",url:"t.me/undefined"},{title:"📡 Community",url:"t.me/xhxh"}],
[{title:"📍 Create support ticket ",command:"/message"}]
]
Bot.sendInlineKeyboard(buttons,"🆘 Support\n\nIf you have a question or a problem with deposit or withdraw system, you can create a ticket\n\nIf your problem is about withdrawal and the bot has given you a transaction hash ID, your payment is already on its way and out of our control\n\nIf it is about deposit, please wait at least 24 hours to recieve confirmations on the blockchain before writing a ticket")
