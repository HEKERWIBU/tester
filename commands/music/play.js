
module.exports = {
    name: "play",
    code: `
    $author[Added Song]
    $description[Added **$playSong[$noMentionMessage;1d;yes;{title:Error} {description:Something went wrong!} {color:RED}] **in queue!]
    $color[GREEN]
    $footer[Requested by $userTag[$authorID]]
    $onlyIf[$voiceID!=;{title:Error!} {description:Kamu harus berada di voice channel!} {color:FF0000}]`
}