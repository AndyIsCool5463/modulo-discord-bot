require("dotenv").config(); // Top
const Discord = require("discord.js");
const chalk = require("chalk");
const fs = require("fs");
const Bot = new Discord.Client();
const handleCommands = require("./utils/commandHandler");
const initEnmap = require("./utils/initEnmap");
Bot.login(process.env.DISCORD_BOT_TOKEN);
module.exports = async () => {
  initEnmap(Bot);
  // Initalize Event Handler
  await fs.readdir("./Bot/events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      // Load the event file itself
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      Bot.on(eventName, event.bind(null, Bot));
      delete require.cache[require.resolve(`./events/${file}`)];
    });
    console.log(chalk.green(`Loaded ${files.length} events!`));
  });
  // Extensive Command Handler. In a seperate file
  await handleCommands(Bot);
};
