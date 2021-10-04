module.exports = ({
  name: "mute",
  code: `
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Done]
$description[$username[$findMember[$message[1]]] Telah di muted]
$addField[Reason;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;$customEmoji[fail] Alasan tidak diberikan];false;$messageSlice[1]]]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Pengguna ini memiliki role yang sama atau lebih tinggi dari saya]]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Pengguna ini memiliki role yang sama atau lebih tinggi dari Anda}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:You can't mute yourself}{color:RED}]
$onlyIf[$message[1]!=;{title:Error}{field:**Usage**:\`mute <member | userID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Mute role belum dikonfirmasi, ketik \`$getServerVar[prefix]setmute\` untuk menyetelny}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Tidak ada permission:\`mutemembers\`]
$suppressErrors`
})