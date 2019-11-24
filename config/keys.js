//keys.js fogure out what sets of credentials to return

if (process.env.NODE_ENV === "production") {
  //we are in prod - return prod keys
  console.log("line 5 keys.js process.env.NODE_ENV :" + process.env.NODE_ENV);

  module.exports = require("./prod");
} else {
  //we are in dev - return dev keys

  module.exports = require("./dev");
}
