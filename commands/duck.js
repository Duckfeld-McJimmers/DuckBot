module.exports = {
	name: 'duck',
	description: 'Displays a random picture of a duck.',
	async execute(message, args, axios, Discord) {
		let getDuck = async () => {
			let reponse= await axios.get("https://random-d.uk/api/v2/random");
			let duck = reponse.data;
			return duck;
		}
		let duckValue = await getDuck();
		const duckEmbed = new Discord.MessageEmbed()
				.setTitle('Ducks!')
				.setImage(duckValue.url)
				.setFooter('Content from random-d.uk');
		message.channel.send(duckEmbed);	
	},
};