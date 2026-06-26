console.log("BOT BOOTING...");

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

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "website") {
        const embed = new EmbedBuilder()
            .setColor("#5865F2")
            .setTitle("🌐 Found Community")
            .setDescription(`Selamat datang di **Found Community**!`);

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel("🌐 Buka Website")
                .setStyle(ButtonStyle.Link)
                .setURL("https://foundcommunity.rf.gd/")
        );

        await interaction.reply({ embeds: [embed], components: [row] });
    }

    if (interaction.commandName === "help") {
        await interaction.reply(`📖 /website /store /help`);
    }
});

client.on(Events.MessageCreate, async message => {
    if (!message.author.bot) return;

    console.log("==========");
    console.log("BOT:", message.author.tag);
    console.log("CONTENT:", message.content);
});

client.login(process.env.TOKEN)
    .then(() => console.log("LOGIN SUCCESS"))
    .catch(err => console.log("LOGIN ERROR:", err));