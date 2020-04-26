const Discord = require('discord.js');
const gmduck = new Discord.MessageAttachment('./images/gmduck.jpg');
module.exports = {
	name: 'gm',
	description: 'Use to say good morning to people!',
	usage: '@mentionPerson',
	execute(message, args) {		
		if (!message.mentions.users.size) {
		return message.channel.send('Who are you going to say good morning to? Please mention a user.')		
		}		
		const taggedUser = message.mentions.users.first();
		return message.channel.send(`${taggedUser.username}! ${message.author.username} says good morning!`, {files:[gmduck]});
	},
};
