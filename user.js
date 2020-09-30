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
  console.log(` user-info is  ${client.user.tag}!`);
  
  
  
  
  
  
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
  var args = message.content.split(" ");if(message.content.startsWith(findprefix + "user-info")){
  const member =
      message.guild.members.cache.get(args.join(" ")) ||
      message.mentions.members.first() ||
      message.member;

    if (!member) return message.channel.send("User wasn't found!");

    const joinedAt = (member.user.joinedAt);
    const createdAt = (member.user.createdAt);
    const avatar = member.user.displayAvatarURL();
    const roles =
      member.roles.cache
        .filter((r) => r.id !== message.guild.id)
        .map((r) => r)
        .join(", ") || "None";
    const roleCount = member.roles.cache.filter(r => r.id !== message.guild.id).size;
    const { username, id, tag } = member.user;

    const embed = new Discord.MessageEmbed()
      .addField("**Id**", id, true)
      .addField("**Username**", username, true)
      .addField("**Tag**", tag, true)
      .addField("**Created At**", createdAt,true)
      .addField(`**Roles (${roleCount})**`, roles)
      .setTitle(`${username}'s info`)
      .setColor("BLUE")
      .setThumbnail(avatar, { dynamic: true })
      .setTimestamp()
      .setFooter(message.author.username);

    message.channel.send(embed);
  }
  })})
client.login(process.env.Younes);