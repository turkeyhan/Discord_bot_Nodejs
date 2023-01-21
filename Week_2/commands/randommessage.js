const { SlashCommandBuilder } = require("discord.js");
const scriptlist = ["훈", "묵", "기", "우", "소", "준"];
module.exports = {
  data: new SlashCommandBuilder()
    .setName("아무말")
    .setDescription("뷁뷁"),
  async execute(interaction) {
    const index = Math.floor(Math.random() * scriptlist.length);
    await interaction.reply(scriptlist[index]);
  },
};