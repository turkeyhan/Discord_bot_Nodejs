const { SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("금지어등록")
    .setDescription("원하는 금지어를 등록함")
    .addStringOption(option=> option
      .setName("금지어")
      .setDescription("금지어")
      .setRequired(true)),
  async execute(interaction) {
    const forbidden_word = interaction.options.getString("금지어");
    await global.forbidden_words.push(forbidden_word);
    interaction.reply(`금지어 '${forbidden_word}'을 등록했습니다.`);
  },
};