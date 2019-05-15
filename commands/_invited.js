/*CMD
  command: /invited
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let u = Libs.ReferralLib.currentUser.attractedByUser();
let chanell = Libs.ReferralLib.currentUser.attractedByChannel();
let msg = "You was attracted by "

if(u){
  msg = msg + "user " + "@" + u.username
}else if (chanell){
  msg = msg + "chanell: " + chanell
}else{
  msg = "You was not invited by reffer link."
}

Bot.sendMessage(msg);
