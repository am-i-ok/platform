const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: ["online", "offline"],
    default: "online",
  },
  icon: {
    type: String,
    default: "/media/flags/spain.svg",
  },
  location: { type: String, default: "unknown" },
  createdAt: Date,
  updatedAt: Date,
});

agentSchema.index({ name: 1 }, { unique: true }); // schema level

const Agent = mongoose.model("Agent", agentSchema);

module.exports = Agent;
