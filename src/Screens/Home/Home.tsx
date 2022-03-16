import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import Search from "../../Components/Search/Search";
import { ILoadingStateEnum } from "../../Interfaces/ILoading";
import Loading from "../../Components/Loading/Loading";
import IMovie from "../../Interfaces/IMovie";
import request from "../../api/request";
import "./Home.scss";

export default function Home() {
  const array = new Array(10).fill(null).map((item: IMovie, index: number) => ({
    id: index,
    image: "http://placeimg.com/640/480/business",
    name: "title",
    rating: 5,
    yearOfRelease: 2020,
  }));
  const [movies, setMovies] = useState<Array<IMovie>>(array);
  const [loading, setLoading] = useState<ILoadingStateEnum>("init");
  const [statusTxt, setStatusTxt] = useState<string>("");

  const handleSearch = async (name: string) => {
    setLoading("loading");
    setStatusTxt("Loading...");
    try {
      const response = await request({
        url: `searchmovies?s=${name}`,
        method: "GET",
      });
      setMovies(response);
      if (response.length === 0) {
        setLoading("no-data");
        setStatusTxt("No results found for " + name);
        return;
      }
      setLoading("success");
      setStatusTxt("Success");
    } catch (error) {
      setLoading("error");
      setStatusTxt("Error searching for movies");
      return;
    }
  };

  return (
    <div className="home-wrapper">
      <div className="home-upper">
        <Search handleSearch={handleSearch} />
      </div>
      {loading === "success" ? (
        <div className="movie-list-wrapper">
          {movies.map((item: IMovie) => {
            return <Card key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <Loading state={loading} statusTxt={statusTxt} />
      )}
    </div>
  );
}
