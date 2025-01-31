import express from "express";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9001;

app.use(express.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});