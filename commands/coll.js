/*CMD
  command: coll
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = Libs.ResourcesLib.userRes("wallet");
let bankDeposit = Libs.ResourcesLib.userRes("health");

// it is initial res value
let baseValue = bankDeposit.baseValue();

// total income by percent
let delta = bankDeposit.value() - baseValue;

// add all income to wallet
wallet.add(delta);
// and remove it from bank deposit
bankDeposit.set(baseValue);
