/*CMD
  command: touchbutton3
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 🔻 Input Bitcoin wallet for paying  out:
  keyboard: 
  aliases: 
CMD*/

if(request.message){
  msg_id =  request.message.message_id
  Bot.setProperty("LastMessageID", msg_id, "integer");
  Bot.runCommand("changeButtonText");
}else{
  Bot.sendMessage("✅Wallet updated successfully");
}
