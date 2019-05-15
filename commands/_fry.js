/*CMD
  command: /fry
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 👬 referral
CMD*/

let options = {is_reply: false}
let Refi = Libs.ResourcesLib.userRes("Refi");
let Refg = Libs.ResourcesLib.userRes("Refg");
let pat = Libs.ResourcesLib.userRes("ref");
Bot.sendKeyboard("🆔 Menu","👬 Referral", options)
var buttons = [
    [ {title: "Get Refferral Link", command: "/mylink" } ]]
Bot.sendInlineKeyboard(buttons,"Invite your friends and receive  BTC as a bonus and 10% from every deposit of your friend. You income is unlimited!\n\n▪Referrals: "+"**"+pat.value()+"**")
