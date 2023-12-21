const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
  username: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  password: { type: Schema.Types.String },
  role: { type: Schema.Types.String, default: "admin", enum: ["admin"] },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const admin = mongoose.model("admin", adminSchema);

module.exports = admin;
