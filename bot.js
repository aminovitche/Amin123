const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("614075248144285701")
setInterval(function() {
channel.send(`Hi all spam no`);
}, 30)
})

client.login(process.env.BOT_TOKEN);