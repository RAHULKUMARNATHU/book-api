const express = require("express");

const app = express();
const port = 8000 || process.env.port;

app.listen(port, (err) => {
    if (err) {
      console.log(err, "💥 Some Error occurs");
    }
  console.log(`Server is running on Port: ${port}`);
});
