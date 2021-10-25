module.exports = {
  name: "help",
  description: "Command List",
  code: `
  $title[Command List]
  $description[
  __**MODERATION**__
  **Banned** - \`$getServerVar[prefix]ban <@user> [Alasan]\`
  **Give Role** \`$getServerVar[prefix]giverole <@mention> <@role>\`
  **Kick** - \`$getServerVar[prefix]kick <@mention> [alasan]\`
  **Mute** - \`$getServerVar[prefix]mute\`
  **Lock Channel** - \`$getServerVar[prefix]lock\`
  **Unlock Channel** - \`$getServerVar[prefix]unlock\`
  **Nuke** - \`$getServerVar[prefix]nuke\`
  **Purge** - \`$getServerVar[prefix]clear <number>\`
  **Remove Role** - \`$getServerVar[prefix]removerole <@mention> <@role>\`
  **SetMute** - \`$getServerVar[prefix]setmute <@role>\`
  **TempMute** -\`$getServerVar[prefix]tempmute <@mention> <time>\`
  **TempRole** - \`$getServerVar[prefix]temprole <@mention> <@role>\`
  **Unbanned** -\`$getServerVar[prefix]unban <ID USER>\`
  **UnMute** - \`$getServerVar[prefix]unmute <@mention>\`
  
  __**FUN**__
  **Rip** - \`$getServerVar[prefix]rip <@mention>\`
  **how gaY** - \`$getServerVar[prefix]howgay <@mention>\`
  **achievement** - \`$getServerVar[prefix]achievement <Text>\`
  **captcha** - \`$getServerVar[prefix]captcha <Text>\`
  **communist** - \`$getServerVar[prefix]communist <@mention>\`
  **ejected** - \`$getServerVar[prefix]ejected <@mention>\`
  **gay** - \`$getServerVar[prefix]gay <@mention>\`
  **facts** - \`$getServerVar[prefix]facts <@mention>\`
  **hitler** - \`$getServerVar[prefix]hitler <@mention>\`
  **invert** - \`$getServerVar[prefix]invert <@mention>\`
  **jail** - \`$getServerVar[prefix]jail <@mention>\`
  **presentation** - \`$getServerVar[prefix]presentation <@mention>\`
  **simp** - \`$getServerVar[prefix]simp <@mention>\`
  **shame** - \`$getServerVar[prefix]shame <@mention>\`
  **shit** - \`$getServerVar[prefix]shit <@mention>\`
  **trash** - \`$getServerVar[prefix]trash <@mention>\`
  **triggered** - \`$getServerVar[prefix]triggered <@mention>\`
  **wanted** - \`$getServerVar[prefix]wanted <@mention>\`
  **wasted** - \`$getServerVar[prefix]wasted <@mention>\`

  __**MUSIC**__
  **Disconnect** \`$getServerVar[prefix]dc\`
  **Join** - \`$getServerVar[prefix]join\`
  **Play** - \`$getServerVar[prefix]play <name/url>\`
  **Skip** - \`$getServerVar[prefix]skip\`
  **Stop** - \`$getServerVar[prefix]stop\`
  **Volume** - \`$getServerVar[prefix]volume <1/200>\`
  **Antrian Music** - \`$getServerVar[prefix]qeue\`
  
  __**UTILITY**__
  **Avatar** - \`$getServerVar[prefix]avatar <@user>\`
  **embed** - \`$getServerVar[prefix]embed <Text>\`
  **Say** - \`$getServerVar[prefix]say\`
  **SetPrefix** - \`$getServerVar[prefix]setprefix\`
  **Ping** - \`$getServerVar[prefix]ping\`
  **Bot Info** - \`$getServerVar[prefix]botinfo\`
  **Channel Info** - \`$getServerVar[prefix]channelinfo\`
  **Server Info** - \`$getServerVar[prefix]serverinfo\`
  **Role Info** - \`$getServerVar[prefix]roleinfo\`
  **User Info** - \`$getServerVar[prefix]userinfo\`
  **Rip** - \`$getServerVar[prefix]rip <@mention>\`
  **how gay** - \`$getServerVar[prefix]howgay <@mention>\`
  **afk** - \`$getServerVar[prefix]afk <reason>\`
  **setafk** - \`$getServerVar[prefix]setafk <role>\`
  **Setup Ticket** - \`$getServerVar[prefix]ticket <Role[1]> <Role[2]> <Description>\`

  __**ONLY OWNER**__
  **STATUS BOT** - \`$getServerVar[prefix]set-status <STREAMING/PLAYING/LISTENING/COMPETING>\`
  **TITLE WELCOME** - \`$getServerVar[prefix]set-wtitle <Text>\`
  **WELCOME COLOR** - \`$getServerVar[prefix]set-wcolor <RED/GREEN/BLUE/YELLOW>\`
  **MESSAGE WELCOME** - \`$getServerVar[prefix]set-wmessage <Text>\`
  **WELCOME IMAGE** - \`$getServerVar[prefix]set-wimage <URL IMAGE>\`
 
  

  
  ]
$footer[$getServerVar[prefix]<cmd>]
$color[RANDOM]`
}
  
