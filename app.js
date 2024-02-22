const express = require("express");
const admin = require("./routes/admin");
const app = express();
const Category = require('./models/category')
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({extended: true}));
app.use("/admin",admin)
app.listen(3000);
