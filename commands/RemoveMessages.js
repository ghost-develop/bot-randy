/* eslint-disable no-unused-vars */
module.exports = {
	name: 'remove',
	descripton: 'Remove Messages',
	execute(message, args) {
		const amount = parseInt(args[0] + 1);

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('an input between 1 and 100 is required.');
		}
		message.channel.bulkDelete(amount);
	}
}