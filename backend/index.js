import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/soccerRoutes";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.Promise = global.Promise;

// Connect mongoDB
mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Add bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Routes
routes(app);

app.get("/", (req, res) =>
  res.send(`Our soccer app is running on port: ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Our soccer app is running on port: ${PORT}`)
);
