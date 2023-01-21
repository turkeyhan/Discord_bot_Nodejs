require("dotenv").config();

const{REST, Routes} = require("discord.js");
const fs = require("fs");

const commands = [];
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10"}).setToken(process.env.TOKEN);

(async () => {
    try{
        console.log('detected ${commands.length} Start registering commands.');
        const data = await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            {body: commands}
        );
        console.log('${data.length} Commands successfully reloaded.');
    } catch (error){
        console.log(error);
    }
})();