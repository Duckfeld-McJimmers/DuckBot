const Discord = require('discord.js');
const gnduck = new Discord.MessageAttachment('./images/gnduck.jpg');
module.exports = {
	name: 'gn',
	description: 'Use to say good morning to people!',
	usage: '@mentionPerson',	
	execute(message, args){
		if (!message.mentions.users.size) {
		return message.channel.send('Who are you going to say good night to? Please mention a user.')
		}
		const taggedUser = message.mentions.users.first();
		return message.channel.send(`${taggedUser.username}! ${message.author.username} says good night!`, {files:[gnduck]});	
	},
};
