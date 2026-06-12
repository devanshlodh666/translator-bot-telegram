const translate = require("translate-google");

module.exports = async (text) => {
  const result = await translate(
    text,
    {
      to: "en"
    }
  );

  return result;
};

const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("Telegram Bot Running 🚀");
});
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
// const axios = require("axios");

// async function translate(text) {
//   try {
//     const response = await axios.post(
//       process.env.TRANSLATE_URL,
//       {
//         q: text,
//         source: "auto",
//         target: "hi"
//       },
//       {
//         timeout: 30000
//       }
//     );

//     console.log(response.data);

//     return response.data.translatedText;
//   } catch (err) {
//     console.error("Translation Error:");

//     console.error(err.message);

//     if (err.response)
//       console.log(err.response.data);

//     throw err;
//   }
// }

// module.exports = translate;





// const translate = require("translate-google");

// const result = await translate(
//   "Hello World",
//   { to: "hi" }
// );

// console.log(result);