const fs = require('fs');
const Discord = require('discord.js');
const {prefix} = require('./config.json');
const client = new Discord.Client();
const axios = require('axios');
const gmduck = new Discord.MessageAttachment('./images/gmduck.jpg');
const gnduck = new Discord.MessageAttachment('./images/gnduck.jpg');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('WHAT THE DUCK FAT');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args, axios, gmduck, gnduck);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}

});
require('dotenv').config();
client.login(process.env.TOKEN);