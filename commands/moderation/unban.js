module.exports = ({
 name: "unban",
 category: "Moderation",
 description: "Use this command to unban a user",
 usage: "unban <id>",
 code: `$unban[$message[1];Oleh $userTag[$authorID] Alasan: $sliceMessage[1]]
$username[$message[1]] **Berhasil di unbanned ✅**
$onlyBotPerms[ban;**⛔ Saya tidak memiliki ban perms]
$argsCheck[>1;**⛔ Harap Berikan User ID Untuk Unban**]
$onlyPerms[ban;**⛔ Anda tidak memiliki ban permission**]
$suppressErrors[**⛔ Saya tidak menemukan pengguna itu**]`
})