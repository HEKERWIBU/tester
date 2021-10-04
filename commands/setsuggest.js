module.exports = {
  name: "setsuggest",
  code: `
  $setServerVar[suggest;$findChannel[$message[2]]]
  $author[$username#$discriminator;$authorAvatar]
$description[Menetapkan <#$findChannel[$message[2]]> menjadi suggest]
$onlyIf[$channelExists[$findChannel[$message[1]]]==true;]
$argsCheck[>1;< Tag Channnel!]
$globalCooldown[1m; %time%]
$onlyIf[$hasPerms[$authorID;admin]==true;memerlukan perms \`Administrador\` ]
`
};