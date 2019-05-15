/*CMD
  command: /ado
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Ok type reply
  keyboard: 
  aliases: 
CMD*/

cur_user_chat = Bot.getProperty("cur_user_chat");
msg = "✅ You have new reply from Support Team" + "\n" + data.message ;
Bot.sendMessageToChatWithId(770021416, msg);

Bot.sendMessage("✅Reply sent to your user")
