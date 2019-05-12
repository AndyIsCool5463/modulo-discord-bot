const Enmap = require("enmap");
const colors = require("chalk");
module.exports = async Bot => {
  Bot.commands = new Enmap();
  Bot.aliases = new Enmap();
  console.log(colors.green(`Finished Loading Databases.`));
};
