const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODcyOTA0NTQ0OTk5MzM4MDg0.YQwptQ.7Fvk6_FSfGSQQE2gwZAfJyMYQn4';
const PREFIX = '#'

bot.on('ready', () => {
    console.log('Raiden Shogun is ready to take her slave');
})

bot.on('message' , message=>{
    if(message.content.includes("STEP")){
        message.reply('Yes my slave, give me all your exsistence for your mommy.');
    }
})


bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    
    switch(args[0]){
        case 'ping':
            message.reply('pong!')
            break;
       

    }
    if(args[0] === "web"|| args[0] === "WEB" || args[0] === 'Web'){
        message.reply('There you will find my reddit fanbase : https://www.reddit.com/r/RaidenMains/')
    }
})

bot.login(token);
