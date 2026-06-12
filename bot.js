require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const translate = require("./tanslate");
// const franc = require("franc");
const bot = new TelegramBot(
  process.env.BOT_TOKEN,
  {
    polling: true
  }
);

console.log("Bot Started...");

bot.on("message", async (msg) => {
  try {
    // const text = msg?.text;
    // const lang = franc(text);
    // if (lang === "eng") return;
     if (!msg.text.startsWith(".")) return;
  const text = msg.text.slice(1).trim();
    if (!text) return;
    if (msg.from.is_bot) return;
    if (msg.text.startsWith("/")) return; // gnore Commands
    if (msg.text.length < 2) return;
    const translated = await translate(text);
if (
    translated.trim().toLowerCase() ===
    msg.text.trim().toLowerCase()
  ) {
    return;
  }
  

    // await bot.sendMessage(
    //   msg.chat.id,
    //   `🌐 ${translated}`
    // );

    await bot.sendMessage(
  msg.chat.id,  `${translated}`,
  {
    reply_to_message_id: msg.message_id
  }
);
  } catch (err) {
    console.error(err.message);
  }
});


// `Original:
//     ${text}
//  English:
//     ${translated}`