const { Client, Intents } = require("discord.js");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (msg) => {
    let isWelcomeMessage = msg.type === "GUILD_MEMBER_JOIN";
  
    if (isWelcomeMessage) {
      msg.author.send(`Hi, ${msg.author.username}! Nice to see you at the Earn.Games server. Thank you for joining us on our mission. 

      Together we can bring Web3.0 education to empower the masses from emerging countries. We are also an NFT P2E Game Incubator, Launchpad, and Guild Aggregator. 
      Earn.Games also has a Brand Ambassadors Program which gives the community an opportunity to earn up to $300 worth of EG tokens per month upon our TGE. 
      
      Follow us on Twitter 👉 https://twitter.com/Earn_games_ 
      Be respectful to each other and have fun. 
      
      Thank you, 
      Earn.Games Team
      `);
      client.channels.cache
        .get("785123567884828682")
        .send(`${msg.author.username} has joined the server!`);
    }
})

client.login('MTAwMDc1Mzg2NDUyNzU4OTM5OA.Gzspkw.46QiZLHImy4JdzIw_NB1v57nRoWPuQARURWdb0');