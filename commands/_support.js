/*CMD
  command: /support
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
When you have any problems, send us a question. Our staff will check and answer all the questions you have.

 🔻 Enter your question:
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(request.message){
  msg_id =  request.message.message_id
  Bot.setProperty("LastMessageID", msg_id, "integer");
  Bot.runCommand("changeButtonText");
}else{
  Bot.sendMessage("✅ Your question has been moved to the support center and will be answered before 24 hours.");
}
