module.exports = ({
  name: "setmute",
  aliases: ["setmuterole"],
  code: `
  $color[GREEN]
 $title[Done]
$description[Set <@&$findRole[$message[1]]> menjadi mute role]
$setServerVar[muted;$findRole[$message[1]]]
$onlyIf[$roleExists[$findRole[$message[1]]]==true;{description:Role ini tidak ada}{color:RED}]
$onlyIf[$message[1]!=;{title:Error:Panduan}
{field:**Tutorial**:\`setmute <role | roleID>\`}{color:RED}]
$onlyPerms[admin;Missing permission:\`admin\`]
$onlyBotPerms[admin;Missing permission:\`admin\`]
$suppressErrors` 
})