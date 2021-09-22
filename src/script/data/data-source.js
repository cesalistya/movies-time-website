// my api key from TMDB
const api_key = "api_key=e1286cf774d52f51715275c0fe9eb5b1";
// base url
const base_url = "https://api.themoviedb.org/3";

class DataSource extends HTMLElement {
  static bannerMovies(keyword) {
    return fetch(`${base_url}/${keyword}/all/week?${api_key}&language=en-US`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson.results);
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`Error : ${results}`);
        }
      });
  }

  static getMovie(keyword) {
    return fetch(`${base_url}/${keyword}?sort_by=popularity.desc&${api_key}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.resolve(`${keyword} is not found`);
        }
      });
  }

  static searchMovies(keyword) {
    return fetch(
      `${base_url}/search/movie?${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static genreMovies(id) {
    return fetch(`${base_url}/discover/movie?${api_key}&with_genres=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
