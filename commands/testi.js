module.exports = ({
  name: "testi",
  code: `
  $addReactions[892695069285572608]
  Berhasil Membuat Testimoni
  $channelSendMessage[892622229500756043;
  ╭────────────────────────────────
Testimoni: #$getServerVar[testii]
Seller : <@$mentioned[1]>
Buyer :  <@$mentioned[2]>
Channel : <#$mentionedchannels[1]>
Via: $message[4]
Jumlah : $message[3]
Harga : $message[2]
Status : $message[1]
╰────────────────────────────────
Jangan Lupa <#892622229500756044> kawan]
  $deleteCommand
  $deleteIn[8s]
  $setServerVar[testii;$sum[$getServerVar[testii];1]]
  $argsCheck[>2;N!testi \` <status> <harga> <jumlah> <Via> <Channel> <Tag Seller> <Tag buyer>\`]
  `
  
})