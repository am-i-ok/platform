const _ = require("lodash");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const checkSchema = new mongoose.Schema(
  {
    name: String,
    endpoint: String,
    failureWebhook: String,
    agents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Agent",
      },
    ],
    interval: String,
    createdAt: Date,
    updatedAt: Date,
    results: [
      {
        date: Date,
        status: {
          type: String,
          enum: ["healthy", "unknown", "unhealthy"],
          default: "unknown",
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
  }
);

checkSchema.virtual("status").get(function status() {
  if (!this.results.length) {
    return "unknown";
  }

  return this.results[this.results.length - 1].status;
});

checkSchema.virtual("successRate").get(function status() {
  const succeeded = _.filter(this.results, (r) => r.status === "healthy");

  return (succeeded.length * 100) / this.results.length;
});

checkSchema.index({ name: 1 }, { unique: true }); // schema level

const Agent = mongoose.model("Check", checkSchema);

module.exports = Agent;
