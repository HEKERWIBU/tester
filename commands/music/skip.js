module.exports = ({
    name: "skip",
    aliases: ['s'],
    description: "Skips the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏩ Skip Music!]
    $skipSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:!Anda harus berada di Voice Channel}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Tidak ada antrian sekarang!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})