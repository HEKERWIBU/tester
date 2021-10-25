{
    type: "interactionCommand",
    name: "open",
    prototype: "button",
    code: `
    $interactionReply[Ticket created <#$get[ch]>;;;64]
    $let[$apimessage[$get[ch];;{title:Open Ticket}{color:BLUE}{description:Support will be with you shortly.\nTo close this ticket react with lock}{timestamp:};{actionRow:CLOSE,2,4,close};;yes]]
    $setchannelvar[aticket;$authorID;$get[ch]]
    $modifyChannelPerms[$get[ch];-attachfiles;-viewchannel;-sendmessages;$getservervar[r2ticket]]
    $modifyChannelPerms[$get[ch];+attachfiles;+viewchannel;+managemessages;+sendmessages;$getservervar[rticket]]
    $let[ch;$newTicket[$username;<@$authorID> Welcome;$getservervar[cticket];yes;]]
    $cooldown[10s;]
    $suppressErrors[]
    `
  },{
    type: "interactionCommand",
    name: "close",
    prototype: "button",
    code: `
    $setchannelvar[m2ticket;$get[e];$channelID]
    $setChannelVar[ticket;$get[e];$channelID]
    $let[e;$apimessage[$channelID;;{title:Close Ticket}{color:RED}{description:$username, Are you sure you would like to close this ticket?};{actionRow:CLOSE,2,4,close1:CANCEL,2,2,close2};;yes]]
    $wait[5s]
    $interactionReply[Close In 5 Second;;;64]
    $suppressErrors[]
    `
  },{
    type: "interactionCommand",
    name: "close1",
    prototype: "button",
    code: `
    $interactionReply[;;;64]
    $deleteMessage[$channelID;$getchannelvar[m2ticket;$channelID]]
    $editChannel[$channelID;$getservervar[cticket];close-$username;$default;$default;$default;$default;no]
    $modifyChannelPerms[$channelID;-attachfiles;-viewchannel;-sendmessages;$getchannelvar[aticket;$channelID]]
    $setchannelvar[ticket;enable;$channelID]
    $let[e;$apimessage[$channelID;;{color:RED}{description:Ticket Closed By $username};{actionRow:CLOSE,2,4,close3};;yes]]
     `
  },{
    type: "interactionCommand",
    name: "close3",
    prototype: "button",
    code: `
    $closeTicket[]
    $setchannelvar[ticket;disable;$channelID]
    $suppressErrors[]`
    
  },{
    type: "interactionCommand",
    name: "close2",
    prototype: "button",
    code: `
    $deleteMessage[$channelID;$getChannelVar[ticket;$channelID]]
    $interactionReply[Cancel Close;;;64]
    $suppressErrors[]`
  },{
    type: "interactionCommand",
    name: "closeall",
    prototype: "button",
    code: `
    $forEachChannel[closeall2]
    $onlyPerms[managechannels;manageroles;]
    $interactionReply[$replaceText[$replaceText[$tolowercase[$hasPerms[$authorID;manageroles;managechannels]];false;You need the **MANAGE CHANNELS** and **MANAGE ROLES** permissions];true;Succerfuly Close All Ticket];;;64]
    $suppressErrors[]
    `
  },{
    type: "awaitedCommand",
    name: "closeall2",
    code: `
    $closeTicket
    $onlyif[$getchannelvar[ticket;$channelID]==enable;]
    $onlyIf[$isTicket[$channelID]==true;]
   $suppressErrors[] `
  }];
```
