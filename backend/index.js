import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/soccerRoutes";

const app = express();
const PORT = 4000;
const uri = `mongodb://localhost:27017/soccerDb`;

// connect to mongoDb
mongoose.Promise = global.Promise;
mongoose.connect(uri);

// connection events
mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${uri}`);
});
mongoose.connection.on("error", (err) => {
  console.log(`Mongoose error is ${err}`);
});
mongoose.connection.on("disconnected", (err) => {
  console.log(`Mongoose error is disconnected`);
});
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
app.use(cors());

// routes
app.use(router);

app.get("/", (req, res) => {
  res.send(`App is running at port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
