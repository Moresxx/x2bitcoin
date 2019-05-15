/*CMD
  command: /ref
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib
refList = lib.currentUser.refList.get();
if(refList.length>0){
  totalRef = refList.length;
  for(i in refList){
    user = refList[i];
  }
}else{
  totalRef = "0";
}
Bot.sendMessage("total referral "+ totalRef)
