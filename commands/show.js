/*CMD
  command: show
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let health = Libs.ResourcesLib.userRes("health");
let wallet = Libs.ResourcesLib.userRes("wallet");
Bot.sendMessage("balance: "+wallet.value()+" \n"+"value: "+health.value())
