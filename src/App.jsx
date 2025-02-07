import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DefaultCards from "./components/DefaultCards";

function App() {
  const [film, setFilm] = useState("");
  const [filmData, setFilmData] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function bringData(film) {
    if (!film) return;

    const API_KEY = "8e56b0b4";
    const API_URL = `https://www.omdbapi.com/?t=${film}&apikey=${API_KEY}`;

    try {
      const response = await fetch(API_URL);
      const dataParsed = await response.json();

      if (dataParsed.Response === "False") {
        setFilmData(null);
        setErrorMessage("No results found. Try another search.");
        return;
      }

      setFilmData(dataParsed);
      setErrorMessage(""); // Resetea el mensaje de error si hay datos válidos
    } catch (error) {
      console.error("Error fetching data:", error);
      setFilmData(null);
      setErrorMessage("An error occurred while fetching data.");
    }
  }

  useEffect(() => {
    if (film) bringData(film);
  }, [film]);

  const recolectInputValue = (e) => {
    setInputValue(e.target.value);
  };

  function searchFilm() {
    setFilm(inputValue);
    setInputValue("");
  }

  return (
    <>
      <Header />
      <div className="fi-searcher">
        <section className="fi-section-searcher">
          <input
            placeholder="Film to search..."
            onChange={recolectInputValue}
            value={inputValue}
          />
          <button onClick={searchFilm}>Search</button>
        </section>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {filmData && (
          <DefaultCards
            title={filmData.Title}
            year={filmData.Year}
            rating={filmData.imdbRating}
            poster={filmData.Poster}
            director={filmData.Director}
            plot={filmData.Plot}
            actors={filmData.Actors}
            awards={filmData.Awards}
          />
        )}
      </div>
    </>
  );
}

export default App;
