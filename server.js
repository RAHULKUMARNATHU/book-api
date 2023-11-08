const app =require('./app')
const db = require("./config/mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION !  💥 Shutting down... ");
  console.log(err.name, ":", err.message);
  process.exit(1);
});

const port = 8000 || process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    console.log(err, "💥 Some Error occurs");
  }
  console.log(`Server is running on Port: ${port}`);
});
