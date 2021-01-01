/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
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

});

client.login(token);
