module.exports = ({
    name: "unlock",
    usage: "unlock <channel>",
    description: "Unlocks the specified channel or will unlock the current channel.",
    category: "Moderation",
    code: `$modifyChannelPerms[$get[chan];+sendmessages;$guildID]
Successfully unlocked <#$get[chan]>!!
$onlyIf[$get[chan]!=undefined;**⛔ Harap berikan channel yang benar!!**]
$let[chan;$replaceText[$replaceText[$checkCondition[$message==];true;$channelID];false;$findServerChannel[$message;no]]]
$onlyPerms[managechannels;**⛔ Kamu tidak memiliki permissions MANAGE_CHANNEL!!**]
$onlyBotPerms[managechannels;sendmessages;manageroles;viewchannel;**Saya tidak memiliki permissions MANAGE_CHANNEL!!**]`
});