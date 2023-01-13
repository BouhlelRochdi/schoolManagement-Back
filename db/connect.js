const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/schoolmanagement", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("==>Successfully connect to DataBase."))
  .catch(err => console.error("==>Connection error", err));