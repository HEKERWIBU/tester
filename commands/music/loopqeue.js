module.exports = ({
    name: "loopqueue",
    aliases: ['lpq', 'lq'],
    description: "Loops the current queue",
    usage: "",
    category: "music",
    code: `$color[RANDOM]
    $description[🔁 $replaceText[$replaceText[$loopQueue;true;Sekarang mengulang antrian!];false;Tidak mengulang antrian.]]
    $onlyIf[$voiceID!=;{color:RANDOM}{description:**SISTEM** | Kamu harus beda di Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Antrian Kosong!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})