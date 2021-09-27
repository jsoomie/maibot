import { Client, Intents } from "discord.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import { token } from "./config.json";

client.once("ready", () => {
  console.log("The client is ready");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;

  switch (commandName) {
    case "ping":
      await interaction.reply("Pong!");
      break;
    case "server":
      await interaction.reply(
        `Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`
      );
      break;
    case "user":
      await interaction.reply(
        `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
      );
      break;
    default:
      break;
  }
});

client.login(token);
