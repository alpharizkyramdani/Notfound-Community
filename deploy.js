const { REST, Routes } = require("discord.js");

const TOKEN = "MTUxNjg0MDU3NzIzOTM1NTQ3Mg.Gm86k1.A7eREESjfyNuyBlxiC4bIZCcnWrpkytkWLC_KQ";
const CLIENT_ID = "1516840577239355472";

const commands = [
  {
    name: "website",
    description: "Buka website"
  },
  {
    name: "store",
    description: "Lihat store"
  },
  {
    name: "help",
    description: "Help menu"
  }
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