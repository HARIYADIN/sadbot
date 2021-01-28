const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const imageToBase64 = require('image-to-base64');
const get = require('got');
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const speed = require('performance-now');
/*
HALLO I'M RAMLAN :)
SCRIPT HANYA UNTUK SAYA BELAJAR
TOLONG JANGAN HAPUS TANDA PENGENAL PEMBUAT
*/
const apivhtear = 'YOUR_APIKEY'; // APIKEY VHTEAR
const apibarbar = 'YOUR_APIKEY'; // APIKEY MHANKBARBAR
const tobzkey = 'YOUR_APIKEY'; // APIKEY TOBZ
const vinzkey = 'YOUR_APIKEY'; // APIKEY ZEKS
const BotName = 'SADBOTZ'; // GANTI PAKE NAMA BOT LU
const wa = 'https://chat.whatsapp.com/DcSr2e5hLMd7PkufBVymgu'; // LINK GRUP WA JANGAN DIGANTI YA BIAR KUMPUL DISITU SALING MENGENAL:)
const ow = 'RAMLAN'; // GANTI PAKE NAMA MU
const nomorowner = '085559240360'; // GANTI PAKE NOMOR MU ( JANGAN NOMOR BOT )
const ovo = '0855-5924-0360'; // GANTI PAKE NOMOR OVO LU
const pulsa = '0812-1444-1027'; // GANTI PAKE NOMOR PULSA LU
const dana = '0855-5924-0360'; // GANTI PAKE NOMOR DANA LU
const gopay = '0855-5924-0360'; // GANTI PAKE NOMOR GOPAY LU
const instagram = 'http://www.instagram.com/iamramlan_'; // GANTI IG LU
const aktif = '08:00 - 22:00'; // TERSERAH LU DAH INI
const vcard = 'BEGIN:VCARD\n'
  + 'VERSION:3.0\n' // MAU NGAPAIN TOD
  + 'FN:RAMLAN GANS\n' // GANTI PAKE NAMA MU
  + 'ORG:OWNER BOT;\n' // INI BIARIN GPP, GANTI PAKE NAMA BOT BOLEH
  + 'TEL;type=CELL;type=VOICE;waid=6285559240360:+62 855-5924-0360\n' // GANTI PAKE NOMOR LU ( SAMAIN KEK GITU YA )
  + 'END:VCARD' // THANKS TO LANN ID
// NOTE : UBAH YANG GUE SURUH UBAH AJA BIAR GAK ERROR
const
  {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    GroupSettingChange,
    mentionedJid,
    processTime,
  } = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func) {
  for (var i in arr) {
    func(i, arr[i]);
  }
}
const conn = new WAConnection()
conn.on('qr', qr => {
  qrcode.generate(qr,
    {
      small: true
    });
  console.log(`[ ${moment().format("HH:mm:ss")} ] SUBSCRIBE YT RAMLAN CHANNEL!`);
});

conn.on('credentials-updated', () => {
  // save credentials whenever updated
  console.log(`credentials updated$`)
  const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
  fs.writeFileSync('./Ramlan.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./Ramlan.json') && conn.loadAuthInfo('./Ramlan.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();


conn.on('message-status-update', json => {
  const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
})
setInterval(function () {
  for (i = 0; i < 3; i++) {
    console.log(`[ ${moment().format("HH:mm:ss")} ] => Hallo I'm Ramlan :)`)
  }
}, 15000)

//function

conn.on('message-new', async (m) => {
  const messageContent = m.message
  const text = m.message.conversation
  let id = m.key.remoteJid
  const isGroup = id.endsWith('@g.us')
  const totalchat = await conn.chats.all()
  const sender = isGroup ? m.participant : m.key.remoteJid
  const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
  const groupName = isGroup ? groupMetadata.subject : ''
  const desk = isGroup ? groupMetadata.desc : ''
  const groupId = isGroup ? groupMetadata.jid : ''
  const groupMembers = isGroup ? groupMetadata.participants : ''
  const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
  let imageMessage = m.message.imageMessage;
  console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);

/*]===> AUTO RESPON LANN ID <===[*/
 if (text == 'assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ada yang bisa saya bantu? kalo bingung ketik !menu ya kak🤗...' ,MessageType.text);
}
 if (text == 'salam'){
conn.sendMessage(id, 'Waalaikumsalam, Ada yang bisa saya bantu? kalo bingung ketik !menu ya kak🤗...' ,MessageType.text);
}
 if (text == 'asalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ada yang bisa saya bantu? kalo bingung ketik !menu ya kak🤗...' ,MessageType.text);
}
 if (text == 'Assalamualaikum'){
conn.sendMessage(id, 'Waalaikumsalam, Ada yang bisa saya bantu? kalo bingung ketik !menu ya kak🤗...' ,MessageType.text);
}
 if (text == 'p'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya ngentot..' ,MessageType.text);
}
 if (text == 'P'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya ngentot..' ,MessageType.text);
}
 if (text == 'Halo'){
conn.sendMessage(id, 'Hallo kak, Ada yang bisa saya bantu? kalo bingung ketik !menu ya kak🤗...' ,MessageType.text);
}
 if (text == 'Asu'){
conn.sendMessage(id, 'Lu Asw' ,MessageType.text);
}
 if (text == 'Ramlan'){
conn.sendMessage(id, 'Itu owner ku:)' ,MessageType.text);
}
 if (text == 'Ngentod'){
conn.sendMessage(id, 'Pingin ngentod?' ,MessageType.text);
}
 if (text == 'Anjing'){
conn.sendMessage(id, 'Jangan toxic anjing' ,MessageType.text);
}
 if (text == 'Bacot'){
conn.sendMessage(id, 'lu bacot_-' ,MessageType.text);
}
 if (text == 'Test'){
conn.sendMessage(id, 'Test 1,2,3 ketik !menu' ,MessageType.text);
}
 if (text == 'Hai'){
conn.sendMessage(id, 'Hai juga, Ada yang bisa saya bantu? kalo bingung ketik !menu ya kak🤗...' ,MessageType.text);
}
 if (text == 'Woi'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya ngentot..' ,MessageType.text);
} 
 if (text == 'Hi'){
conn.sendMessage(id, 'Hi juga, Ada yang bisa saya bantu? kalo bingung ketik !menu ya kak🤗...' ,MessageType.text);
}
 if (text == 'Gan'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'Sis'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya sist..' ,MessageType.text);
}
 if (text == 'Bro'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'Min'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'Sayang'){
conn.sendMessage(id, 'Iya sayang?, ada yang bisa saya bantu? kalo bingung ketik !menu ya say...' ,MessageType.text);
}
 if (text == 'I love u'){
conn.sendMessage(id, 'love you too' ,MessageType.text);
}
 if (text == 'Mas'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'Mba'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'Bre'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'Cuy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'Euy'){
conn.sendMessage(id, 'Ya?, ada yang bisa saya bantu? kalo bingung ketik !menu ya um...' ,MessageType.text);
}
 if (text == 'makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
 if (text == 'Makasi'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
 if (text == 'makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
 if (text == 'Makasih'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
 if (text == 'thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
 if (text == 'Thank'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
 if (text == 'thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}
 if (text == 'Thanks'){
conn.sendMessage(id, 'Sama sama, semoga harimu menyenangkan :)' ,MessageType.text);
}

//JANGAN NUMPANG NAMA DOANG:)
  if (text.includes('!menu')) {
    var nomor = m.participant
    const options = {
      text: `*Hallo @${nomor.split("@s.whatsapp.net")[0]} I'm ${BotName}*
╔════════════════════
║───────⟪ ${BotName}⟫───────
╠════════════════════
║➸ *!owner*
║➸ *!donasi*
║➸ *!info*
║➸ *!bingungcok*
║➸ *!iklan*
╠════════════════════
║─────⟪  *List menu* ⟫─────
╠════════════════════
║➸️ *!tools*
║➸️ *!gabut*
║➸ *!grup*
║➸ *!primbon*
║➸ *!random*
║➸ *!maker*
║➸ *!edukasi*
║➸ *!other*
║➸ *!download*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
//CREATOR
    if (text.includes('!owner')) {
    conn.sendMessage(id, { displayname: "Jeff", vcard: vcard }, MessageType.contact, { quoted: m })
    conn.sendMessage(id, `Nih nomor pacarku😍, ehh ownerku hehee😁 jangan di galakin ya:*`, MessageType.text, { quoted: m })
  }
//DONASI
  if (text.includes('!donasi')) {
    conn.sendMessage(id, `Bantu donasi agar bot bisa terus berjalan.

 اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016]_

╔════════════════════
║ *DONASI UNTUK ${BotName}*
╠════════════════════
║╭──❉ *DONASI BOS* ❉─────
║│➸ *OVO*: _${ovo}_
║│➸ *DANA*: _${dana}_
║│➸ *PULSA*: _${pulsa}_
║│➸ *GOPAY*: _${gopay}_
║╰──────────────────
╠════════════════════
║         *${BotName}*
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║         *${BotName}*
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//INFO
  if (text.includes('!info')) {
    var nomor = m.participant
    const options = {
      text: `*Hallo @${nomor.split("@s.whatsapp.net")[0]} I'm ${BotName}*
         ────────────────
➢ Official group 
  _${wa}_
         ────────────────
╔════════════════════
║───────⟪  *INFO* ⟫───────
╠════════════════════
║➸️ Owner : *${ow}*
║➸️ Prefix:  *「 ! 」*
║➸ Aktif : *${aktif} WIB*
║➸ Group:  *${groupName}*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║FOLLOW MY INSTAGRAM
║ _${instagram}_
╚════════════════════`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
// PANDUAN
  if (text.includes('!bingungcok')) {
    var nomor = m.participant
    const options = {
      text: `🔰 -----[ *PANDUAN PENGGUNAAN ${BotName}* ]----- 🔰
*Hallo,👋 @${nomor.split("@s.whatsapp.net")[0]}*
Berikut adalah cara penggunaan *${BotName}*
         ────────────────
Note : Jangan males membaca !!!
         ────────────────
1. *!sticker*
➸ Masukan gambar ukuran kotak dengan caption !sticker
2. *!nulis*
➸ Untuk membuat tulisan | contoh : !nulis Ramlan baik hati dan sopan
3. *!stalkig*
➸ Untul stalking ig menggunakan username | contoh : !stalkig iamramlan_
4. *!ssweb*
➸ Mengambil gambar web | contoh : !ssweb http://xnxx.com
5. *!quotes*
➸ Random quotes
6. *!bikinquote*
➸ Untuk membuat quotes gambar | contoh : !bikinquote percuma cantik kalo hasil open bo & Kata Ramlan
7. *!ytmp3*
➸ Download Audio dari youtube | contoh : !ytmp3 https://youtu.be/BisgI6Vczrg
8. *!yutubdl*
➸ Download Video dari youtube | contoh : !yutubdl https://youtu.be/BisgI6Vczrg
9. *!twitdl*
➸ Untuk mendownload postingan dari twitter | contoh : !twitdl https://link nya tod:v
10. *!tiktod*
➸ Download video tiktok | contoh : !tiktod https://vt.tiktok.com/ZSKbyfev/
11.️ *!ig*
➸ Download gambar/video dari instagram | contoh : !ig https://www.instagram.com/p/CJ7g5FTHSuA/?igshid=1gg3wx5vx3kxx
12. *!fb*
➸ Download gambar/video dari facebook | contoh : !fb https://link nya tod:v
13.️ *!artinama*
➸ primbon nama kalian | contoh : !artinama Ramlan
14. *!artijodoh*
➸ primbon jodoh | contoh : !artijodoh Ramlan & Nadia
15. *!artimimpi*
➸ primbon mimpi | contoh : !artimimpi ular
16. *!zodiak*
➸ primbon zodiak | contoh : !zodiak scorpio
17. *!brainly*
➸ mencari jawaban dari brainly | contoh : !brainly arti penis
18. *!quran*
➸ Random ayat ayat alqur'an
19. *!ngaji*
➸ melihat ayat alquran | contoh : !ngaji 1 
20. *!wiki*
➸ Mencari informasi menurut wikipedia | contoh : !wiki mobil
21. *!covid*
➸ Informasi corona virus di indonesia
22. *!faktaunik*
➸ Kumpulan fakta unik
23. *!Kbbi*
➸ mencari informasi menurut kbbi | contoh : !kbbi semangka
24. *!pornhub*
➸ Jika undefined berarti harus pake 2 text | contoh : !pornhub Ramlan & Gans
25. *!hartatahta*
➸ membuat gambar hartatahta | contoh : !hartatahta Nadia
         ────────────────
Note : Sisanya gunain otak kalian aja cape w jelasin :)
         ────────────────
🔰 -----[ *POWERED BY RAMLAN ID* ]----- 🔰`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
// IKLAN
  if (text.includes('!iklan')) {
    var nomor = m.participant
    const options = {
      text: `*Hallo @${nomor.split("@s.whatsapp.net")[0]} I'm ${BotName}*
         ────────────────
➢ Official group 
  _${wa}_
         ────────────────
╠═══════════════════════════
║➣ *DAFTAR SEWA & BUAT BOT :*
║➣ *SEWA : 20K/GRUP (BULAN)*
║➣ *BUAT : 50K (BISA JADI OWNER)*
║➣ *PEMBAYARAN BISA MELALUI :*
║➣ *GOPAY, DANA, PULSA, OVO*
╠═══════════════════════════
║➣ *KEUNTUNGAN SEWA BOT :*
║➣ *1. BISA MEMASUKAN BOT KE GRUP*
║➣ *KEUNTUNGAN BUAT BOT :*
║➣ *1. BISA MENJADI OWNER BOT SENDIRI*
║➣ *2. BISA MENGGANTI NAMA BOT SENDIRI*
║➣ *3. BISA MEMBAWA BOT KE GROUP*
║➣ *4. BISA MENYEWAKAN BOT KEMBALI*
╠═══════════════════════════
║➣ *JIKA MINAT IKLAN DIATAS*
║➣ *HARAP HUBUNGI NOMOR DIBAWAH :*
║➣ *☎️ WA : *085559240360*

🔰 -----[ *POWERED BY LANN ID* ]----- 🔰`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text, { quoted: m })
  }
//SIMPLE MENU
  else if (text == '!tools') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *SIMPLE MENU* ⟫───────
╠════════════════════
║➸ *!sticker*
║➸ *!nulis*
║➸ *!stalkig*
║➸ *!ssweb*
║➸ *!quotes*
║➸ *!bikinquote*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
/*SIMI
  if (text.includes("!simi")) {
    const teks = text.replace(/!simi /, "")
    axios.get(`https://st4rz.herokuapp.com/api/simsimi?kata=${teks}`).then((res) => {
      let hasil = `*${res.data.result}*`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }*/
//STICKER
  if (text.includes('!Stiker')) {
    conn.sendMessage(id, 'Kirim gambar dengan caption !stiker', MessageType.text, { quoted: m });
  }
  if (messageType == 'imageMessage') {
    let caption = imageMessage.caption.toLocaleLowerCase()
    const buffer = await conn.downloadMediaMessage(m) // to decrypt & use as a buffer
    if (caption == '!stiker') {
      const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file

      const
        {
          exec
        } = require("child_process");
      exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) => {
        let stik = fs.readFileSync('temp/' + jam + '.webp')
        conn.sendMessage(id, stik, MessageType.sticker, { quoted: m })
      });
    }
  if (text.includes('!Sticker')) {
    conn.sendMessage(id, 'Kirim gambar dengan caption !sticker', MessageType.text, { quoted: m });
  }
    if (caption == '!sticker') {
      const stiker = await conn.downloadAndSaveMediaMessage(m) // to decrypt & save to file
      const
        {
          exec
        } = require("child_process");
      exec('cwebp -q 50 ' + stiker + ' -o temp/' + jam + '.webp', (error, stdout, stderr) => {
        let stik = fs.readFileSync('temp/' + jam + '.webp')
        conn.sendMessage(id, stik, MessageType.sticker, { quoted: m })
      });
    }
  }
//BIKIN QUOTES
  if (text.includes('!bikinquote')) {
    const gh = text.split("!bikinquote ")[1];
    const kata = gh.split("&")[0];
    const author = gh.split("&")[1];
    axios.get(`https://terhambar.com/aw/qts/?kata=${kata}&author=${author}&tipe=rain`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Sedang membuat quotes...', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            })
      })
  }
//NULIS
if (text.includes('!nulis')){
var teks = text.replace(/!nulis /, '')
  var url = "https://api.vhtear.com/write?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] Membuat Tulisan...', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
                    })
    })
}
//STALK IG
if (text.includes("!stalkig")){
  const teks = text.replace(/!stalkig /, "")
  axios.get(`https://api.vhtear.com/igprofile?query=${teks}&apikey=${apivhtear}`).then ((res) =>{
  conn.sendMessage(id, '[❗] Sabar Lagi Stalking IG Punya '+teks, MessageType.text)
  let hasil = `YAHAHA TELAH DI STALK BOS KU UNTUK USERNAME ${teks} \n\n *Username👀* : _${res.data.result.username}_ \n *Nama✍️* : _${res.data.result.full_name}_ \n *Jumlah Follower🤷‍♀️¸* : _${res.data.result.follower}_ \n *Jumlah Following👥¸* : _${res.data.result.follow}_ \n *Jumlah Post💌* : _${res.data.result.post_count}_ \n *Biografi❣️ :* _${res.data.result.biography}`;
  conn.sendMessage(id, hasil, MessageType.text);
})
}
//QUOTES
if (text.includes("!quotes")){
const teks = text.replace(/!quotes /, "")
axios.get(`https://api.vhtear.com/quoteid&apikey=${apivhtear}`).then((res) => {
    let hasil = `*_${res.data.result.kata}_*\n\n\n  _By : ⸸Ramlan⸸Panutanque._`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//SS WEB
if (text.includes('!ssweb')){
var teks = text.replace(/!ssweb /, '')
    axios.get(`https://api.zeks.xyz/api/ssweb?url=${teks}&apikey=${vinzkey}`)
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[📸] Cekrek Bos', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : 'Awowkwokk'} )
        })
    })
}
//MENU GROUP
  else if (text == '!grup') {
    conn.sendMessage(id, `
╔════════════════════
║───────⟪  *GROUP* ⟫──────
╠════════════════════
║➸ *!tagme*
║➸ *!setname*
║➸ *!setdesc*
║➸ *!opengrup*
║➸ *!closegrup*
║➸ *!linkgrup*
║➸ *!rules*
║➸ *!notif*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//TAGME
  if (text.includes('!tagme')) {
    var nomor = m.participant
    const options = {
      text: `@${nomor.split("@s.whatsapp.net")[0]} Hallo sayang... 🤗`,
      contextInfo: { mentionedJid: [nomor] }
    }
    conn.sendMessage(id, options, MessageType.text)
  }
//NAMA GRUP
  if (text.includes("!setname")) {
    const teks = text.replace(/!setname /, "")
    let nama = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateSubject(idgrup, nama);
    conn.sendMessage(id, 'Mengganti Nama Group', MessageType.text, { quoted: m });
  }
//DESK GRUP
  if (text.includes("!setdesc")) {
    const teks = text.replace(/!setdesc /, "")
    let desk = `${teks}`;
    let idgrup = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupUpdateDescription(idgrup, desk)
    conn.sendMessage(id, 'Mengganti desk grup', MessageType.text, { quoted: m });
  }
//BUKA GRUP
  else if (text == '!opengrup') {
    let hasil = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupSettingChange(hasil, GroupSettingChange.messageSend, false);
    conn.sendMessage(id, MessageType.text);
  }
//TUTUP GRUP
  else if (text == '!closegrup') {
    let hasil = `${id.split("@s.whatsapp.net")[0]}`;
    conn.groupSettingChange(hasil, GroupSettingChange.messageSend, true);
    conn.sendMessage(id, MessageType.text);
  }
//LINK GRUP
  if (text.includes("!linkgrup")) {
    const linkgc = await conn.groupInviteCode(id)
    const hasil = `Grup : ${groupName}\n*Link* : https://chat.whatsapp.com/${linkgc}`;
    conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
  }
//NOTIF GRUP
  if (text.includes('!notif')) {
    const value = text.replace(/!notif /, '')
    var nomor = m.participant
    const group = await conn.groupMetadata(id)
    const member = group['participants']
    const ids = []
    member.map(async adm => {
      ids.push(adm.id.replace('c.us', 's.whatsapp.net'))
    })
    const options = {
      text: `Pengumuman dari @${nomor.split("@s.whatsapp.net")[0]}\n*Pesan : ${value}*`,
      contextInfo: { mentionedJid: ids },
      quoted: m
    }
    conn.sendMessage(id, options, MessageType.text)
  }
//RULES GRUP
  if (text.includes("!rules")) {
    let idgrup = `*${groupName}*\n*Rules* : \n${desk}`;
    conn.sendMessage(id, idgrup, MessageType.text, { quoted: m });
  }
//MENU FUN
  else if (text == '!gabut') {
    conn.sendMessage(id, `
╔════════════════════
║───────⟪  *GABUTZ* ⟫───────
╠════════════════════
║➸ *!pantun*
║➸ *!receh*
║➸ *!cekbapak*
║➸ *!gombal*
║➸ *!seberapagay*
║➸ *!prankchat*
║➸ *!alay*
║➸ *!tebakgambar*
║➸ *!family100*
║➸ *!truth*
║➸ *!dare*
║➸ *!apakah*
║➸ *!bolehkah*
║➸ *!kapan*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//PANTUN
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()

    if (is == '!pantun') {
      fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-pantun-pakboy.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };
//RECEH
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!receh') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/receh.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };
//CEK BAPAK
if (messageType === MessageType.text)
   {
      let is = m.message.conversation.toLocaleLowerCase()

      if (is == '!cekbapak')
      {

         fetch('https://raw.githubusercontent.com/Ramlan666/cekbapak/main/random.txt')
            .then(res => res.text())
            .then(body =>
            {
               let tod = body.split("\n");
               let pjr = tod[Math.floor(Math.random() * tod.length)];
               let cekbapak = pjr.replace(/pjrx-line/g, "\n");
               conn.sendMessage(id, cekbapak, MessageType.text)
            });
      }

   }
//GOMBAL
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!gombal') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/gombal.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }

  };
/*MOTIVASI
  if (text.includes("!motivasi")) {
    const teks = text.replace(/!motivasi /, "")
    axios.get(`https://kocakz.herokuapp.com/api/random/text/katabijak`).then((res) => {
      let hasil = `${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
/*INFO ANIME
  if (text.includes("!infoanime")) {
    const sons = text.replace(/!infonime /, "")
    axios.get(`https://arugaz.herokuapp.com/api/kuso?q=${sons}`).then((res) => {
      conn.sendMessage(id, 'Bentar tod gue cari dulu ya kan...', MessageType.text, { quoted: m })
      let hasil = `*Judul* : ${res.data.title}\n*Info* : ${res.data.info}\n*Link* : ${res.data.link_dl}\n*Sinopsis* : ${res.data.sinopsis}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
/*PUISI
  if (text.includes("!puisi1")) {
    axios.get(`https://arugaz.herokuapp.com/api/puisi1`).then((res) => {
      conn.sendMessage(id, 'Sabar say...', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }

  if (text.includes("!puisi2")) {
    axios.get(`https://arugaz.herokuapp.com/api/puisi2`).then((res) => {
      conn.sendMessage(id, 'Sabar say...', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }

  if (text.includes("!puisi3")) {
    axios.get(`https://arugaz.herokuapp.com/api/puisi3`).then((res) => {
      conn.sendMessage(id, 'Sabar say...', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }

//CERPEN
  if (text.includes("!cerpen")) {
    axios.get(`https://arugaz.herokuapp.com/api/cerpen`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Searching cerpen⏳ silahkan tunggu', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }*/
//SEBERAPAGAY
  if (text.includes("!seberapagay")) {
    const teks = text.replace(/!seberapagay /, "")
    axios.get(`https://arugaz.herokuapp.com/api/howgay`).then((res) => {
      let hasil = `*Gay Detected*\n*Persentase* : ${res.data.persen}%\n${res.data.desc}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//CHAT KOSONG
  if (text.includes('!prankchat')) {
    const gh = text.split("!prankchat ")[1];
    const nama = gh.split("&")[0];
    const tgl = gh.split("&")[1];
    let hasil = `${nama}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${tgl}`;
    conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
  }
//FONT ALAY
  if (text.includes("!alay")) {
    const alay = text.split("!alay")[1]
    axios.get(`https://api.terhambar.com/bpk?kata=${alay}`).then((res) => {
      let hasil = `${res.data.text}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }
//TEBAK GAMBAR
  if (text.includes("!tebakgambar")) {
    axios.get(`https://api.vhtear.com/tebakgambar&apikey=${apivhtear}`).then((res) => {
      imageToBase64(res.data.result.soalImg)
        .then(
          (ress) => {
            conn.sendMessage(id, 'sabar tod, gak bisa jawab donasi ya🤣', MessageType.text, { quoted: m })
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, { quoted: m })
          })
    })
  }

//FAMILY 100
  if (text.includes("!family100")) {
    axios.get(`https://api.vhtear.com/family100&apikey=${apivhtear}`).then((res) => {
      let hasil = `*Pertinyiinnyi* : ${res.data.result.soal}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//TRUTH OR DARE
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!truth') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/truth.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };

  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!dare') {
      fetch('https://raw.githubusercontent.com/mrfzvx12/random-scraper/main/random/dare.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }
  };
//KERANG AJAIB
  if (text.includes('!apakah')) {
    const teks = text.replace(/!/, '')
    const truth = [
      'Iya',
      'Tidak',
      'Bisa Jadi',
      'Coba tanyakan lagi',
      'Mungkin',
      '🤐']
    const ttrth = truth[Math.floor(Math.random() * truth.length)]
    conn.sendMessage(id, 'Pertanyaan : *' + teks + '*\n\nJawaban : ' + ttrth, MessageType.text, { quoted: m })
  }

  if (text.includes('!bolehkah')) {
    const teks = text.replace(/!/, '')
    const truth = [
      'Boleh',
      'Tidak boleh',
      'Sangat di anjurkan',
      'Coba tanyakan lagi',
      'Tidak',
      'Mungkin',
      'Jangan',
      '🤐']
    const ttrth = truth[Math.floor(Math.random() * truth.length)]
    conn.sendMessage(id, 'Pertanyaan : *' + teks + '*\n\nJawaban : ' + ttrth, MessageType.text, { quoted: m })
  }


  if (text.includes('!kapan')) {
    const teks = text.replace(/!/, '')
    const truth = [
      '1 Hari lagi',
      '2 hari lagi',
      '3 hari lagi',
      '4 hari lagi',
      '5 hari lagi',
      '6 hari lagi',
      '1 minggu lagi',
      '2 minggu lagi',
      '3 minggu lagi',
      '1 bulan lagi',
      '2 bulan lagi',
      '3 hari lagi',
      '4 bulan lagi',
      '5 bulan lagi',
      '6 hari lagi',
      '7 bulan lagi',
      '8 bulan lagi',
      '9 hari lagi',
      '10 bulan lagi',
      '11 bulan lagi',
      '1 tahun lagi',
      '2 tahun lagi',
      '3 tahun lagi',
      '4 tahun lagi',
      'Tidak akan',
      'Yakin bakal terjadi ?',
      'Aku meragukan nya',
      'Lusa',
      'Akhir bulan depan',
      'Awal bulan depan',
      'Tahun depan',
      'Bulan depan',
      'Sebentar lagi',
      '🤐']
    const ttrth = truth[Math.floor(Math.random() * truth.length)]
    conn.sendMessage(id, 'Pertanyaan : *' + teks + '*\n\nJawaban : ' + ttrth, MessageType.text, { quoted: m })
  }
//MENU DOWNLOAD
  else if (text == '!download') {

    conn.sendMessage(id, `
╔════════════════════
║─────⟪  *DOWNLOAD* ⟫─────
╠════════════════════
║➸️ *!ytmp3*
║➸️ *!yutubdl*
║➸️ *!twitdl*
║➸️ *!tiktod*
║➸️ *!ig*
║➸️ *!fb*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//YT MP3
  if (text.includes('!ytmp3')) {
    const teks = text.replace(/!ytmp3 /, "")
    axios.get(`https://api.zeks.xyz/api/ytmp3?url=${teks}&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result.thumbnail)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text, { quoted: m })
            let hasil = `*Judul* : ${res.data.result.title}\n*Ukuran* : ${res.data.result.size}\n*Format* : MP3\n*Link* : ${res.data.result.url_audio}`;
            conn.sendMessage(id, buf, MessageType.image, { caption: hasil, quoted: m });
          })
    })
  }
//YT MP4
  if (text.includes('!yutubdl')) {
    const teks = text.replace(/!yutubdl /, "")
    axios.get(`https://api.vhtear.com/ytdl?link=${teks}&apikey=${apivhtear}`).then((res) => {
      imageToBase64(res.data.result.imgUrl)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[❗] Sabar dumlu yakan', MessageType.text, { quoted: m })
            let hasil = `*Judul* : ${res.data.result.title}\n*Ukuran* : ${res.data.result.size}\n*Format* : MP4\n*Link* : ${res.data.result.UrlVideo}`;
            conn.sendMessage(id, buf, MessageType.image, { caption: hasil, quoted: m });
          })
    })
  }
//TWITER DOWNLOAD
  if (text.includes('!twitdl')) {
    const teks = text.replace(/!twitdl /, "")
    axios.get(`https://mhankbarbar.tech/api/twit?url=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Sabar dumlu yakan', MessageType.text, { quoted: m })
      let hasil = `Klik link dan download hasilnya!\n*Link* : ${res.data.result}\n*Judul* : ${res.data.title}\n${res.data.quote}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });

    })
  }
//IG DOWNLOAD
  if (text.includes('!ig')) {
    const teks = text.replace(/!ig /, "")
    axios.get(`https://mhankbarbar.tech/api/ig?url=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Sabar dumlu yakan', MessageType.text, { quoted: m })
      let hasil = `Klik link dan download hasilnya!\n*Link* : ${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }


//TIKTOK DOWNLOAD
  if (text.includes('!tiktod')) {
    const teks = text.replace(/!tiktod /, "")
    axios.get(`https://mhankbarbar.tech/api/tiktok?url=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Sabar dumlu yakan', MessageType.text, { quoted: m })
      let hasil = `Klik link dan download hasilnya!\n*Link* : ${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }

//FB DOWNLOAD
if (text.includes("!fb")){
const teks = text.replace(/!fb /, "")
axios.get(`https://api.vhtear.com/fbdl?link=${teks}&apikey=${apivhtear}`).then((res) => {
    let hasil = `BERHASIL DI *DOWNLOAD!* SILAHKAN UNDUH MELALUI LINK BERIKUT\n\nLink: ${res.data.result.VideoUrl}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
/*JOOX DOWNLOAD
  if (text.includes('!joox')) {
    const teks = text.replace(/!joox /, "")
    axios.get(`https://tobz-api.herokuapp.com/api/joox?q=${teks}&apikey=${tobzkey}`).then((res) => {
      imageToBase64(res.data.result.thumb)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            var lagu = `{url: ${res.data.result.mp3} ,}`;
            conn.sendMessage(id, '[ WAIT ] Mendownload...⏳ silahkan tunggu', MessageType.text, { quoted: m })
            let hasil = `Nihh tod!\n*Judul* : ${res.data.result.album} - ${res.data.result.judul}\n*Link* : ${res.data.result.mp3}`;
            conn.sendMessage(id, buf, MessageType.image, { quoted: m, caption: hasil })
            conn.sendMessage(id, lagu, MessageType.audio, { mimetype: 'audio/mp4', filename: `${data.result.judul}.mp3`, quoted: m })
          })
    })
  }*/
//MENU PRIMBON
  else if (text == '!primbon') {
    conn.sendMessage(id, `
╔════════════════════
║─────⟪  *PRIMBON* ⟫──────
╠════════════════════
║➸️ *!artinama* 
║➸️ *!artijodoh* 
║➸️ *!artimimpi*
║➸️ *!zodiak*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════ `, MessageType.text, { quoted: m });
  }
//ARTI NAMA
  if (text.includes("!artinama")) {
    const teks = text.replace(/!artinama /, "")
    axios.get(`https://api.vhtear.com/artinama?nama=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = `${res.data.result.hasil}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//ARTI JODOH
if (text.includes('!artijodoh')){
  const request = require('request');
    var gh = text.split("!artijodoh ")[1];
    var namalu = gh.split("&")[0];
    var pasangan = gh.split("&")[1];
    axios.get('https://api.vhtear.com/primbonjodoh?nama='+ namalu +'&pasangan='+ pasangan +'&apikey='+apivhtear)
          .then((res) => {
            conn.sendMessage(id, '[(^o^)] MENCARI HASIL...', MessageType.text)
            let hasil = `${res.data.result.hasil}`;
            conn.sendMessage(id, hasil, MessageType.text)
        })
}
//ARTI MIMPI
  if (text.includes("!artimimpi")) {
    const teks = text.replace(/!artimimpi /, "")
    axios.get(`https://api.vhtear.com/artimimpi?query=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = `${res.data.result.hasil}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//ZODIAK
if (text.includes("!zodiak")){
const teks = text.replace(/!zodiak /, "")
axios.get(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${apivhtear}`).then((res) => {
	conn.sendMessage(id, '[✔️] ZODIAK '+ teks + ' DITEMUKAN!', MessageType.text)
    let hasil = `ZODIAK: *${res.data.result.zodiak}*\n\nRAMALAN : *${res.data.result.ramalan}*\n\nLUCKY NUMBER : ${res.data.result.nomorKeberuntungan}\n\nMOTIVASI: ${res.data.result.motivasi}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//MENU RANDOM
  else if (text == '!random') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *RANDOM* ⟫──────
╠════════════════════
║➸ *!gacha cowok*
║➸ *!gacha cewek*
║➸ *!randomanime*
║➸ *!nekonime*
║➸ *!meme*
║➸ *!loli*
║➸ *!cersex*
║➸ *!wibu*
║➸ *!wphd*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//GACHA CEWEK
  if (text.includes("!gacha cewek")) {
    var items = ["ullzang girl", "cewe cantik", "cewe hijab", "remaja cantik", "cewek jepang"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;

    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek = b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
          .then(
            (response) => {
              conn.sendMessage(id, 'Bentar bro gue cari doi buat lu...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih tod!`, quoted: m })

            }
          )
          .catch(
            (error) => {
              console.log(error); // Logs an error if there was one
            }
          )

      });
  }

//GACHA COWOK
  if (text.includes("!gacha cowok")) {
    var items = ["cowo ganteng", "cogan", "cowok indonesia ganteng", "cowo keren"];
    var cowo = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cowo;

    axios.get(url)
      .then((result) => {
        var z = JSON.parse(JSON.stringify(result.data));
        var cowok = z[Math.floor(Math.random() * z.length)];
        imageToBase64(cowok)
          .then(
            (response) => {
              conn.sendMessage(id, 'Bentar sayang aku cariin cowo dulu...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `nih say..., tapi gantengan ownerku😎`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )

      });
  }
//RANDOM ANIME
  if (text.includes("!randomanime")) {
    var items = ["anime tumblr", "anime loli", "anime aesthetic", "anime hd"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, '[ WAIT ] Mencari anime⏳ silahkan tunggu', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `wibu ya lu tod?`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )

      });
  }
//RANDOM LOLI
  if (text.includes("!loli")) {
    var items = ["anime loli"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, 'Sabar um...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `Cintai loli mu👉👈`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }

//RANDOM NEKONIME
  if (text.includes("!nekonime")) {
    var items = ["anime neko"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, 'Sabar tod...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { caption: `Nihh tod!`, quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }
//RANDOM WALPAPER
  if (text.includes("!wphd")) {
    var items = ["wallpaper aesthetic", "wallpaper tumblr"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, 'Bentar bro, btw walpaper random ye...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }
//RANDOM MEME
  if (text.includes("!meme")) {
    var items = ["meme indonesia", "meme indo", "foto lucu", "meme spongebob"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;

    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek = n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek)
          .then(
            (response) => {
              conn.sendMessage(id, 'Sabar dumlu yakan...', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            }
          )
          .catch(
            (error) => {
              console.log(error);
            }
          )
      });
  }
/* RANDOM HENTAI
if (text.includes('!randomhentong')){
  var teks = text.replace(/!randomhentong /, '')
    axios.get('https://api.vhtear.com/randomhentai?apikey=RAMLANGANS')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] Bacol Hentai Sedang Dikirimkan.. ', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}*/
if (text.includes('!cersex')){
  var teks = text.replace(/!cersex /, '')
    axios.get('https://api.vhtear.com/cerita_sex&apikey='+apivhtear)
    .then((res) => {
      imageToBase64(res.data.result.image)
        .then(
          (ress) => {
            conn.sendMessage(id, '[🌠] Tunggu Bentar Cok :v', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : res.data.result.cerita } )
        })
    })
}
if (text.includes('!wibu')){
  var teks = text.replace(/!wibu /, '')
    axios.get('https://api.vhtear.com/randomwibu&apikey='+apivhtear)
    .then((res) => {
      imageToBase64(res.data.result.foto)
        .then(
          (ress) => {
            conn.sendMessage(id, '[🤣] VVIBU Abizzzz wkwkwk :v', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

/*  if (text.includes("!nekohentong")) {
  var teks = text.replace(/!wibu /, '')
  axios.get('https://api.vhtear.com/nekohentai&apikey='+apivhtear)
      .then((result) => {
        var ne = JSON.parse(JSON.stringify(res.data.result.image));
        var ko = ne[Math.floor(Math.random() * ne.length)];
        imageToBase64(ko)
          .then(
            (response) => {
              conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text, { quoted: m })
              var buf = Buffer.from(response, 'base64');
              conn.sendMessage(id, buf, MessageType.image)
           })
       })
}*/
//MENU EDUCATION
  else if (text == '!edukasi') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *EDUKASI* ⟫─────
╠════════════════════
║➸ *!brainly*
║➸ *!quran*
║➸ *!ngaji*
║➸ *!wiki*
║➸ *!covid*
║➸ *!faktaunik*
║➸ *!Kbbi*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//BRAINLY
  if (text.includes('!brainly')) {
    const teks = text.replace(/!brainly /, "")
    axios.get(`https://api.vhtear.com/branly?query=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = ` ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏ ${res.data.result.data}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//RANDOM AL QURAN
  else if (text == '!quran') {
    axios.get('https://api.banghasan.com/quran/format/json/acak').then((res) => {
      const sr = /{(.*?)}/gi;
      const hs = res.data.acak.id.ayat;
      const ket = `${hs}`.replace(sr, '');
      let hasil = `[${ket}]   ${res.data.acak.ar.teks}\n\n${res.data.acak.id.teks}(QS.${res.data.surat.nama}, Ayat ${ket})`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//NGAJI SURAH
  if (text.includes("!ngaji")) {
    const teks = text.replace(/!ngaji /, "")
    axios.get(`https://api.vhtear.com/quran?no=${teks}&apikey=${apivhtear}`).then((res) => {
      let hasil = `*Surah* : ${res.data.result.surah}\n${res.data.result.quran}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//WIKIPEDIA
  if (text.includes("!wiki")) {
    const teks = text.replace(/!wiki /, "")
    axios.get(`https://api.zeks.xyz/api/wiki?q=${teks}&apikey=${vinzkey}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Searching...⏳ silahkan tunggu', MessageType.text, { quoted: m })
      let hasil = `Menurut Wikipedia:\n\n${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//COVID 19
  if (text.includes("!covid")) {
    const get = require('got')
    const body = await get.post('https://api.kawalcorona.com/indonesia', {
    }).json();
    var positif = (body[0]['positif']);
    var sembuh = (body[0]['sembuh']);
    var meninggal = (body[0]['meninggal']);
    var dirawat = (body[0]['dirawat']);
    console.log(body[0]['name'])
    conn.sendMessage(id, `🔰DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n*Positif* = ${positif} \n*Sembuh* = ${sembuh} \n*Meninggal* = ${meninggal}\n*Dirawat* = ${dirawat}\n\n*Stay safe dan selalu gunakan masker saat berpergian*`, MessageType.text, { quoted: m });
  }
//FAKTA UNIK
  if (messageType === MessageType.text) {
    let is = m.message.conversation.toLocaleLowerCase()
    if (is == '!faktaunik') {
      fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
        .then(res => res.text())
        .then(body => {
          let tod = body.split("\n");
          let pjr = tod[Math.floor(Math.random() * tod.length)];
          let pantun = pjr.replace(/pjrx-line/g, "\n");
          conn.sendMessage(id, pantun, MessageType.text, { quoted: m })
        });
    }

  };
//KBBI
if (text.includes("!kbbi")){
const teks = text.replace(/!kbbi /, "")
axios.get(`https://api.zeks.xyz/api/kbbi?q=${teks}&apikey=${vinzkey}`).then((res) => {
    let hasil = `Menurut KBBI Arti Dari *${teks}* Adalah :\n\n${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text);
})
}
//OTHER
  else if (text == '!other') {
    conn.sendMessage(id, `
╔════════════════════
║──────⟪  *OTHER* ⟫──────
╠════════════════════
║➸ *!jadwalsholat*
║➸ *!jadwaltv*
║➸ *!lirik*
║➸ *!chord*
║➸ *!map*
╠════════════════════
║──────── *${BotName} ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//JADWAL SHOLAT
  if (text.includes("!jadwalsholat")) {
    const teks = text.replace(/!jadwalsholat /, "")
    axios.get(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Menampilkan jadwal sholat⏳ silahkan tunggu', MessageType.text, { quoted: m })
      let hasil = `Jadwal sholat di ${teks} hari ini adalah\n\n*Imsak* : ${res.data.Imsyak} WIB\n*Subuh* : ${res.data.Subuh} WIB\n*Dzuhur* : ${res.data.Dzuhur} WIB\n*Ashar* : ${res.data.Ashar} WIB\n*Maghrib* : ${res.data.Maghrib} WIB\n*Isya* : ${res.data.Isya} WIB`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//JADWAL TV
  if (text.includes("!jadwaltv")) {
    const teks = text.replace(/.jadwaltv /, "")
    axios.get(`https://mhankbarbar.tech/api/jdtv?ch=${teks}&apiKey=${apibarbar}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Menampilkan jadwal tv⏳ silahkan tunggu', MessageType.text, { quoted: m })
      let hasil = `${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//LIRIK LAGU
  if (text.includes("!lirik")) {
    const teks = text.split("!lirik")[1]
    axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Searching lirik⏳ silakan tunggu', MessageType.text, { quoted: m })
      let hasil = `lirik ${teks} \n\n\n ${res.data.result.lirik}`
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m })
    })
  }
//CHORD
  if (text.includes("!chord")) {
    const teks = text.replace(/!chord /, "")
    axios.get(`https://arugaz.herokuapp.com/api/chord?q=${teks}`).then((res) => {
      conn.sendMessage(id, '[ WAIT ] Searching chord lagu⏳ silahkan tunggu', MessageType.text, { quoted: m })
      let hasil = `*Judul* : ${teks}\n*chord* : ${res.data.result}`;
      conn.sendMessage(id, hasil, MessageType.text, { quoted: m });
    })
  }
//MAP
  if (text.includes('!map')) {
    var teks = text.replace(/!map /, '')
    axios.get('https://mnazria.herokuapp.com/api/maps?search=' + teks)
      .then((res) => {
        imageToBase64(res.data.gambar)
          .then(
            (ress) => {
              conn.sendMessage(id, '[WAIT] Searching  silakan tunggu', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { quoted: m })
            })
      })
  }
//LOGO MAKER
  else if (text == '!maker') {
    conn.sendMessage(id, `
╔════════════════════
║───────⟪  *MAKER* ⟫──────
╠════════════════════
║➸ *!pornhub*
║➸ *!hartatahta*
║➸ *!retrologo*
║➸ *!pubglogo*
║➸ *!snowrite*
║➸ *!watertext*
║➸ *!silktext*
║➸ *!firetext*
║➸ *!metaltext*
║➸ *!lovetext*
║➸ *!apitext*
╠════════════════════
║──────── *${BotName}* ──────── 
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║  ▌│█║▌║▌║║▌║▌║█│▌▌│█║
║──────── *${BotName}* ────────
╠════════════════════
╠════════════════════
║ _*POWERED BY ${ow}*_
╚════════════════════`, MessageType.text, { quoted: m });
  }
//PORNHUB
if (text.includes('!pornhub')){
    const request = require('request');
    var gh = text.split("!pornhub ")[1];
    var t1 = gh.split("&")[0];
    var t2 = gh.split("&")[1];
  var url = "https://api.vhtear.com/pornlogo?text1=" +t1+ "&text2=" +t2+ "&apikey=" +vhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

//HARTA TAHTA
if (text.includes('!hartatahta')){
  var teks = text.replace(/!hartatahta /, '')
  var url = "https://api.vhtear.com/hartatahta?text=" +teks+ "&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] Hirti Tihti Tai Anjg :v', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
//RETRO LOGO
if (text.includes('!retrologo')){
   const request = require('request');
   var gh = text.split("!retrologo ")[1];
    var t1 = gh.split("&")[0];
    var t2 = gh.split("&")[1];
    var t3 = gh.split("&")[2];
    axios.get('https://api.zeks.xyz/api/retro?text1='+t1+'&text2='+t2+'&text3='+t3+'&apikey=apivinz')
    .then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[😎💪] Sabar Dulu Bos Pasti Keren Ini', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : 'Anjay Bah'} )
        })
    })
}
/*NINJA LOGO
  if (text.includes('!ninjalogo')) {
    var porn = text.split("!ninjalogo ")[1];
    var text1 = porn.split("&")[0];
    var text2 = porn.split("&")[1];
    axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${text1}&text2=${text2}&apikey=${tobzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, 'Sabar dulu um..!', MessageType.text, { quoted: m })
            conn.sendMessage(id, buf, MessageType.image, { caption: `Amjay bah`, quoted: m });
          })
    })
  }*/
/*JOKER LOGO
  if (text.includes('!jokerlogo')) {
    const teks = text.replace(/!jokerlogo /, "")
    axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=jokerlogo&text=${teks}&apikey=${tobzkey}`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Sedang membuat logo jomker🤡', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Nihh tod`, quoted: m })
            })
      })
  }*/
/*GLITCH LOGO
if (text.includes('!glitchtext')){
    const request = require('request');
    var gh = text.split("!glitchtext ")[1];
    var atas = gh.split("&")[0];
    var bawah = gh.split("&")[1];
  var url = "https://api.vhtear.com/glitchtext?text1="+atas+"&text2=" +bawah+"&apikey=" +vhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] Bentar Om Sabar Ajg', MessageType.text, {quoted : m} )
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image, {caption : 'nih ajg'} )
        })
    })
}*/
//PUBG LOGO
  if (text.includes('!pubglogo')) {
    var pubg = text.split("!pubglogo ")[1];
    var text1 = pubg.split("&")[0];
    var text2 = pubg.split("&")[1];
    axios.get(`https://api.zeks.xyz/api/pubglogo?text1=${text1}&text2=${text2}&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text, { quoted: m })
            conn.sendMessage(id, buf, MessageType.image, { caption: `Nihh um`, quoted: m });
          })
    })
  }
//SNOW LOGO
  if (text.includes('!snowrite')) {
    var snow = text.split("!snowrite ")[1];
    var text1 = snow.split("&")[0];
    var text2 = snow.split("&")[1];
    axios.get(`https://api.zeks.xyz/api/snowwrite?text1=${text1}&text2=${text2}&apikey=${vinzkey}`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, '[🔰] Bentar bro gw pergi ke salju nya dumlu', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `anjay bah`, quoted: m })
            })
      })
  }
/*THUNDER LOGO
  if (text.includes('!thundername')) {
    const teks = text.replace(/!thundername /, "")
    axios.get(`https://arugaz.my.id/api/textpro/thundertext?text=${teks}`)
      .then((res) => {
        imageToBase64(`https://arugaz.my.id/api/textpro/thundertext?text=${teks}`)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Bentar um cape :(', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Nih say...`, quoted: m })
            })
      })
  }*/
/*BLOOD LOGO
  if (text.includes('!bloodstext')) {
    const teks = text.replace(/!bloodtext /, "")
    axios.get(`https://tobz-api.herokuapp.com/api/textpro?theme=blood&text=${teks}&apikey=${tobzkey}`)
      .then((res) => {
        imageToBase64(res.data.result)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Bentar sayang...', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Ngemry`, quoted: m })
            })
      })
  }*/
//WATER
if (text.includes('!watertext')){
  var teks = text.replace(/!watertext /, '')
  var url = "https://api.vhtear.com/water_maker?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
//SILK TEXT
if (text.includes('!silktext')){
    var teks = text.replace(/!silktext /, '')
    axios.get(`https://api.zeks.xyz/api/silktext?text=${teks}&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
// FIRE TEXT
if (text.includes('!firetext')){
  var teks = text.replace(/!firetext /, '')
  var url = "https://api.vhtear.com/fire_maker?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
// METAL TEXT
if (text.includes('!metaltext')){
  var teks = text.replace(/!metaltext /, '')
  var url = "https://api.vhtear.com/metal_maker?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] WAIT GANS', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
/*SAND WRITE
  if (text.includes('!sandwrite')) {
    const teks = text.replace(/!sandwrite /, "")
    axios.get(`https://arugaz.my.id/api/textpro/sandsummer?text=${teks}`)
      .then((res) => {
        imageToBase64(`https://arugaz.my.id/api/textpro/sandsummer?text=${teks}`)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Sedang menulis di atas pasir...', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Nihh ajg`, quoted: m })
            })
      })
  }*/
/*SKY TEXT
  if (text.includes('!skytext')) {
    const teks = text.replace(/!skytext /, "")
    axios.get(`https://arugaz.my.id/api/textpro/cloudsky?text=${teks}`)
      .then((res) => {
        imageToBase64(`https://arugaz.my.id/api/textpro/cloudsky?text=${teks}`)
          .then(
            (ress) => {
              conn.sendMessage(id, 'Bentar dumlu yakan otw terbang...', MessageType.text, { quoted: m })
              var buf = Buffer.from(ress, 'base64')
              conn.sendMessage(id, buf, MessageType.image, { caption: `Amjay bah`, quoted: m })
            })
      })
  }*/
/*BLEKPING
if (text.includes('!blackpink')){
  var teks = text.replace(/!blackpink /, '')
  var url = "https://api.vhtear.com/blackpinkicon?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[😱] Hah Blekping? ', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}*/
//LOVE TEXT
if (text.includes('!lovetext')){
  var teks = text.replace(/!lovetext /, '')
  var url = "https://api.vhtear.com/lovemessagetext?text=" +teks+"&apikey=" +apivhtear;
    axios.get(url)
    .then((res) => {
      imageToBase64(url)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❤] BUCIN YA :V', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}
// API TEXT
if (text.includes('!apitext')){
    var teks = text.replace(/!apitext /, '')
    axios.get(`https://api.zeks.xyz/api/flametext?text=${teks}=&apikey=${vinzkey}`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            conn.sendMessage(id, '[❗] PANAS BRO WAIT', MessageType.text)
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}

/*
]=====> Thanks To <=====[
> RAMLAN ID
> REVOER ID
> ARIS ID
> VHTEAR
> TOBZ
> MHANKBARBAR
> VINZ
> MRFZVX12
> All creator bot WhatsApp
]=====> Jangan di ubah <=====[
*/

})
