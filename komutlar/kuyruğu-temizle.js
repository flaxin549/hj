const Discord = require("discord.js")
const fs = require("fs")
const flaxin = "#36393e";
const flaxinDogru = "#22BF41";
const flaxinHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: flaxinHata, description: `:x:  | You must be in a sound channel to be able to clean the tail!` }});
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: flaxinHata, description: `:x:  | No music is currently playing!` }})
client.player.clearQueue(message.guild.id);
message.channel.send({embed: {color: flaxinDogru, description: `<a:ayar:757233318860292206> | Tail cleared successfully!` }})
};

module.exports.config = {
    name: "kuyruğu-temizle",
    aliases: ["kuyruk-temizle","queue-clear"]
};
  