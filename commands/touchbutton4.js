/*CMD
  command: touchbutton4
  help: 
  need_reply: false
  auto_retry_time: 

  <<ANSWER
`38i8x1ktobLh588Rhwnwye4zdnDfYHdPSy`

⏳ Awaiting Payment...
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(request.message){
  msg_id =  request.message.message_id
  Bot.setProperty("LastMessageID", msg_id, "integer");
  Bot.runCommand("changeButtonText");
}else{
  Bot.sendMessage("⏳ Awaiting Payment...");
}
