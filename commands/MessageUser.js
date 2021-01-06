/* eslint-disable no-unused-vars */
module.exports = {
	name: 'message',
	description: 'MessageUser',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.reply('You have to tag a user to ping them.');
		}
		const taggedUser = message.mentions.users.first();
		taggedUser.send(args);
	},
};
