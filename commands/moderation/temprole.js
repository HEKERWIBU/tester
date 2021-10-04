module.exports = ({
  name: "temprole",
  code: `
$channelSendMessage[$channelID;<@$mentioned[1]>, Saya menghapus role $roleName[$findRole[$message[2]]] role, Waktu habis]
$takeRoles[$mentioned[1];$findRole[$message[2]]]
$wait[$replaceText[$replaceText[$checkCondition[$message[3]==];true;24d];false;$message[3]]]
$channelSendMessage[$channelID;{description::white_check_mark: | $username[$mentioned[1]]#$discriminator[$mentioned[1]] telah diberi role $roleName[$findRole[$message[2]]] role. Untuk \`$replaceText[$replaceText[$checkCondition[$message[3]==];true;undefined time];false;$message[3]]\`}{color:RANDOM}]
$giveRoles[$mentioned[1];$findRole[$message[2]]]
$suppressErrors[{title:An error occured}{description:Sepertinya saya tidak dapat menemukan rolenya}{color:RED}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Pengguna itu lebih tinggi dari saya pada posisi role]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Pengguna itu lebih tinggi dari anda pada posisi role]
$argsCheck[>3; panduan. contoh: temprole @user @role]
$onlyPerms[manageroles;{title:Missing Permissions}{color:RANDOM}{description:Anda tidak memiliki \`MANAGE_ROLES\` permissions untuk menggunakan command ini}]`
})