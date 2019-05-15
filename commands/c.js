/*CMD
  command: c
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let time = new Date()
let date = time.toLocaleDateString()
let hours = time.getHours();
let gmt_8 = hours + 8
let minutes = time.getMinutes();
 
curTime = "Time: "+ date +", "+ gmt_8 + ":" + minutes + " GMT +8 ";
Bot.sendMessage(curTime)
