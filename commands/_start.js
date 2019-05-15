/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER
Welcome to BitBet X2 Bank
In this game you can play and earn real money at the same time!

HOW IT WORKS?
For example, you make a Deposit of 0.001 BTC and after 24 hours you get 0.002 BTC.
  ANSWER
  keyboard: 📲 Account,📥 Deposit,\n📊Statistics, 👬 Referral,\n💚 Question-Answer,📍 Support
  aliases: 
CMD*/

Bot.setProperty("uinfo"+"@"+user.username,"`"+user.telegramid+"`","string")
used = User.getProperty('used')
if (!used){
 Bot.setProperty("upinfo"+user.telegramid,user.first_name+" "+user.last_name," string")
if(params){
let u=params
User.setProperty("Reffer",u,"string")
Bot.sendMessageToChatWithId(u,"🔋 New user from your refferrance")
 Bot.setProperty("hshxh",u,"string")
let up =Bot.getProperty("upinfo"+u)
User.setProperty("up",up,"string")
let res = (Libs.ResourcesLib.userRes("ref"),u)
let refUserBonus = Libs.ResourcesLib.anotherUserRes("ref",       
 u);
  refUserBonus.add(1);

}

 User.setProperty('used',true,'boolean');
}
