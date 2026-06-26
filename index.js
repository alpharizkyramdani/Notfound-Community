const {
    Client,
    GatewayIntentBits,
    ActivityType,
    Events,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

const axios = require("axios");

const TOKEN = "MTUxNjg0MDU3NzIzOTM1NTQ3Mg.Gm86k1.A7eREESjfyNuyBlxiC4bIZCcnWrpkytkWLC_KQ";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once(Events.ClientReady, c => {
    console.log(`✅ ${c.user.tag} Online!`);

    c.user.setActivity("Found Community", {
        type: ActivityType.Watching
    });
});


// COMMAND WEBSITE
client.on(Events.InteractionCreate, async interaction => {

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "website") {

        const embed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle("🌐 Found Community")
            .setDescription(
`Selamat datang di **Found Community**!

🛒 Accessories Roblox

Klik tombol di bawah untuk membuka website.`
            );

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel("🌐 Buka Website")
                    .setStyle(ButtonStyle.Link)
                    .setURL("https://foundcommunity.rf.gd/")
            );

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }

    if (interaction.commandName === "help") {

        await interaction.reply(`
📖 **Daftar Command**

🌐 /website
🛒 /store
❓ /help
`);
    }
});


client.on(Events.MessageCreate, async message => {

    if (!message.author.bot) return;

    console.log("==========");
    console.log("BOT:", message.author.tag);
    console.log("CONTENT:", message.content);
    console.log("EMBEDS:", message.embeds);

});


client.login("MTUxNjg0MDU3NzIzOTM1NTQ3Mg.Gm86k1.A7eREESjfyNuyBlxiC4bIZCcnWrpkytkWLC_KQ");