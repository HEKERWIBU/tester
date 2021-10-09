module.exports = ({
name:"$alwaysExecute",
code:`$if[$getuservar[r]!=]
$if[$checkcondition[$ownerid==$authorid]$checkcondition[$roleposition[$highestrole[$clientid]]>=$roleposition[$highestrole[$authorid]]]$checkcondition[$hasperms[$clientid;managenicknames]==true]==falsefalsetrue]
$changenickname[$authorid;$replacetext[$nickname;⟨AFK⟩;]]
$else
$endif
$setuservar[afk_pings;0]
$setuservar[afk_mentions;]
$setuservar[r;]
$setuservar[time;]
$senddm[$authorid;{author:Saat Kamu pergi, Kamu mendapat $getuservar[afk_pings] mentions:$authoravatar}{description:$getuservar[afk_mentions]}{footer:You went afk $parseDate[$sub[$dateStamp;$getUserVar[time]];time] ago}{color:RANDOM}]
$sendmessage[Saya **menonaktifkan** AFK Kamu, **$usertag**! kamu dapat memeriksa DM Kamu untuk daftar ping yang Kamu terima!!{delete:10s};no]
$else
$endif
$if[$getuservar[r;$mentioned[1]]!=]
$setuservar[afk_pings;$sum[$getuservar[afk_pings;$mentioned[1]];1];$mentioned[1]]
$setuservar[afk_mentions;$getuservar[afk_mentions;$mentioned[1]]\n\n**[$usertag](https://discord.com/channels/$guildid/$channelid/$messageid)**;$mentioned[1]]
$sendmessage[**$usertag[$mentioned[1]]** is AFK!\n\n**Reason:** $getuservar[r;$mentioned[1]]  —   **$parseDate[$sub[$dateStamp;$getUserVar[time;$mentioned[1]]];time]** lalu {delete:10s};no]
$else
$endif
$onlyif[$checkcontains[$message[1];$getservervar[prefix]afk;$getservervar[prefix]busy]==false;]`})
