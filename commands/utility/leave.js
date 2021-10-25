module.exports = [{
  name: "hdjndjddjx",
  code: `kimak`
},{
  type: "command",
  name: "set-lchannel",
  aliases: ["lchannel"],
  code: `
  successfully, New Leave Channel <#$mentionedChannels[1]>
  $setServerVar[lchannel;$mentionedChannels[1]]
  $onlyIf[$mentionedChannels[1]!=;Mention Channel!]
  $onlyPerms[admin;{description:Only Adminstator}{color:RED}]
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
  $onlyPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  type: "command",
  name: "set-limage",
  aliases: ["limage"],
  code: `
  $description[successfully, New Leave Image]
  $image[$message[1]]
  $setServervar[limage;$message[1]]
  $onlyIf[$checkContains[$message[1];attachments]==true;Only URL!]
  $onlyIf[$message[1]!=;{description:Send Image URL}{color:RED}]
  $onlyPerms[admin;{description:Only Adminstator}{color:RED}]`
},{
  type: "command",
  name: "set-lmessage",
  aliases: ["lmessage"],
  code: `
  successfully, New Message Leave
> $get[welcome]
  $setServerVar[lmessage;$get[welcome]]
  $let[welcome;$replaceText[$replaceText[$replaceText[$replaceText[$message;<username>;$username];<user.tag>;<@$authorID>];<server>;$serverName];<member>;$MembersCount]]
  $onlyIf[$message!=;{description:Send Message\n> User Name: <username>\n> User Tag: <user.tag>\n> Server Name: <server>\n> Member Count: <member>}{color:RED}]
  $onlyPerms[admin;{description:Only Adminstator}{color:RED}]
  `
},{
  type: "command",
  name: "set-ltitle",
  aliases: ["ltitle"],
  code: `
  successfully, New Leave Title **$message[1]**
  $setServerVar[ltitle;$message[1]]
  $onlyIf[$message[1]!=;Send message]
  $onlyPerms[admin;{description:Only Adminstator}{color:RED}]`
  },{
  type: "command",
  name: "test-leave",
  aliases: ["leave"],
  code: `
  $title[$getservervar[ltitle]]
  $color[$getservervar[lcolor]]
  $image[$getservervar[limage]]
  $description[$getservervar[lmessage]]
  $onlyPerms[admin;]`
    
  }]
