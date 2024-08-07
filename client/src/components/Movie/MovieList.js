import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./Search";
import Moviecard from "./Moviecards";
import "./movieList.css";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    year: "",
    cast: "",
    genres: "",
  });
  const [moviesElements, setMoviesElements] = useState([]);
  const [loadData, setLoadData] = useState(true);

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  function clearFormData() {
    setFormData((prevFormData) => {
      return {
        title: "",
        year: "",
        cast: "",
        genres: "",
        cleared: true,
      };
    });
  }

  const loadPage = async () => {
    if (!loadData) return;
    const newSearch = { ...formData };

    const response = await fetch("https://budfrogsdev.me:5005/movie/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSearch),
    }).catch((error) => {
      if (response === undefined) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
      }
    });

    const newMovieList = await response.json();

    window.myObj = newMovieList;
    setMovies((prevMoveList) => newMovieList);
    setLoadData(false);
    clearFormData();
  };

  const handleSubmit = async (e) => {
    // async function handleSubmit(e) {
    e.preventDefault();
    setLoadData(true);
    loadPage();
  };

  function card(movies) {
    return (
      <Moviecard
        key="1"
        cardObj={movies}
      />
    );
  }

  useEffect(() => {
    setMoviesElements((prevElements) => card(movies));
  }, [movies]);

  const Header = () => {
    return (
      <div className="text-white text-center ">
        <h4>Movie List Test Site</h4>
        <h5>(Note: Main list 2018 and older. A few in 2022 and 2023.)</h5>{" "}
      </div>
    );
  };

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Header />
        <Search
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        {moviesElements}
      </Container>
    </div>
  );
}
