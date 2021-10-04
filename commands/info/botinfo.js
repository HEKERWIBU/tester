module.exports = ({
    name: "botinfo", 
    aliases: ['botstats', 'binfo'],
    description: "Check the bot's information/stats",
    usage: "",
    category: "information",
    code: `$title[Botinfo ($username[$clientID])]
    $color[RANDOM]
    $thumbnail[$userAvatar[$clientID]]
    $addField[Ping; $pingms]
    $addField[Uptime;$uptime]
    $addField[Commands; $commandsCount]
    $addField[Users;$allMembersCount]
    $addField[Channels;$allChannelsCount]
    $addField[Servers;$serverCount]
    $addField[Created;$creationDate[$clientID]]
    $addField[Developer;$userTag[$botOwnerID]]
    $addTimestamp
    $cooldown[5s;{description: Jangan Spam!}{color:RANDOM}]`
    })