const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const agentRouter = require("./api/agent");
const { sendErrorResponse } = require("./server/error-handling/error-handler");

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/login", (request, response) => {
  response.json({
    id: 2,
    first_name: "German",
    last_name: "Stark",
    email: "admin@demo.com",
    email_verified_at: "2022-07-14T11:37:39.000000Z",
    created_at: "2022-07-14T11:37:39.000000Z",
    updated_at: "2022-07-14T11:37:39.000000Z",
    api_token: "$2y$10$lzYGs3CVjxdlR2ERLfZOyezaXM8qXLGd5fHEkjoBmDxznEl.CvAdC",
  });
});

app.use("/api/verify_token", (request, response) => {
  response.json({
    id: 2,
    first_name: "German",
    last_name: "Stark",
    email: "admin@demo.com",
    email_verified_at: "2022-07-14T11:37:39.000000Z",
    created_at: "2022-07-14T11:37:39.000000Z",
    updated_at: "2022-07-14T11:37:39.000000Z",
    api_token: "$2y$10$lzYGs3CVjxdlR2ERLfZOyezaXM8qXLGd5fHEkjoBmDxznEl.CvAdC",
  });
});

app.use("/api/agent", agentRouter);

app.use(sendErrorResponse);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/amiok");
  console.log("connected successfully to mongo");
  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => {
  console.log(err);
  console.log("exiting");
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error(err.stack);
  process.exit(1);
});
