/*CMD
  command: geta
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let p =Bot.getProperty("uinfo"+data.message)
Bot.sendMessage(p);
