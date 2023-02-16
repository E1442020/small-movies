import { Loader, SimpleGrid } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import MovieCard from "./MovieCard";

//e90fed93

export default function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = "https://www.omdbapi.com?apikey=e90fed93";
  const getApiData = (title) => {
    setLoading(true);
    return fetch(`${apiUrl}&s=${title}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        console.log(movies);
        setLoading(false);
      });
  };
  useEffect(() => {
    getApiData("bat");
  }, []);
  return (
    <>
      <div className="page-container">
        <div className="title-container">
          <h2>Movies</h2>
          <div className="search-container">
            <input
              required
              type="search"
              placeholder="search for movies"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <BsSearch
              style={{ color: "white", cursor: "pointer" }}
              size={22}
              onClick={() => getApiData(inputValue)}
            />
          </div>
        </div>
        <div>
          <div className="empty">
            {loading ? (
              <Loader color="gray" />
            ) : (
              <>
                {" "}
                {movies?.length > 0 ? (
                  <>
                    <SimpleGrid
                      cols={4}
                      spacing="xl"
                      verticalSpacing="xl"
                      breakpoints={[
                        {
                          maxWidth: 980,
                          cols: 3,
                          spacing: "xl",
                          verticalSpacing: "xl",
                        },
                        {
                          maxWidth: 755,
                          cols: 2,
                          spacing: "xl",
                          verticalSpacing: "xl",
                        },
                        {
                          maxWidth: 600,
                          cols: 1,
                          spacing: "xl",
                          verticalSpacing: "xl",
                        },
                      ]}
                    >
                      {movies.map((movie) => {
                        return (
                          <MovieCard
                            poster={movie.Poster}
                            title={movie.Title}
                            type={movie.Type}
                            key={movie.imdbID}
                          />
                        );
                      })}
                    </SimpleGrid>
                  </>
                ) : (
                  <div className="empty">
                    <h2>No Movies Match</h2>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
