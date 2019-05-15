/*CMD
  command: h
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage( message + "-*This email was added succesfully.*");

Bot.sendMessage ("\nPlease now enter your *erc-20 compatiable eth address* :",{is_reply:true});
Bot.sendMessage ( message + "-*eth address added.*\n🌿Note:Incorrect address will burn your Tokens.",{is_reply:true});
