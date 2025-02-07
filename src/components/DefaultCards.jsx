import React from "react";
import "./DefaultCard.css";

function DefaultCards({
  title,
  year,
  rating,
  poster,
  director,
  plot,
  actors,
  awards,
}) {
  return (
    <div className="film-info">
      <h2 style={{ color: "#00c16c", fontWeight: "bolder" }}>
        {title} - {year}
      </h2>
      <h3 style={{ color: "#00c16c", fontWeight: "bolder" }}>
        IMDB Rating: {rating}
      </h3>
      <img src={poster} alt={title} width={230} />
      <h5>{director}</h5>
      <p>{plot}</p>
      <h4>Actors: {actors}</h4>
      <h4>Awards: {awards}</h4>
    </div>
  );
}

export default DefaultCards;
