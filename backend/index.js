import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
// import routes from "./routes";

const app = express();
const PORT = 4000;
const uri = `mongodb://localhost:27017/soccerDb`;

// connect to mongoDb
mongoose.Promise = global.Promise;
mongoose.connect(uri);
// mongoose.connect("mongodb+srv://patrick:heaven60500@cluster0.gegl6.mongodb.net/");

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
app.use(cors());

//routes
// routes(app);

app.get("/", (req, res) => {
  res.send(`App is running at port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
