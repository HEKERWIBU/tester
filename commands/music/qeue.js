module.exports = ({
    name: "queue",
    aliases: ['q'],
    category: "music",
    usage: "",
    description: "Displays the current queue",
    code:
    `
    $color[RANDOM]
    $thumbnail[$songinfo[thumbnail]]
    $title[Antrian Music]
    $description[$queue[$replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1];10;{number}. {title} | {duration}]]
    $addField[Current Song;[$songinfo[title]\\]($songinfo[url])]
   
    $footer[Page $replaceText[$replaceText[$checkCondition[$isnumber[$message[1]]==true];true;$replaceText[$replaceText[$checkCondition[$queue[$message[1];10;{title}]!=];false;1];true;$message[1]]];false;1] / $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;$truncate[$divide[$queueLength;10]]];false;$replaceText[$replaceText[$checkCondition[$splitText[2]==0];true;$truncate[$divide[$queueLength;10]]];false;$sum[$truncate[$divide[$queueLength;10]];1]]]]
    $addTimestamp
   
    $textSplit[$divide[$queueLength;10];.]
    $onlyIf[$voiceID==$voiceID[$clientID];{{color:RANDOM}{description:Kamu harus berada di Voice Channel yang sama dengan Bot!}] 
    $onlyIf[$voiceID!=;{color:RANDOM}{description:Kamu harus berada di Voice Channel!}]
    $onlyIf[$queueLength>0;{color:RANDOM}{description:Antrian kosong!}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $onlyBotPerms[embedlinks; {description:❌ Say tidak memiliki permissions - **Embed Links**}{color:RANDOM}]
    $suppressErrors[{color:RANDOM}{description:Terjadi kesalahan! Harap laporkan ini ke pihak developer!}]
    `
   })