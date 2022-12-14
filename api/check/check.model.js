const mongoose = require("mongoose");

const { Schema } = mongoose;

const checkSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["healthy", "unknown", "unhealthy"],
    default: "unknown",
  },
  endpoint: String,
  agents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Agent",
    },
  ],
  createdAt: Date,
  updatedAt: Date,
});

checkSchema.index({ name: 1 }, { unique: true }); // schema level

const Agent = mongoose.model("Check", checkSchema);

module.exports = Agent;
