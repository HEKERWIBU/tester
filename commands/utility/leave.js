module.exports = [{
  name: "hdjndjddjx",
  code: `kimak`
},{
  name: "set-lchannel",
  aliases: ["lchannel"],
  code: `
  successfully, New Leave Channel <#$mentionedChannels[1]>
  $setServerVar[lchannel;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  type: "command",
  name: "set-lcolor",
  aliases: ["lcolor"],
  code: `
  successfully, New Leave Color **$toUppercase[$message[1]]**
  $setServerVar[lcolor;$toUppercase[$message[1]]]
  $onlyIf[$checkContains[$toUppercase[$message[1]];RED;YELLOW;GREEN;BLUE]==true;{description: Only Color RED,YELLOW,GREEN,AND BLUE}{color:RED}]
  $onlyIf[$message[1]!=;{description:> $getservervar[prefix]set-lcolor <RED/YELLOW/GREEN/BLUE>}{color:RED}]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  type: "command",
  name: "set-limage",
  aliases: ["limage"],
  code: `
  $description[successfully, New Leave Image]
  $image[$message[1]]
  $setServervar[limage;$message[1]]
  $onlyIf[$checkContains[$message[1];attachments]==true;]
  $onlyIf[$message[1]!=;{description:Send Image URL}{color:RED}]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]`
},{
  type: "command",
  name: "set-lmessage",
  aliases: ["lmessage"],
  code: `
  successfully, New Message Leave
  > $get[welcome]
  $setServerVar[limage;$get[welcome]]
  $let[welcome;$replaceText[$replaceText[$replaceText[$replaceText[$message;{username};$username];{user.tag};<@$authorID>];{server};$serverName];{member};$allMembersCount]]
  $onlyIf[$message!=;{description:Send Message\n> User Name: {username}\n> User Tag: {user.tag}\n> Server Name: {server}\n> Member Count: {member}}{color:RED}]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  name: "set-ltitle",
  aliases: ["ltitle"],
  code: `
  successfully, New Leave Title **$message[1]**
  $setServerVar[ltitle;$message[1]]
  $onlyIf[$message[1]!=;]
  $onlyForPerms[admin;{description:Only Adminstator}{color:RED}]`
  }]
