module.exports = ({
    name: "lock",
    usage: "lock <channel>",
    description: "Locks the specified channel or will lock the current channel.",
    category: "Moderation",
    code: `$modifyChannelPerms[$get[chan];-sendmessages;$guildID]
Successfully locked <#$get[chan]>!🔒
$onlyIf[$get[chan]!=undefined;**⛔ Harap berikan channel yang benar!!**]
$let[chan;$replaceText[$replaceText[$checkCondition[$message==];true;$channelID];false;$findServerChannel[$message;no]]]
$onlyPerms[managechannels;**⛔ Kamu tidak memiliki permission MANAGE_CHANNEL!!**]
$onlyBotPerms[managechannels;sendmessages;manageroles;viewchannel;**Saya tidak memiliki permission MANAGE_CHANNEL!!**]`
});