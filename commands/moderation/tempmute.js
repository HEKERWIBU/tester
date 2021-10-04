module.exports = ({
  name: "tempmute",
  code: `
$channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] disuarakan}
{field:Reason:Tempmute selesai}{color:GREEN}]
$takeRoles[$findMember[$message[1]];$getServerVar[muted]]
$wait[$message[2]]
$giveRoles[$findMember[$message[1]];$getServerVar[muted]]
 $channelSendMessage[$channelID;{description:$username[$findMember[$message[1]]] telah dibisukan untuk \`$message[2]\`}
{field:Reason:$replaceText[$replaceText[$checkCondition[$messageSlice[2]==];true;$customEmoji[fail] Tidak ada alasan yang diberikan];false;$messageSlice[2]]}{color:GREEN}]
 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];Pengguna ini memiliki role yang sama atau lebih tinggi dari saya]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];no]]];{description:Pengguna ini memiliki role yang sama atau lebih tinggi dari Anda}{color:RED}]
 
$onlyIf[$checkContains[$message[2];h;m;s]==true;{description:Masukan waktu yang benar (h,m,s)}{color:RED}]
$onlyIf[$findMember[$message[1]]!=$authorID;]
$onlyIf[$message[2]!=;{title:Error}{field:**Contoh**:\`tempmute <member | userID> <time>\`}{color:RED}]
$onlyIf[$getServerVar[muted]!=;{description:Role mute belum dikonfirmasi, ketik \`$getServerVar[prefix]setmute\` untuk menyetelnya}{color:RED}]
$onlyPerms[mutemembers;Missing permission:\`mutemembers\`]
$onlyBotPerms[mutemembers;Missing permission:\`mutemembers\`]
$suppressErrors`
})