import { Client, Message, TextChannel, MessageEmbed } from "discord.js";

const client = new Client();

client.on("ready", () => {
  console.log("Time for my last two brain cells.");
});

client.on("message", (message) => {
  try {
    if (message.content === "!ping") {
      let uptime = process.uptime();
      const hours = Math.floor(uptime / 3600);
      uptime %= 3600;
      const minutes = Math.floor(uptime / 60);
      const seconds = Math.floor(uptime % 60);
      message.channel.send(
        new MessageEmbed({
          title: "Pong!",
          description: `
          This bot is working just fine! How about *you*?
          Metrics:
          - Node version: \`${process.version}\`,
          - Platform: \`${process.platform}\`,
          - Uptime: \`${hours}:${minutes}:${seconds}\`
          `,
          timestamp: new Date(),
        })
      );
    }
    if (message.content === "!about")
      message.channel.send(
        new MessageEmbed({
          title: "About that crisis...",
          url: "https://www.instagram.com/fc.randy.h/",
          description:
            "This bot was made with two brain cells. You don't want to look at the source code, it reflects my existential crisis right now.\nversion 0.0.0.1 i guess? i update it whenever",
          author: {
            name: "randy's existential crisis",
            url: "https://www.github.com/randy-halim/",
          },
        })
      );
    if (
      message.content.toLowerCase().includes("broken") &&
      Math.random() <= 0.45
    )
      message.reply("did you turn it off and on again?");
    if (!message.author.bot && Math.random() <= 0.1) {
      const occurrencesOfE = (message.content.match(/e/g) || []).length;
      if (occurrencesOfE === 0) return;
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.stopTyping();
        message.channel.send(`**${"e".repeat(occurrencesOfE)}**`);
      }, 250 * occurrencesOfE);
    }
  } catch (error) {
    message.channel.send(
      new MessageEmbed({
        title: "Well this is unexpected...",
        description: `
        Some error occurred and the bot wasn't able to complete your request. It most likely is fine and will be able to continue responding to other commands, but likely not this one.
        Here is a error code for you: \`\`\`${error.message}\`\`\`
        If for some reason the bot refuses to work, why not ping @fc.randy.h#4643 ?
        `,
        timestamp: new Date(),
        hexColor: "#FF0000",
      })
    );
  }
});

client.login(process.env.DISCORD_TOKEN);
