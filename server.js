import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:3000", // frontend
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", (req, res) => {
    res.json("Welcome!")
});

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
});
