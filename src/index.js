import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

configDotenv({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PROT || 3000, () => {
      console.log(`Server is running on port ${process.env.PROT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed !!!", err);
  });
