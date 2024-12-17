const express = require("express");
// const helmet = require("helmet");

const connectDB = require("./config/db.js");
// const taskRouter = require("./routes/task.route");
const authRouter = require("./routes/auth.route");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
// app.use(helmet());

app.use("/users", authRouter);
// app.use("/api/tasks", taskRouter);

app.get("/", (req, res) => res.send("Hello World! ."));


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
  });

