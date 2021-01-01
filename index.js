/* eslint-disable no-unused-vars */
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	const lowerCaseUserMessage = message.content.toLowerCase();
	if (lowerCaseUserMessage === `${prefix}ping`) {
		message.channel.send('Pong');
	}

	if (message.content === `${prefix}server`) {
		message.channel.send(` - \nServer name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated on: ${message.guild.createdAt}`);
	}
});

client.login(token);

