// require("events").EventEmitter.defaultMaxListeners = 200;
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { prefix, devs } = require("./config");
const client = new Client({ disableEveryone: true });
const pref = require("./prefixs.json");
const ytdl = require("ytdl-core");
const canvas = "canvas";

const neko = require("nekos.life");
const fetch = require("node-fetch");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const { tz } = require("moment-timezone");
const serverI = require("./server-info.js");
const user =
require('./user.js')
const simpleytapi = require("simple-youtube-api");
const { getInfoFromName } = require("myanimelists");
const { parse } = require("twemoji-parser");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const movie = require("movie-info");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat");

const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyArq89qYrjmblwd9ohEcL0DMDa6oQPmNtE");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyArq89qYrjmblwd9ohEcL0DMDa6oQPmNtE";
const cd = require("countdown");
const totime = require("to-time");
const Enmap = require("enmap");
const pretty = require("pretty-ms");
client.login(process.env.Younes);
const Younes =
  "https://discord.com/api/oauth2/authorize?client_id=732783981447086116&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fc8FDDTC&scope=bot";
const ServYounes = "https://discord.gg/UQPAyxH";
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(` Safi conect a younes ${client.user.tag}!`);

  console.log(`Guilds : ${client.guilds.cache.size}`);
  console.log(`Users : ${client.users.cache.size}`);

  client.user.setActivity(`${client.guilds.cache.size} guilds || v5.9.0`, {
    type: "WATCHING"
  });
});

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }

  if (message.author.bot) return;
  if (message.content == findprefix + "ping") {
    {
      let embed = new Discord.MessageEmbed()
        .setColor(3447003)
        .setTitle("pong | :ping_pong: ")
        .setDescription(`${client.ws.ping} ms,`)
        .setFooter(`Requested by | ${message.author.tag}`);
      message.delete().catch(O_o => {});
      message.channel.send(embed);
    }
  }
});
//

//
client.on("guildCreate", guild => {
  client.users.cache.get("508317503806767106").send(`✅ ** \nBot dkhl server jdid
     \nName server =
   ${guild.name}   
      \nOwner server =
    ${guild.owner}  
       \nID server =
${guild.id}   
    **\nCount all servers**    ${client.guilds.cache.size}  **`);
});
client.on("guildDelete", guild => {
  client.users.cache.get("508317503806767106").send(`❎ **  \nBot khrj mn server  
     \n**Name server** :    
${guild.name}  
     \n**Owner Server** :
${guild.owner}  
        \n**ID Server** : 
${guild.id}   
\n**Number count all servers** : ${client.guilds.cache.size}   **`);
});
//

//

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.author.bot) return;
  if (!message.content.startsWith(findprefix)) return;
  if (message.content.startsWith(findprefix + "time-word")) {
    const Morocco = tz("Morocco").format("hh:mm:ss");
    const Algeria = tz("Algeria").format("hh:mm:ss");
    const Libya = tz("Libya").format("hh:mm:ss");
    const Tunisia = tz("Algeria").format("hh:mm:ss");
    const Dubai = tz("Dubai").format("hh:mm:ss");
    const Egypt = tz("Egypt / مصر ").format("hh:mm:ss");
    const Saudi = tz("Saudi / السعودية ").format("hh:mm:ss");
    const newYork = tz("America/New_York").format("hh:mm:ss");
    const LosAngeles = tz("America/Los_Angeles").format("hh:mm:ss");

    const Toronto = tz("America/Toronto").format("hh:mm:ss");
    const Chicago = tz("America/Chicago").format("hh:mm:ss");
    const Belgium = tz("Europe/Brussels").format("hh:mm:ss");
    const London = tz("Europe/London").format("hh:mm:ss");
    const Paris = tz("Europe/Paris").format("hh:mm:ss");
    const Berlin = tz("Europe/Berlin").format("hh:mm:ss");
    const Tokyo = tz("Asia/Tokyo").format("hh:mm:ss");
    const Perth = tz("Australia/Perth").format("hh:mm:ss");
    const Sydney = tz("Australia/Sydney").format("hh:mm:ss");
    const Rome = tz("Europe/Rome").format("hh:mm:ss");
    const Singapore = tz("Asia/Singapore").format("hh:mm:ss");

    const embed = new Discord.MessageEmbed()
      .setTitle("**World time zones**")
      .addField("> Morocco / المغرب", Morocco, true)
      .addField("> Algeria / جزائر ", Algeria, true)
      .addField("> Tunisia / تونس", Tunisia, true)
      .addField("> Libya", Libya, true)
      .addField("> Egypt / مصر ", Egypt, true)
      .addField("> Dubai / دبي ", Dubai, true)
      .addField("> Saudi / السعودية ", Saudi, true)
      .addField("> Australia, Sydney", Sydney, true)
      .addField("> Los Angeles, US", LosAngeles, true)
      .addField("> New York, US", newYork, true)
      .addField("> Chicago, US", Chicago, true)
      .addField("> Toronto, Canada", Toronto, true)
      .addField("> Brussels, Belgium", Belgium, true)
      .addField("> London, UK", London, true)
      .addField("> Berlin, Germany", Berlin, true)
      .addField("> Paris, France", Paris, true)
      .addField("> Rome, Italy", Rome, true)
      .addField("> Tokyo, Japan", Tokyo, true)
      .addField("> Singapore, Asia", Singapore, true)
      .addField("> Perth, Australia", Perth, true)
      .addField("> Australia, Sydney", Sydney, true)
      .setFooter(message.author.username)
      .setTimestamp()
      .setColor("BLUE");

    message.channel.send(embed);
  }
});
//

client.on("message", async message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }

  if (message.author.bot) return;
  if (!message.content.startsWith(findprefix)) return;
  if (message.content.startsWith(findprefix + "barf")) {
    var imgbarf = {
      "0": "https://i.gifer.com/RNwv.gif",
      "1": "https://img.4plebs.org/boards/pol/image/1440/78/1440784849350.gif",
      "2":
        "https://vignette.wikia.nocookie.net/kancolle/images/a/a1/Kagura_massive_puke.gif/revision/latest?cb=20170318180441",
      "3": "http://i0.kym-cdn.com/photos/images/original/001/072/574/e3d.gif",
      "4":
        "https://vignette.wikia.nocookie.net/kancolle/images/4/48/Imouto_Puke.gif/revision/latest?cb=20170617212713",
      "5": "https://img.fireden.net/a/image/1445/89/1445890588601.gif",
      "6": "https://media.giphy.com/media/p5U00QZsx9GbC/giphy.gif",
      "7":
        "https://pa1.narvii.com/6286/938fae9089d86409995caaa27212469467fca018_hq.gif",
      "8": "https://media.giphy.com/media/w01H3jsd1pA1a/giphy.gif",
      "9": "http://i0.kym-cdn.com/photos/images/original/001/110/533/dff.gif",
      "10":
        "https://i.pinimg.com/originals/0b/df/09/0bdf095c87c0869c3bf3dcbdebefebde.jpg",
      "11":
        "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/enhanced/webdr05/27/14/anigif_original-grid-image-29638-1390851792-22.gif",
      "12":
        "https://media1.tenor.com/images/74f975dbbb1d9791c9e5b1f34e01c036/tenor.gif?itemid=7511483",
      "13":
        "https://media1.tenor.com/images/9c30432b9d9a2bd10d5495c79eabadca/tenor.gif?itemid=4893648",
      "14": "https://media.giphy.com/media/8kaKWDkqM42sg/giphy.gif",
      "15": "https://i.warosu.org/data/g/img/0477/24/1430273570762.gif",
      "16": "http://i0.kym-cdn.com/photos/images/newsfeed/000/938/667/1cc.gif",
      "17":
        "https://i.pinimg.com/originals/38/89/77/388977f541b2ba470708ccdee21dd34b.gif",
      "18": "http://squiddy.info/ikamusume.gif",
      "19": "http://i0.kym-cdn.com/photos/images/newsfeed/001/198/340/428.gif"
    };
    const embed = new Discord.MessageEmbed();
    embed.setDescription(message.author.username + " is barfing");
    const randm = Math.random();

    embed.setImage(
      imgbarf[Math.floor(randm * Object.keys(imgbarf).length).toString()]
    );

    embed.setColor(0x23ff12);
    return message.channel.send(embed);
  }
});
//

client.on("message", message => {
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
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.author.bot) return;
  if (!message.content.startsWith(findprefix)) return;
  if (message.content.startsWith(findprefix + "cry")) {
    var imgcry = {
      "0": "https://im-01.gifer.com/3ju8.gif",
      "1":
        "http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-29.gif",
      "2":
        "https://animewithsky.files.wordpress.com/2015/06/03-i2ds0k7.gif?w=366&amp;h=205&amp;crop=1",
      "3": "http://gifimage.net/wp-content/uploads/2017/10/cry-anime-gif-9.gif",
      "4": "http://i.giphy.com/l3vR5e4dI4ci6LxMQ.gif",
      "5":
        "http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-28.gif",
      "6":
        "https://myanimelist.cdn-dena.com/s/common/uploaded_files/1453262679-fd7868f00c8b7b4e1accd7dd574b7a19.gif",
      "7": "https://im-01.gifer.com/Drie.gif",
      "8":
        "https://78.media.tumblr.com/48bdc1aebf0531598b4cd51be7701a45/tumblr_o349ccKT9C1slmfozo1_540.gif",
      "9":
        "http://gif-finder.com/wp-content/uploads/2015/07/Anime-boy-crying.gif",
      "10": "https://thumbs.gfycat.com/ReadySpicyFrigatebird-max-1mb.gif",
      "11":
        "http://megumi.img.s3.amazonaws.com/tumblr_o5ljgu8pDF1t3uwllo1_500.gif",
      "12":
        "http://gifimage.net/wp-content/uploads/2017/07/anime-cry-gif-18.gif",
      "13": "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif",
      "14": "https://tenor.com/view/anime-girl-crying-sad-black-gif-4952249",
      "15":
        "https://media1.tenor.com/images/d5668af606ca4d0332a6507418cabbce/tenor.gif?itemid=4952249",
      "16":
        "https://media.tenor.com/images/e5ecdb82f6374a64d99503f30407f78e/tenor.gif"
    };
    const embed = new Discord.MessageEmbed();
    embed.setDescription(message.author.username + " is crying");
    const randm = Math.random();

    embed.setImage(
      imgcry[Math.floor(randm * Object.keys(imgcry).length).toString()]
    );

    embed.setColor(0x23ff12);
    message.channel.send(embed);
  }
});

//

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.author.bot) return;
  if (!message.content.startsWith(findprefix)) return;
  if (message.content.startsWith(findprefix + "shock")) {
    var imgshock = {
      "0": "https://media.giphy.com/media/BDN8BqYikeV2g/giphy.gif",
      "1": "https://media.giphy.com/media/5iRu1GEEwfOE/giphy.gif",
      "2":
        "http://img1.ak.crunchyroll.com/i/spire1/01fee28811b5b0cfa2b4464f3cd189731408145817_full.gif",
      "3":
        "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif.gif",
      "4":
        "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif-8.gif",
      "5":
        "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif-1.gif",
      "6": "https://media.giphy.com/media/7vsOChWoNrbHO/giphy.gif",
      "7":
        "http://gifimage.net/wp-content/uploads/2017/09/anime-surprise-gif-2.gif",
      "8":
        "https://media1.tenor.com/images/4d34397125a4d5fd64b66935a732fac8/tenor.gif?itemid=6091843",
      "9":
        "https://vignette.wikia.nocookie.net/rokuaka/images/2/26/Spoiler_surprise.gif/revision/latest?cb=20170706045908",
      "10":
        "https://www.collegemagazine.com/wp-content/uploads/2016/04/giphy-34.gif",
      "11":
        "https://media1.tenor.com/images/8668d1279a29e26508f88f9032bbdc78/tenor.gif?itemid=5208552",
      "12": "http://animated.name/uploads/posts/2016-08/1471432627_818.gif",
      "13":
        "https://78.media.tumblr.com/d094ac79cec12ee6d4c48d9d72e33c5b/tumblr_ox1h09b35B1tdrpkqo1_400.gif",
      "14": "https://media.giphy.com/media/RKh1qvNWskJDW/giphy.gif",
      "15":
        "https://78.media.tumblr.com/495f6a8ae80271bd01326909d839fc76/tumblr_inline_nkqesyio0L1qeoma2.gif",
      "16":
        "https://78.media.tumblr.com/276117448a3a8b61fe6783abee0462b0/tumblr_njm9pcSNE81svn9hfo1_500.gif",
      "17":
        "http://orig12.deviantart.net/1acf/f/2012/235/8/d/shocked_yu_is_shocked__gif__by_eevee76719-d5c4rtn.gif",
      "18":
        "https://78.media.tumblr.com/a22c9224b9a5e3c0d3abfe72a059e6a8/tumblr_inline_n23t8dy70C1r9u0at.gif",
      "19":
        "http://media.tumblr.com/2d43722ab84a9352a0872a815981cb2a/tumblr_inline_n364l1Y5wR1syzw6n.gif"
    };

    const embed = new Discord.MessageEmbed();
    embed.setDescription(message.author.username + " is shocked.");
    const randm = Math.random();

    embed.setImage(
      imgshock[Math.floor(randm * Object.keys(imgshock).length).toString()]
    );

    embed.setColor(0x23ff12);
    message.channel.send(embed);
  }
});
//
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.author.bot) return;
  if (!message.content.startsWith(findprefix)) return;
  if (message.content.startsWith(findprefix + "pout")) {
    var imgpout = {
      "0": "https://i.imgur.com/ktGINkV.gif",
      "1":
        "https://media1.tenor.com/images/c8bf65854104f13e8e2cdc9453c5222f/tenor.gif?itemid=8687045",
      "2": "https://media.giphy.com/media/T6QsHz4lscVZm/giphy.gif",
      "3":
        "https://78.media.tumblr.com/c64aabcd3ce93bd0cb1bfe2d4949853e/tumblr_oktiiztx671voyry7o1_500.gif",
      "4": "http://i.imgur.com/Yy2jWO1.gif",
      "5":
        "https://78.media.tumblr.com/84d72c998a950f3b2d539999506dcec7/tumblr_nkplw17MLG1u7kgn9o1_500.gif",
      "6": "http://i.imgur.com/mw2aNjC.gif",
      "7":
        "https://thumbs.gfycat.com/ForkedKaleidoscopicCollie-size_restricted.gif",
      "8": "https://media.giphy.com/media/10abWjdcwyuKHK/giphy.gif",
      "9": "http://i.imgur.com/2JJwMO3.gif",
      "10":
        "https://78.media.tumblr.com/76fde5ab37340ebd838f9b1cb632c8a0/tumblr_oegkawmu8y1tydz8to1_500.gif",
      "11":
        "https://uploads.disquscdn.com/images/8a82068d5b61e9f6a88dffd09da8bf0046f2297532f50ca35cf4a071ed20b6c6.gif",
      "12": "http://i.imgur.com/eawMRR7.gif",
      "13": "http://i.imgur.com/V5p3iYb.gif",
      "14": "http://i.imgur.com/AFSxeoh.gif",
      "15": "http://i65.tinypic.com/212y58y.gif",
      "16":
        "https://media1.tenor.com/images/cb871efa727558862700f8f3f924df67/tenor.gif",
      "17": "http://i.imgur.com/FXbChLe.gif",
      "18": "http://i.imgur.com/oxrL5x5.gif",
      "19":
        "https://i.pinimg.com/originals/dd/8c/1b/dd8c1b1d4ef56c49d4dbfce0ccef1b7d.jpg",
      "20": "http://i.imgur.com/WB8faiz.gif",
      "21": "http://i.imgur.com/siauD6Y.gif",
      "22": "http://i.imgur.com/V0nzHKI.gif",
      "23": "http://i.imgur.com/iSfy9qQ.gif"
    };
    const embed = new Discord.MessageEmbed();
    embed.setDescription(message.author.username + " is Pouting");
    const randm = Math.random();

    embed.setImage(
      imgpout[Math.floor(randm * Object.keys(imgpout).length).toString()]
    );

    embed.setColor(0x23ff12);
    message.channel.send(embed);
  }
});



//
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.author.bot) return;
  if (!message.content.startsWith(findprefix)) return;
  if (message.content.startsWith(findprefix + "server-avatar")){
    let doma = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(message.guild.name, message.guild.iconURL())
      .setTitle("Avatar Link")
      .setURL(message.guild.iconURL())
      .setImage(message.guild.iconURL())
      .setFooter(`${message.author.tag}`, message.author.avatarURL());
    message.channel.send(doma);
  }
});
//


        



//

client.on("message", async message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  const request = require("request");

  let args = message.content.split(/[ ]+/);
  let word = args.slice(1).join(" ");
  if (message.content.startsWith(findprefix + "coved")) {
    try {
      if (!word)
        return message.reply(
          "Usage:" +
            `${findprefix}corona <country>**\nEx: ${findprefix}corona Morocco`
        );

      request(
        {
          json: true,
          url: "https://corona.lmao.ninja/v2/countries/" + word
        },
        (err, res, json) => {
          if (err) {
            message.reply("There was an error!");
          } else {
            let embed = new Discord.MessageEmbed()
              .setTitle(`Corona In ${json.country}`)
              .setDescription(
                `**Total Cases: **${json.cases}\n**Total Deaths: **${json.deaths}\n**Total Recoverd: **${json.recovered}\n**Today Cases: **${json.todayCases}\n**Today Deaths: **${json.todayDeaths}`
              )
              .setThumbnail(json.countryInfo.flag)
              .setColor("#e32a19");
            message.channel.send(embed);
          }
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});

//
client.on("message", message => {
  var args = message.content.split(" ");
  var ownerid = "508317503806767106"; // ايدي اونر البوت
  if (args[0] == prefix + "khrj") {
    if (message.author.id == ownerid) {
      if (!args[1]) {
        return message.reply("`" + args[0] + " <server id>`");
      }
      var findserver = client.guilds.cache.find(gld => gld.id == args[1]);
      if (!findserver) {
        return message.reply("i can't find the guild");
      }
      findserver.leave();
    }
  }
});
//
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  var args1 = message.content
    .split(" ")
    .slice(1)
    .join(" "); //rezx
  var args2 = message.content
    .split(" ")
    .slice(2)
    .join(" "); //rezclient.on("message",message => {
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(`${findprefix}feedback-bot`)) {
    message.react(":success:743453490034245743");
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    const testId = message.client.channels.cache.get("742445667179561122");
    let feedback = message.content.slice(
      message.content.indexOf(args[0]),
      message.content.length
    );
    const test = new Discord.MessageEmbed()
      .setTitle("Feedback")
      .setThumbnail(testId.guild.iconURL({ dynamic: true }))
      .setDescription(feedback)
      .addField("User", message.member, true)
      .addField("Server", message.guild.name, true)
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    testId.send(test).then(msg => {
      msg.react("    :l7ob:743422445310181426");
    });
  }
});
//

client.on("message", message => {
  var args1 = message.content
    .split(" ")
    .slice(1)
    .join(" "); //rezx
  var args2 = message.content
    .split(" ")
    .slice(2)
    .join(" "); //rezclient.on("message",message => {
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(`${prefix}sug-bot`)) {
    message.channel.send(
      "Your suggest has been send and thx for you suggest😊 "
    );

    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    const suggestId = message.client.channels.cache.get("755881798881247372");
    let suggest = message.content.slice(
      message.content.indexOf(args[0]),
      message.content.length
    );
    const suggest2 = new Discord.MessageEmbed()
      .setTitle("> Suggest for bot")
      .setThumbnail(suggestId.guild.iconURL({ dynamic: true }))
      .setDescription(suggest)
      .addField("> User", message.member, true)
      .addField("> Server", message.guild.name, true)
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    suggestId.send(suggest2).then(msg => {
      msg.react("   :JAEJ05501:750065434879066162").then(nextreact => {
        msg.react(":UEMY1715:750071155267731476").then(nextreact => {
          msg.react("👿").then(nextreact => {
            msg.react(":IBXD20731:750064407748411533");
          });
        });
      });
    });
  }
});

//

//
client.on("message", async message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }

  const request = require("request");
  let args = message.content.split(/[ ]+/);
  let word = args.slice(1).join(" ");

  if (message.content.startsWith(findprefix + "search-gif")) {
    try {
      if (!word) return message.reply("You need to give something to search!");

      request(
        {
          url:
            "https://api.tenor.com/v1/search?q=" +
            word +
            "&key=5THPJ661F87H&limit=1",
          json: true
        },
        async (req, res, json) => {
          let embed = new Discord.MessageEmbed()
            .setFooter("Request By: " + message.author.username)
            .setImage(json.results[0].media[0].gif.url)
            .setColor("RANDOM");

          message.channel.send(embed);
        }
      );
    } catch (err) {
      message.channel.send("There was an error!\n" + err).catch();
    }
  }
});
//

//
client.on("message", msg => {
  var findprefix;
  if (msg.channel.guild && !pref[msg.guild.id]) {
    pref[msg.guild.id] = {
      prefix: prefix
    };
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (msg.channel.guild && pref[msg.guild.id]) {
    findprefix = pref[msg.guild.id].prefix;
  }
  if (msg.content === findprefix + "About") {
    const Younes =
      "https://discord.com/api/oauth2/authorize?client_id=732783981447086116&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fc8FDDTC&scope=bot";
    const SupYounes = "https://discord.gg/UQPAyxH";

    let embed = new Discord.MessageEmbed()
      .setTitle(`**𝐁𝐎𝐓**`) //
      .setDescription(
        `[ 𝐈𝐧𝐯𝐢𝐭𝐞 𝐋𝐢𝐧𝐤 𝐁𝐨𝐭](${Younes}) \n [𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐒𝐞𝐫𝐯𝐞𝐫](${SupYounes}) `
      );
    msg.author.send(embed);
    msg.author.send("**" + msg.guild.name + " prefix is** `" + `${findprefix}` + "`").then(e => {
        msg.react("✅");
      })
      .catch(() => {
        msg.react("❌");
      });
  }
});
//

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.content.startsWith(findprefix + "slap")) {
    let user = message.mentions.users.first();
    if (!user) {
      return 
    }
    let slaps = [
      "https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif",
      "https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif",
      "https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif",
      "https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif",
      "https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif",
      "https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif",
      "https://media1.tenor.com/images/0720ffb69ab479d3a00f2d4ac7e0510c/tenor.gif",
      "https://media1.tenor.com/images/8b80166ce48c9c198951361715a90696/tenor.gif",
      "https://media1.tenor.com/images/6aa432caad8e3272d21a68ead3629853/tenor.gif",
      "https://media1.tenor.com/images/4ec47d7b87a9ce093642fc8a3c2969e7/tenor.gif",
      "https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif",
      "https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif",
      "https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif",
      "https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif",
      "https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif",
      "https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif"
    ];
  
    let embed24 = new Discord.MessageEmbed()
          embed24.setDescription (message.author.username + "Take a slap, sweetheart, dear **" + user.username + "**✌!!")
          embed24.setImage(
   slaps[Math.floor(Math.random() * slaps.length)]
          

    );

    embed24.setColor(0x23ff12);
    return message.channel.send(embed24)
} 
})

//

client.on("message", async message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.author.bot || message.channel.type === "dm") return;
  if (message.content.startsWith(findprefix + "info-games")) {
    let args = message.content.split(" ");
    if (!args[1]) return;
    let i = new Discord.MessageEmbed();
    i.setColor("#36393e");
    let o = await message.channel.send(
      `**<:inori_coolstory_nom:743452627458850896> | .. please wait. 1s**`
    );
    require("steam-search").getFirstGameInfo(
      args.slice(1).join(" "),
      async function(data, err) {
        if (data !== "no") {
          i.setThumbnail(data.image);
          i.addField(
            "• General",
            `→ Name: \`${data.title}\`\n→ Price: \`${
              data.price.includes("$")
                ? "$" + data.price.split("$")[1]
                : data.price
            }\`\n→ Release \`${pretty(
              Date.now() - new Date(data.release).getTime()
            )}\``
          );
          i.setFooter(
            "https://media.discordapp.net/attachments/742802570657136661/755497510004326410/image0.gif"
          );

          await o.delete().catch(e => {});
          await message.channel.send(i);
        } else {
          await o.delete().catch(e => {});
          return message.channel.send(
            `**<a:attention:749944373655109682>| Can\'t found any game with name : \`${args
              .slice(1)
              .join(" ")}\`**`
          );
        }
      }
    );
  }
});

//
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.content.startsWith(findprefix + "help")) {
    let messageArgs = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let messageYounes = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    const Younes2 = "https://discord.gg/UQPAyxH";
    var YounesEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("<a:announecement:743428649998614678> | 𝐇𝐞𝐥𝐩 𝐌𝐞𝐧𝐮")
      .addField(
        "> <:SnugKomi:743451984463659043> ˿𝐏𝐔𝐁𝐋𝐈𝐂˿",
        `** ${findprefix}user-info , ${findprefix}avatar , ${findprefix}server-avatar , ${findprefix}server-info 
=========
${findprefix}sug <your_suggest> ,   ${findprefix}coved <country> ,
${findprefix}covid-stats , ${findprefix}info-anime , ${findprefix}info-games , ${findprefix}search-gif ,     ${findprefix}time-word , 
=========
${findprefix}barf , ${findprefix}cry , ${findprefix}shock , ${findprefix}pout , ${findprefix}slap , ${findprefix}movie , ${findprefix}ascii , ${findprefix}memes .**`
      )
      .addField(
        "> <a:prmtr:749941576343748608> ˿MOD˿ ",
        `**${findprefix}set-sug ,
${findprefix}set-my-voice , 
${findprefix}ban , ${findprefix}unban ,  
${findprefix}kick , ${findprefix}mute , ${findprefix}unmute  , ${findprefix}vmute , ${findprefix}unvmute , ${findprefix}warns , ${findprefix}warn ,
${findprefix}remove-warn , ${findprefix}set-prefix**`
      )
         .addField(
        "> 📨 ˿Ticket˿",
        `** ${findprefix}set-role  , ${findprefix}new , ${findprefix}close  ,
${findprefix}forceclose
${findprefix}add , ${findprefix}remove , ${findprefix}rename 
and create category name TICKET** `)
   
    .addField(
        "> <a:music:749942735380676648> ˿𝐌𝐮𝐬𝐢𝐜˿",
        `** ${findprefix}play (p) , ${findprefix}stop , ${findprefix}volume (vol) , ${findprefix}pause , ${findprefix}resume , ${findprefix}repeat , ${findprefix}skip , ${findprefix}queue .** `
      )
      .addField(
        "> <:KYRI3300:750066762342596698> ˿𝐁𝐎𝐓˿ ",
        `**${findprefix}About
${findprefix}feedback-bot
${findprefix}sug-bot 
${findprefix}call-support 
 ${findprefix}ping , ${findprefix}help.**`
      )
      .setTimestamp()

      /*    .setFooter(`${message.author.avtar()}` + "~_~ Hi I'm good bot ✌🏻 ")  */

      .setThumbnail(`${message.author.avatarURL()}`)
      .setAuthor(message.author.username, message.author.avatarURL())
      .setFooter(`${message.guild.name} ~_~`)
      .setDescription(
        `[ 𝐈𝐧𝐯𝐢𝐭𝐞 𝐋𝐢𝐧𝐤 𝐁𝐨𝐭](${Younes}) \n[ 𝐒𝐮𝐩𝐩𝐨𝐫𝐭 𝐒𝐞𝐫𝐯𝐞𝐫](${Younes2})`
      )
      .setThumbnail(client.user.avatarURL());

    message.channel.send(YounesEmbed).then(msg => {
      msg.react("   :what:749944951135273030");
    });
  }
});
//

//
client.on("message", async message => {
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
  if (!message.guild) return;

  if (message.content === findprefix + "set-my-voice") if(message.content === findprefix + "join"){
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
  message.reply("okay ~_~")
    } else {
      message.reply("Youu need to join a voice channel first!");
  
    }
  }
});
//

//
const covid = require("novelcovid");

client.on("ready", () => console.log("bikhir lhmd"));

client.on("message", async message => {
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
  if (message.content.startsWith(`${findprefix}covid-stats`)) {
    const covidStats = await covid.all();

    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("˿•_• Coved in word˿")
        .setColor("BLUE")
        .addFields(
          {
            name: `Cases`,
            value: covidStats.cases.toLocaleString(),
            inline: true
          },
          {
            name: `Cases Today`,
            value: covidStats.todayCases.toLocaleString(),
            inline: true
          },
          {
            name: `Deaths`,
            value: covidStats.deaths.toLocaleString(),
            inline: true
          },
          {
            name: `Deaths today`,
            value: covidStats.deaths.toLocaleString(),
            inline: true
          },
          {
            name: `Recovered`,
            value: covidStats.recovered.toLocaleString(),
            inline: true
          },
          {
            name: `Recovered today`,
            value: covidStats.todayRecovered.toLocaleString(),
            inline: true
          },
          {
            name: `Infected right now`,
            value: covidStats.active.toLocaleString(),
            inline: true
          },
          {
            name: `Critical condition`,
            value: covidStats.critical.toLocaleString(),
            inline: true
          },
          {
            name: `Tested`,
            value: covidStats.tests.toLocaleString(),
            inline: true
          }
        )
    );
  }
});
//

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  var args1 = message.content
    .split(" ")
    .slice(1)
    .join(" "); //rezx
  var args2 = message.content
    .split(" ")
    .slice(2)
    .join(" "); //rezclient.on("message",message => {
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");

  if (message.content.startsWith(findprefix + "call-support")) {
    if (!args)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#00BFFF")
          .setTitle("Probleme..")
          .setDescription("٠_٠ Type your msg please ")
          .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );

    let Younes = new Discord.MessageEmbed()

      .setDescription(`**Message :**\n\`\`\`${args}\`\`\``)
      .setColor("#00BFFF")
      .addField(`**User message  :**`, `<@${message.author.id}>`)
      .addField(`**ID User :**`, `\`\`\`${message.id}\`\`\``);
    message.client.channels.cache
      .get("755469063865761922")
      .send(Younes)
      .then(msg => {
        msg.react("  :i7dar:749944354361180280");
        message.client.channels.cache
          .get("755469063865761922")
          .send("<@&728722479232581744>" + "<@&748462729911599134>");

        return message.channel.send("Then send a message successfully");
      });
  }
}); 

//




//
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  let anime = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(findprefix + "info-anime")) {
    if (!anime)
      return message.channel.send(
        "Please Write The Anime Name                              "
      );
    getInfoFromName(anime).then(result => {
      let embed = new Discord.MessageEmbed()
        .setTitle(result.title)
        .addField("> | **Trailer** : ", `${result.trailer}` || `Unknown`)
        .addField("> | **Episodes** :", `${result.episodes}` || `Unknown`)
        .addField("> | **Status** : ", `${result.status}` || `Unknown`)
        .addField("> | **Studios** : ", `${result.studios}` || `Unknown`)
        .addField("> | **Genres** : ", `${result.genres}` || `Unknown`)
        .addField("> | **Ranked** : ", `${result.ranked}` || `Unknown`)
        .addField("> | **Favorites** : ", `${result.favorites}` || `Unknown`)
        .addField("> | **Rating** : ", `${result.rating}` || `Unknown`)
        .addField("> | **Premiered** : ", `${result.premiered}` || `Unknown`)
        .addField("> | **Duration** : ", `${result.duration}` || `Unknown`)
        .addField("> | **Score** : ", `${result.score}` || `Unknown`)
        .addField("> | **View  By** : ", `${result.scoreStats} ` || `Unknown`)

        .addField(
          "<a:l3fya:749943190957719574> **𝐕 𝐎 𝐓 𝐄 𝐒 **<a:l3fya:749943190957719574>",
          "<:7835_fino_pout:743451994718601236> | If you do not like it\n<:inori_coolstory_nom:743452627458850896> | If you are what you will see\n<:BFIJ14891:750062538506633297> | I'll watch in two dimensions\n<:2102_senkuu_nani:743452542230462504> | Watch it now"
        )
        .setDescription(`${result.synopsis || "Unknown"}`)
        .setImage(result.picture)
        .setColor("#0a0000");

      message.channel.send(embed).then(msg => {
        msg.react("    :7835_fino_pout:743451994718601236").then(nextreact => {
          msg
            .react(":inori_coolstory_nom:743452627458850896")
            .then(nextreact => {
              msg
                .react(":BFIJ14891:750062538506633297")
                .then(nextreact => {
                  msg.react(":2102_senkuu_nani:743452542230462504");
                })
                .catch(error => console.log(error));
            });
        });
      });
    });
  }
});

//
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.content.startsWith(`${findprefix}avatar`)) {
    let user = message.author || message.mentions.users.first();

    let embed = new Discord.MessageEmbed()
      .setTitle(`${user.username}'s Avatar!`)
      .setImage(user.avatarURL({ size: 2048, dynamic: true, format: "png" }))
      .setColor("RANDOM");
    message.channel.send(embed);
  }
}); //
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.content.startsWith(`${findprefix}kick`)) {
    let user = message.mentions.users.first();
    let reasonkick = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let guild = message.guild;
    let memberkick = message.guild.member;

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send(
        "`You Require `KICK MEMBERS` Permission to Execute this Command`"
      );

    if (message.mentions.users.size < 1) {
      return message.channel.send("You need to mention someone to kick!");
    }

    if (!reasonkick) {
      reasonkick = "No Reason Given";
    }

    if (!message.guild.member(user).kickable) {
      return message.channel.send(
        "That Member couldn't be kicked due to role hierarchy"
      );
    }

    message.guild.member(user).kick();

    let embed = new Discord.MessageEmbed()
      .setTitle("User Was Successfully Kicked")
      .setDescription(
        `${user.username}#${user.discriminator} was kicked by ${message.author.username}`
      )
      .addField(`Reason :`, `${reasonkick}`)
      .setColor("RANDOM");
    message.channel.send(embed);

    let DmEmbed = new Discord.MessageEmbed()
      .setDescription(`You were Kicked from ${guild} for: ${reasonkick}`)
      .setColor("RANDOM");
    user.send(DmEmbed);
  }
});
//

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  var figlet = require("figlet");

  let command = message.content.split(" ")[0];
  command = command.slice(findprefix.length)

  let args = message.content.split(" ").slice(1);

  if (command == "ascii") {
    let text = args.join(" ");
    if (!text) {
      return message.channel.send(
        `Please provide text for the ascii conversion!`
      );
    }
    let maxlen = 20;
    if (text.length > 20) {
      return;
      message.channel.send(
        `Please put text that has 20 characters or less because the conversion won't be good!=_=`
      );
    }
    //
    figlet(text, function(err, data) {
      message.channel.send(data, {
        code: "AsciiArt"
      });
    });
  }
});
//

let warning = JSON.parse(fs.readFileSync("./commands/warning.json", "utf8"));
client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };

    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (
    message.author.bot ||
    message.channel.type == "dm" ||
    !message.channel.guild
  )
    return;
  if (!message.content.startsWith(findprefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(findprefix.length);
  if (command == "warn" || command == "اندار") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!warning[message.guild.id]) warning[message.guild.id] = { warns: [] };
    let T = warning[message.guild.id].warns;
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send(
        `**:rolling_eyes: I can't find this member**`
      );
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!reason)
      return message.channel.send(
        `**:rolling_eyes: Please specify a reason.**`
      );
    let W = warning[message.guild.id].warns;
    let ID = 0;
    let leng = 0;
    W.forEach(w => {
      ID++;
      if (w.id !== undefined) leng++;
    });
    if (leng === 90)
      return message.channel.send(
        `** You Can't Give More than \`90\` Warns**, please reset the warn list.`
      );
    T.push({
      user: user.id,
      by: message.author.id,
      reason: reason,
      time: moment(Date.now()).format("llll"),
      id: ID + 1
    });
    message.channel.send(`** @${user.username} warned!**`);
    fs.writeFile("./commands/warning.json", JSON.stringify(warning), err => {
      if (err) console.error(err);
    });
    fs.writeFile("./commands/warning.json", JSON.stringify(warning), err => {
      if (err) console.error(err);
    });
    user.send(
      new Discord.MessageEmbed()
        .addField("**:warning: You were warned!**", reason)
        .setFooter(message.guild.name, message.guild.iconURL())
        .setTimestamp()
        .setColor("#fffe62")
    );
    return;
  }
  if (command == "warnings" || command == "اندارات") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!warning[message.guild.id]) warning[message.guild.id] = { warns: [] };
    let count = 0;
    let page = message.content.split(" ")[1];
    if (!page || isNaN(page)) page = 1;
    if (page > 4)
      return message.channel.send("**Warnings are only recorded on 4 pages!**");
    let embed = new Discord.MessageEmbed().setFooter(
      message.author.username,
      message.author.avatarURL()
    );
    let W = warning[message.guild.id].warns;
    W.forEach(w => {
      if (!w.id) return;
      count++;
      if (page == 1) {
        if (count > 24) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 24)
          embed.addField(
            "**<:IBXD20731:750064407748411533> More ?**",
            `${message.content.split(" ")[0]} 2`
          );
      }
      if (page == 2) {
        if (count <= 24) return null;
        if (count > 45) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 45)
          embed.addField(
            "**<:IBXD20731:750064407748411533>: More ?**",
            `${message.content.split(" ")[0]} 3`
          );
      }
      if (page == 3) {
        if (count <= 45) return null;
        if (count > 69) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 69)
          embed.addField(
            "**:sparkles: More ?**",
            `${message.content.split(" ")[0]} 4`
          );
      }
      if (page == 4) {
        if (count <= 69) return null;
        if (count > 92) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 64) embed.addField("**FULL**", `** **`);
      }
    });
    embed.setTitle(`**${count} Warnings** [ ${page}/4 ]`);
    message.channel.send(embed);
  }
  if (command == "remove-warn" || command == "rm") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!warning[message.guild.id]) warning[message.guild.id] = { warns: [] };
    let args = message.content.split(" ")[1];
    if (!args)
      return message.channel.send(
        `**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`
      );
    let user = message.mentions.members.first();
    if (user) {
      let C = 0;
      let a = warning[message.guild.id].warns;
      a.forEach(w => {
        if (w.user !== user.id) return;
        delete w.user;
        delete w.reason;
        delete w.id;
        delete w.by;
        delete w.time;
        C++;
      });
      if (C === 0)
        return message.channel.send(
          `**:mag: I can't find the warning that you're looking for.**`
        );
      return message.channel.send("**" + C + " warnings has been removed.**");
    }
    if (args == "all") {
      let c = 0;
      let W = warning[message.guild.id].warns;
      W.forEach(w => {
        if (w.id !== undefined) c++;
      });
      warning[message.guild.id] = { warns: [] };
      fs.writeFile("./commands/warning.json", JSON.stringify(warning), err => {
        if (err) console.error(err);
      });
      fs.writeFile("./commands/warning.json", JSON.stringify(warning), err => {
        if (err) console.error(err);
      });
      return message.channel.send(
        "**✅ " + c + " warnings has been removed.**"
      );
    }
    if (isNaN(args))
      return message.channel.send(
        `** Please specify warning number or user mention or (all) to delete all warnings.✌🏻**`
      );
    let W = warning[message.guild.id].warns;
    let find = false;
    W.forEach(w => {
      if (w.id == args) {
        delete w.user;
        delete w.reason;
        delete w.id;
        delete w.by;
        delete w.time;
        find = true;
        return message.channel.send("**warn has been removed.**");
      }
    });
    if (find == false)
      return message.channel.send(
        `**:mag: I can't find the warning that you're looking for.**`
      );
  }
});
//




client.on("message", async message => {
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
  if (message.content.startsWith(findprefix + "memes")) {
    let number = Math.floor(Math.random() * 400);
    if (number > 500) number--;
    message.channel.send(`https://ctk-api.herokuapp.com/meme/${number}`);
  }
});

//
client.on("guildMemberAdd", async member => {
  var roomID = "755510565677432933",
    room = member.guild.channels.cache.get(roomID);
  if (!room) return;
  var roomName = room.name;
  room.edit({ name: "wlcm : " + member.user.username });
  setTimeout(() => {
    room.edit({ name: roomName });
  }, 1000 * 3);
});
//
client.on("message", message => {
  var args = message.content.split(" ");
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (args[0] === findprefix + "set-prefix") {
    let prefixy = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args[1]) {
      message.channel.send(                 ""
      );
    } else if (
      message.guild.member(message.author).hasPermission("SERVER_OWNER")
    ) {
      pref[message.guild.id].prefix = args[1];
      fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));

      message.channel.send("");
      message.channel.send("");
      message.channel.send("");
    }
  }
});

//
client.on('message', message => {
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
  if (message.content === findprefix + "InfOwner") {
    let embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username)
   .setFooter(' Owner bot')
   .setTitle("info owner") 
  .addField('name', `<@508317503806767106>`)
  .addField('ID' , `508317503806767106`)
  .addField('FROM' , `🇲🇦`)
   .addField('AGE' , `this is owner is have any age🤓`)
   .setColor("RANDOM") 
  
  message.channel.send(embed);
  }
  });
//

//
client.on("message", async message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  var args1 = message.content
    .split(" ")
    .slice(1)
    .join(" "); //rezx
  var args2 = message.content
    .split(" ")
    .slice(2)
    .join(" "); //rezclient.on("message",message => {
  var args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.author.bot) return;

  if (message.content.startsWith(findprefix + "ban")) {
    let user = message.mentions.users.first();
    let reasonban = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    let guild = message.guild;
    let memberban = message.guild.member;

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        "`You Require `BAN MEMBERS` Permission to Execute this Command`"
      );

    if (message.mentions.users.size < 1) {
      return message.channel.send("You need to mention someone to Ban >_<!");
    }

    if (!reasonban) {
      reasonban = "No Reason Given";
    }

    if (!message.guild.member(user).kickable) {
      return message.channel.send(
        "That Member couldn't be banes due to role hierarchy"
      );
    }

    message.guild.member(user).ban();

    let banembed = new Discord.MessageEmbed()
      .setTitle("User Was Successfully ban ._.")
      .setDescription(
        `${user.username}#${user.discriminator} was baned by ${message.author.username}`
      )
      .addField(`Reason :`, `${reasonban}`)
      .setColor("RANDOM");
    message.channel.send(banembed);

    let Dmban = new Discord.MessageEmbed()
      .setDescription(`You were baned from ${guild} because : ${reasonban}`)
      .setColor("RANDOM");
    user.send(Dmban);
  }
});
/*
  
        var args = message.content.substring(prefix.length).split(" ");  
  
 */


//

//Unban

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  let command = message.content.split(" ")[0];
  if (command == findprefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "Alllllllllll") {
      message.guild.fetchBans().then(zg => {
        zg.forEach()(Saad => {
          message.guild.members.unban(Saad);
        });
      });
      return message.channel.send("**Sucssefully Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild.members
      .unban(args)
      .then(m => {
        message.channel.send(
          `> **-** **Done Unbanned this user ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `> **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});
//

client.on("message", async message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (
    message.content.startsWith(findprefix + "mute") ||
    message.content.startsWith(findprefix + "اسكات")
  ) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${findprefix}mute @mention**`);
    let mute = message.guild.roles.cache.find(role => role.name === "muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "muted",
          color: "#000000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    
 	let reason = message.content.split(" ").slice(2).join(" ");
	const muteembed = new Discord.MessageEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL())
		.setThumbnail(user.displayAvatarURL())
		.addField("**:busts_in_silhouette:  Name :**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer: BY :**", '**[ ' + "`"+`${message.author.tag}`+ "`" + ' ]**',true)
		.addField("**:book:  Reason :**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send(muteembed);
		var muteembeddm = new Discord.MessageEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL())
		.setDescription(`      
> ${user} || \n**You are dying punished**
> BY
${message.author.tag} 
> Reason :
[ ${reason} ] 
`)
		.setFooter(`In server ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }  
} )

/////unmute
client.on("message", async message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (
    message.content.startsWith(findprefix + "unmute") ||
    message.content.startsWith(findprefix + "تكلم")
  ) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(
        `**>>> ${findprefix}unmute <@mention Or ID>**`
      );
    let mute = message.guild.roles.cache.find(role => role.name === "muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`${user.username} Unmuted!`);
  }
  if (message.content.toLowerCase() === `${findprefix}help-unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${findprefix}unmute @user or ID`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});
//mute voice

client.on("message", message => {
  var findprefix;
  if (message.channel.guild && !pref[message.guild.id]) {
    pref[message.guild.id] = {
      prefix: prefix
    };
    // By AboKhalil - Alpha Codes 22/8/2019.
    fs.writeFileSync("./prefixs.json", JSON.stringify(pref, null, 4));
    findprefix = prefix;
  }
  if (message.channel.guild && pref[message.guild.id]) {
    findprefix = pref[message.guild.id].prefix;
  }
  if (message.content.startsWith(findprefix + "vmute")) {
    var mnt = message.mentions.members.first();
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.hasPermission("MUTE_MEMBERS") ||
      !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")
    )
      return;
    if (!mnt)
      return message.channel.send(
        `** Please Use ➢** ${findprefix}vmute \`\`[@memtion]\`\``
      );
    if (!mnt.voiceChannel)
      return message.channel.send(
        ` ⑆  *${mnt.user.tag}* is not in a voice♬ channel!`
      );
    mnt
      .setMute(true)
      .then(() => {
        message.channel.send(` Successfully Voice Muted ${mnt}`);
      })
      .catch(console.error);
  }
  if (message.content.startsWith(findprefix + "unvmute")) {
    var mnt = message.mentions.members.first();
    if (
      message.author.bot ||
      message.channel.type == "dm" ||
      !message.member.hasPermission("MUTE_MEMBERS") ||
      !message.guild.member(client.user).hasPermission("MUTE_MEMBERS")
    )
      return;
    if (!mnt)
      return message.channel.send(
        `**Please Use :** ${findprefix}unvmute \`\`[@memtion]\`\``
      );
    if (!mnt.voiceChannel)
      return message.channel.send(`[✦]  *${mnt.user.tag}* is not in a voice channel!`);
mnt.setMute(false).then(() => {
message.channel.send(`**has been Unmuted Voice ** ${mnt}`)
}).catch(console.error);
}
});
//https://github.com/xixi52/LenoxBot/blob/testing/commands/tickets/ticket.js
client.on('message', Younes =>{
  if(Younes.content.startsWith(prefix + '.emoji')) {
    let args = Younes.content.split(" ").slice(1).join(" ");
    if(!args) return Younes.channel.send('**Please type the emoji ID after the command!**')
    if(args.length < "18" || args.length > "18" || isNaN(args)) return Younes.channel.send(`**This emoji Can't be Found :x:**`)
   Younes.guild.emojis.create(`https://cdn.discordapp.com/emojis/${args}.gif`, `${args}`).catch(mstry => {
     return Younes.channel.send(`**This emoji Can't be Found :x:**`)
    })
    Younes.channel.send(`**Successfully Added The Emoji ✅**`)
  }
});
//


client.on("message", async message => {
   
if (message.guild.id != "537355138122121218") return;
 if (message.channel.id != "741332546536603648" ) return;
 if(message.author.id === client.user.id) return;    message.react("✅")

  }
  

) 


