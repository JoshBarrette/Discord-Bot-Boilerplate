const { Client, Events, GatewayIntentBits } = require('discord.js');
// Your token is found on the "Bot" tab of your application
const { token } = require('./token.json');

// Note that these intents must also be set on the "Bot" tab of your application
const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
] });

// Do something when the bot is signed in
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Do something when a message is sent
client.once("messageCreate", (msg) => {
    console.log(msg.author.tag + ": " + msg.content);
});

// Do something when a message is deleted
client.on("messageDelete", (msg) => {

});

// Log in and run the bot
client.login(token);