import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const mongoURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in port ${PORT}`.black.bgBlue);
});

app.get("/", (req, res) => {
  res.send(`<h1>Hello DEV</h1>`);
});

// connect to database
mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected!"))
  .catch((err) => {
    console.error("Connection failed:", err.message);
  });
