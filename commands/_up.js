/*CMD
  command: /up
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("ref");
lr =User.getProperty("up")
let z =User.getProperty("Reffer")
Bot.sendMessage("Your upline: "+lr+" \nYour total refferral: "+res.value()+" \nup id: "+z)
