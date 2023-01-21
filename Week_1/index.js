const { Client, Events, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
});
    
client.on(Events.ClientReady,  (c) => {
    console.log(`Logged in as ${c.user.tag}`);
});

client.on(Events.MessageCreate, (msg) => {
   if(msg.content == "엉"){
    msg.channel.send("금");
   }
   else if(msg.content == "ㅠㅠ"){
    msg.channel.send("울지마 바보야");
   }
   else if(msg.content == "애벌묵"){
    msg.delete();
    msg.channel.send("<@" + msg.author.id + ">" + "나 부르지마" );
   }
});

client.login(process.env.TOKEN);