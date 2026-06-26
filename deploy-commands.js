const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const TOKEN = "MTUxNjg0MDU3NzIzOTM1NTQ3Mg.Gm86k1.A7eREESjfyNuyBlxiC4bIZCcnWrpkytkWLC_KQ";
const CLIENT_ID = "1516840577239355472";
const GUILD_ID = "1406899290831589396";

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