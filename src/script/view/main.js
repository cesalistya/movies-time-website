import "../component/movie-list.js";
import "../component/banner-list.js";
import "../component/header-navbar.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("header-navbar");
  const banner = document.querySelector("banner-list");
  const movieListElement = document.querySelector("movie-list");
  const genreTags = document.getElementById("tags");

  // initialization render movie
  const getMovies = (keyword) => {
    DataSource.getMovie(keyword).then(renderResult).catch(fallbackResult);
  };

  // search movie
  const onButtonSearchClicked = () => {
    selectedGenre = [];
    setGenre();
    if (onButtonSearchClicked) {
      searchMovie(searchElement.value);
    } else {
      getMovies("discover/movie");
    }
  };

  const searchMovie = async (keyword) => {
    try {
      const results = await DataSource.searchMovies(keyword);
      renderResult(results);
    } catch (e) {
      fallbackResult(e);
    }
  };

  const renderResult = (results) => {
    movieListElement.movies = results;
  };
  const fallbackResult = (e) => {
    movieListElement.innerHTML = `
      <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0, 0, 0, 0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
      }
      </style>

      <h2 class="placeholder>${e}</h2>
    `;
  };

  // initialization category movie
  const movieGenres = (id) => {
    DataSource.genreMovies(id).then(renderResult).catch(fallbackResult);
  };

  // initialization banner
  const setMovies = async (keyword) => {
    try {
      const result = await DataSource.bannerMovies(keyword);
      let finalResult = [];
      for (let i = 0; i < 3; i++) {
        finalResult.push(result[Math.floor(Math.random() * result.length - 1)]);
      }
      console.log(finalResult);
      banner.banners = finalResult;
    } catch (message) {
      banner.renderError(message);
    }
  };

  // render all movies
  getMovies("discover/movie");
  // set banner
  setMovies("trending");

  // search movie
  searchElement.clickEvent = onButtonSearchClicked;

  // list movie genres
  const genres = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  let selectedGenre = [];
  const setGenre = () => {
    genreTags.innerHTML = "";
    genres.forEach((genre) => {
      const tags = document.createElement("div");
      tags.classList.add("tag");
      tags.id = genre.id;
      tags.innerText = genre.name;
      tags.addEventListener("click", () => {
        if (selectedGenre.length == 0) {
          selectedGenre.push(genre.id);
        } else {
          if (selectedGenre.includes(genre.id)) {
            selectedGenre.forEach((id, idx) => {
              if (id == genre.id) {
                selectedGenre.splice(idx, 1);
              }
            });
          } else {
            selectedGenre.push(genre.id);
          }
        }
        console.log(selectedGenre);
        movieGenres(selectedGenre.join(","));
        highlightSelection();
      });
      genreTags.append(tags);
    });
  };
  setGenre();

  const highlightSelection = () => {
    const tags = document.querySelectorAll(".tag");
    tags.forEach((tag) => {
      tag.classList.remove("highlight");
    });
    if (selectedGenre.length != 0) {
      selectedGenre.forEach((id) => {
        const highlightedTag = document.getElementById(id);
        highlightedTag.classList.add("highlight");
      });
    }
  };
};

export default main;
