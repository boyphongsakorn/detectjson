//simple discordjs bot
const { MessageAttachment, MessageEmbed, Client, Intents, MessageActionRow, MessageSelectMenu } = require('discord.js');
var cron = require('node-cron');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    //con.connect(function (err) {
    //if (err) throw err;
    //console.log("Database Connected!");
    client.user.setPresence({ activities: [{ name: 'จับเหลี่ยม JSON' }], status: 'online' });
    client.users.fetch('133439202556641280').then(dm => {
        dm.send('เริ่มการจัดเหลี่ยม')
    });
    console.log('I am ready!');
    /*let guilds = client.guilds.cache.get('309312041632661504');
    let memberarrray = [];
    //console.log(guilds);
    guilds.channels.cache.get('704240546733883473').members.forEach((member) => {
        //console.log(member);
        //get member name
        let memberName = member.user.username;
        //get member id
        let memberId = member.user.id;
        console.log(memberName);
        //memberarrray.push(memberName);
        memberarrray.push(memberId);
        /*if(memberName == 'pwisetthon'){
            //send message to channel id
            guilds.channels.cache.get('704240947948683355').send(memberName+' ไม่อยู่');
        }*/
    /*});
    //if pwisetthon not in memberarrray
    if(!memberarrray.includes('483274198375202819')){
        //send message to channel id
        guilds.channels.cache.get('704240947948683355').send('เทพวุฒิ ไม่อยู่');
        //time out this user id
        guilds.members.cache.get('483274198375202819').timeout(1 * 60 * 1000, 'เหลี่ยม');
    }*/
    /*guilds.channels.get('704240546733883473').members.forEach((member) => {
        //member.send('Your role is villager!');
        //get member name
        console.log(member)
    });*/
    //});
});

//get user in voice channel
cron.schedule('0 21 * * *', () => {
    let guilds = client.guilds.cache.get('309312041632661504');
    let memberarrray = [];
    //console.log(guilds);
    guilds.channels.cache.get('704240546733883473').members.forEach((member) => {
        //console.log(member);
        //get member name
        let memberName = member.user.username;
        //get member id
        let memberId = member.user.id;
        console.log(memberName);
        //memberarrray.push(memberName);
        memberarrray.push(memberId);
        /*if(memberName == 'pwisetthon'){
            //send message to channel id
            guilds.channels.cache.get('704240947948683355').send(memberName+' ไม่อยู่');
        }*/
    });
    guilds.channels.cache.get('706410356360347691').members.forEach((member) => {
        //get member id
        let memberId = member.user.id;
        //if member id not in memberarrray then add to memberarrray
        if(!memberarrray.includes(memberId)){
            memberarrray.push(memberId)
        }
    });
    //if pwisetthon not in memberarrray
    if (!memberarrray.includes('483274198375202819')) {
        //send message to channel id
        guilds.channels.cache.get('704240947948683355').send('เทพวุฒิ เหลี่ยม');
        //time out this user id
        try {
            guilds.members.cache.get('483274198375202819').timeout(5 * 60 * 1000, 'เหลี่ยม')
        } catch (error) {
            console.log('error')
            guilds.channels.cache.get('704240947948683355').send('ไม่ตรวจพบเทพวุฒิในดิสนี้');
        }
    }
});

client.login(process.env.BOT_TOKEN);