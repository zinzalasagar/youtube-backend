import dotenv from "dotenv";
import connectDB  from "./db/index.js";
import app from "./app.js";
dotenv.config();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
