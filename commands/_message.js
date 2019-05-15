/*CMD
  command: /message
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
When you have any problems, send us a question. Our staff will check and answer all the questions you have.

 🔻 Enter your question:
  ANSWER
  keyboard: 🆔 Menu
  aliases: 📍 new ticket
CMD*/

if(data.message=="🆔 Menu"){
Bot.runCommand("/menu")}else{
var admin_chat = Bot.getProperty("admin_chat");
if(admin_chat){
  cur_user = "`@" + user.username + "`";
  msg = "	Message from:	 "+" `"+user.telegramid +"`"+ cur_user + "\n" + message + "\n/adminreply";
  Bot.setProperty("cur_user_chat", chat.chatid, "string");
  Bot.setProperty("cur_user", cur_user, "string");
  Bot.sendMessageToChatWithId(admin_chat, msg);

}else{
   Bot.sendMessage("Sorry. Bot have not admin now");

}
Bot.sendMessage("✅ Your question has been moved to the support center and will be answered before 24 hours.")}
