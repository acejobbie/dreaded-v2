/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || '';

const prefix = process.env.PREFIX || '#';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'ན🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ ❬𝕯❭';
const packname = process.env.PACKNAME || '𝙸 αɱ ค̡ƈє™⟬𝟭⟭';
const dev = process.env.DEV || '254726856795';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || '𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝘽𝙊𝙏⃝𒋨🉑';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'false';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'unavailable';

const antitag = process.env.ANTITAG || 'false';
const antidelete = process.env.ANTIDELETE || 'false';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
