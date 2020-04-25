module.exports = {
	name: 'ping',
	description: 'Ping to ping the bot!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
