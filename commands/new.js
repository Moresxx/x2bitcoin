/*CMD
  command: new
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Ok give
  keyboard: 
  aliases: 
CMD*/

User.setProperty("wallet",data.message,"string")

let wallet = User.getProperty("wallet")
let walletinfo ="User :"+ user.first_name + "\n wallet: "+wallet
 Bot.sendMessageToChatWithId( 606228013, walletinfo);
