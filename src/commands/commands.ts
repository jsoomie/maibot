import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { clientId, guildId, token } from "../config.json";

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("Replies with pong"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Displays some server info"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Displays user info"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
