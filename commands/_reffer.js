/*CMD
  command: /reffer
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER
▪ Invite Friends
▪ Share On Social Media
  ANSWER
  keyboard: 🆔 Menu
  aliases: 
CMD*/

var buttons = [
    [ {title: "🖇Get Refferral Link", command: "/mylink" } ],
[ {title: "👤My refferrals", command: "/reflist" } ],
[ {title: "✔️You invited by", command: "/invited" } ]
]
Bot.sendInlineKeyboard(buttons, "Invite your friends and receive  BTC as a bonus and 20% bonusfrom every deposit of your friend. You income is unlimited!▪ Fake, empty or spam users are deleted after checking. .")
