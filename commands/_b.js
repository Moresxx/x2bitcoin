/*CMD
  command: /b
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let replanishment = Libs.ResourcesLib.userRes("replanishment");
let partner = Libs.ResourcesLib.userRes("partner");
let payout = Libs.ResourcesLib.userRes("payout");

Bot.sendMessage("Your replenishments: " + replanishment.value().toFixed(4) + "\n\nEarned on partners: " + partner.value().toFixed(4) + "\n\nYour payouts: " + payout.value().toFixed(4));
