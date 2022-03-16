import { searchMovies } from "../controllers/searchMovies";
import { Request, Response } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser.json({ strict: false, limit: "50mb" }));
app.use(cors());

app.get("/searchmovies", (req: Request, res: Response) => {
  searchMovies(req, res);
});
app.listen(process.env.PORT || 8080, () => {
  console.log(
    `App listening at https://hey-cinema-deji.herokuapp.com/ :${process.env.PORT}`
  );
});
