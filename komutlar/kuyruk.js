const Discord = require("discord.js")
const fs = require("fs")
const flaxin = "#36393e";
const flaxinDogru = "#22BF41";
const flaxinHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: flaxinHata, description: `:x:  | You must be in an audio channel to view the queue!` }})
const kuyruk = client.player.getQueue(message.guild.id);
if(!kuyruk) return message.channel.send({embed: {color: flaxinHata, description: `:x:  | No music is currently playing!` }})
let q = kuyruk.songs.map((song, i) => {
return `${i === 0 ? ':microphone:  | Şu Anda Çalınan Müzik' : `\nKuyruk No: ${i}`} \n**Müzik:** \`${song.name}\` \n**Kanal:** \`${song.author}\``
    }).join('\n');  
message.channel.send({embed: {color: flaxinDogru, title: `Flaxin Music Music Queue`, description: `${q}`}})
}
  
module.exports.config = {
    name: "kuyruk",
    aliases: ["queue"]
};
