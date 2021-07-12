module.exports = { 
    name: 'brozty',
    description: "Twitch Profile",
    execute(client, channel, user, message, self, tags, tmi){
        message.channel.say(channel, `@${tags.username}, heya!`);
    }
}