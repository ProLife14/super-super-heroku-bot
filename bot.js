const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
client.on('guildMemberAdd', member => {
let wlcm = new Discord.RichEmbed()
.setAuthor(member.user.username, member.user.avatarURL)
.setDescription(`نورت السيرفر بوجودك  `)
.setThumbnail(member.user.avatarURL)
.setImage('صورة الترحيب')
.setColor('RANDOM')
client.channels.get('ايدي روم الترحيب').send(wlcm);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
