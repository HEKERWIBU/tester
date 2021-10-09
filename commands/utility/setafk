module.exports = ({
name: "setafk",
code:`$if[$message==reset]
$setservervar[afk_roles;]
Kamu Telah Mereset **AFK ROLES**!
$else
$setservervar[afk_roles;$djseval[let res = mentions.roles.map(x=>x.id)
d.array = res.join("/");yes]]
Kamu Mengatur **$djseval[let res = mentions.roles.map(x=>x.name)
d.array = res.join("**, **");yes]** sebagai yang dapat menjalankan commands AFK!
$onlyif[$mentionedroles[1]!=;{description:Mention 1 roles!}{color:FF0000}]
$endif
$onlyperms[manageserver;{description:Kamu Tidak Memiliki **MANAGE SERVER** permissions!}{color:FF0000}]`})
