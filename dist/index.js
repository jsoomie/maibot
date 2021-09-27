"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
const config_json_1 = require("./config.json");
client.on("ready", () => {
    console.log("The client is ready");
});
client.login(config_json_1.token);
