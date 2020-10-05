const Discord = require("discord.js")
const fs = require("fs")
const flaxin = "#36393e";
const flaxinDogru = "#22BF41";
const flaxinHata = "#f30707";

module.exports.run = async (client, message) => {
const calan = await client.player.nowPlaying(message.guild.id); 
const calanembed = new Discord.MessageEmbed()
.setImage(`https://i.ytimg.com/vi/${calan.id}/default.jpg?width=1920&height=1080`)
.setColor("#22BF41")
.setDescription(`:microphone:| Currently Playing Music:\n\`${calan.name}\``)
if(!message.member.voice.channel) return message.channel.send({embed: {color: flaxinHata, description: `:x:| You must be on an audio channel to see a music currently playing!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: flaxinHata, description: `:x:| No music is currently playing!` }})
message.channel.send(calanembed)
};

module.exports.config = {
    name: "çalan",
    aliases: ["playing"]
};
