 const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const fs =
require("fs");
const pref =
require("./prefixs.json")
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(` server-info is okay  ${client.user.tag}!`); 
//

  




  
  
  
  
  //
client.on('message', async message => {
  var findprefix;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix 
        };
    // By AboKhalil - Alpha Codes 22/8/2019.
     fs.writeFileSync('./prefixs.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
    }

    var args = message.content.split(" ");
    
if(message.content.startsWith(findprefix + "server-info")){
 

     const { guild } = message;
    const {
      name,
      owner,
      memberCount,
      premiumSubscriptionCount,
      premiumTier,
      verified,
      partnered,
    } = guild;   const roles = guild.roles.cache.size;
    const channels = guild.channels.cache.size;
    const emojis = guild.emojis.cache.size;
    const createdAt = (guild.createdAt);
    const joined = (message.member.joinedAt);
    const boosts = premiumSubscriptionCount;
    const boostLevel = premiumTier;
    const isVerified = verified
      ? "Yes, this server is verified"
      : "Nope, this server is not verified";
    const isPartnered = partnered
      ? "Yes, this server is partnered"
      : "Nope, this server is not partnered";
    const inviteBanner = guild.bannerURL({
      size: 2048,
      format: "png",
      dynamic: true,
    });
const verLevel = guild.verificationLevel;
    const mfaLevel = guild.mfaLevel;

    const ServerInf = new Discord.MessageEmbed()
      .setTitle(name)
      .setThumbnail(guild.iconURL({ dynamic: true, size: 1024 }))
      .setColor("BLUE")
      .addField("**Server Owner**", owner, true)
      .addField("**Roles Count**", roles, true)
          .addField("**Channel Count**", channels, true)
      .addField("**Emoji Count**", emojis, true)
      .addField("**Member Count**", memberCount, true)
    .addField("**Created At**", createdAt, true)
      .addField("**Joined At**", joined,true)
      
      .addField("**Verification level**", verLevel, true)
      .addField("**MFA level**", mfaLevel, true)
      .addField("**Boosts**", boosts, true)
      .addField("**Boost Level**", boostLevel, true)
      .addField("**Verified**", isVerified, true)
      .addField("**Partnered**", isPartnered, true)
      .setImage(inviteBanner);
    message.channel.send(ServerInf)
  }
}
         )
}
          )  
client.login(process.env.Younes);