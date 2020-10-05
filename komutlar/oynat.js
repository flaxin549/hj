const Discord = require("discord.js")
const fs = require("fs")
const flaxin = "#36393e";
const flaxinDogru = "#22BF41";
const flaxinHata = "#f30707";

module.exports.run = async (client, message, args) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: flaxinHata, description: `:x:  | You must be on an audio channel to play music!` }})
if (!args[0]) return message.channel.send({embed: {color: flaxinHata, description: `:x:| In order to play music, you have to write the name of the music.` }})  
const SuAndaSarkiOynatilmaktadir = client.player.isPlaying(message.guild.id);
if(SuAndaSarkiOynatilmaktadir){
const sarki = await client.player.addToQueue(message.guild.id, args.join(" "));
message.channel.send({embed: {color: flaxinDogru, description: `<a:ayar:757233318860292206>| \`${sarki.name}\` The music named has been added to the queue!` }})
    } else {
const sarki = await client.player.play(message.member.voice.channel, args.join(" "));
 message.channel.send({embed: {color: flaxinDogru, description: `:microphone: |Currently Playing Music:\n\`${sarki.name}\`` }})
sarki.queue.on('end', () => {
message.channel.send({embed: {color: flaxinHata, description: `<a:ayar:757233318860292206>| All the music in the queue has been played. Flaxin Music leaves the sound channel!` }})
    })
    }    
};

module.exports.config = {
    name: "oynat",
    aliases: ["çal","p","play"]
};