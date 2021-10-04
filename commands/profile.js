module.exports = ({
  name: "profil",
  aliases: "p",
  code: `
  $color[GREEN]
  $thumbnail[$userAvatar[$findmember[$message]]]
  $description[
  __**PROFIL**__
  
  **Nama** : $usertag[$findmember[$message]]
  **Umur** : $random[1;100]
  **Gender** : $randomText[Cewek;Cowok]
  
__**BIO**__
  $getGlobalUserVar[bio;$findmember[$message]]
  
  
  
  
  
  ]
  
  
  
  `
})