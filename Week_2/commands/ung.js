const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("엉")
    .setDescription("금 이라고 대답할까요?"),
  async execute(interaction) {
    await interaction.reply("금");
  },
};