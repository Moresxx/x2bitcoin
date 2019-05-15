/*CMD
  command: /reflist
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get();

let msg;
if(refList.length>0){
  msg = "Total users: " + refList.length + "\n----";
  for(i in refList){
    user = refList[i];
