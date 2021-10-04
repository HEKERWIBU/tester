module.exports = ({
  name: "setbio",
  aliases: "setb",
  code: `
  $color[GREEN]
  $thumbnail[$userAvatar]
  $description[
  **Berhasil Mengubah Bio**:
  
  $message]
  $setGlobalUserVar[bio;$message]
  
  
  `
})