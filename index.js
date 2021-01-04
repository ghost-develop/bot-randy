/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong');
	}
	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`${message.author}, you didn't provide any agruments.`);
		}
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
		message.channel.send(`First Arg: ${args[0]}`);
	}
	else if (command === 'kick') {
		// Grab the 'first' mentioned user from the message
		// this will return a 'User' object, just like 'message.author'
		if (!message.mentions.users.size) {
			return message.reply('You need to tag a user in order to kick them');
		}
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	}

	else if (command === 'message') {
		if (!message.mentions.users.size) {
			return message.reply('You have to tag a user to ping them');
		}
		const taggedUser = message.mentions.users.first();
		taggedUser.send(typeof args);
	}

	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		});
		message.channel.send(avatarList);
	}
	else if (command === 'remove') {
		const amount = parseInt(args[0] + 1);

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 100) {
			return message.reply('an input between 1 and 100 is required.');
		}
		message.channel.bulkDelete(amount);
	}
});

client.login(token);
