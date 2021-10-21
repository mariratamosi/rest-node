import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://rima:1234@cluster0.fku13.mongodb.net/rest-node?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//bodyparser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
  res.send(`Hello server`);
});

app.listen(PORT, () => {
  console.log(`Server starts at ${PORT}`);
});

//http://localhost:4000/
