import "../component/category-list.js";
import "../component/movie-list.js";
import "../component/banner-list.js";
import "../component/header-navbar.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("header-navbar");
  const banner = document.querySelector("banner-list");
  const movieListElement = document.querySelector("movie-list");

  const onButtonSearchClicked = () => {
    searchMovie(searchElement.value);
  };

  // movie list
  const searchMovie = async (keyword) => {
    try {
      const result = await DataSource.searchMovies(keyword);
      renderResult(result);
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

  // banner
  const setMovies = async (keyword) => {
    try {
      const result = await DataSource.bannerMovies(keyword);
      let finalResult = [];
      for (let i = 0; i < 3; i++) {
        finalResult.push(result[Math.floor(Math.random() * result.length - 1)]);
      }
      console.log(finalResult);
      renderBanner(finalResult);
    } catch (message) {
      fallbackBanner(message);
    }
  };

  const renderBanner = (results) => {
    banner.banners = results;
  };
  const fallbackBanner = (message) => {
    banner.renderError(message);
  };

  // set genre in banner
  setMovies("trending");
  // default list movie
  searchMovie("the");

  // search movie
  searchElement.clickEvent = onButtonSearchClicked;

  // filter categories
  const checkbox = document.querySelectorAll("input[type=checkbox]");
  checkbox.forEach((item) => {
    item.addEventListener("click", function () {
      const category = this.getAttribute("data-item");
      searchMovie(category);
    });
  });
};

export default main;
