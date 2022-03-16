import React from "react";
import IMovie from "../../Interfaces/IMovie";
import "./Card.scss";

export default function Card({ image, name, rating, yearOfRelease }: IMovie) {
  return (
    <div className="card-wrapper">
      <div className="card-wrapper-img">
        <img
          src={
            image !== "N/A"
              ? image
              : "https://via.placeholder.com/728x728.png?text=NO%20IMAGE"
          }
          alt="movie-img"
        />
      </div>
      <div className="card-wrapper-content">
        <div className="top">
          <div className="heading">{name}</div>
          <div className="subtitle">{rating}</div>
        </div>
        <div className="callout">{yearOfRelease}</div>
      </div>
    </div>
  );
}
