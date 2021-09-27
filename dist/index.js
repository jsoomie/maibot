"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS] });
const config_json_1 = require("./config.json");
client.once("ready", () => {
    console.log("The client is ready");
});
client.on("interactionCreate", (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!interaction.isCommand())
        return;
    const { commandName } = interaction;
    switch (commandName) {
        case "ping":
            yield interaction.reply("Pong!");
            break;
        case "server":
            yield interaction.reply(`Server name: ${(_a = interaction.guild) === null || _a === void 0 ? void 0 : _a.name}\nTotal members: ${(_b = interaction.guild) === null || _b === void 0 ? void 0 : _b.memberCount}`);
            break;
        case "user":
            yield interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
            break;
        default:
            break;
    }
}));
client.login(config_json_1.token);
