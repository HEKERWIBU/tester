module.exports = {
 name: "leave",
 aliases: ['disconnect', 'dc'],
 code: `
Successfully disconnected dari <#$voiceid[$clientid]>
$leavevc
$onlyif[$voiceid[$clientid]!=;:x: Saya Tidak Terhubung Di Voice Channel Manapun.]
$onlyIf[$voiceid[$authorid]!=;:x: Silakan bergabung dengan Voice Channel Dan Gunakan Command.]`
}