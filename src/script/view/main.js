import "../component/banner-list.js";
import "../component/header-navbar.js";

import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("header-navbar");
  const banners = document.querySelector("banner-list");

  const setMovies = async (keyword) => {
    try {
      const result = await DataSource.bannerMovies(keyword);
      renderBanner(result);
    } catch (message) {
      fallbackBanner(message);
    }
  };

  const renderBanner = (results) => {
    banners.items = results;
  };
  const fallbackBanner = (message) => {
    banners.renderError(message);
  };

  setMovies("trending");
};

export default main;
