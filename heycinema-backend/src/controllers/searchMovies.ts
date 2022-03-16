import {
  MoviesResponse,
  FormatedMoviesType,
  MoviesType,
} from "../../models/movie";
import axios, { AxiosPromise } from "axios";
import { Request, Response } from "express";
export async function searchMovies(req: Request, res: Response) {
  try {
    if (!req.query.s) {
      res
        .status(400)
        .json({ success: false, error: "Wrong input, search query missing" });
    }
    var moviesData: MoviesResponse = await axios.get(
      "http://www.omdbapi.com/",
      {
        params: { apikey: process.env.APIKEY, s: req.query.s },
      }
    );
    var moviesArray: Array<FormatedMoviesType> = [];
    var promiseArr: Array<AxiosPromise> = [];
    if (moviesData.data.Search) {
      moviesData.data.Search.map((element: MoviesType) => {
        promiseArr.push(
          axios.get("http://www.omdbapi.com/", {
            params: { apikey: process.env.APIKEY, i: element.imdbID },
          })
        );
      });
      var promise = await Promise.all(promiseArr);
      moviesData.data.Search.map((element: MoviesType, index) => {
        moviesArray.push({
          name: element.Title,
          yearOfRelease: element.Year,
          rating: promise[index].data.imdbRating,
          image: element.Poster,
        });
      });
    }
    return res.json(moviesData.data.Response === "True" ? moviesArray : []);
  } catch (e) {
    console.log("error=", e);
    return res.status(500).json({ success: false, data: e });
  }
}
