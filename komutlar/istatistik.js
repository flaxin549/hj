const Discord = require("discord.js")
const fs = require("fs")
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
const seksizaman = moment
.duration(client.uptime)
.format(" D [gün], H [saat], m [dakika], s [saniye]");
const istatistikler = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTimestamp()
.setFooter("Flaxin Music © 2020", client.user.avatarURL())
.addField("📊 Data", `Total server: **${client.guilds.cache.size}** \nTotal User: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nTotal Channel: **${client.channels.cache.size}**`, true)
.addField("⚙️ Versions", `Discord.js versions: **v${Discord.version}** \nNode.js versions: **${process.version}**`, true)
.addField(`⛏ Bot developer`, `<@678600075823546398>`, true)
.addField("📉 Delays", `Bot Delay: **${client.ws.ping}** \nMessage Delay: **${new Date().getTime() - message.createdTimestamp}**`, true)
.addField("**Memory Usage**",(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",true)
.addField("**CPU**",`\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``)
.setImage("https://cdn.discordapp.com/attachments/759108482577203221/761286324745273394/standard_2.gif")
return message.channel.send(istatistikler);
};

exports.config = {
name: "istatistik",
aliases: ["i"]
};