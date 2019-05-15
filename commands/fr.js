/*CMD
  command: fr
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button =[
[{title:"Done",command:"/done"}]]

let options = {disable_web_page_preview: true}
Bot.sendInlineKeyboard (button,"🌿Action may take up to 30 minutes to verify.\n♨️We warn you that incomplete action will lead your account to ban❗️\n\n*Join our* [Partner Channel](https://t.me/bots_and_airdrops) *and click Done*",options)
