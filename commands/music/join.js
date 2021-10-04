module.exports = {
 name: "join",
 aliases: ['connect'],
 code: `
Successfully joined <#$voiceid[$authorid]>
$joinvc[$voiceid[$authorid]]
$onlyif[$voiceid[$clientid]==;:x: Seseorang sedang mendengarkan lagu di Voice Channel lain\nGabung dengan Voie Channelnya atau gunakan command ini nanti.]
$onlyIf[$voiceid[$authorid]!=;:x: Silakan bergabung dengan Voice Channel dan gunakan perintah.]`
}