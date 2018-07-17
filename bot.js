const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`I'm ready with ${client.user.tag}!`);
});



client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.channel.send({file : "https://cdn.discordapp.com/attachments/468605791977603074/468605892422795267/d91383a6b727a36e.png"})
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.channel.send({file : "https://cdn.discordapp.com/attachments/468605791977603074/468605892422795267/d91383a6b727a36e.png"})
  }
});


client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply(':wink: اهلين نورت');
  }
});


client.on('message', msg => {
    if (msg.content === '.') {
      msg.reply(':heart: صـلـي عـلـى مـحـمـد');
    }
  });


client.on('message', msg => {
    if (msg.content === '..') {
      msg.reply(':honey_pot: نورت ياعسل');
    }
  });


client.on('message', msg => {
    if (msg.content === '...') {
      msg.reply(':sleeping_accommodation: خلاص زودتها روح نام');
    }
  });


client.on('message', msg => {
    if (msg.content === '....') {
      msg.reply(':speech_balloon: ارسل اربع نقاط');
    }
  });


client.on('message', msg => {
    if (msg.content === '.....') {
      msg.reply(':speech_balloon: ارسل خمس نقاط');
    }
  });


client.on('message', msg => {
    if (msg.content === '......') {
      msg.reply(':cake: خلاص كل حلاوه');
    }
  });


  client.on('message', msg => {
    if (msg.content === '-_-') {
      msg.reply(':expressionless:');
    }
  });




  client.on("message", message => {
    if (message.content === "*help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
   :notepad_spiral: ملاحضات لجميع الاعضاء :notepad_spiral: 
   =============================================

   'welcomeارسال رسالة الولكم في روم ال 
   نتمنى بيعجبكم برمجة بوت السيرفر واذا شفتو شي ناقص بلبوت
   ....نتمنى تجو على خاص (♔┏┫KING┣┓♔#7995) 

'

   =============================================
   `)


        message.author.sendEmbed(embed)

    }
});


client.on("message", message => {
    if (message.content === "*help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
   :earth_africa: الأوامر العامه:earth_africa: 
   =============================================
   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *servers | ليظهر لك كل السيرفرات المضاف فيها البوت

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *id | عرض معلومات حسابك او حساب الي تمنشنه

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *ping | لعرض سرعه اتصال البوت

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *bot | لعرض البوت في كم سيرفر  و كم مستخدم و كم روم

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *server | لكي يظهر معلومات السيرفر

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *av  , *av {@user} | لعرض صورتك الشخصيه او صوره الي منشنته

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *as | لعرض صوره السيرفر

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *embed {text} | ليضع البوت الكلام الي كتبته في مربع

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   يختار رقم عشوائي | قرعة   

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *roles | ليعرض رتب السيرفر

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *members | لعرض حالة اعضاء السيرفر

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   للاذكار ولادعيه | اذكار

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   لاخذ تذكره بس للطقطقه | تذكره

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *grole | لمعرفة معلومات الرتبه الي تبي تعرف عنها بمجرد كتابة الامر واسم الرتبه

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *لاقتراح افكار للاداره |اقتراح

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   لاختيار صور عشوائيه بالوان الاسلحه اذا طلع لاحد لون سلاح راح ياخذ بس سلاح الي بلون الي طلع له | قرعة فورتانيت

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   البوت يكتب نكته | نكته

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>
   =============================================
   `)


        message.author.sendEmbed(embed)

    }
});




client.on("message", message => {
    if (message.content === "*help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
   :sleuth_or_spy::skin-tone-1: اوامر الأداره:sleuth_or_spy::skin-tone-1:
   =============================================
   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *kick {@user} {reason} | لطرد العضو

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *ban {@user} {reason} | لحظر العضو

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   ميوت {@user} {reason} | لأسكات العضو

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   فك الميوت {@user} | لفك الميوت عن العضو

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   ليمسح البوت الشات | مسح

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *bc {text} | أرسال رساله الى اعضاء السيرفر الاونلاين

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *لاعطاء ميوت للشات او فتح الميوت عن الشات | فتح الشات*, قفل الشات

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>
   =============================================
   `)


        message.author.sendEmbed(embed)

    }
});


client.on("message", message => {
    if (message.content === "*help") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`
    :video_game: الالعاب :video_game: 
    =============================================
    <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *لعبة كت تويت | كت تويت
   
   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *لعبة هل تعلم | هل تعلم

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>
   
   *hack | لعبة الهكر الوهمي

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>

   *cf | لعبة رمي العمله النقديه

   <*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*>
   =============================================
   `)


        message.author.sendEmbed(embed)

    }
});





client.on('message',async message => {
    if(message.content.startsWith(prefix + "bc")) {
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send(':regional_indicator_b::regional_indicator_c:| **ارسل الرسالة الان**').then(msg => {
  
      let awaitM = message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        msg.edit(':regional_indicator_b::regional_indicator_c:| **هل انت متأكد؟**');
        let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 20000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
          message.guild.members.forEach(member => {
            msg.edit(':regional_indicator_b::regional_indicator_c:| **جاري الارسال**');
            collected.first().delete();
            member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
          });
          }
        });
      });
      });
    }
  });





client.on('message' , message => { 
     if (message.content === prefix + "servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});




client.on('message', message => {
    if (message.content.startsWith("*id")) {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
 
                var mentionned = message.mentions.users.first();
     var mentionavatar;
       if(mentionned){
           var mentionavatar = mentionned;
       } else {
           var mentionavatar = message.author;
           
       }
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
    .setThumbnail(`${mentionavatar.avatarURL}`)
   .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
   .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
    .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
   .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
      
      
   message.channel.sendEmbed(embed);
   console.log('[id] Send By: ' + message.author.username)
     }
 });



client.on('message', message => {
    if (message.content.startsWith("*av")) {
        var mentionned = message.mentions.users.first();
        var KsBot;
        if (mentionned) {
            var KsBot = mentionned;
        } else {
            var KsBot = message.author;

        }
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${KsBot.avatarURL}`)
        message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {

    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (message.content === prefix + "as") {
        const embed = new Discord.RichEmbed()

        .setTitle(`** **`)
            .setAuthor(message.author.username, message.guild.iconrURL)
            .setColor("RANDOM")
            .setImage(message.guild.iconURL)
            .setURL(message.guild.iconrURL)
            .setTimestamp()

        message.channel.send({ embed });
    }
});


client.on("message", message => {
      if (message.content === "*ping") {
        const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
	.setTitle('**Pong ! **')
  .addField('**بنق البوت**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});


    client.on('message', message => {
        if (message.content === '*help') {
          const embed = new Discord.RichEmbed() 
          .setColor("RANDOM")
              .setThumbnail(message.author.avatarURL)
        message.channel.sendMessage(embed);
        message.author.sendEmbed(embed)
        message.reply('**:hearts: *تم ارسال اوامر البوت في الخاص ياقلبي* :hearts:**')
        }
        });


client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "ميوت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);

        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'ميوت/فك الميوت')
            .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).roles.has(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت**").catch(console.error);
        } else {
            message.guild.member(user).addRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم اعطاء العضو ميوت كتابي**").catch(console.error);
            });
        }

    };

});


client.on("message", message => {
    if (message.author.bot) return;

    let command = message.content.split(" ")[0];

    if (command === "فك الميوت") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
        let user = message.mentions.users.first();
        let modlog = client.channels.find('name', 'mute-log');
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
        if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت 'Muted' **").catch(console.error);
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
        const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('الأستعمال:', 'ميوت/فك الميوت')
            .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
            .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

        if (message.guild.member(user).removeRole(muteRole.id)) {
            return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
        } else {
            message.guild.member(user).removeRole(muteRole).then(() => {
                return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
            });
        }

    };

});



client.on('message', message => {
var prefix = "*";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 431111829725380608) return;


if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== '376567440261382146') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

 
if (message.content.startsWith(prefix + 'streem')) {
if (message.author.id !== '376567440261382146') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'set-name')) {
if (message.author.id !== '376567440261382146') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else
    
if (message.content.startsWith(prefix + 'set-avatar')) {
if (message.author.id !== '376567440261382146') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')    
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
} else
	
if (message.content.startsWith(prefix + 'listening')) {
if (message.author.id !== '376567440261382146') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
client.user.setActivity(argresult, {type:'listening'});
    message.channel.sendMessage(`**${argresult} : تم تغير اللستينق الى**`)
} else

if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== '376567440261382146') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
}
 
 });


client.on('message', message => {
    if (message.content === "*bot") {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`**السيرفرات**🌐 **__${client.guilds.size}__**
**المستخدمين**👥 **__${client.users.size}__**
**الرومات**📚 **__${client.channels.size}__** `)
        message.channel.sendEmbed(embed);
    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith("*كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message => {

    if (message.content === "*قفل الشات") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "*فتح الشات") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});


client.on('message', message => {
   if (message.content === "قرعه") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});

var fortnite =["https://gulfupload.com/i/00037/5t2ajkgha9ud.png", "https://gulfupload.com/i/00037/d881e0xq03jj.png", "https://gulfupload.com/i/00037/hag1g4d2r4iw.png", "https://gulfupload.com/i/00037/3yfswvpkyj76.png", "https://gulfupload.com/i/00037/h58tghqbewz9.png"]
client.on('message', message => {
    var args = message.content.split(" ").slice(1);         
if(message.content.startsWith('قرعة فورتنايت')) {
     var embed = new Discord.RichEmbed()
.setImage(fortnite[Math.floor(Math.random() * fortnite.length)])
message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
    if (message.content === "*roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('رتب السيرفر:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


  client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` انت معاقب ميوت شاتي بسبب نشر سرفرات ان كان عن طريق الخطا **ف** تكلم مع الادارة `');
   
       
    }
})


var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
client.on('message', message => {
if(message.content.startsWith(prefix + 'هل تعلم')) {
     var embed = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
    if (message.content.startsWith("*hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: hacking yeah i love it').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 33000)
           });
         }
 })


 var coinflip =["https://f.top4top.net/p_8656frq21.png", "https://d.top4top.net/p_865wngvq1.png"]
 client.on('message', message => {
     var args = message.content.split(" ").slice(1);         
 if(message.content.startsWith(prefix + 'cf')) {
      var embed = new Discord.RichEmbed()
.setImage(coinflip[Math.floor(Math.random() * coinflip.length)])
message.channel.sendEmbed(embed);
 }
});



        client.on("message", message => {
            if (message.content === "*help") {
                const embed = new Discord.RichEmbed()
                    .setColor("RANDOM")
                    .setDescription(`
                      :heart:** مبرمج و مطور البوت **:heart:
    [  ♔┏┫KING┣┓♔#0631  ]
           `)
        
        
                message.author.sendEmbed(embed)
        
            }
        });


        client.on('guildMemberAdd', member => {
            let channel = member.guild.channels.find('name', 'welcome');
            let memberavatar = member.user.avatarURL
                if (!channel) return;
                let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail(memberavatar)
                .addField(':bust_in_silhouette: | الاسم : ', `${member}`)
                .addField(':microphone2: | Welcome!', `اهلا وسهلا بك في السيرفر نورت ياقلبي, ${member}`)
                .addField(':id: | المستخدم :', "**[" + `${member.id}` + "]**")
                .addField(':family_mwgb: | انت العضو رقم', `${member.guild.memberCount}`)
                .addField("Name", `<@` + `${member.id}` + `>`, true)
                .addField('Server', `${member.guild.name}`, true )
                .setFooter(`**${member.guild.name}**`)
                .setTimestamp()
        
                channel.sendEmbed(embed);
        });
        
        client.on('guildMemberAdd', member => {
        
            console.log(`${member}`, "has joined" + `${member.guild.name}`)
        
        });
        client.on('guildMemberRemove', member => {
            console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
            console.log("Leave Message Sent")
        });




            client.on("guildMemberAdd", (member) => {
                let channel = member.guild.channels.get("welcome");// ايدي الروم
                if (!channel) {
                    console.log("!channel fails");
                    return;
                }
                if (member.id == client.user.id) {
                    return;
                }
                console.log('made it till here!');
                var guild;
                while (!guild)
                    guild = client.guilds.get("server")// ايدي السيرفر
                guild.fetchInvites().then((data) => {
                    data.forEach((Invite, key, map) => {
                        var Inv = Invite.code;
                        if (dat[Inv])
                            if (dat[Inv] < Invite.uses) {
             channel.send(`تم دعوته من قبل  ${Invite.inviter}`)            
             }
                        dat[Inv] = Invite.uses;
                    })
                })
            })



            client.on("message", message => {
                if (message.content === "بلا بلا") {
                    if(!message.channel.guild) return message.reply('** هذا الأمر للسيرفرات فقط **');
                   message.reply("بلا بلا")
                }
           });
               

           client.on('guildMemberAdd', member=> {
            member.addRole(member.guild.roles.find("name","ACTIVATED"));
            });



            client.on("message", message => {
                if (message.content === "*invite") {
                    const embed = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setThumbnail(message.author.avatarURL)
                        .setDescription(`
                    رابط دعوة البوت |   ( https://discordapp.com/oauth2/authorize?client_id=431111829725380608&scope=bot&permissions=8 )
               `)
            
            
                    message.author.sendEmbed(embed)
            
                }
            });



            client.on('message', message => {
                if (message.content === '*invite') {
                  const embed = new Discord.RichEmbed() 
                  .setColor("RANDOM")
                message.reply('**:upside_down: *تم ارسال رابط دعوة البوت في الخاص* :rose:**')
                }
                });



client.on("message", function(message) {

  const bannedwords = [
    "كل زق",
    "كس امك",
    "الله يلعنك",
    "ابن الشرموطه",
    "كلب",
    "حمار",
    "ابن الكلب",
    "زق",
    "حيوان",
    "كس",
    "زب",
    "شراميط"

  ];

  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("يمنع السب في هاذا السيرفر !!!");
  };
});



client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "welcome")
        const embed = new Discord.RichEmbed()
        .setColor('00FF01')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("User joined ")
        .setTimestamp()
        return wc.sendEmbed(embed);
})
client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "welcome")
        const embed = new Discord.RichEmbed()
        .setColor('FF0000')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .setFooter("User left ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});



const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
  '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith('اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("اذكار")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("🕋")
  }
  });

  client.on('message',function(message) {
    if (message.author.bot) return;
  
  
                    if(!message.channel.guild) return;
  
                      if (message.content === prefix + "members") {
   const embed = new Discord.RichEmbed()
  
      .setDescription(`**Members info ✨
  💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
  ❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
  💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
  💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
  💡 bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
           message.channel.send({embed});
  
      }
        });


        client.on('message' , message => {
    if(message.content.startsWith('تذكره')) {
        message.channel.send('`تم إنشاء التذكرة`');
        client.users.get('376567440261382146').send({embed: new Discord.RichEmbed()
        .setDescription(`**<@${message.author.id}> لديه دعوة تذكرة له**`)
        });
    }
});   


client.on('message',async message => {
    let args = message.content.split(" ").slice(1).join(" ");
    let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);
  
  
    if(message.content.startsWith(prefix + "grole")) {
      if(!args) return message.reply('اكتب اسم الرتبة');
      if(!role) return message.reply('هذه الرتبة غير موجودة');
      let iQp = new Discord.RichEmbed()
      .setAuthor(message.author.tag,message.author.avatarURL)
      .setTitle(message.guild.name)
      .setThumbnail(message.guild.iconURL)
      .addField('- اسم الرتبة',role.name,true)
      .addField('- اي دي الرتبة',role.id,true)
      .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
      .addField('- لون الرتبة',role.hexColor,true)
      .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
      .addField('- مركز الرتبة بين كل الرتب',role.position,true)
      .addField('- خصائص الرتبة',role.permissions,true)
      .setFooter(message.author.tag,message.author.avatarURL);
  
      message.channel.send(iQp);
    }
  });


  client.on('message', async message => {
  if(message.content.startsWith("اقتراح")) {
  await  message.channel.send(`اكتب اقتراحك الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم حفظ اقتراحك الرجاء انتضار الرد من قبل الاداره`)
                client.channels.get("466753184585482240").send(`${message.author.username}'s sug => ${text}`)

              })
            }
          })


          
          client.on('message', message => {
            if(message.content.startsWith(prefix + "دعوات")) {
             message.guild.fetchInvites().then(invs => {
               let user = message.mentions.users.first() || message.author
               let personalInvites = invs.filter(i => i.inviter.id === user.id);
               let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
         message.channel.send(`${user} لقد قمت بدعوه ${inviteCount} دعوه.`);
         });
           }
         });
        


         client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("✏  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })


          client.on('message', message => {
            if(message.content.startsWith(prefix + "عمر")) {
             message.guild.fetchInvites().then(invs => {
               let user = message.mentions.users.first() || message.author
               let personalInvites = invs.filter(i => i.inviter.id === user.id);
               let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
          message.channel.send(`${user} العمر`);     
          message.channel.sendMessage(Math.floor(Math.random() * 100));
         });
           }
         });


          client.on('message', message => {
            if(message.content.startsWith(prefix + "عمري")) {
             message.guild.fetchInvites().then(invs => {
               let user = message.mentions.users.first() || message.author
               let personalInvites = invs.filter(i => i.inviter.id === user.id);
               let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
          message.channel.send(`${user} عمرك`);     
          message.channel.sendMessage(Math.floor(Math.random() * 100));
         });
           }
         });


client.on('message', message =>{
  let args = message.content.split(' ');
  let prefix = '.';
if(args[0] === `*emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**أدخل الايموجي**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});



  client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`*h `,` *he`,`*hel`,`*help`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);1000

});




  client.on('message', message => {
if(message.content == '<@431111829725380608> بوت فاشل') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping();
});
 return message.reply(`شكرا لك`);
}
});


  client.on('message', message => {
if(message.content == '<@342516843229216768> انته فاشل') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
});
 return message.reply(`اي ولله`);
}
});
  

client.on('message', msg => {
  if (msg.content === 'احم') {
    msg.reply('ومرض');
  }
});


const nkth = [
'**🤬تجميع نكت اذا عندك نكت اقترح نكتتك على ادارة البوت بكتابة امر اقتراح**.',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith('نكته')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("🛠️تجميع نكت🛠️")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${nkth[Math.floor(Math.random() * nkth.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("🖕")
  message.react("😐")  
  }
  });


  client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user} ليش تكتب وانت اوفلاين مسوي نفسك انا طالع`)
        .then(msg => {
            msg.delete(10000)
        })
    }
})


  client.on('message', message => {
    if(message.content.startsWith(prefix + 'سحب الكل')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });

  client.on('message', message => {
if(message.content == '<@431111829725380608> كيف حالك') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
});
 message.channel.send({file : "https://cdn.discordapp.com/attachments/441902074964344834/468700753041817611/haha.png"})
}
});







client.login('process.env.BOT_TOKEN');
