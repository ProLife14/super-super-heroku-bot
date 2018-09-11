const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready', () => {                           
client.user.setGame(`(= WelcomeTo Finex `,'https://www.twitch.tv/pythorxxx');                                                                                                                                                                                                                                                                                                                                                                                                                            
});



client.on('ready', () => {
  console.log('╔[══════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '423934297376817172').setName("W");
client.channels.find('id', '423934297376817172').setName("We");
client.channels.find('id', '423934297376817172').setName("Wel");
client.channels.find('id', '423934297376817172').setName("Welc");
client.channels.find('id', '423934297376817172').setName("Welco");
client.channels.find('id', '423934297376817172').setName("Welcom");
client.channels.find('id', '423934297376817172').setName("Welcome");
client.channels.find('id', '423934297376817172').setName("Welcome T");
client.channels.find('id', '423934297376817172').setName("Welcome To");
client.channels.find('id', '423934297376817172').setName("Welcome To F");
client.channels.find('id', '423934297376817172').setName("Welcome To Fi");
client.channels.find('id', '423934297376817172').setName("Welcome To Fin");
client.channels.find('id', '423934297376817172').setName("Welcome To Fine");
client.channels.find('id', '423934297376817172').setName("Welcome To Finex");
client.channels.find('id', '423934297376817172').setName("Welcome To Finex 💮");
  }, 3000);
});


client.login(process.env.BOT_TOKEN);
