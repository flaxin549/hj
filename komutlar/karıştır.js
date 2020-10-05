const Discord = require("discord.js")
const fs = require("fs")
const flaxin = "#36393e";
const flaxinDogru = "#22BF41";
const flaxinHata = "#f30707";
module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: flaxinHata, description: `:x:  | You must be in an audio channel to be able to mix the tail!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: flaxinHata, description: `:x:  | No music is currently playing!` }})
client.player.shuffle(message.guild.id);
return message.channel.send({embed: {color: flaxinDogru, description: `<a:ayar:757233318860292206>  | The tail is shuffled!` }}) 
};

module.exports.config = {
    name: "karıştır",
    aliases: ["mix"]
};
