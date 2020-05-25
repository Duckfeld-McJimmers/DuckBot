const fs = require('fs');
const Discord = require('discord.js');
const {prefix} = require('./config.json');
const client = new Discord.Client();
const axios = require('axios');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Should i move this bundle of code elsewhere or is it good here? I just want to clarify.
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity('quack quack');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if (!client.commands.has(command)) return;

try {
	client.commands.get(command).execute(message, args, axios, Discord);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}

});
//require('dotenv').config();
client.login(process.env.TOKEN);
