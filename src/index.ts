import { Client, Intents } from "discord.js";
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
import config from "./config.json";

client.on("ready", () => {
  console.log("The client is ready");
});

client.login(config.token);
