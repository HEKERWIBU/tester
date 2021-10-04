module.exports = ({
  name: "unmute",
  code: `
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$title[Done]
$description[$username[$findMember[$message[1]]] di unmuted]
$color[GREEN]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Pengguna ini memiliki role yang sama atau lebih tinggi dari saya]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Pengguna ini memiliki role yang sama atau lebih tinggi dari Anda}{color:RED}]
$onlyIf[$findMember[$message[1];no]!=$authorID;{description:Anda tidak dapat mengaktifkan suara sendiri}{color:RED}]
$onlyIf[$message[1]!=;{title:Error}{field:**Tutorial**:\`unmute <member | userID>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Role mute belum dikonfirmasi, ketik \`$getServerVar[prefix]setmute\` untuk menyetelnya}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
})