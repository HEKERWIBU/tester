module.exports = ({
 name: "nuke",
 code: `
 $djsEval[
 d.message.channel.clone()
 .then(c => {
 d.message.channel.delete()
 c.setPosition(d.message.channel.position)
 c.send(d.message.author.tag + ' Berhasil di nuklir💪! https://tenor.com/bko4E.gif')

 })
 .catch(() => d.message.channel.send('Saya tidak memiliki cukup perms'))
]
$onlyPerms[managechannels;{title:Missing permissions!} {description:Anda tidak memiliki perms \`MANAGE_CHANNELS\` untuk menjalankan command ini} {color:RANDOM}]
$deleteIn[3s]`
});