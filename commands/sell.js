module.exports = {
  name: "suggest",
  code: `
  $channelSendMessage[$channelID;{description:}{color:RANDOM}]
  $author[$username#$discriminator;$authorAvatar]
  $channelSendMessage[$getServerVar[suggest];{description:
  **Nama : $username**
  $noMentionMessage}{color:YELLOW}{reactions:<a:benar:887263231586992169>,<a:salah:887263266353582091>}]
  $argsCheck[>1;Contoh : \`N!suggest <text>\`]
  $globalCooldown[1m;Kamu tidak bisa menggunakan command ini berlebihan]
  $onlyIf[$getServerVar[suggest]!=;Channel Suggest Blm Di Set]
  `
};