"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
var config_json_1 = __importDefault(require("./config.json"));
client.on("ready", function () {
    console.log("The client is ready");
});
client.login(config_json_1.default.token);
