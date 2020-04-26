module.exports = {
	name: 'duck',
	description: 'Use to get a random photo of a duck!',
	async execute(message, args, axios, Discord) {
			let getDuck = async () => {
				let response = await axios.get("https://random-d.uk/api/v2/random");
				let duck = response.data;
				return duck;
			}			
			let duckValue = await getDuck();
			const duckEmbed = new Discord.MessageEmbed()
				.setTitle('Ducks!')
				.setImage(duckValue.url)
				.setFooter('Powered by random-d.uk');
			message.channel.send(duckEmbed);
	},
};
