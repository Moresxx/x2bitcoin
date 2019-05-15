/*CMD
  command: /tes
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let health = Libs.ResourcesLib.userRes("health");
health.set(1);
health.growth.add({value: 5, interval:10 });
