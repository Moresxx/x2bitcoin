/*CMD
  command: touchbutton
  help: 
  need_reply: false
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage( user.first_name + ", ❎Your current wallet address deleted successfully: " + params);

// update keyboard now
var buttons = [
    {title: "✂️Delete your current wallet", command: "touchButton delete" },
    {title: "✏️Set new address", command: "/wallet" },
]

if(params=="delete"){
   buttons = [
    {title: "✏️Set new address", command: "touchButton3" },
   ];
}

Bot.editInlineKeyboard(buttons);
