module.exports = async Bot => {
  let link = await Bot.generateInvite([
    "ADMINISTRATOR",
    "SEND_MESSAGES",
    "MANAGE_GUILD",
    "MENTION_EVERYONE"
  ]);
  return link;
};
