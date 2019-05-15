/*CMD
  command: /deposit
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Deposit

To deposit BTC into the game you need to send us a confirmation ticket before you send. This will make your transaction completely fast.

 ▪️ Minimum deposit amount:
 0.001 Bitcoin
▪️Deposit of less the 0.001 Bitcoin considered as donation it did not reflect on Acount. 

🔻 Enter desired Bitcoin amount:
  ANSWER
  keyboard: 🆔 Menu
  aliases: ➕ add deposit, 📥 deposit
CMD*/

if(data.message=="🆔 Menu"){
Bot.runCommand("/start")}else{
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let s =data.message
if(!isNumeric(s)){
Bot.sendMessage("Invaild value amount must be numberic value")
}else{

if(data.message>=0.001){
User.setProperty("add",data.message,"string")

let add=User.getProperty("add")
Bot.sendMessage("✅ Confirmation ticket sent successfully."+" \n▪️ You have requested:"+ "<add>"+" BTC"+"\n▪️ Your billing address generated and will be available for 59 minutes."+"\n▪️ After you make a deposit, the "+ "<add>"+" will be automatically deposited to your account after a few minutes."+"\n▪️ To avoid unwanted flaws. Please send the correct BTC you requested earlier."+"\n\n Wallet Admin: (_Genareting......_)")
Bot.sendMessage("⚠️ Your deposit are automatically added to acount after your deposit reached 3 confirmation on blockchain. If you send less than the amount that you tell to the bot( "+data.message+" BTC "+")"+" bot will reject your deposit. Send correct amount on your deposit address")
let amount = data.message;

options = {
  fields: {
     amount: amount,   // amount in BTC
     currency: "Doge",  // currency1 = currency2 = BTC
     // currency1: "BTC",   // The original currency of the transaction
     // currency2: "LTC"  //The currency the buyer will be sending
     // you can use another fields also
     // except custom and ipn_url (it used by Lib)
     // See https://www.coinpayments.net/apidoc-create-transaction
  },
  // generated wallet, QR code, payment page
  // will be available in this command
  onSuccess: '/onCreatePayment',
  
  // on successful payment this command
  // will be executed
  onPaymentCompleted: "/onPaymentCompleted"
  
  // it is not necessary
  
}

Libs.CoinPayments.createTransaction(options);
Bot.sendMessage("`⏳ Waiting for Payment recipent.....`")}else{
Bot.sendMessage("You can not invest less than 0.001 BTC")}
}
}
