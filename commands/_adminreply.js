/*CMD
  command: /adminreply
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Type admin reply
  keyboard: 
  aliases: 
CMD*/

cur_user_chat = Bot.getProperty("cur_user_chat");
msg = "✅ You have new reply from Support Team" + "\n\n📮 " + data.message ;
Bot.sendMessageToChatWithId(cur_user_chat, msg);

Bot.sendMessage("✅Reply sent to your user")
