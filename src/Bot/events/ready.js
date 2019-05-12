const generateBotInvite = require("../utils/generateBotInvite");
const chalk = require("chalk");

module.exports = async Bot => {
  let link = await generateBotInvite(Bot);
  console.log(
    chalk.green(
      `I've logged in as: ${Bot.user.username}#${
        Bot.user.discriminator
      }! 👍 \n You can invite me at: ${link}`
    )
  );
};
