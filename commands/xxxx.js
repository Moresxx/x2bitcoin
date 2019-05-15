/*CMD
  command: xxxx
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = Libs.ResourcesLib.userRes("wallet");
let bankDeposit = Libs.ResourcesLib.userRes("deposit");
let activInvest = Libs.ResourcesLib.userRes("Invest");
let referrer = Libs.ReferralLib.currentUser.attractedByUser();

let baseValue = bankDeposit.baseValue();
let delta = bankDeposit.value() - baseValue;    

   wallet.add(delta);

   msg =  User.setProperty("msg", data.message, "string");
   msg = User.getProperty("msg");
   amount = wallet.value();

if(msg<=amount){
   if(msg>0.044){
     if( wallet.exchangeTo(activInvest, { remove_amount:0, add_amount:+ msg  }) );
         let secs_in_5minutes = 1 * 60 * 1;
         activInvest.growth.add({value: -msg,interval: secs_in_5minutes, max_iterations_count: 1});

     if( wallet.exchangeTo(bankDeposit, { remove_amount:+ msg, add_amount:+ msg  }) ){
         let secs_in_6hours = 1 * 60 * 60 * 6;
         bankDeposit.growth.addCompoundInterest({percent: 9.25, interval: secs_in_6hours, max_iterations_count: 16 });

        User.setProperty("reinvest", data.message, "string");
        Bot.sendMessageToChatWithId("880188929", "♻️ *New Reinvest From:*"+
              "\n\n■ *Username: *["+ user.first_name +"](tg://user?id="+user.telegramid +")"+
              "\n■ *telegramId:* "+user.telegramid+
              "\n■ *Amount:* " + msg +" LTC"+
              "\n\n⚙ *Check Now*"+
              "\n!getaccount "+user.telegramid+"");
        Bot.sendMessage("♻️ Reinvest *<reinvest>* LTC Success .");
        Bot.sendMessageToChat("Demo Bot Chat", "*New Re-investment by *["+ user.first_name +"](tg://user?id="+user.telegramid+")"+
            "\n\n*Amount:* "+ msg+" LTC"+
            "\n\n🎊 *Happy earnings!*");
        Bot.runCommand("!balance");
   }
   }else{
      Bot.sendMessage("❌ Minimum amount for Reinvest is 0.044 LTC!");
   }
}else{
    Bot.sendMessage("⚠️ Please enter an amount below " + amount.toFixed(8)+" LTC of your balance.");
}
if(referrer){
Bot.sendMessageToChatWithId("880188929","*Referral Commission*\n\n!send "+ referrer.telegramid +" "+ amount *0.10 +"");
}else{
Bot.sendMessageToChatWithId("880188929","*User* ["+user.first_name+"](tg://user?id="+user.telegramid+")* No upline*");
}
