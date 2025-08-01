const handler = async (m, { isPrems, conn }) => {
  const time = global.db.data.users[m.sender].lastcofre + 86400000; // 36000000 10 Horas //86400000 24 Horas
  if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) {
    return conn.reply(
      m.chat, `*🎁 Ya Reclamastes Tu Cofre*\nRegresa en \`${msToTime(time - new Date())}\` para volver a reclamar`, m);
  }
  const img = 'https://files.catbox.moe/qd5v12.jpg';
  const dia = Math.floor(Math.random() * 30);
  const tok = Math.floor(Math.random() * 10);
  const ai = Math.floor(Math.random() * 4000);
  const expp = Math.floor(Math.random() * 5000);

  global.db.data.users[m.sender].diamantes += dia;
  global.db.data.users[m.sender].money += ai;
  global.db.data.users[m.sender].joincount += tok;
  global.db.data.users[m.sender].exp += expp;

  const texto = `
╭━〔 ${global.botname} 〕⬣
┃${xrpg} *Obtienes Un Cofre*
┃ ${saludo}
╰━━━━━━━━━━━━⬣

╭━〔 ${global.botname} 〕⬣
┃ *${dia} Diamantes* 💎
┃ *${tok} Tokens* 💰
┃ *${ai} Coins* 🪙
┃ *${expp} Exp* ⚡
╰━━━━━━━━━━━━⬣`;

  const fkontak = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo',
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    'participant': '0@s.whatsapp.net',
  };

  await conn.sendFile(m.chat, img, 'yoshiko.jpg', texto, fkontak);
  // await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)
  global.db.data.users[m.sender].lastcofre = new Date * 1;
};
handler.help = ['cofre'];
handler.tags = ['rpg'];
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'];
handler.group = true;
handler.register = false;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';
}