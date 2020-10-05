const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();
const fynx = require("../ayarlar/bot.json");
 
module.exports.run = (client, message, args) => { 
let pages = [
`© Copyright Flaxin Music \n İnvite Link [Link](https://discord.com/oauth2/authorize?client_id=702917377230241802&scope=bot&permissions=8) \n [Website Link](https://flaxinmusic.tk))`,
      
`**Flaxin Music kullanıcı komutları**\n\n` + `\`${fynx.prefix}help\`` + `\n<a:yen:757240118225666069> It shows all commands and explanations. \n\n` + `\`${fynx.prefix}play <Şarkı İsmi>\`` +`\n<a:yen:757240118225666069> Searches for songs with the specified name and connects to the room you are in and plays the music. \n\n` + `\`${fynx.prefix}stop\`` +`\n<a:yen:757240118225666069> Flaxin stops playing music and leaves the audio channel.\n\n ` + `\`${fynx.prefix}atla\`` + `\n<a:yen:757240118225666069>  Skips the music being played. If there is music in the queue, the music will be played sequentially.\n\n ` + `\`${fynx.prefix}pause\`` +` \n<a:yen:757240118225666069>  Pauses the music being played. \n\n ` + `\`${fynx.prefix}resume\`` +`\n<a:yen:757240118225666069>  Resumes paused music.`,
`**Flaxin Music kullanıcı komutları**\n\n` + `\`${fynx.prefix}mix\`` +`\n<a:yen:757240118225666069> It shuffles the music in the music queue. \n\n ` + `\`${fynx.prefix}loop\`` +`\n<a:yen:757240118225666069> Loops the music in the music queue. \n\n ` + `\`${fynx.prefix}playing\`` +`\n<a:yen:757240118225666069>  Shows the music being played.\n\n  ` + `\`${fynx.prefix}queue\`` +`\n<a:yen:757240118225666069>  Shows the music queue. \n\n ` + `\`${fynx.prefix}kuyruğu-temizle\`` +`\n<a:yen:757240118225666069>  Cleans the music queue.\n\n ` + `\`${fynx.prefix}ses <1/100>\`` +`\n<a:yen:757240118225666069> Adjusts the volume of music played.`,
'**Flaxin Music Links**\n\n**<a:yildiz:757174790560678028> [Support Server](https://discord.gg/PZqVMws)**\n'
];
let page = 1; 
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setThumbnail('https://cdn.discordapp.com/attachments/759540372048838657/761287329268105216/indir_8.png')
.setAuthor(`Flaxin Music Yardım Menüsü`, client.user.avatarURL)
.setFooter(`Sayfa ${page} / ${pages.length}`)
.setDescription(pages[page-1])
message.channel.send(embed).then(msg => {
msg.react('⬅')
.then(r => {
msg.react('➡')
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
forwards.on('collect', r => {
if(page === pages.length) return;
page++;
embed.setDescription(pages[page-1]);
embed.setColor('RANDOM')
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
})
backwards.on('collect', r => {
if(page === 1) return;
page--;
embed.setColor('RANDOM')
embed.setDescription(pages[page-1]);
embed.setFooter(`Sayfa ${page} / ${pages.length}`)
msg.edit(embed)
}) 
})
})
};
 
module.exports.config = {
name: 'help',
aliases: [ "y","yar"]
};
 