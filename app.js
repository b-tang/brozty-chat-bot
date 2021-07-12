require('dotenv').config();
const tmi = require('tmi.js');
// import { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME } from './commands/starvader_chaos';

var prefix = "!"

const login = {
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: process.env.BOT_USERNAME,
		// username: 'Broztybot',
		password: process.env.OAUTH_TOKEN
		// password: 'oauth:mb0y6b4jplrbd4guq8281jtvpyyiah'
	},
	// channels: [ 'Brozty' ]
    channels: [ 'Brozty', 'starvader_chaos']
    // channels: [ 'Brozty', 'starvader_chaos', 'Karuzki' ]
	// channels: [ CHANNEL_NAME]
}
// connecting client to server....
const client = new tmi.Client(login);


// client.on('connected', (address, port) => {
//     client.action('Brozty', 'Hello, Broztybot is now connected!')
//     // client.action('starvader_chaos', 'Hello, Broztybot is now connected!')
//     // client.action('Karuzki', 'Hello, Broztybot is now connected!')
// });

// // Register our event handlers (defined below)
// client.on('message', onMessageHandler);
// client.on('connected', onConnectedHandler);

client.connect().catch(console.error);
client.on('message', (channel, tags, message, self,) => {
	if(self) return;

	if(message.toLowerCase() === '!hello' || message.toLowerCase() === '!hi' || message.toLowerCase() === '!hey') {
		client.say(channel, `@${tags.username}, heya!`);
	} 
	else if(message.toLowerCase() === '!bop') {
		client.say(channel, `@${tags.username}, you have been bopped by starvader_chaos!`);
	} 	
	else if(message.toLowerCase() === '!instagram') {
		client.say('starvader_chaos', `@${tags.username}, https://www.instagram.com/anson.vuong17/`);
	} 	
	else if(message.toLowerCase() === '!gg') {
		client.say(channel, 'gg');
	} 	
	else if(message.toLowerCase() === '!youtube') {
		client.say('starvader_chaos', `@${tags.username}, https://www.youtube.com/channel/UC59G5lFWlRRKPa2vCfu6Ikg`);
	} 	
	else if(message.toLowerCase() === '!gn') {
		client.say(channel, `@${tags.username}, have a great night!`);
    } 	
	else if(message === '!game'){
        client.action('starvader_chaos', `@${tags.username}, starvader_chaos is now playing League of Legends`)
	} 
	else if(message.toLowerCase() === '!gae') {
		client.say(channel, `@${tags.username}, why are you gae?, you are gae`);
    } 
	else if(message.toLowerCase() === '!spotify') {
		client.say(channel, `@${tags.username}, 1. https://open.spotify.com/playlist/6GoIMo7qjvKopjyV4FLzzW \n2. https://open.spotify.com/playlist/55Fm69QyLIYGeh7Cr0IizF \n3. https://open.spotify.com/playlist/0x4OYckJw67GX63azuvh7P \n4. https://open.spotify.com/playlist/6BXXlGHCuHJNf6prgRLCNP?si=30b6e10e4fb04a24`);
    }
});


client.on('chat', (channel, user, message, self, tags) => {
    if(self) return;
    if(message.toLowerCase() === 'broztydiff' || message.toLowerCase() === 'brozty diff'){
        client.action(channel, 'broztydiff has been activated')
    } 
	else if(message.toLowerCase() === 'shutdown'){
        client.action(channel, 'nice')
    } 
	else if(message.toLowerCase() === 'ayy'){
        client.action(channel, 'lmao')
    } 

	// cmd handler
    const args = message.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    try {
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args, user, channel, self) 
    } catch (err) {
        return;
    }
});

// function onMessageHandler (target, context, msg, self) {
// 	if (self) { return; } // Ignore messages from the bot
  
// 	// Remove whitespace from chat message
// 	const commandName = msg.trim();
  
// 	// If the command is known, let's execute it
// 	if (commandName === '!dice') {
// 	  const num = rollDice();
// 	  client.say(target, `You rolled a ${num}`);
// 	  console.log(`* Executed ${commandName} command`);
// 	} else {
// 	  console.log(`* Unknown command ${commandName}`);
// 	}
//   }

//   // Function called when the "dice" command is issued
// function rollDice () {
// 	const sides = 6;
// 	return Math.floor(Math.random() * sides) + 1;
//   }



