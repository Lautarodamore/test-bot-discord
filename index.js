const { Client, RichEmbed } = require('discord.js');
const bot = new Client();


bot.login('NTQyNTE4ODE1NDAyMDk4NzA4.DzvYiw.2rOflsay91d85wq5PDeBaN_2p9Q');

bot.on('ready', () => {
    console.log(`El bot esta listo como ${bot.user.tag}`);
    bot.user.setStatus('online');

    console.log(bot.user.presence.status);

  //  const testChannel = bot.channels.find(channel => channel.name === 'test');
    //console.log(testChannel);
    
});

bot.on('message', async message => {

    if (message.content === 'ping'){
        message.reply('pong');
    }

    if (message.content === 'hello') {
        message.channel.send(`Hello! ${message.author.username}`);
        
    }
    
    if (message.content.includes('!test')) {
        message.channel.send('Glad your are testing');
    }

    if (message.content === '!fazt') {
        message.channel.send('https://discord.js.org/#/');
    }

    if (message.content === '!pretty') {
        
        const embed = new RichEmbed()
            .setTitle('A Pretty Message')
            .setColor('#000000')
            .setAuthor('Fazt', 'https://icon2.kisspng.com/20180402/fuq/kisspng-rick-sanchez-morty-smith-t-shirt-middle-finger-can-rick-and-morty-5ac21f462258b1.1710697115226714301407.jpg')

        message.channel.send(embed);    
    }

    if (message.content === '!clear') {
      const fetched = await message.channel.fetchMessages({limit: 100});
      message.channel.bulkDelete(fetched);
      console.log('Messages Deletes');
      
    }
});
