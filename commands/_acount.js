/*CMD
  command: /acount
  help: 
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 🆔account, 📲 account
CMD*/

let replanishment = Libs.ResourcesLib.userRes("replanishment");
let partner = Libs.ResourcesLib.userRes("partner");
let payout = Libs.ResourcesLib.userRes("payout");
let bal = Libs.ResourcesLib.userRes("balance");

let options = {is_reply: false}

Bot.sendKeyboard("🆔 Menu","📲 Account\n\n🔶 Withdrawable balance: "+bal.value()+" BTC"+"\n\n🔶 Your replenishments: "+ replanishment.value() +  " BTC"+ " \n\n🔶 Earned on partners: " + partner.value()+" BTC"+ "\n\n🔶 Your payouts: " + payout.value()+" BTC", options)
let property = User.getProperty("wallet")
if (property == null){

var buttons = [
    [ {title: "✏️Change Bitcoin wallet", command: "/wallet" } ],
[{title:"📥 Withdraw funds",command:"/withdraw"}],
[{title:"🏧 Payments",url: "t.me/undefined"},
{title:" 📡 Community",url:"t.me/hxhxhxh"}],
[{title:"☎️.Support ", url: "t.me/undefined"}]]

Bot.sendInlineKeyboard(buttons, "➕ Your Bitcoin Wallet : ❌")
}else{

var buttons1 = [
    [ {title: "✏️Change Bitcoin wallet", command: "/wallet" } ],
[{title:"📥 Withdraw funds",command:"/withdraw"}],
[{title:"🏧 Payments",url: "t.me/undefined"},
{title:"📡 Community",url:"t.me/hxhxhxh"}],
[{title:"☎️.Support ", url: "t.me/undefined"}]]

Bot.sendInlineKeyboard(buttons1, "➕ Your Bitcoin Wallet :"+" \n"+"<wallet>")}
