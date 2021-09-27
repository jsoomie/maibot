import { Client, Intents } from "discord.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import { token } from "./config.json";

client.once("ready", () => {
  console.log("Mai Bot is operational");
});

client.on("interactionCreate", async (interaction) => {
  const guild = interaction.guild;
  const user = interaction.user;

  if (!interaction.isCommand()) return;
  const { commandName } = interaction;

  switch (commandName) {
    case "ping":
      await interaction.reply(`A pong for you, ${user.tag}!`);
      break;
    case "server":
      await interaction.reply(
        `Server name: ${guild?.name}\nTotal members: ${guild?.memberCount}`
      );
      break;
    case "user":
      await interaction.reply(`Your tag: ${user.tag}\nYour id: ${user.id}`);
      break;
    default:
      break;
  }
});

client.login(token);
