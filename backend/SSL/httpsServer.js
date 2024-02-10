const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const https = require("https");
const fs = require("fs");
const app = express();
const productRouter = require("./routes/products");

const port = 3000;

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/api/products", productRouter);

const httpsOptions = {
  key: fs.readFileSync("./SSL/private.key"),
  cert: fs.readFileSync("./SSL/certificate.crt"),
};

https
  .createServer(httpsOptions, app)
  .listen(process.env.PORT || port, () =>
    console.log(`DecorHub Backend listening on port ${port}!`)
  );
