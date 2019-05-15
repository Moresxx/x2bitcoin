/*CMD
  command: /getwallet
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("wallet")
let walletinfo ="User :"+ user.first_name + "\n wallet: "+wallet
 Bot.sendMessageToChatWithId( your ID, walletinfo);
