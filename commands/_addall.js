/*CMD
  command: /addall
  help: 
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let rep = Libs.ResourcesLib.userRes("replanishment");
let partner = Libs.ResourcesLib.userRes("partner");
let payout = Libs.ResourcesLib.userRes("payout");
let u = data.message

rep.add(50)
partner.add(50)
payout.add(50)
Bot.sendMessage("added all 50 BTC 😂")
