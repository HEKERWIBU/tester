module.exports = ({
    name: "volume",
    aliases: ['vol', 'v'],
    description: "Change the music volume",
    category: "music",
    usage: "volume <number>",
    code: `$color[RANDOM]
    $description[🔊 Mengubah Volume menjadi "$message".]
    $volume[$message]
    $onlyIf[$voiceID==$voiceID[$clientID];{color:RANDOM}{description:Kamu harus berada di Voice Channel yang sama dengan Bot!} {field:Bot Voice Channel:<#$voiceID[$clientID]>} {field:User Voice Channel:<#$voiceID>}] 
    $onlyIf[$queueLength>0;{description:Antrian kosong!}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Berikan nomor 1-200 untuk menyetel volume!}{color:RANDOM}]
    $onlyIf[$message[1]<=200;{description: max Volume "200"!}{color:RANDOM}] 
    $onlyIf[$message[1]>=1;{description: Volume tidak bisa dibawah "1"!}{color:RANDOM}] 
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{color:RANDOM}{description:Terjadi kesalahan! Harap laporkan ini ke pihak developer!}]
    $onlyBotPerms[embedlinks; {description:❌ Saya tidak memiliki permissions - **Embed Links**}{color:RANDOM}]`
    }) 