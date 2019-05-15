/*CMD
  command: /payrep
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("No amount. Need amount");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("replanishment");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("replanishment", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         Bot.sendMessage("Transfered BTC: " + amount)
       }
     }else{
        Bot.sendMessage("You have not such USD: " + amount)
     }
  }
}else{
  Bot.sendMessage("No params. Need another user TelegramID and AMOUNT")
}
