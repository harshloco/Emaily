//prod.js - don't commit this !!!

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  googleRedirectURI: "https://boiling-scrubland-57023.herokuapp.com"
};
console.log(
  "line 4 prod.js process.env.GOOGLE_CLIENT_ID:" + process.env.GOOGLE_CLIENT_ID,
  "line 5 prod.js mongoURI:" + process.env.mongoURI
);
// module.exports = {
//   googleClientID:
//     "481307666580-9tciv6p0thclm37es57srl56sj1v0uar.apps.googleusercontent.com",
//   googleClientSecret: "Td6QDZdNXy_isYQ8oe4HUmb_",
//   mongoURI:
//     "mongodb+srv://react_emaily-dev:harsh@cluster0-jhavc.mongodb.net/test?retryWrites=true&w=majority",
//   cookieKey: "adfhk$4dfkdfv*792r"
// };
