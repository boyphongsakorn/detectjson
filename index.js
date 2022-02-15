//simple discordjs bot
const { Client, Intents } = require('discord.js');
//var cron = require('node-cron');
var CronJob = require('cron').CronJob;

process.env.TZ = 'Asia/Bangkok';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_VOICE_STATES] });

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
//cron.schedule('*/10 19 * * *', async () => {
var job = new CronJob('0 */6 20 * * *', async function() {
    let guilds = await client.guilds.fetch('309312041632661504');
    let memberarrray = [];
    //console.log(guilds);
    /*await guilds.channels.fetch('704240546733883473').then((channel) => {
        channel.members.forEach((member) => {
            let memberName = member.user.username;
            let memberId = member.user.id;
            console.log(memberName);
            memberarrray.push(memberId);
        });
    });*/
    await guilds.channels.cache.get('704240546733883473').members.forEach((member) => {
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
    await guilds.channels.cache.get('706410356360347691').members.forEach((member) => {
        //get member id
        let memberId = member.user.id;
        //if member id not in memberarrray then add to memberarrray
        if(!memberarrray.includes(memberId)){
            memberarrray.push(memberId)
        }
    });
    /*await guilds.channels.fetch('706410356360347691').then((channel) => {
        channel.members.forEach((member) => {
            let memberId = member.user.id;
            //if member id not in memberarrray then add to memberarrray
            if (!memberarrray.includes(memberId)) {
                memberarrray.push(memberId)
                console.log(member.user.username);
            }
        });
    });*/
    console.log(memberarrray);
    //if 483274198375202819 not in memberarrray
    if (!memberarrray.includes('483274198375202819') && memberarrray.includes('296697021522378752')) {
        //console.log('เทพวุฒิ ไม่อยู่');
        //time out this user id
        try {
            guilds.members.cache.get('483274198375202819').timeout(5 * 60 * 1000, 'เหลี่ยม')
            //send message to channel id
            //guilds.channels.cache.get('704240947948683355').send('เทพวุฒิ เหลี่ยม');
        } catch (error) {
            console.log('error')
            //guilds.channels.cache.get('704240947948683355').send('ไม่ตรวจพบเทพวุฒิในดิสนี้');
        }
    }
//});
}, null, true, 'Asia/Bangkok');

job.start();

let minapayment = [[2, 491, 2250, 'no']];

//cron.schedule('0 21 8-31/2 * *', async () => {
var bjob = new CronJob('0 0 0 */2 * *', async function() {
    let thismonth = false;
    //loop minapayment
    for (let i = 0; i < minapayment.length; i++) {
        //if minapayment[i][0] == this month
        if (minapayment[i][0] == new Date().getMonth() + 1) {
            thismonth = true;
        }
    }
    //if thismonth == false then add this month to minapayment
    if (!thismonth) {
        minapayment.push([new Date().getMonth() + 1, 491, 2250, 'no']);
    }

    //if this month in minapayment and index[3] == no
    if (minapayment[minapayment.length - 1][0] == new Date().getMonth() + 1 && minapayment[minapayment.length - 1][3] == 'no') {
        let outoffpayment = ['no','no']
        let thisshop = minapayment[minapayment.length - 1][1];
        let shopee = minapayment[minapayment.length - 1][2];
        //if date > 9
        if (new Date().getDate() > 9 && outoffpayment[0] == 'no') {
            outoffpayment[0] = 'yes';
            thisshop = thisshop + ((new Date().getDate() - 9)*50);
        }else{
            thisshop = 0
        }
        if (new Date().getDate() > 10 && outoffpayment[1] == 'no') {
            outoffpayment[1] = 'yes';
            shopee = shopee + ((new Date().getDate() - 10)*100)+50;
        }else{
            shopee = 0
        }
        //dm to 329295646186143745
        client.users.fetch('329295646186143745').then(dm => {
            if(outoffpayment[0] == 'yes' && outoffpayment[1] == 'yes'){
                dm.send('คุณมีรายการผ่อนที่ต้องจัดการ\nThisshop จำนวน ' + thisshop + ' บาท (เลยวันผ่อนมาทั้งหมด '+(new Date().getDate() - 9)+' วัน) \nShopee จำนวน ' + shopee + ' บาท (เลยวันผ่อนมาทั้งหมด '+(new Date().getDate() - 10)+' วัน) \nรวมทั้งหมดเป็น ' + (thisshop + shopee) + ' บาท');
            }else if(outoffpayment[0] == 'yes'){
                dm.send('คุณมีรายการผ่อนที่ต้องจัดการ\nThisshop จำนวน ' + thisshop + ' บาท (เลยวันผ่อนมาทั้งหมด '+(new Date().getDate() - 9)+' วัน) \nShopee จำนวน ' + shopee + ' บาท \nรวมทั้งหมดเป็น ' + (thisshop + shopee) + ' บาท');
            }else{
                dm.send('คุณมีรายการผ่อนที่ต้องจัดการ\nThisshop จำนวน ' + thisshop + ' บาท\nShopee จำนวน' + shopee + 'บาท \nรวมทั้งหมดเป็น ' + (thisshop + shopee) + ' บาท');
            }
        });

        //wait 5 sec
        await new Promise(resolve => setTimeout(resolve, 5000));

        client.users.fetch('329295646186143745').then(dm => {
            dm.send('โอนไปยัง \nธนาคารไทยพาณิชย์ \n427-055411-8 \nนาย พงศกร วิเศษธร')
        });
    }
//});
}, null, true, 'Asia/Bangkok');

bjob.start();

client.login(process.env.BOT_TOKEN);