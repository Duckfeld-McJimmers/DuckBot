module.exports = {
	name: 'memcount',
	description: 'shows number of people on this server.',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);  
	},
};
