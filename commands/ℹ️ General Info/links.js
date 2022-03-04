const Discord = require("discord.js");
const cnf = require('../../config.js');

module.exports = {
  name: "links",
  aliases: ["getlinks", "support", "link"],
  execute: async(client, message, args, data, db) => {

const embed = new Discord.MessageEmbed()
  .setTitle("Invite the bot")
  .setColor('RANDOM')
  .addField("Invite to Discord server", "[Invite the bot here (Recomended!)](https://discord.gg/xxVp58DwgQ)\n[Invite the bot here (Admin Perm)](https://discord.com/api/oauth2/authorize?client_id=917421586947117086&permissions=8&scope=bot)")
  .addField("Support", `[Join to official server](https://discord.gg/xxVp58DwgQ)`)
  .setFooter("Bot created by " + `Npg`)
  .setImage(`https://images-ext-1.discordapp.net/external/eWe3DimWXdYRwGPHx_ai-sOKVNdS6YPc7s2ofj2Vbco/%3Fsize%3D1024/https/cdn.discordapp.com/icons/866236742739034120/a_5acf299e4ee75656b404686db3d1d2ff.gif`)
  .setTimestamp()
message.channel.send({embed})


}
  }



module.exports.help = {
    name: "links",
    description: "Sends a Important Linksvof bot",
    usage: "links",
    type: "General"  
}