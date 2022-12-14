const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["online", "offline"],
    default: "online",
  },
  location: { type: String, default: "unknown" },
  createdAt: Date,
  updatedAt: Date,
});

agentSchema.index({ name: 1 }, { unique: true }); // schema level

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
