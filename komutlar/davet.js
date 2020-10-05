const Discord = require("discord.js")
const fs = require("fs")

exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Flaxin Music Links`, client.user.avatarURL())
.setDescription('**:star: [Flaxin Support](https://discord.gg/QPUURae)**\n\n**:star: **[Flaxin İnvite Links]( https://discord.com/oauth2/authorize?client_id=702917377230241802&scope=bot&permissions=8)**\n\n')
.setFooter(`${message.author.username} asked by!`) 
.setTimestamp()
.setThumbnail('ttps://cdn.discordapp.com/attachments/759108482577203221/761286324745273394/standard_2.gif')
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };