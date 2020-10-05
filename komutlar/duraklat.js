const Discord = require("discord.js")
const fs = require("fs")
const Servant = "#36393e";
const ServantDogru = "#22BF41";
const ServantHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: ServantHata, description: ` :x:   | You must be on an audio channel to be able to pause a music playing!`}})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: ServantHata, description: ` :x:   | No music is currently playing!` }})
const sarki = await client.player.pause(message.guild.id);
message.channel.send({embed: {color: ServantDogru, description: `<a:ayar:757233318860292206>  | \`${sarki.name}\` The music is paused!` }})
};

module.exports.config = {
  name: "duraklat",
  aliases: ["pause"]
}