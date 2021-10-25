module.exports = [{
  name: "hdjdjx",
  code: `kimak`
},{
  name: "set-wchannel",
  aliases: ["wchannel"],
  code: `
  successfully, New Welcome Channel <#$mentionedChannels[1]>
  $setServerVar[wchannel;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  type: "command",
  name: "set-wcolor",
  aliases: ["wcolor"],
  code: `
  successfully, New Welcome Color **$toUppercase[$message[1]]**
  $setServerVar[wcolor;$toUppercase[$message[1]]]
  $onlyIf[$checkContains[$toUppercase[$message[1]];RED;YELLOW;GREEN;BLUE]==true;{description: Only Color RED,YELLOW,GREEN,AND BLUE}{color:RED}]
  $onlyIf[$message[1]!=;{description:> $getservervar[prefix]set-wcolor <RED/YELLOW/GREEN/BLUE>}{color:RED}]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  type: "command",
  name: "set-wimage",
  aliases: ["wimage"],
  code: `
  $description[successfully, New Welcome Image]
  $image[$message[1]]
  $setServervar[wimage;$message[1]]
  $onlyIf[$checkContains[$message[1];attachments]==true;]
  $onlyIf[$message[1]!=;{description:Send Image URL}{color:RED}]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]`
},{
  type: "command",
  name: "set-wmessage",
  aliases: ["wmessage"],
  code: `
  successfully, New Message Welcome
  > $get[welcome]
  $setServerVar[wimage;$get[welcome]]
  $let[welcome;$replaceText[$replaceText[$replaceText[$replaceText[$message;{username};$username];{user.tag};<@$authorID>];{server};$serverName];{member};$allMembersCount]]
  $onlyIf[$message!=;{description:Send Message\n> User Name: {username}\n> User Tag: {user.tag}\n> Server Name: {server}\n> Member Count: {member}}{color:RED}]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  name: "set-wtitle",
  aliases: ["wtitle"],
  code: `
  successfully, New Welcome Title **$message[1]**
  $setServerVar[wtitle;$message[1]]
  $onlyIf[$message[1]!=;]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]`
  }]
