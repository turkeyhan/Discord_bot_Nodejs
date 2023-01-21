const { SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("인증")
    .setDescription("곤충 역할을 부여함"),
  async execute(interaction) {
    await interaction.member.roles.add(process.env.ROLE_ID);
    await interaction.reply("인증되었습니다.");
  },
};