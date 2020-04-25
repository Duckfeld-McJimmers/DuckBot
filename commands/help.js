const Discord = require('discord.js');
module.exports = {
name: 'help',
description: 'Shows help lol',
execute(message, args) {
	const helpmenu = new Discord.MessageEmbed()
		.setTitle('Help menu!')
		.setAuthor('code by: Duck#8464 (Greego)')
		.setDescription('The best duck bot ever.')
		.addFields(
		{ name: 'memcount', value: 'displays the member count of the server.' },
		{ name: 'ping', value: 'pong!', inline: true },
		{ name: 'duck', value: 'Shows a random duck!', inline: true },
		{ name: 'gm/;gn', value: 'gm:(Good morning greeting), gn:(Good night greeting) \nYou must ping a user to do so.'},
	);	
		message.channel.send(helpmenu);
	},
};
