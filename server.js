const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const notFound = require("./middlewares/not-found");
const connectDB = require("./database/connect");

const app = express();
dotenv.config();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(notFound);

connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));
