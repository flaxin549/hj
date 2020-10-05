const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: `<a:ayar:757233318860292206>  | You must be on an audio channel to resume a paused music!` }})
const sarki = await client.player.resume(message.guild.id);
if(!sarki) return message.channel.send({embed: {color: ServantHata, description: `<<a:ayar:757233318860292206>   | No music is currently playing!` }})
message.channel.send({embed: {color: ServantDogru, description: `<a:ayar:757233318860292206>  | \`${sarki.name}\` named music is continued.` }})
};

module.exports.config = {
    name: "devam",
    aliases: ["devamet", "devam-et","resume"]
};