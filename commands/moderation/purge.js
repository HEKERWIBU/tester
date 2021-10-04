module.exports = ({
name:"purge",
aliases: 'clear',
category: "Moderation",
usage: "purge <number>",
code:`$author[Purged messages!]
$title[$usertag]
$description[<@$authorid> Berhasil menghapus $replacetext[$replacetext[$checkcondition[$splittext[1]==$message];true;all($message/$message)];false;$splittext[1]/$message] pesan!]
$footer[° ͜ʖ ͡ -!;$authoravatar]
$thumbnail[$useravatar[$clientid]]
$color[RANDOM]
$textsplit[$clear[$message;everyone;$channelid;yes]; ]
$onlybotperms[managemessages;Saya tidak memiliki permissions manage messages!]
$onlyperms[managemessages;Anda tidak memiliki permissions manage message!]
$onlyif[$isnumber[$message]==true;Masukkan jumlah pesan yang benar untuk dibersihkan!]
$deleteIn[3s]
$deletecommand`
})