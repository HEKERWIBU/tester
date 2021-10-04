module.exports = ({
    name: "stop",
    aliases: ['st'],
    description: "Stops the current playing song",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[⏹ Stop music!]
    $stopSong
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Anda harus berada di Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Tidak ada antrian sekarang!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})