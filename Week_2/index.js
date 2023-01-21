
const fs =require("fs");
const path = require("path");
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
require("dotenv").config();
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages],
});

//Entry Commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));
for(const file of commandFiles){
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if("data" in command && "execute" in command){
        client.commands.set(command.data.name, command);
    }else{
        console.log("Data is not available, We'll skip.");
    }
}
console.log(client.commands);

//Process Events
client.on(Events.GuildMemberAdd, member => {
    member.guild.channels.get(GUILD_ID).send("묵하");
});

client.on(Events.ClientReady,  (c) => {
    console.log(`Logged in as ${c.user.tag}`);
});

global.forbidden_words = [
    "애벌묵",
];

const util = require("util");
const wait = util.promisify(setTimeout);
const ranmessages = ["묵묵", "묵묵묵", "묵묵묵묵", "묵묵묵묵묵"];
client.on(Events.MessageCreate, async (msg) => {
    if(msg.member.user.bot) return;
    
    if(forbidden_words.find((word) => msg.content.includes(word))){
        await msg.delete();
        await wait(5e3);
        await msg.channel.send(`${msg.author} 멈춰`);
    }
    else if(msg.content == "ㅠㅠ"){
    msg.channel.send("울지마 바보야");
   }
   else if(Math.random() < 0.5){
    msg.channel.send(ranmessages[Math.floor(Math.random() * ranmessages.length)]);
   }
});

client.on(Events.InteractionCreate, async (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if(!command){
        console.log("Not implemented command.");
        return;
    }
    try{
        await command.execute(interaction);
    }catch (error){
        interaction.reply("There is an error executing command.");
        console.log(error);
    }
})

client.login(process.env.TOKEN);

