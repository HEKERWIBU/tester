module.exports = ({
name: "removerole",
code: `$color[RANDOM]
$takeRoles[$mentioned[1];$mentionedRoles[1]]
$title[Menghapus role dari $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** telah mengambil <@&$mentionedRoles[1]> **role dari** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ Pengguna itu lebih tinggi dari saya pada posisi role**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ Pengguna itu lebih tinggi/sama dengan Anda pada posisi role**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Mention role**]
$onlyIf[$mentioned[1]!=;**⛔ Anda harus mention pengguna**]
$onlyBotPerms[manageroles;⛔ **Saya tidak memiliki ** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **Anda tidak memiliki** \`MANAGAGE_ROLES\` perms]`
})