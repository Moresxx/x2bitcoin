/*CMD
  command: /faq
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER
🔻 What to do if the deposit is greater than the maximum or less than the minimum?

▪ Any amount less than 0.001 BTC will be considered a donation and will not be reflected as a valid deposit! The maximum amount is not limited
  ANSWER
  keyboard: 
  aliases: 💚 question-answer
CMD*/

let options = {is_reply: false}

Bot.sendKeyboard("➕ Add Deposit,\n🆔 Menu","🔻 What it does BitBet X2 Bank unique?"+"\n\n▪ We attach great importance to transparency. In Take Bitcoin X2 you can track all deposits and payouts of any user in real time at any time.", options)

Bot.sendMessage("🔻 Where does the profit come from?"+" \n\n▪ In BitBet X2 Bank you don't need to sign contracts or mortgage your property. There are no creditors and no debtors. In fact, everything is very simple: one participant asks for help — the other helps. All profits are provided by new investments.")

Bot.sendMessage("🔻 How it Works?"+" \n\n▪ For example, you make a Deposit of 0.001 BTC and after 24 hours you get 0.002 BTC.")

Bot.sendMessage("🔻 I want to start making money. What am I to do?"+"\n\n▪ Choose the amount to double and provide your personal wallet to get the earned profit."+"\n▪ Deposit the amount from 0.001 BTC to the Bitcoin address provided by the Service for the Deposit."+"\n▪ Wait for the Deposit to be credited.")

Bot.sendMessage("🔻 You have commissions?"+" \n\n▪ No, we do not charge any fees for using our service.")

Bot.sendMessage("🔻 Can I make more than one deposit?"+" \n\n▪ Yes, there are no restrictions.")

Bot.sendMessage("🔻 Is it time for my payout when I get it?"+" \n\n▪ Payments are fully automated and usually take a couple of minutes, but no more than 15 minutes.")
