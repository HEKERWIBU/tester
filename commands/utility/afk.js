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
$onlyif[$getuservar[r]==;{description:Kamu Sudah AFK!}{color:FF0000}]
$onlyif[$mentioned[1]==;{description:Untuk menghindari masalah, seperti ping untuk orang lain saat Kamu afk, mention tidak diizinkan dalam perintah AFK!!}{color:FF0000}]
$onlyif[$replacetext[$replacetext[$hasperms[$authorid;manageserver];false;$checkcontains[$userroles[$authorid;ids;/];$joinsplittext[;]]];true;true]==true;{description:tidak memiliki roles yang diperlukan untuk menjalankan ini!}{color:FF0000}{delete:4s}]
$textsplit[$getservervar[afk_roles];/]`})
