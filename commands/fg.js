/*CMD
  command: fg
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let property = User.getProperty("wallet")
if (property == null){

var buttons = [
    [ {title: "✏️Change Bitcoin wallet", command: "/wallet" } ],
[{title:"📥 Withdraw funds",command:"/withdraw"}],
[{title:"🏧 Payments",url: "t.me/undefined"},
{title:"☎️.Support ", url: "t.me/undejuyyfined"},
{title:"📡 Community",url:" https://t.me/undefined"}]]
Bot.sendInlineKeyboard(buttons, "➕ Your Bitcoin Wallet : ❌")
}else{

var buttons1 = [
    [ {title: "✏️Change Bitcoin wallet", command: "/wallet" } ],
[{title:"📥 Withdraw funds",command:"/withdraw"}],
[{title:"🏧 Payments",url: "t.me/undefined"},
{title:"☎️.Support ", url: "t.me/unjudefined"},
{title:"📡 Community",url:" https://t.me/undefined"}]]
Bot.sendInlineKeyboard(buttons1, "➕ Your Bitcoin Wallet :"+" \n"+"<wallet>")}
