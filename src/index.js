const { Client, GatewayIntentBits } = require("discord.js")

const { CommandKit } = require("commandkit")

const { token } = require("../config.json")

const path = require("path")

const client = new Client({intents:[]})

new CommandKit({
    client,
    eventsPath: path.join(__dirname, "events"),
    commandsPath: path.join(__dirname, "commands")
})

client.login(token)