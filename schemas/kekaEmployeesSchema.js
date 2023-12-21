const mongoose = require("mongoose");
const { Schema } = mongoose;

const kekaEmployeesSchema = new Schema({
  username: { type: Schema.Types.String },
  email: { type: Schema.Types.String },
  password: { type: Schema.Types.String },
  role: { type: Schema.Types.String, default: "admin", enum: ["admin"] },
  createdAt: { type: Schema.Types.Date, default: Date.now },
});

const kekaEmployees = mongoose.model("kekaEmployees", kekaEmployeesSchema);

module.exports = kekaEmployees;
