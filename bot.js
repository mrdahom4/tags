const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('ready', function(){//Toxic Codes // n3k4a is one
 console.log(`Logged in as ${client.user.tag}!`); //Toxic Codes // n3k4a is one
   
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293']; // صور اضافيه
   var s = ['483055660209012736','480169573530861578','483055655800930315'];  // صور  الي بتشغل
    setInterval(function (){//Toxic Codes // n3k4a is one  
    client.user.setPresence({//Toxic Codes // n3k4a is one
 game: { //Toxic Codes // n3k4a is one
    type: 1,//Toxic Codes // n3k4a is one
     url: 'https://www.twitch.tv/n3k4a',//Toxic Codes // n3k4a is one
    name: 'Only  Lòrans.',  // الكلام الي في التوتش//Toxic Codes // n3k4a is one
    application_id: '477187715658547201', // ايدي البوت او ايدي الحساب حقك //Toxic Codes // n3k4a is one
     assets: {//Toxic Codes // n3k4a is one
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,//Toxic Codes // n3k4a is one
 
    }//Toxic Codes // n3k4a is one
  }//Toxic Codes // n3k4a is one
    });//Toxic Codes // n3k4a is one
    }, 5000);//سرعه تغير الصور  // n3k4a is one
});//Toxic Codes // n3k4a is one


const myDiscriminator = ["0001", "0002","0005","0009"];
const bot = new(require("discord.js")).Client({fetchAllMembers: true});

const password = "901901901"; //بسورد حسابك
const token = "NTQwNTE1MzU5MjI1MDIwNDE5.D1DJmw.iieZV3-BR6hNhGTmx-nyBw3A-v8"; //توكن حسابك
 //Toxic Codes
bot.login(token); //Toxic Codes

function changeDiscriminator() {
  if (myDiscriminator.includes(bot.user.discriminator.toString()))
    return console.log("Discriminator Loaded: " + bot.user.discriminator);
  try {
    const us = bot.users.find(u => u.discriminator === bot.user.discriminator && u.username !== bot.user.username && !u.bot).username;
    console.log(Date.now(), "Username Loaded: " + us);
    bot.user.setUsername(us, password).then((u) => {
      console.log(Date.now(), "Username: " + u.username, "Discriminator: " + u.discriminator);
      setTimeout(changeDiscriminator, 8640 * 10000);
    }).catch((err) => {
      console.log(Date.now(), "An error occurred. Trying again in sixty (60) seconds.");
      setTimeout(changeDiscriminator, 60 * 1e3);
    });
  } catch(e) {
    console.log(Date.now(), `[${e}] Trying again in 30 seconds.`); //Toxic Codes
    setTimeout(changeDiscriminator, 30 * 1e3);
  } //Toxic Codes
} //Toxic Codes

bot.once("ready", () => {
  console.log(Date.now(), "Started with " + bot.users.size + " users.");
  changeDiscriminator();
  if(myDiscriminator.includes(bot.user.discriminator)) {
      console.log(`I successfully got the discrim ${bot.user.discriminator}!`)  //Toxic Codes
      process.exit(); //Toxic Codes
  } //Toxic Codes
}); //Toxic Codes



client.login(process.env.BOT_TOKEN);
