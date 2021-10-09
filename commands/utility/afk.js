module.exports =({
name: "afk",
code: `
 Saya Mengatur Anda Menjadi **AFK**!
> **Alasan Ditentukan Oleh Anda:** 
$get[reason]{delete:20s};no]
$setuservar[r;$get[reason]]
$if[$checkcondition[$ownerid==$authorid]$checkcondition[$roleposition[$highestrole[$clientid]]>=$roleposition[$highestrole[$authorid]]]$checkcondition[$hasperms[$clientid;managenicknames]==true]==falsefalsetrue]
$changenickname[$authorid;$replacetext[$replacetext[$checkcondition[$charcount[$nickname]<=26];true;⟨AFK⟩ $nickname];false;$nickname]]
$else
$endif
$setuservar[time;$datestamp]
$let[reason;$replacetext[$replacetext[$checkcondition[$message==];true;None];false;$message]]
$onlyif[$getuservar[r]==;{description:You are already AFK!}{color:FF0000}]
$onlyif[$mentioned[1]==;{description:To avoid any troubles, like pings for others when you are afk, mentions are not permitted in an AFK command!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$hasperms[$authorid;manageserver];false;$checkcontains[$userroles[$authorid;ids;/];$joinsplittext[;]]];true;true]==true;{description:You do not have the necessary roles to execute this!}{color:FF0000}{delete:4s}]
$textsplit[$getservervar[afk_roles];/]`})
