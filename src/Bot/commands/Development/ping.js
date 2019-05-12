exports.run = async (Bot, message, args) => {
  message.channel.send("Pong!");
};
exports.help = {
  name: "ping",
  description: "Ping Pong!",
  usage: "ping",
  permission: "None",
  alias: "None"
};
module.exports.settings = {
  disabled: false
};
