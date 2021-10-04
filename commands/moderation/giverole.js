module.exports = ({
name: "giverole",
code: `$color[RANDOM]
$giveRoles[$mentioned[1];$mentionedRoles[1]]
$title[Role diberikan ke $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$description[**$username** Memberimu <@&$mentionedRoles[1]> **role ke** $username[$mentioned[1;yes]]]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ Pengguna itu lebih tinggi dari saya pada posisi role**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1;yes]]];**⛔ Pengguna itu lebih tinggi/sama dengan Anda pada posisi role**]
$onlyIf[$mentionedRoles[1]!=;⛔ **Mention role**]
$onlyIf[$mentioned[1]!=;**⛔ Kamu harus mention pengguna**]
$onlyBotPerms[manageroles;⛔ **Saya tidak memiliki ** \`MANAGAGE_ROLES\` perms]
$onlyPerms[manageroles;⛔ **Anda tidak memiliki** \`MANAGAGE_ROLES\` perms]`
})