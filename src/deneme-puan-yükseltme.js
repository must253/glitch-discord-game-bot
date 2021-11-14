
const Discord = require("discord.js");
const db = require('quick.db');


exports.run = async (client, message, args) => {
 if(message.author.id !== '638324859818213380') if(message.author.id !== '638324859818213380  ')
 
   
   
  return;
 
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Yollayacağın Puan yazman gerek!');
  let user = message.mentions.users.first();
let mustpuan = db.get(`mustpuan_${message.guild.id}_${message.author.id}`)
if(mustpuan == null) mustpuan = 1

 if (!user) return message.reply('Kime puan yollayacağımı etiketlemen lazım!');
  if (user.bot === true) return message.reply('Manyakmısın La Bota Puan Yollanırmı?!');
  
   if (isNaN(args[1])) return message.channel.send("Bir yazımı yollayacaksın? Lütfen bir miktar gir!.")
  
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(` Abine Kurban Olurum Adamın Dediğini Yapın Ulan\nBaşarıyla ${user} adlı kullanıcıya Puan yollandı \n Yollanılan miktar: ${mesaj}`)
message.channel.send(embed)
db.add(`mustpuan_${message.guild.id}_${message.author.id}`, mesaj)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["puan-yükselt"],
  permLevel: 0
};

exports.help = {
  name: 'puan-yükselt-vola',
  description: 'Puanını gösterir.',
  usage: 'puan-yükselt <@üye> <miktar>'
};
