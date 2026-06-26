const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;
const commands = [
    new SlashCommandBuilder()
        .setName("website")
        .setDescription("Membuka website Found Community"),

    new SlashCommandBuilder()
        .setName("store")
        .setDescription("Menampilkan informasi store"),

    new SlashCommandBuilder()
        .setName("help")
        .setDescription("Daftar command bot"),
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
    try {
        console.log("🔄 Mendaftarkan slash commands...");

        await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            { body: commands },
        );

        console.log("✅ Slash commands berhasil didaftarkan!");
    } catch (error) {
        console.error(error);
    }
})();