/*CMD
  command: /s1
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

time = new Date();
time = time.toLocaleString();
let options = { disable_web_page_preview: true }
let aj =Bot.getProperty("aj")
let cur =Bot.getProperty("currency")
let a = Bot.getProperty("p1")
let b = Bot.getProperty("p2")
let c = Bot.getProperty("p3")
let wallet = Bot.getProperty("wallet"+c)
Bot.setProperty("whs"+c,"Last  withdrawal history: "+"\n"+time+" \n"+"Amount: "+b+" "+cur+"\nStatus: "+"✅ "+" PAID"+"\n\n[VIEW DETAILS]("+data.message+")","string")
Bot.sendMessageToChatWithId(c,"✅ You withdraw BTC successfully."+"\n🔹 Amount withdrawn:\n"+b+" BTC"+"\n🔹 Has been sent to the wallet:"+"\n"+wallet+"\n\nTransaction details:"+"\n"+data.message,options)
let at = Bot.getProperty("ab")
Api.sendMessage({ chat_id:aj, text: "✅ Withdrawal amount has been successfully paid\n👤 User : "+c+" \n☑️Amount: "+b+" "+" BTC "+"\n🌐 Transection link: "+" \n"+data.message});

Bot.sendMessage("[✅ DONE]("+data.message+")",options)

