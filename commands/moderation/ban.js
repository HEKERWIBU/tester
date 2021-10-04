module.exports = ({
 name:"ban",
 category: "Moderation",
 usage: "ban <@user> or <id>",
 code: `$deletecommand
$color[RANDOM] 
$author[🛠️ Banned successfully]
$addField[About:;
Alasan:
> $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Tidak ada alasan.];false;$messageSlice[1]]
Tanggal:
> $day $month $year
]
$addField[User information;
$userTag[$findUser[$message[1]]] - $findUser[$message[1]]]
$addField[Moderator;
$userTag - $authorID]
$thumbnail[$userAvatar[$findUser[$message[1]]]]
$ban[$findUser[$message[1]];$userTag: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Berikan alasannya.];false;$messageSlice[1]];7]
$if[$memberExists[$findUser[$message[1]]]==true]
$onlyIf[$rolePosition[$highestRole[$findUser[$message[1]]]]>$rolePosition[$highestRole];⛔ - To use this you need to have a higher rank than the mentioned user.]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - Anda tidak dapat memblokir diri sendiri (Atau, saya tidak dapat menemukan pengguna itu)**]
$onlyIf[$findUser[$message[1]]!=$clientID;**⛔ - Saya tidak bisa memblokir diri sendiri, itu ilegal**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**⛔ - Saya tidak bisa memblokir pemilik server**]
$elseIf[$memberExists[$findUser[$message[1]]]==false]
$onlyIf[$findUser[$message[1]]!=$authorID;**⛔ - Anda tidak dapat memblokir diri sendiri (Atau, saya tidak dapat menemukan pengguna itu)**]
$endelseIf
$endif
$onlyIf[$isBanned[$findUser[$message[1]]]==false;**⛔ - Pengguna ini telah diblokir dari server**]
$onlyIf[$message!=;**⛔ - Panduan:** \`$getServerVar[prefix]ban <@User> [Alasan\\]\`]
$onlyPerms[ban;**⛔ - Anda tidak memiliki permission \`BAN_MEMBERS\`**]
 $onlyBotPerms[ban;**⛔ - Saya tidak memiliki izin/permissions. Permissions:** \`BAN_MEMBERS\`]`
})