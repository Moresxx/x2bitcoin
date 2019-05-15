/*CMD
  command: /withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Enter the amount you want to withdraw 🔻
  keyboard: 🆔 Menu
  aliases: 
CMD*/

let btc = Libs.ResourcesLib.userRes("balance");
let wall =User.getProperty("wallet")
let aj= Bot.getProperty("aj")
let payout = Libs.ResourcesLib.userRes("payout");
if(data.message=="🆔 Menu"){
Bot.runCommand("/menu")
}else{

let value = data.message;

let wallet=User.getProperty("wallet")
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

if(!isNumeric(value)){
Bot.sendMessage("❌You have inputed a wrong amount. Amount must be number only!")
}else{

let amount = data.message;

if((btc.value()>=0.0004)&&(amount>=0.0004)&&(amount<=btc.value())){
 btc.removeAnyway(parseFloat(amount));

Bot.sendMessage("✅ Payment was approved.\n\n✅ It will be sent within 24 hours.")
var buttons=[
[{title: "I paid this user manually", command: "/ws"+" "+ user.telegramid+" "+data.message+" "+user.telegramid}]]
Bot.sendInlineKeyboardToChatWithId(606228013, buttons, "💵 #Withdrawal #Request"+" \n\n->Username:  @" + user.username +"\n->User id:"+""+user.telegramid+""+ "\n->Requested amount  " +""+ amount + ""+"  DOGE"+"\n-> His wallet address:"+"\n"+""+wallet+"");
let xx =data.message*1
payout.add(xx)
Api.sendMessage({ chat_id: aj, text:"✅ New withdrawal \n\n🔷 User: "+user.first_name+" ***"+"\n🔷 Amount: "+data.message+" BTC"+"\n\n☑️ Payment recipent address: "+" \n"+wall});

Bot.runCommand("/join")
       }else{
let j = "https://telegram.me/BiteBetX2Bot?start="+user.telegramid
let x = "https://t.me/share/url?url="+j
var buttons=[
[{title:"👬 Invite friends", url: x}]]
Bot.sendInlineKeyboard(buttons,"😔 Not enough balance for withdrawal.\nYour avialable balance: " +btc.value()+" BTC"+"\n👬 Invite your friends to earn more and more" );
}}}
