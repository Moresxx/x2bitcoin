/*CMD
  command: j
  help: 
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let amount = 5
let x ="Cpdjjdjdjxjxjsjzn"
let res = Libs.ResourcesLib.userRes("replanishment");
Bot.sendMessage("✅ Your deposit amount "+amount+" BTC recived and added to your acount.\n✅ After 48 hour you will recive  "+amount*2+" BTC");
res.add(amount)
let z =User.getProperty("Reffer")
if(!z){
Bot.setProperty("null"+user.telegramid,user.username,"string")
let aj = Bot.getProperty("aj")
Api.sendMessage({ chat_id: aj, text: "💰 Deposit \n🔸 Investor:  "+user.first_name+" "+"***"+" \n✅ Btc: "+amount+" ฿"+"\nPayment ID: "+x+"\n\n👬 Refferrance earning: "+" \nNo upline" })
}else{
let h =z*1
let refUserBonus = Libs.ResourcesLib.anotherUserRes("partner",       
 h);
let bon = amount*0.1
refUserBonus.add(bon);
let sp = Libs.ResourcesLib.anotherUserRes("balance",       
 h);
sp.add(bon)
Bot.sendMessageToChatWithId(h,"✅ Your earned "+bon+" BTC from your friend investment")
let ap = User.getProperty("up")
let aj = Bot.getProperty("aj")
Api.sendMessage({ chat_id: aj, text: "💰 Deposit \n🔸 Investor:  "+user.first_name+" "+"***"+" \n✅ Btc: "+amount+" ฿"+"\nPayment ID: "+x+"\n\n👬 Refferrance earning: "+" \n"+ap+" "+"***"+" %10 = "+bon+" "+"฿" })
}


