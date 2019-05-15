/*CMD
  command: xxx
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("phone", data.message, "string"); 
Bot.runCommand('/xxx');
