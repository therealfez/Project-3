const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trippinSchema = new Schema({
  place: { type: String, required: true },
  image: { type: String, required: true },
  description: String
});

const Trip = mongoose.model("Trippin", Schema);

module.exports = Trippin;
