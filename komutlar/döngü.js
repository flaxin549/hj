const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: ` :x:  | You must be on an audio channel to be able to set the loop!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: ServantHata, description: ` :x:  | No music is currently playing!` }})
const dongu = client.player.getQueue(message.guild.id).repeatMode;
if(dongu){
client.player.setRepeatMode(message.guild.id, false);
return message.channel.send({embed: {color: ServantDogru, description: `<a:ayar:757233318860292206>  | Loop has been deactivated!` }})
    } else {
client.player.setRepeatMode(message.guild.id, true);
return message.channel.send({embed: {color: ServantDogru, description: `<a:ayar:757233318860292206>  | Loop activated!` }})
    }
};

module.exports.config = {
    name: "döngü",
    aliases: ["loop"]
};
