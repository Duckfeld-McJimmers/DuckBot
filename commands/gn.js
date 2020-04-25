module.exports = {
	name: 'gn',	
	execute(message, args, gmduck, gnduck){
		if (!message.mentions.users.size) {
		return message.channel.send('Who are you going to say good night to? Please mention a user.')
		}
		const taggedUser = message.mentions.users.first();
		return message.channel.send(`${taggedUser.username}! ${message.author.username} says good night!`, {files:[gnduck]});	
	},
};