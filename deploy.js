const { REST, Routes } = require("discord.js");
require("dotenv").config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
  { name: "website", description: "Buka website" },
  { name: "store", description: "Lihat store" },
  { name: "help", description: "Help menu" }
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("🔄 Registering slash commands...");

    await rest.put(
      Routes.applicationCommands(CLIENT_ID),
      { body: commands }
    );

    console.log("✅ Slash commands registered!");
  } catch (error) {
    console.error(error);
  }
})();