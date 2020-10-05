const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: ` :x:   | You must be on an audio channel to stop a music playing!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: ServantHata, description: ` :x:   | No music is currently playing!` }})
client.player.stop(message.guild.id);
message.channel.send({embed: {color: ServantDogru, description: `<a:ayar:757233318860292206>  | The music was stopped. Flaxin Music is leaving the audio channel !!` }})
};

module.exports.config = {
    name: "durdur",
    aliases: ["dur","stop"]
};
