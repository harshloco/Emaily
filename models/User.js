const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//tell mongoose to create new collection called users
mongoose.model("User", userSchema);
