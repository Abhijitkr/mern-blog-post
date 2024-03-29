require("dotenv").config();
const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blog-routes");

require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.use("/api", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => console.log(`App is running at 8000...`));
