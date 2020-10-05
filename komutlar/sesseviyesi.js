const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: `:x:You must be on an audio channel to adjust the volume!` }})  
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: ServantHata, description: `:x:| Şu anda hiçbir müzik çalmamaktadır!` }})
let sesseviyesi = parseInt(args.join(" "));
if (!sesseviyesi) return message.channel.send({embed: {color: ServantHata, description: `:x: Just enter a natural number to adjust the volume.` }})
if (args > 100) return message.channel.send({embed: {color: ServantHata, description: `Volume only\`0\` ile \`100\` You can set between.`}})
if (args < 0) return message.channel.send({embed: {color: ServantHata, description: `Volume only\`0\` ile \`100\` You can set between. ` }})
client.player.setVolume(message.guild.id, sesseviyesi * 2);
message.channel.send({embed: {color: ServantDogru, description: `<a:ayar:757233318860292206>| Ses seviyesi, başarılı bir şekilde \`${args.join(" ")}\` olarak ayarlandı! ` }})
}

module.exports.config = {
  name: "ses",
  aliases: ['ses-seviyesi',"sound"]
};
