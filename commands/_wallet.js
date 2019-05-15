/*CMD
  command: /wallet
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Enter your wallet address for paying out🔻
  keyboard: 🆔 Menu
  aliases: 
CMD*/

if(data.message=="🆔 Menu"){
Bot.runCommand("/start")}else{
      User.setProperty("wallet", data.message, "string");
      Bot.setProperty("wallet"+user.telegramid,data.message," string")
Bot.sendMessage("✅ Your BTC wallet address updated successfully. Your current BTC wallet address is:"+
                      "\n\n*<wallet>*");}
