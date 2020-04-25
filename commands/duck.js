module.exports = {
	name: 'duck',
	async execute(message, args, axios) {
			let getDuck = async () => {
				let response = await axios.get("https://random-d.uk/api/v2/random");
				let duck = response.data;
				return duck;
			}			
			let duckValue = await getDuck();
			message.channel.send(duckValue.url, duckValue.message);
	},
};