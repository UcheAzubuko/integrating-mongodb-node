const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://UcheAzubuko:<password>@stackabusecluster.fgavg5s.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}

connect();

const port = 8000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
