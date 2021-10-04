module.exports = ({
 name: "kick",
 code: `
$kick[$mentioned[1]]
$description[$customEmoji[greencheck]**$username[$mentioned[1]]** has been Kicked

**📖Reason-** $nomentionMessage]
$color[RANDOM]
$sendDM[$mentioned[1];Anda dikeluarkan dari server: $serverName[$guildID]] 
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];Pengguna itu lebih tinggi atau sama dengan saya pada posisi role]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];Pengguna itu lebih tinggi dari Anda pada posisi role.]
$onlyIf[$mentioned[1]!=$authorID;Kamu tidak bisa menendang dirimu sendiri :3 ]
$onlyIf[$mentioned[1]!=;Anda harus mention seseorang.]
$onlyPerms[kick;{title:Missing Permissions}{color:RANDOM}{description:Anda tidak memiliki izin \`kick\` untuk menggunakan command ini}]
$suppressErrors[x Terjadi kesalahan | Coba lagi nanti]`
 })