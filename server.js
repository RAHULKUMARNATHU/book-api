const app =require('./app')

const port = 8000 || process.env.port;

app.listen(port, (err) => {
  if (err) {
    console.log(err, "💥 Some Error occurs");
  }
  console.log(`Server is running on Port: ${port}`);
});
